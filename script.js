
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

const navbar = document.getElementById("navbar");
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

document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("contactForm");
    let formContainer = document.querySelector(".form-container");

    // Check if user already submitted
    if (localStorage.getItem("formSubmitted")) {
        formContainer.innerHTML = "<p style='color:white;'>You have already submitted the form.</p>";
        return; // Stop execution
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission

        let name = document.getElementById("name").value;
        let email = document.getElementById("class").value; // Matches the HTML ID
        let message = document.getElementById("message").value;

        let googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe5WtKSocaImSu56wnNyuVtRB1H91pI95C1crh574vC2rs6Cg/formResponse";
        const formData = new FormData();

        formData.append("entry.1129277712", name);  // Name field
        formData.append("entry.915948538", email); // Email field
        formData.append("entry.1842848848", message); // Message field

        fetch(googleFormUrl, {
            method: "POST",
            mode: "no-cors",
            body: formData
        }).then(() => {
            // Store in localStorage to prevent resubmission
            localStorage.setItem("formSubmitted", "true");

            // Show success message and disable form
            formContainer.innerHTML = "<p style='color:white;'>Your response has been submitted successfully!</p>";
        });
    });
});



