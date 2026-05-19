(function () {
  var STORAGE_KEYS = {
    records: "systemhub.records",
    teamTasks: "systemhub.teamTasks",
    stockItems: "systemhub.stockItems",
    trmsReleases: "systemhub.trmsReleases",
  };

  var LICENSE_SOON_DAYS = 30;
  var DEFAULT_STOCK_THRESHOLD = 5;

  var TYPE_META = {
    license: { label: "Лицензия", href: "#systems" },
    task: { label: "Задача", href: "#team-tasks" },
    stock: { label: "Промо склад", href: "#promo" },
    release: { label: "TRMS релиз", href: "#trms-releases" },
  };

  var SEVERITY_META = {
    critical: { label: "Критично", rank: 1 },
    warning: { label: "Предупреждение", rank: 2 },
    info: { label: "Информация", rank: 3 },
  };

  var TEAM_STATUS_LABELS = {
    new: "Новая",
    inprogress: "В работе",
    review: "На проверке",
    done: "Завершена",
    overdue: "Просрочена",
    paused: "Отложена",
  };

  var elements = {
    page: document.querySelector("#notificationsPage"),
    list: document.querySelector("#notificationList"),
    navCount: document.querySelector("#notificationNavCount"),
    licenseCount: document.querySelector("#notificationLicenseCount"),
    taskCount: document.querySelector("#notificationTaskCount"),
    stockCount: document.querySelector("#notificationStockCount"),
    releaseCount: document.querySelector("#notificationReleaseCount"),
    typeFilter: document.querySelector("#notificationTypeFilter"),
    severityFilter: document.querySelector("#notificationSeverityFilter"),
    searchInput: document.querySelector("#notificationSearchInput"),
    stockThresholdInput: document.querySelector("#notificationStockThreshold"),
    refreshButton: document.querySelector("#refreshNotifications"),
  };

  if (!elements.page || !elements.list) return;

  var renderTimer = 0;

  function readArray(key, runtimeName) {
    try {
      if (runtimeName === "records" && typeof records !== "undefined" && Array.isArray(records)) return records;
      if (runtimeName === "teamTasks" && typeof teamTasks !== "undefined" && Array.isArray(teamTasks)) return teamTasks;
      if (runtimeName === "stockItems" && typeof stockItems !== "undefined" && Array.isArray(stockItems)) return stockItems;
      if (runtimeName === "trmsReleaseTasks" && typeof trmsReleaseTasks !== "undefined" && Array.isArray(trmsReleaseTasks)) return trmsReleaseTasks;
    } catch (error) {
      // Local storage is enough when the main script bindings are unavailable.
    }

    try {
      var value = localStorage.getItem(key);
      return value ? JSON.parse(value) || [] : [];
    } catch (error) {
      return [];
    }
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function toNumber(value) {
    var number = Number(value);
    return Number.isFinite(number) ? number : 0;
  }

  function startOfToday() {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }

  function parseDate(value) {
    if (value instanceof Date && !Number.isNaN(value.getTime())) {
      return new Date(value.getFullYear(), value.getMonth(), value.getDate());
    }

    var text = String(value || "").trim();
    var match;
    var year;

    if (!text) return null;

    match = text.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/);
    if (match) return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));

    match = text.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{2,4})/);
    if (match) {
      year = match[3].length === 2 ? "20" + match[3] : match[3];
      return new Date(Number(year), Number(match[2]) - 1, Number(match[1]));
    }

    var fallback = new Date(text);
    return Number.isNaN(fallback.getTime())
      ? null
      : new Date(fallback.getFullYear(), fallback.getMonth(), fallback.getDate());
  }

  function formatDate(date) {
    return date ? new Intl.DateTimeFormat("ru-RU").format(date) : "Без даты";
  }

  function getDaysLeft(date) {
    if (!date) return null;
    return Math.ceil((date - startOfToday()) / 86400000);
  }

  function getStockThreshold() {
    var rawValue = elements.stockThresholdInput?.value;
    var value;

    if (rawValue === "") return DEFAULT_STOCK_THRESHOLD;

    value = toNumber(rawValue);
    return value >= 0 ? value : DEFAULT_STOCK_THRESHOLD;
  }

  function addNotification(items, config) {
    var typeMeta = TYPE_META[config.type];
    var severityMeta = SEVERITY_META[config.severity] || SEVERITY_META.warning;

    items.push({
      id: config.id,
      type: config.type,
      typeLabel: typeMeta.label,
      severity: config.severity,
      severityLabel: severityMeta.label,
      title: config.title,
      subtitle: config.subtitle || "",
      href: config.href || typeMeta.href,
      meta: config.meta || [],
      sortRank: severityMeta.rank,
      sortValue: config.sortValue || 0,
      searchable: [config.title, config.subtitle, typeMeta.label].concat(config.meta || []).join(" ").toLowerCase(),
    });
  }

  function buildLicenseNotifications(items, recordsData) {
    recordsData.forEach(function (record) {
      var endDate = parseDate(record.licenseEndDate);
      var daysLeft = getDaysLeft(endDate);
      var severity;
      var statusText;

      if (daysLeft === null || daysLeft > LICENSE_SOON_DAYS) return;

      if (daysLeft < 0) {
        severity = "critical";
        statusText = "Истекла " + Math.abs(daysLeft) + " дн. назад";
      } else if (daysLeft === 0) {
        severity = "critical";
        statusText = "Истекает сегодня";
      } else if (daysLeft <= 7) {
        severity = "critical";
        statusText = "Осталось " + daysLeft + " дн.";
      } else {
        severity = "warning";
        statusText = "Осталось " + daysLeft + " дн.";
      }

      addNotification(items, {
        id: "license-" + (record.id || record.systemName),
        type: "license",
        severity: severity,
        title: "Лицензия: " + (record.systemName || "Система"),
        subtitle: record.login ? "Логин: " + record.login : "Проверьте срок действия лицензии",
        meta: [statusText, "до " + formatDate(endDate)],
        sortValue: endDate ? endDate.getTime() : 0,
      });
    });
  }

  function buildTaskNotifications(items, taskData) {
    taskData.forEach(function (task) {
      var isDone = task.status === "done";
      var deadline = parseDate(task.deadline);
      var daysLeft = getDaysLeft(deadline);
      var manuallyOverdue = task.status === "overdue";

      if (isDone) return;
      if (!manuallyOverdue && (daysLeft === null || daysLeft >= 0)) return;

      addNotification(items, {
        id: "task-" + (task.id || task.title),
        type: "task",
        severity: "critical",
        title: task.title || "Задача команды",
        subtitle: [
          TEAM_STATUS_LABELS[task.status] || "Без статуса",
          (task.assignees || []).join(", "),
        ].filter(Boolean).join(" · "),
        meta: [
          deadline ? "Дедлайн: " + formatDate(deadline) : "Без дедлайна",
          manuallyOverdue ? "Статус просрочен" : "Просрочено " + Math.abs(daysLeft) + " дн.",
        ],
        sortValue: deadline ? deadline.getTime() : 0,
      });
    });
  }

  function buildStockNotifications(items, stockData, threshold) {
    stockData.forEach(function (item) {
      var quantity = toNumber(item.quantity);
      var severity;

      if (quantity > threshold) return;

      severity = quantity <= 0 ? "critical" : "warning";
      addNotification(items, {
        id: "stock-" + (item.id || item.name),
        type: "stock",
        severity: severity,
        title: "Низкий остаток: " + (item.name || "Товар"),
        subtitle: item.note || "Проверьте наличие промо продукции",
        meta: ["Осталось: " + quantity, "Порог: " + threshold],
        sortValue: quantity,
      });
    });
  }

  function buildReleaseNotifications(items, releaseData) {
    releaseData.forEach(function (task) {
      var hasProdDate = String(task.taskProdDate || "").trim() !== "";
      var endDate = parseDate(task.taskEndDate);
      var daysLeft = getDaysLeft(endDate);
      var severity = endDate && daysLeft < 0 ? "critical" : "warning";

      if (hasProdDate) return;

      addNotification(items, {
        id: "release-" + (task.id || task.taskName),
        type: "release",
        severity: severity,
        title: "Нет даты продакшена: " + (task.releaseName || "TRMS релиз"),
        subtitle: task.taskName || "Укажите дату имплементации в прод",
        meta: [
          endDate ? "Завершение: " + formatDate(endDate) : "Дата завершения не указана",
          severity === "critical" ? "Задача уже завершалась" : "Нужно заполнить прод",
        ],
        sortValue: endDate ? endDate.getTime() : Number.MAX_SAFE_INTEGER,
      });
    });
  }

  function buildNotifications() {
    var items = [];
    var threshold = getStockThreshold();

    buildLicenseNotifications(items, readArray(STORAGE_KEYS.records, "records"));
    buildTaskNotifications(items, readArray(STORAGE_KEYS.teamTasks, "teamTasks"));
    buildStockNotifications(items, readArray(STORAGE_KEYS.stockItems, "stockItems"), threshold);
    buildReleaseNotifications(items, readArray(STORAGE_KEYS.trmsReleases, "trmsReleaseTasks"));

    return items.sort(function (a, b) {
      return a.sortRank - b.sortRank || a.sortValue - b.sortValue || a.title.localeCompare(b.title, "ru");
    });
  }

  function getFilteredNotifications(items) {
    var type = elements.typeFilter ? elements.typeFilter.value : "all";
    var severity = elements.severityFilter ? elements.severityFilter.value : "all";
    var query = elements.searchInput ? elements.searchInput.value.trim().toLowerCase() : "";

    return items.filter(function (item) {
      return (type === "all" || item.type === type)
        && (severity === "all" || item.severity === severity)
        && (!query || item.searchable.includes(query));
    });
  }

  function setText(element, value) {
    if (element) element.textContent = String(value);
  }

  function renderCounters(items) {
    var counts = items.reduce(function (acc, item) {
      acc[item.type] = (acc[item.type] || 0) + 1;
      return acc;
    }, {});
    var total = items.length;

    setText(elements.licenseCount, counts.license || 0);
    setText(elements.taskCount, counts.task || 0);
    setText(elements.stockCount, counts.stock || 0);
    setText(elements.releaseCount, counts.release || 0);

    if (elements.navCount) {
      elements.navCount.textContent = String(total);
      elements.navCount.hidden = total === 0;
    }
  }

  function renderNotificationList(items) {
    if (!items.length) {
      elements.list.innerHTML = '<div class="notification-empty">По текущим фильтрам уведомлений нет.</div>';
      return;
    }

    elements.list.innerHTML = items.map(function (item) {
      return [
        '<article class="notification-card is-' + item.severity + '">',
        '<span class="notification-marker"></span>',
        '<div class="notification-content">',
        '<strong>' + escapeHtml(item.title) + '</strong>',
        item.subtitle ? '<p>' + escapeHtml(item.subtitle) + '</p>' : "",
        '<div class="notification-meta">',
        '<span>' + escapeHtml(item.typeLabel) + '</span>',
        '<span class="is-' + item.severity + '">' + escapeHtml(item.severityLabel) + '</span>',
        item.meta.map(function (meta) {
          return '<span>' + escapeHtml(meta) + '</span>';
        }).join(""),
        '</div>',
        '</div>',
        '<div class="notification-actions">',
        '<a class="notification-open-link" href="' + item.href + '">Открыть</a>',
        '</div>',
        '</article>',
      ].join("");
    }).join("");
  }

  function renderNotifications() {
    var items = buildNotifications();
    renderCounters(items);
    renderNotificationList(getFilteredNotifications(items));
  }

  function scheduleRender(delay) {
    window.clearTimeout(renderTimer);
    renderTimer = window.setTimeout(renderNotifications, delay || 0);
  }

  function showNotificationsPage() {
    if (typeof showPage === "function") {
      showPage("notifications");
    } else {
      document.querySelectorAll("[data-page-panel]").forEach(function (panel) {
        var isActive = panel.dataset.pagePanel === "notifications";
        panel.hidden = !isActive;
        panel.classList.toggle("is-active", isActive);
      });

      document.querySelectorAll("[data-nav-link]").forEach(function (link) {
        var isActive = link.dataset.navLink === "notifications";
        link.classList.toggle("is-active", isActive);
        if (isActive) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });
    }

    document.title = "Центр уведомлений";
    renderNotifications();
  }

  function syncRoute() {
    if (window.location.hash === "#notifications") {
      showNotificationsPage();
    }
  }

  [elements.typeFilter, elements.severityFilter].forEach(function (control) {
    if (control) control.addEventListener("change", renderNotifications);
  });

  if (elements.searchInput) elements.searchInput.addEventListener("input", renderNotifications);
  if (elements.stockThresholdInput) elements.stockThresholdInput.addEventListener("input", renderNotifications);
  if (elements.refreshButton) elements.refreshButton.addEventListener("click", renderNotifications);

  document.addEventListener("click", function (event) {
    var link = event.target.closest('[data-nav-link="notifications"]');
    if (!link) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    if (window.location.hash === "#notifications") {
      showNotificationsPage();
    } else {
      window.location.hash = "#notifications";
    }

    if (typeof window.closeMobileNav === "function") {
      window.closeMobileNav();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, true);

  document.addEventListener("submit", function (event) {
    if (event.target.matches("#systemForm, #teamTaskForm, #stockForm, #trmsReleaseForm")) {
      scheduleRender(120);
    }
  });

  document.addEventListener("click", function (event) {
    if (event.target.closest("#systemsTable, #teamTaskBoard, #stockTable, #trmsReleasesList, #pullFromSupabase")) {
      scheduleRender(180);
      window.setTimeout(renderNotifications, 1400);
      window.setTimeout(renderNotifications, 3000);
    }
  });

  window.addEventListener("storage", function (event) {
    if (Object.values(STORAGE_KEYS).includes(event.key)) {
      renderNotifications();
    }
  });

  window.addEventListener("hashchange", syncRoute);
  window.SystemHubNotifications = { render: renderNotifications };
  renderNotifications();
  syncRoute();
}());
