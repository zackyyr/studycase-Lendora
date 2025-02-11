
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".nav-links");
    const menuToggle = document.querySelector(".hamburger-menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});
