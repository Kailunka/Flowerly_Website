const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
    overlay.classList.toggle('active');
});
