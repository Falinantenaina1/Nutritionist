const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle("show");
})

navbar.addEventListener('click', () => {
    navbar.classList.remove("show");
})