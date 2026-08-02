// Main Application Entry Point
// Imports modular features for navigation interactivity and form validation
import { initNavigation } from "./navigation.js";
import { initContactForm } from "./form-validation.js";

// Bootstrap function runs as soon as the HTML document structure is loaded in the browser
function bootstrap() {
  // Grab the footer copyright span to keep the date automatically updated year-over-year
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    // Inject current calendar year using native JavaScript Date API
    yearElement.textContent = String(new Date().getFullYear());
  }

  // Initialize mobile responsive hamburger menu and scroll observer for link highlighting
  initNavigation();

  // Initialize client-side form validation rules, input event watchers, and feedback messages
  initContactForm();
}

// Wait for DOMContentLoaded event before attaching interactive handlers and manipulating elements
document.addEventListener("DOMContentLoaded", bootstrap);


