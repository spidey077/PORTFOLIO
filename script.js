
window.addEventListener("scroll", function () {
    let scrollIndicator = document.getElementById("scrollIndicator");
    if (window.scrollY > 60) {
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
document.addEventListener("click", function () {
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
});
document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove("active");
        hamburger.classList.remove("active");
    }
});

const navbar=document.getElementById("navbar");
window.addEventListener("scroll", function () {
    let scrollY = window.scrollY;
    if (scrollY > 950) {
        hamburger.classList.add("hidden");
        navbar.classList.add("hidden");
    } else {
        hamburger.classList.remove("hidden");
        navbar.classList.remove("hidden");
    }
});




