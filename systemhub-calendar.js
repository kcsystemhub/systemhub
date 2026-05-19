(function () {
  var STORAGE_KEYS = {
    records: "systemhub.records",
    teamTasks: "systemhub.teamTasks",
    trmsReleases: "systemhub.trmsReleases",
  };

  var TYPE_META = {
    license: { label: "Лицензия", className: "is-license", href: "#systems" },
    task: { label: "Задача", className: "is-task", href: "#team-tasks" },
    release: { label: "TRMS", className: "is-release", href: "#trms-releases" },
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
    page: document.querySelector("#calendarPage"),
    grid: document.querySelector("#calendarGrid"),
    monthLabel: document.querySelector("#calendarMonthLabel"),
    prevButton: document.querySelector("#calendarPrevMonth"),
    nextButton: document.querySelector("#calendarNextMonth"),
    todayButton: document.querySelector("#calendarTodayButton"),
    typeFilter: document.querySelector("#calendarTypeFilter"),
    statusFilter: document.querySelector("#calendarStatusFilter"),
    searchInput: document.querySelector("#calendarSearchInput"),
    selectedTitle: document.querySelector("#calendarSelectedTitle"),
    selectedList: document.querySelector("#calendarSelectedDateList"),
    upcomingList: document.querySelector("#calendarUpcomingList"),
    totalCount: document.querySelector("#calendarTotalCount"),
    overdueCount: document.querySelector("#calendarOverdueCount"),
    todayCount: document.querySelector("#calendarTodayCount"),
    weekCount: document.querySelector("#calendarWeekCount"),
  };

  if (!elements.page || !elements.grid) return;

  var today = startOfDay(new Date());
  var calendarCursor = new Date(today.getFullYear(), today.getMonth(), 1);
  var selectedDateKey = getDateKey(today);
  var renderTimer = 0;

  function readArray(key, runtimeName) {
    try {
      if (runtimeName === "records" && typeof records !== "undefined" && Array.isArray(records)) return records;
      if (runtimeName === "teamTasks" && typeof teamTasks !== "undefined" && Array.isArray(teamTasks)) return teamTasks;
      if (runtimeName === "trmsReleaseTasks" && typeof trmsReleaseTasks !== "undefined" && Array.isArray(trmsReleaseTasks)) return trmsReleaseTasks;
    } catch (error) {
      // Fall back to localStorage when the main script scope is unavailable.
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

  function startOfDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  function parseDate(value) {
    if (value instanceof Date && !Number.isNaN(value.getTime())) {
      return startOfDay(value);
    }

    var text = String(value || "").trim();
    var match;
    var year;

    if (!text) return null;

    match = text.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/);
    if (match) {
      return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
    }

    match = text.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{2,4})/);
    if (match) {
      year = match[3].length === 2 ? "20" + match[3] : match[3];
      return new Date(Number(year), Number(match[2]) - 1, Number(match[1]));
    }

    var serial = Number(text);
    if (Number.isFinite(serial) && serial > 20000) {
      var excelEpoch = Date.UTC(1899, 11, 30);
      var excelDate = new Date(excelEpoch + serial * 86400000);
      return new Date(excelDate.getUTCFullYear(), excelDate.getUTCMonth(), excelDate.getUTCDate());
    }

    var fallback = new Date(text);
    return Number.isNaN(fallback.getTime()) ? null : startOfDay(fallback);
  }

  function getDateKey(date) {
    return [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, "0"),
      String(date.getDate()).padStart(2, "0"),
    ].join("-");
  }

  function formatDate(date, options) {
    return new Intl.DateTimeFormat("ru-RU", options || {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  }

  function getDayDiff(date) {
    return Math.round((startOfDay(date) - today) / 86400000);
  }

  function getTemporalStatus(date, options) {
    var settings = options || {};
    var diff = getDayDiff(date);

    if (settings.done) return { key: "done", label: "Завершено" };
    if (settings.manualOverdue) return { key: "overdue", label: "Просрочено" };
    if (diff < 0) {
      return {
        key: settings.pastKey || "overdue",
        label: settings.pastLabel || "Просрочено",
      };
    }
    if (diff === 0) return { key: "today", label: "Сегодня" };
    if (diff <= 7) return { key: "week", label: diff + " дн." };
    return { key: "upcoming", label: "Запланировано" };
  }

  function addEvent(events, config) {
    var date = parseDate(config.date);
    if (!date) return;

    events.push({
      id: config.id,
      type: config.type,
      date: date,
      dateKey: getDateKey(date),
      title: config.title,
      subtitle: config.subtitle || "",
      href: config.href || TYPE_META[config.type].href,
      status: config.status || getTemporalStatus(date, config.statusOptions),
      searchable: [config.title, config.subtitle, TYPE_META[config.type].label].join(" "),
    });
  }

  function buildEvents() {
    var events = [];
    var recordsData = readArray(STORAGE_KEYS.records, "records");
    var taskData = readArray(STORAGE_KEYS.teamTasks, "teamTasks");
    var releaseData = readArray(STORAGE_KEYS.trmsReleases, "trmsReleaseTasks");

    recordsData.forEach(function (record) {
      addEvent(events, {
        id: "license-" + (record.id || record.systemName),
        type: "license",
        date: record.licenseEndDate,
        title: "Лицензия: " + (record.systemName || "Система"),
        subtitle: record.login ? "Логин: " + record.login : "Дата завершения лицензии",
        statusOptions: {},
      });
    });

    taskData.forEach(function (task) {
      var taskDate = parseDate(task.deadline);
      var status;

      if (!taskDate) return;

      status = getTemporalStatus(taskDate, {
        done: task.status === "done",
        manualOverdue: task.status === "overdue",
      });

      addEvent(events, {
        id: "task-" + (task.id || task.title),
        type: "task",
        date: taskDate,
        title: task.title || "Задача команды",
        subtitle: [
          TEAM_STATUS_LABELS[task.status] || "Без статуса",
          (task.assignees || []).join(", "),
        ].filter(Boolean).join(" · "),
        status: status,
      });
    });

    releaseData.forEach(function (task) {
      [
        ["taskWrittenDate", "Задача написана"],
        ["taskStartDate", "Старт задачи"],
        ["taskEndDate", "Завершение задачи"],
        ["taskProdDate", "Выход в прод"],
      ].forEach(function (field) {
        addEvent(events, {
          id: "release-" + (task.id || task.taskName) + "-" + field[0],
          type: "release",
          date: task[field[0]],
          title: field[1] + ": " + (task.releaseName || "TRMS релиз"),
          subtitle: task.taskName || "",
          statusOptions: { pastKey: "past", pastLabel: "Прошло" },
        });
      });
    });

    return events.sort(function (a, b) {
      return a.date - b.date || a.title.localeCompare(b.title, "ru");
    });
  }

  function getFilteredEvents(events) {
    var type = elements.typeFilter ? elements.typeFilter.value : "all";
    var status = elements.statusFilter ? elements.statusFilter.value : "all";
    var query = elements.searchInput ? elements.searchInput.value.trim().toLowerCase() : "";

    return events.filter(function (event) {
      var diff = getDayDiff(event.date);
      var matchesType = type === "all" || event.type === type;
      var matchesStatus = status === "all"
        || event.status.key === status
        || (status === "week" && diff >= 0 && diff <= 7)
        || (status === "upcoming" && diff > 0);
      var matchesQuery = !query || event.searchable.toLowerCase().includes(query);

      return matchesType && matchesStatus && matchesQuery;
    });
  }

  function renderCounters(events) {
    var todayKey = getDateKey(today);
    var weekCount = events.filter(function (event) {
      var diff = getDayDiff(event.date);
      return diff >= 0 && diff <= 7;
    }).length;

    elements.totalCount.textContent = String(events.length);
    elements.overdueCount.textContent = String(events.filter(function (event) { return event.status.key === "overdue"; }).length);
    elements.todayCount.textContent = String(events.filter(function (event) { return event.dateKey === todayKey; }).length);
    elements.weekCount.textContent = String(weekCount);
  }

  function groupEventsByDate(events) {
    return events.reduce(function (map, event) {
      var items = map.get(event.dateKey) || [];
      items.push(event);
      map.set(event.dateKey, items);
      return map;
    }, new Map());
  }

  function renderCalendarGrid(events) {
    var month = calendarCursor.getMonth();
    var firstDay = new Date(calendarCursor.getFullYear(), month, 1);
    var startOffset = (firstDay.getDay() + 6) % 7;
    var startDate = new Date(firstDay);
    var grouped = groupEventsByDate(events);
    var weekdays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    var html = weekdays.map(function (day) {
      return '<div class="calendar-weekday">' + day + '</div>';
    }).join("");

    startDate.setDate(firstDay.getDate() - startOffset);

    for (var index = 0; index < 42; index += 1) {
      var date = new Date(startDate);
      var key;
      var items;
      var visibleItems;
      var classes;

      date.setDate(startDate.getDate() + index);
      key = getDateKey(date);
      items = grouped.get(key) || [];
      visibleItems = items.slice(0, 3);
      classes = [
        "calendar-day",
        date.getMonth() !== month ? "is-outside" : "",
        key === getDateKey(today) ? "is-today" : "",
        key === selectedDateKey ? "is-selected" : "",
      ].filter(Boolean).join(" ");

      html += [
        '<button class="' + classes + '" type="button" data-calendar-date="' + key + '">',
        '<span class="calendar-day-head">',
        '<span class="calendar-day-number">' + date.getDate() + '</span>',
        items.length ? '<span class="calendar-day-count">' + items.length + '</span>' : '<span></span>',
        '</span>',
        '<span class="calendar-day-events">',
        visibleItems.map(function (event) {
          return '<span class="calendar-chip ' + TYPE_META[event.type].className + '">' + escapeHtml(event.title) + '</span>';
        }).join(""),
        items.length > visibleItems.length ? '<span class="calendar-more">+' + (items.length - visibleItems.length) + '</span>' : "",
        '</span>',
        '</button>',
      ].join("");
    }

    elements.grid.innerHTML = html;
    elements.monthLabel.textContent = formatDate(calendarCursor, { month: "long", year: "numeric" });
  }

  function renderEventList(container, events, emptyText) {
    if (!events.length) {
      container.innerHTML = '<div class="calendar-empty">' + escapeHtml(emptyText) + '</div>';
      return;
    }

    container.innerHTML = events.map(function (event) {
      var meta = TYPE_META[event.type];
      return [
        '<article class="calendar-list-item">',
        '<span class="calendar-event-dot ' + meta.className + '"></span>',
        '<div class="calendar-list-main">',
        '<strong>' + escapeHtml(event.title) + '</strong>',
        event.subtitle ? '<span>' + escapeHtml(event.subtitle) + '</span>' : "",
        '<div class="calendar-event-meta">',
        '<span>' + escapeHtml(formatDate(event.date, { day: "2-digit", month: "2-digit", year: "numeric" })) + '</span>',
        '<span>' + escapeHtml(meta.label) + '</span>',
        '<span class="is-' + event.status.key + '">' + escapeHtml(event.status.label) + '</span>',
        '</div>',
        '<a class="calendar-open-link" href="' + meta.href + '">Открыть раздел</a>',
        '</div>',
        '</article>',
      ].join("");
    }).join("");
  }

  function renderCalendar() {
    today = startOfDay(new Date());
    var allEvents = buildEvents();
    var filteredEvents = getFilteredEvents(allEvents);
    var selectedDate = parseDate(selectedDateKey) || today;
    var upcomingEvents = filteredEvents
      .filter(function (event) { return getDayDiff(event.date) >= 0; })
      .slice(0, 10);
    var selectedEvents = filteredEvents.filter(function (event) {
      return event.dateKey === selectedDateKey;
    });

    renderCounters(allEvents);
    renderCalendarGrid(filteredEvents);

    elements.selectedTitle.textContent = formatDate(selectedDate, {
      day: "2-digit",
      month: "long",
    });
    renderEventList(elements.selectedList, selectedEvents, "На выбранную дату событий нет.");
    renderEventList(elements.upcomingList, upcomingEvents, "Ближайших событий по текущим фильтрам нет.");
  }

  function scheduleCalendarRender(delay) {
    window.clearTimeout(renderTimer);
    renderTimer = window.setTimeout(renderCalendar, delay || 0);
  }

  function showCalendarPage() {
    if (typeof showPage === "function") {
      showPage("calendar");
    } else {
      document.querySelectorAll("[data-page-panel]").forEach(function (panel) {
        var isActive = panel.dataset.pagePanel === "calendar";
        panel.hidden = !isActive;
        panel.classList.toggle("is-active", isActive);
      });

      document.querySelectorAll("[data-nav-link]").forEach(function (link) {
        var isActive = link.dataset.navLink === "calendar";
        link.classList.toggle("is-active", isActive);
        if (isActive) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });
    }

    document.title = "Календарь";
    renderCalendar();
  }

  function syncCalendarRoute() {
    if (window.location.hash === "#calendar") {
      showCalendarPage();
    }
  }

  elements.prevButton.addEventListener("click", function () {
    calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() - 1, 1);
    selectedDateKey = getDateKey(calendarCursor);
    renderCalendar();
  });

  elements.nextButton.addEventListener("click", function () {
    calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() + 1, 1);
    selectedDateKey = getDateKey(calendarCursor);
    renderCalendar();
  });

  elements.todayButton.addEventListener("click", function () {
    today = startOfDay(new Date());
    calendarCursor = new Date(today.getFullYear(), today.getMonth(), 1);
    selectedDateKey = getDateKey(today);
    renderCalendar();
  });

  [elements.typeFilter, elements.statusFilter, elements.searchInput].forEach(function (control) {
    if (!control) return;
    control.addEventListener(control.tagName === "INPUT" ? "input" : "change", renderCalendar);
  });

  elements.grid.addEventListener("click", function (event) {
    var button = event.target.closest("[data-calendar-date]");
    if (!button) return;
    selectedDateKey = button.dataset.calendarDate;
    renderCalendar();
  });

  document.addEventListener("click", function (event) {
    var link = event.target.closest('[data-nav-link="calendar"]');
    if (!link) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    if (window.location.hash === "#calendar") {
      showCalendarPage();
    } else {
      window.location.hash = "#calendar";
    }

    if (typeof window.closeMobileNav === "function") {
      window.closeMobileNav();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, true);

  [
    "#systemForm",
    "#teamTaskForm",
    "#trmsReleaseForm",
    "#pullFromSupabase",
  ].forEach(function (selector) {
    var node = document.querySelector(selector);
    if (!node) return;
    node.addEventListener("submit", function () { scheduleCalendarRender(80); });
    node.addEventListener("change", function () {
      scheduleCalendarRender(600);
      window.setTimeout(renderCalendar, 2200);
    });
    node.addEventListener("click", function () {
      scheduleCalendarRender(120);
      window.setTimeout(renderCalendar, 2500);
    });
  });

  window.addEventListener("storage", function (event) {
    if (Object.values(STORAGE_KEYS).includes(event.key)) {
      renderCalendar();
    }
  });

  window.addEventListener("hashchange", syncCalendarRoute);
  window.SystemHubCalendar = { render: renderCalendar };
  renderCalendar();
  syncCalendarRoute();
}());
