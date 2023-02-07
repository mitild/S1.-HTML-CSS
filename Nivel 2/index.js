// TOGGLE MENU BUTTON

const hamburgerIcon = document.getElementById('hamburger-icon')
const navMenu = document.getElementById('nav-menu')

hamburgerIcon.addEventListener('click', toggleMenu)
function toggleMenu() {
  navMenu.classList.toggle('hidden')
}