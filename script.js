'use strict';

const toggleButton = document.querySelector('.toggle-button');
const nav = document.querySelector('.nav');

toggleButton.addEventListener('click', () => {
  console.log('hi');
  nav.classList.toggle('active');
})