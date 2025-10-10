document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("form-feedback");

  if (form && feedback) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name")?.value.trim();
      const email = document.getElementById("email")?.value.trim();
      const message = document.getElementById("message")?.value.trim();

      const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

      if (!name || !email) {
        feedback.textContent = "Please fill in both your name and email.";
        feedback.style.color = "red";
        return;
      }

      if (!emailPattern.test(email)) {
        feedback.textContent = "Please enter a valid email address.";
        feedback.style.color = "red";
        return;
      }

      if (!message) {
        feedback.textContent = "Please include a message.";
        feedback.style.color = "red";
        return;
      }

      localStorage.setItem("subscriberEmail", email);

      feedback.textContent = `Thank you, ${name}! We'll be in touch soon.`;
      feedback.style.color = "green";
      form.reset();
    });
  }
});
