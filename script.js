
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
document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("contactForm");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("class").value;
        let message = document.getElementById("message").value;

        let googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe5WtKSocaImSu56wnNyuVtRB1H91pI95C1crh574vC2rs6Cg/formResponse";
        const formData = new FormData();

        formData.append("entry.1129277712", name);
        formData.append("entry.915948538", email);
        formData.append("entry.1842848848", message);
        fetch(googleFormUrl, {
            method: "POST",
            mode: "no-cors",
            body: formData
        }).then(() => {
            form.reset();
            window.location.href = "index.html";

        }).catch(error => {
            alert("Error submitting form. Please try again.");;
        });
    });
});

