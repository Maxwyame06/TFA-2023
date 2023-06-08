"use strict";

const burgerMenu = document.querySelector('.burger-menu');
const burgerIcon = document.querySelector('.burger-icon');
const closeIcon = document.querySelector('.close-icon__index');
const menuItems = document.querySelector('.menu-items');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('open');
    menuItems.classList.toggle('open');
});
closeIcon.addEventListener('click', () => {
     burgerMenu.classList.remove('open');
     menuItems.classList.remove('open');
});


window.addEventListener("scroll", function(){
    var navDesk = document.querySelector(".nav-desktop");
    navDesk.classList.toggle("sticky", window.scrollY > 650);
})


const lightMode = document.querySelector('.sun');
const darkMode = document.querySelector('.moon');

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

lightMode.onclick = function(){
  document.documentElement.setAttribute('data-theme', 'dark');
  lightMode.style = "display: none";
  darkMode.style = "display: block";
  localStorage.setItem('theme', 'dark');
}

darkMode.onclick = function(){
  document.documentElement.setAttribute('data-theme', 'light');
  lightMode.style = "display: block";
  darkMode.style = "display: none";
  localStorage.setItem('theme', 'light');  
}

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        lightMode.style = "display: none";
      darkMode.style = "display: block";
    }
}


AOS.init({
  duration: 600,
  easing:'ease-in-cubic',
});