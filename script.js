
window.addEventListener("scroll", function () {
    let scrollIndicator = document.getElementById("scrollIndicator");
    if (window.scrollY > 10) {
        scrollIndicator.classList.add("hidden");
    } else {
        scrollIndicator.classList.remove("hidden");
    }
});
document.getElementById("scrollIndicator").addEventListener("click", function () {
    window.scrollTo({ top: 1050, behavior: "smooth" });
});


window.addEventListener("load", function () {
    const loadingScreen = document.getElementById("loading-screen");
    const content = document.getElementById("content");
    setTimeout(() => {
        loadingScreen.classList.add("hide");
        setTimeout(() => {
            content.classList.add("show");
        }, 1000);
    }, 500);
});


const hamburger = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".off-screen-menu");
const menuLinks = document.querySelectorAll(".off-screen-menu a");
hamburger.addEventListener("click", function (event) {
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
    event.stopPropagation();
});
menuLinks.forEach(link => {
    link.addEventListener("click", function () {
        menu.classList.remove("active");
        hamburger.classList.remove("active");
    });
});


const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
    let scrollY = window.scrollY;
    if (scrollY >600) {
        hamburger.classList.add("hidden");
        navbar.classList.add("hidden");
    } else {
        hamburger.classList.remove("hidden");
        navbar.classList.remove("hidden");
    }
});


const lenis = new Lenis({
    smooth: true
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
