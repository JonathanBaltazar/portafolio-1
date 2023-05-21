let barsBtn = document.getElementById("bars-btn");
let navLinks = document.getElementById("nav-links");

barsBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        barsBtn.classList.add("fa-x");
        barsBtn.classList.remove("fa-bars");
    } else {
        barsBtn.classList.add("fa-bars");
        barsBtn.classList.remove("fa-x");
    }
});

console.log(navLinks.children.length - 1);

for (let i = 0; i < navLinks.children.length; i++) {
    navLinks.children[i].addEventListener("click", () => {
        navLinks.classList.remove("active");
        barsBtn.classList.add("fa-bars");
        barsBtn.classList.remove("fa-x");
    });
}
