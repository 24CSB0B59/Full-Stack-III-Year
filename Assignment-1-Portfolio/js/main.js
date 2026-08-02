/**
 * Application entry point — wires modular feature modules together.
 */
import { initNavigation } from "./navigation.js";
import { initContactForm } from "./form-validation.js";

/**
 * Bootstraps all interactive features after DOM is ready.
 */
function bootstrap() {
  const yearElement = document.getElementById("current-year");

  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }

  initNavigation();
  initContactForm();
}

document.addEventListener("DOMContentLoaded", bootstrap);
