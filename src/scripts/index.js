import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import main from './main.js'


const navigationBar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const menuToggle = document.querySelector("[data-menu-toggle-btn]");

document.addEventListener('DOMContentLoaded', main)

menuToggle.addEventListener("click", function () {
  navigationBar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navigationBar.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });
}

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
