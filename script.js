const menuButton = document.querySelector("#menu-toggle");
const mainNav = document.querySelector("#main-nav");

menuButton.addEventListener("click", () => {
    mainNav.classList.toggle("open");
});
const themeButton = document.querySelector("#theme-btn");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    if (isDark) {
        themeButton.textContent = "Light mode";
    } else {
        themeButton.textContent = "Dark mode";
    }
});

const contactForm = document.querySelector("#contact-form");
const contactName = document.querySelector("#contact-name");
const contactEmail = document.querySelector("#contact-email");
const contactMessage = document.querySelector("#contact-message");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");

const formSuccess = document.querySelector("#form-success");
const charCount = document.querySelector("#char-count");

contactMessage.addEventListener("input", () => {
    charCount.textContent = contactMessage.value.length + " / 200";
});

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formSuccess.textContent = "";

    const name = contactName.value.trim();
    const email = contactEmail.value.trim();
    const message = contactMessage.value.trim();

    let isValid = true;

    if (name.length < 3) {
        nameError.textContent = "Please enter your full name.";
        isValid = false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        emailError.textContent = "Please enter a valid email.";
        isValid = false;
    }

    if (message.length < 10) {
        messageError.textContent = "Tell us a little more (10+ characters).";
        isValid = false;
    }
        if (isValid) {
        formSuccess.textContent = "Thank you, " + name + "! Your message has been submitted.";
        contactForm.reset();
        charCount.textContent = "0 / 200";
    }
});