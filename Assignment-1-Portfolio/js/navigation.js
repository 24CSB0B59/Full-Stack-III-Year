/**
 * Mobile navigation toggle and active section highlighting.
 */

const NAV_SELECTOR = ".site-nav";
const TOGGLE_SELECTOR = ".nav-toggle";
const NAV_LINK_SELECTOR = ".nav-link";
const SECTION_SELECTOR = "main section[id]";

/**
 * Initializes navigation interactions.
 */
export function initNavigation() {
  const nav = document.querySelector(NAV_SELECTOR);
  const toggle = document.querySelector(TOGGLE_SELECTOR);
  const navLinks = document.querySelectorAll(NAV_LINK_SELECTOR);
  const sections = document.querySelectorAll(SECTION_SELECTOR);

  if (!nav || !toggle) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-active", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-active");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    if (!nav.contains(target) && !toggle.contains(target)) {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-active");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const sectionId = entry.target.id;
        navLinks.forEach((link) => {
          const href = link.getAttribute("href");
          link.classList.toggle("is-active", href === `#${sectionId}`);
        });
      });
    },
    {
      root: null,
      rootMargin: "-40% 0px -45% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));
}
