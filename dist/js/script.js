
let menu = document.querySelector('.nav-menu'),
    toggle = document.querySelector('.nav-toggle'),
    close = document.querySelector('.nav-menu__close');

close.addEventListener('click', function() {
  menu.classList.remove('nav-menu-active');
});
toggle.addEventListener('click', function() {
  menu.classList.add('nav-menu-active');
});
