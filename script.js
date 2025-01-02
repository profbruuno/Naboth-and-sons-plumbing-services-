document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !message) {
            alert("Please fill out all fields before submitting.");
            event.preventDefault();
        }
    });

    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");
    const imageLinks = document.querySelector(".image-links");

    hamburgerMenu.addEventListener("click", function() {
        navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
        imageLinks.style.display = imageLinks.style.display === "flex" ? "none" : "flex";
    });
});
