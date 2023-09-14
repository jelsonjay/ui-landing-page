import "./styles.css";
const year = document.querySelector("#year");
const thisYear = new Date().getFullYear();

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

year.setAttribute("datetime", thisYear);
year.textContent = thisYear;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
