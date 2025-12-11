const form = document.getElementById("login-form");
const feedback = document.getElementById("feedback");

const VALID_USERNAME = "Admin";
const VALID_PASSWORD = "Admin";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = form.username.value.trim();
  const password = form.password.value;

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    feedback.textContent = "Login successful. Welcome back!";
    feedback.className = "feedback success";
  } else {
    feedback.textContent = "Invalid credentials. Please use Admin / Admin.";
    feedback.className = "feedback error";
  }
});
