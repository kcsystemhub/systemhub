(function () {
  var menuButton = document.querySelector("#mobileMenuToggle");
  var closeButton = document.querySelector("#mobileMenuClose");
  var backdrop = document.querySelector("#mobileNavBackdrop");
  var sidebar = document.querySelector(".sidebar");
  var mobileQuery = window.matchMedia("(max-width: 720px)");

  if (!menuButton || !backdrop || !sidebar) return;

  if (!sidebar.id) sidebar.id = "sidebarNav";

  function setMobileNavOpen(isOpen) {
    document.body.classList.toggle("nav-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    backdrop.hidden = !isOpen;
  }

  function closeMobileNav() {
    setMobileNavOpen(false);
  }

  window.closeMobileNav = closeMobileNav;

  menuButton.addEventListener("click", function () {
    setMobileNavOpen(!document.body.classList.contains("nav-open"));
  });

  if (closeButton) {
    closeButton.addEventListener("click", closeMobileNav);
  }

  backdrop.addEventListener("click", closeMobileNav);

  document.addEventListener("click", function (event) {
    if (!mobileQuery.matches) return;
    if (event.target.closest(".sidebar [data-nav-link]")) closeMobileNav();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMobileNav();
  });

  window.addEventListener("resize", function () {
    if (!mobileQuery.matches) closeMobileNav();
  });
}());
