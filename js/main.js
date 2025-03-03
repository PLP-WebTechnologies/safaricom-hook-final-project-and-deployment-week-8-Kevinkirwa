document.addEventListener("DOMContentLoaded", function () {
  // Contact Form Validation
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;

      // Check required fields
      if (!form.name.value.trim() || !form.email.value.trim() || !form.message.value.trim()) {
        valid = false;
      }

      if (!valid) {
        feedback.textContent = "Please fill in all fields correctly.";
        feedback.style.color = "red";
      } else {
        feedback.textContent = "Thank you for your message! We will get back to you soon.";
        feedback.style.color = "green";
        form.reset();
      }
    });
  }
});
