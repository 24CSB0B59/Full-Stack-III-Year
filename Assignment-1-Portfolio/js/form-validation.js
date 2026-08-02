/**
 * Client-side contact form validation helpers.
 */

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FIELD_RULES = {
  name: {
    errorId: "name-error",
    validate: (value) => {
      if (value.trim().length < 2) {
        return "Please enter at least 2 characters for your name.";
      }
      return "";
    },
  },
  email: {
    errorId: "email-error",
    validate: (value) => {
      if (!EMAIL_PATTERN.test(value.trim())) {
        return "Please enter a valid email address.";
      }
      return "";
    },
  },
  subject: {
    errorId: "subject-error",
    validate: (value) => {
      if (value.trim().length < 3) {
        return "Subject must be at least 3 characters long.";
      }
      return "";
    },
  },
  message: {
    errorId: "message-error",
    validate: (value) => {
      if (value.trim().length < 10) {
        return "Message must be at least 10 characters long.";
      }
      return "";
    },
  },
};

/**
 * Validates a single form field and updates UI feedback.
 * @param {HTMLInputElement | HTMLTextAreaElement} field
 * @returns {boolean}
 */
function validateField(field) {
  const rule = FIELD_RULES[field.name];

  if (!rule) {
    return true;
  }

  const errorElement = document.getElementById(rule.errorId);
  const message = rule.validate(field.value);

  field.classList.toggle("is-invalid", message.length > 0);
  field.setAttribute("aria-invalid", String(message.length > 0));

  if (errorElement) {
    errorElement.textContent = message;
  }

  return message.length === 0;
}

/**
 * Initializes accessible form validation behavior.
 */
export function initContactForm() {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("form-success");

  if (!(form instanceof HTMLFormElement) || !(successMessage instanceof HTMLElement)) {
    return;
  }

  const fields = form.querySelectorAll("input, textarea");

  fields.forEach((field) => {
    if (!(field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement)) {
      return;
    }

    field.addEventListener("blur", () => {
      validateField(field);
    });

    field.addEventListener("input", () => {
      if (field.classList.contains("is-invalid")) {
        validateField(field);
      }
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    successMessage.hidden = true;

    let isValid = true;

    fields.forEach((field) => {
      if (!(field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement)) {
        return;
      }

      const fieldIsValid = validateField(field);
      isValid = isValid && fieldIsValid;
    });

    if (isValid) {
      successMessage.hidden = false;
      form.reset();
      fields.forEach((field) => {
        if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
          field.classList.remove("is-invalid");
          field.setAttribute("aria-invalid", "false");
        }
      });
    }
  });
}
