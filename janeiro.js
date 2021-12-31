const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.logo', { delay: 300});
ScrollReveal().reveal('.toggle', { delay: 300});

ScrollReveal().reveal('.overplay');
ScrollReveal().reveal('.text', { delay: 500});
ScrollReveal().reveal('.menu', { delay: 500});
