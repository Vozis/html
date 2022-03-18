'use strict';

let brandDark = document.querySelector('.brand__dark')
let iconBurger = document.querySelector('.icon-burger');
let menuClose = document.querySelector('.menu__close');

function toggleMenu() {
    brandDark.classList.toggle('hidden');
}

iconBurger.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);