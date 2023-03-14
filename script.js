'use strict';

const toggleButtons = document.querySelectorAll('.toggle-button');
const nav = document.querySelector('.nav-mobile');


toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});