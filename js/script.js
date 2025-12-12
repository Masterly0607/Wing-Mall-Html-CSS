const menu = document.querySelector(".mobile-menu-items");
const overlay = document.querySelector(".menu-overlay");
const openBtn = document.querySelector(".mobile-menu-toggle");
const closeBtn = document.querySelector(".mobile-menu-close");

openBtn.addEventListener("click", () => {
  menu.classList.add("active");
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  overlay.classList.remove("active");
});
