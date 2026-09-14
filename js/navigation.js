// Navigation Controller Module
// Handles mobile hamburger menu toggling and scroll-based section link highlighting

// CSS selector constants to maintain consistency across query lookups
const NAV_SELECTOR = ".site-nav";
const TOGGLE_SELECTOR = ".nav-toggle";
const NAV_LINK_SELECTOR = ".nav-link";
const SECTION_SELECTOR = "main section[id]";

export function initNavigation() {
  // Query DOM elements needed for interactive navigation controls
  const nav = document.querySelector(NAV_SELECTOR);
  const toggle = document.querySelector(TOGGLE_SELECTOR);
  const navLinks = document.querySelectorAll(NAV_LINK_SELECTOR);
  const sections = document.querySelectorAll(SECTION_SELECTOR);

  // Safety check: abort initialization if primary navigation elements are missing
  if (!nav || !toggle) return;

  // Hamburger button click handler for mobile and tablet viewports
  toggle.addEventListener("click", () => {
    // Toggle dropdown class and store the new boolean visibility state
    const isOpen = nav.classList.toggle("is-open");
    
    // Animate hamburger icon into an X close button when menu is open
    toggle.classList.toggle("is-active", isOpen);
    
    // Update ARIA accessibility attributes so screen readers announce menu state correctly
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close dropdown automatically whenever user taps any link to navigate to a page section
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-active");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Outside click detector: dismisses mobile dropdown if clicking anywhere outside the navbar or toggle button
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    // Check if clicked element is outside both the navigation container and hamburger button
    if (!nav.contains(target) && !toggle.contains(target)) {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-active");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  // IntersectionObserver monitors scroll position to dynamically highlight active navigation links
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Only update classes when a monitored section enters the target viewport zone
        if (!entry.isIntersecting) return;

        const sectionId = entry.target.id;
        
        // Loop through nav items and add 'is-active' class to whichever href matches the visible section ID
        navLinks.forEach((link) => {
          const href = link.getAttribute("href");
          link.classList.toggle("is-active", href === `#${sectionId}`);
        });
      });
    },
    {
      root: null,
      // Using negative top/bottom margins so sections highlight when crossing the vertical middle of the screen
      rootMargin: "-40% 0px -45% 0px",
      threshold: 0,
    }
  );

  // Register each main document section with the observer instance
  sections.forEach((section) => observer.observe(section));
}


