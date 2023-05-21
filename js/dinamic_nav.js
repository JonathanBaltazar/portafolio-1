let nav = document.querySelector("nav");
let currentScrollPosition = window.scrollY;

window.addEventListener("scroll", function () {
    if (window.scrollY < currentScrollPosition) {
        nav.classList.remove("nav-oculto");
    } else {
        nav.classList.add("nav-oculto");
    }
    currentScrollPosition = window.scrollY;
});
