
window.addEventListener("scroll", function () {
    let scrollIndicator = document.getElementById("scrollIndicator");
    if (window.scrollY > 60) {
        scrollIndicator.classList.add("hidden");
    } else {
        scrollIndicator.classList.remove("hidden");
    }
}
);
document.getElementById("scrollIndicator").addEventListener("click", function () {
    window.scrollTo({ top: 1050, behavior: "smooth" });
});


window.addEventListener("load", function () {
    const loadingScreen = document.getElementById("loading-screen");
    const content = document.getElementById("content");

    // Ensure the loading screen is fully visible until everything is loaded
    setTimeout(() => {
        loadingScreen.classList.add("hide"); // Hide loading screen

        // Show main content only after loading screen fades out
        setTimeout(() => {
            content.classList.add("show");
        }, 1000); // 1s delay to ensure smooth transition
    }, 500); // 0.5s delay to prevent flicker
});


document.addEventListener("DOMContentLoaded", function () {
const hamburger = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".off-screen-menu");

// Toggle menu on hamburger click
hamburger.addEventListener("click", function () {
menu.classList.toggle("show-menu");
hamburger.classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", function (event) {
if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
    menu.classList.remove("show-menu");
    hamburger.classList.remove("active");
}
});

// Hide hamburger smoothly when scrolling down 300px
window.addEventListener("scroll", function () {
const scrollY = window.scrollY || window.pageYOffset; // Ensure compatibility

if (scrollY >950) {  
    hamburger.classList.add("hidden"); // Hide without squeezing
} else {
    hamburger.classList.remove("hidden"); // Show again
}
});
});

