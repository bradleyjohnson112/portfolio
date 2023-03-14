'use strict';

const toggleButtons = document.querySelectorAll('.toggle-button');
const nav = document.querySelector('.nav-mobile');


toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});

const navLinks = nav.querySelectorAll('a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  })
})