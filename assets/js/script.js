
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    themeToggle.textContent = body.classList.contains('light-theme') ? '☀️' : '🌙';
});

const burger = document.getElementById('burger');
const navList = document.querySelector('.nav__list');

burger.addEventListener('click', () => {
    navList.classList.toggle('active');
});
const slides = document.querySelectorAll('.slider__slide');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000);


indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});
const authForm = document.querySelector('.auth__form');

authForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert('Вы успешно авторизованы!');
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
});