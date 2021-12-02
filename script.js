let button = document.querySelector('.header__burger-btn');
let menu = document.querySelector('.header__menu');

function showMenu() {
  menu.classList.toggle('header__menu_active');
}

button.addEventListener('click', showMenu);


