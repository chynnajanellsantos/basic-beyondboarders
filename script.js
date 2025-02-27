const burgir = document.querySelector(".toggle_menu");
const hnav = document.querySelector(".header_nav");
burgir.addEventListener("click", () => {
    burgir.classList.toggle("open");
    hnav.classList.toggle("open");
});