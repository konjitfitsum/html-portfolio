const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const themeToggle = document.getElementById("themeToggle");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
