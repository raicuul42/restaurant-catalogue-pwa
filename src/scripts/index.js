import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';
// import main from './main.js'

const buttonHamburger = document.querySelector('[data-menu-toggle-btn]');
const navigationDrawer = document.querySelector('[data-navbar]');
const mainContent = document.querySelector('#maincontent');

// document.addEventListener('DOMContentLoaded', main)

const app = new App({
  button: buttonHamburger,
  drawer: navigationDrawer,
  content: mainContent,
});
