//HAMBURGER MENU SCRIPT
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('open')
  nav.classList.toggle('close')
})
