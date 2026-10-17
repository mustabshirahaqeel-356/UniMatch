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