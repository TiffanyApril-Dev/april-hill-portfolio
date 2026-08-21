const navToggle = document.querySelector("[data-nav-toggle]");
const primaryNav = document.querySelector("[data-primary-nav]");

function setNavigation(open) {
  if (!navToggle || !primaryNav) return;

  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
  primaryNav.dataset.open = String(open);
  document.body.classList.toggle("nav-open", open);
}

if (navToggle && primaryNav) {
  navToggle.addEventListener("click", () => {
    setNavigation(navToggle.getAttribute("aria-expanded") !== "true");
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setNavigation(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
      setNavigation(false);
      navToggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) setNavigation(false);
  });
}

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
