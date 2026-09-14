// Client-Side Contact Form Validation Module
// Validates user inputs before submission and provides immediate inline error messaging

// Regular expression pattern to verify standard email format (user@domain.tld)
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Dictionary containing validation requirements and customized error strings for each input field
const FIELD_RULES = {
  name: {
    errorId: "name-error",
    validate: (value) => {
      // Name requires at least 2 characters after removing whitespace
      if (value.trim().length < 2) {
        return "Please enter at least 2 characters for your name.";
      }
      return "";
    },
  },
  email: {
    errorId: "email-error",
    validate: (value) => {
      // Check input against standard regex pattern for emails
      if (!EMAIL_PATTERN.test(value.trim())) {
        return "Please enter a valid email address.";
      }
      return "";
    },
  },
  subject: {
    errorId: "subject-error",
    validate: (value) => {
      // Ensure meaningful subject topic line is provided
      if (value.trim().length < 3) {
        return "Subject must be at least 3 characters long.";
      }
      return "";
    },
  },
  message: {
    errorId: "message-error",
    validate: (value) => {
      // Enforce a sensible minimum character count for detailed inquiries
      if (value.trim().length < 10) {
        return "Message must be at least 10 characters long.";
      }
      return "";
    },
  },
};

// Helper function: tests an individual form field against its defined rule and updates UI feedback
function validateField(field) {
  const rule = FIELD_RULES[field.name];
  // If field doesn't have an explicit validation rule, automatically pass it
  if (!rule) return true;

  const errorElement = document.getElementById(rule.errorId);
  const message = rule.validate(field.value);
  const hasError = message.length > 0;

  // Toggle visual error styling class on the input or textarea element
  field.classList.toggle("is-invalid", hasError);
  
  // Set assistive technology ARIA property so screen readers understand validation status
  field.setAttribute("aria-invalid", String(hasError));

  // Display or clear the explanatory error text in the corresponding message container
  if (errorElement) {
    errorElement.textContent = message;
  }

  return !hasError;
}

export function initContactForm() {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("form-success");

  // Verify elements exist before attaching listeners to prevent runtime script errors
  if (!(form instanceof HTMLFormElement) || !(successMessage instanceof HTMLElement)) return;

  const fields = form.querySelectorAll("input, textarea");

  // Attach interactive input watching events to all text inputs and textareas
  fields.forEach((field) => {
    if (!(field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement)) return;

    // Run field evaluation when user navigates away from an input (blur event)
    field.addEventListener("blur", () => validateField(field));

    // While typing (input event), automatically re-evaluate if field was already marked invalid
    // This gives immediate visual reward the instant the user fixes their mistake
    field.addEventListener("input", () => {
      if (field.classList.contains("is-invalid")) {
        validateField(field);
      }
    });
  });

  // Intercept standard browser submit handler to perform client-side verification
  form.addEventListener("submit", (event) => {
    // Prevent immediate HTTP form transmission to allow script validation and mock submission
    event.preventDefault();
    
    // Hide previous success banner in case user is re-submitting edited contents
    successMessage.hidden = true;

    let isFormValid = true;

    // Check every individual field rule across the form
    fields.forEach((field) => {
      if (!(field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement)) return;
      if (!validateField(field)) {
        isFormValid = false;
      }
    });

    // If all validation rules pass without errors, complete submission workflow
    if (isFormValid) {
      // Reveal confirmation banner to assure user that message processing succeeded
      successMessage.hidden = false;
      
      // Clear input text values from all form fields
      form.reset();
      
      // Remove any lingering validation formatting or ARIA error flags from cleared fields
      fields.forEach((field) => {
        if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
          field.classList.remove("is-invalid");
          field.setAttribute("aria-invalid", "false");
        }
      });
    }
  });
}


