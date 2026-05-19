(function () {
  var WEBVIEW_PAGES = {
    chatgpt: {
      title: "ChatGPT",
      url: "https://chatgpt.com/",
      fallback: 'ChatGPT может ограничивать просмотр внутри iframe. Используйте кнопку "Открыть в новой вкладке".',
    },
    lms: {
      title: "LMS",
      url: "https://lms.airastana.com/",
    },
    trms: {
      title: "TRMS",
      url: "https://trms.airastana.com/#/gant",
    },
  };

  var fallbackMessage =
    'Сайт может ограничивать просмотр внутри системы. Используйте кнопку "Открыть в новой вкладке".';
  var loadTimers = {};

  function getWebviewPageFromHash() {
    if (window.location.hash === "#chatgpt") return "chatgpt";
    if (window.location.hash === "#lms") return "lms";
    if (window.location.hash === "#trms") return "trms";
    return "";
  }

  function getWebviewElements(page) {
    return {
      page: document.querySelector('[data-page-panel="' + page + '"]'),
      frame: document.querySelector('[data-webview-frame="' + page + '"]'),
      fallback: document.querySelector('[data-webview-fallback="' + page + '"]'),
      navLink: document.querySelector('[data-nav-link="' + page + '"]'),
    };
  }

  function hideFallback(page) {
    var fallback = getWebviewElements(page).fallback;
    if (fallback) fallback.classList.remove("is-visible");
  }

  function showFallback(page) {
    var fallback = getWebviewElements(page).fallback;
    if (!fallback) return;

    fallback.textContent = WEBVIEW_PAGES[page]?.fallback || fallbackMessage;
    fallback.classList.add("is-visible");
  }

  function startIframeWatch(page) {
    var elements = getWebviewElements(page);
    if (!elements.frame) return;

    window.clearTimeout(loadTimers[page]);
    hideFallback(page);

    if (elements.frame.dataset.webviewLoaded === "true") return;

    elements.frame.dataset.webviewLoaded = "false";
    loadTimers[page] = window.setTimeout(function () {
      var currentPage = getWebviewPageFromHash();
      var currentFrame = getWebviewElements(page).frame;

      if (currentPage === page && currentFrame && currentFrame.dataset.webviewLoaded !== "true") {
        showFallback(page);
      }
    }, 5000);
  }

  function exitFullscreen(page) {
    var targetPage = page || getWebviewPageFromHash();
    var panel = targetPage ? getWebviewElements(targetPage).page : null;

    if (panel) panel.classList.remove("fullscreen-mode");
    document.body.classList.remove("modal-open");
  }

  function enterFullscreen(page) {
    var panel = getWebviewElements(page).page;
    if (!panel) return;

    panel.classList.add("fullscreen-mode");
    document.body.classList.add("modal-open");
  }

  function showWebviewPage(page) {
    var config = WEBVIEW_PAGES[page];
    if (!config) return false;

    document.querySelectorAll("[data-page-panel]").forEach(function (panel) {
      var isActive = panel.dataset.pagePanel === page;
      panel.hidden = !isActive;
      panel.classList.toggle("is-active", isActive);
      if (!isActive) panel.classList.remove("fullscreen-mode");
    });

    document.querySelectorAll("[data-nav-link]").forEach(function (link) {
      var isActive = link.dataset.navLink === page;
      link.classList.toggle("is-active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    document.title = config.title;
    startIframeWatch(page);
    return true;
  }

  function syncWebviewRoute() {
    var page = getWebviewPageFromHash();

    if (page) {
      showWebviewPage(page);
      return;
    }

    Object.keys(WEBVIEW_PAGES).forEach(function (webviewPage) {
      exitFullscreen(webviewPage);
      hideFallback(webviewPage);
      window.clearTimeout(loadTimers[webviewPage]);
    });
  }

  document.addEventListener(
    "click",
    function (event) {
      var link = event.target.closest('[data-nav-link="chatgpt"], [data-nav-link="lms"], [data-nav-link="trms"]');
      if (!link) return;

      event.preventDefault();
      event.stopImmediatePropagation();

      var targetHash = "#" + link.dataset.navLink;
      if (window.location.hash === targetHash) {
        syncWebviewRoute();
      } else {
        window.location.hash = targetHash;
      }

      if (typeof window.closeMobileNav === "function") {
        window.closeMobileNav();
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    true
  );

  Object.keys(WEBVIEW_PAGES).forEach(function (page) {
    var elements = getWebviewElements(page);

    if (elements.frame) {
      elements.frame.addEventListener("load", function () {
        elements.frame.dataset.webviewLoaded = "true";
        window.clearTimeout(loadTimers[page]);
        hideFallback(page);
      });
    }
  });

  document.addEventListener("click", function (event) {
    var fullscreenButton = event.target.closest("[data-webview-fullscreen]");
    var exitButton = event.target.closest("[data-webview-exit-fullscreen]");

    if (fullscreenButton) {
      enterFullscreen(fullscreenButton.dataset.webviewFullscreen);
    }

    if (exitButton) {
      exitFullscreen(exitButton.dataset.webviewExitFullscreen);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      exitFullscreen();
    }
  });

  window.addEventListener("hashchange", syncWebviewRoute);
  syncWebviewRoute();
}());
