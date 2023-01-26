// @ts-check

// @ts-ignore
const swup = new Swup();

document.addEventListener("DOMContentLoaded", function () {
    const currentPage = document.URL.split("/").slice(-1)[0].split(".")[0];
    const menuButton = Array.from(document.querySelectorAll(".nav-link"));

    if (menuButton) {
        // add "selected" class to Now link and remove it from Projects link
        menuButton[0].addEventListener("click", function () {
            menuButton[0].setAttribute("class", "nav-link selected");
            menuButton[1].setAttribute("class", "nav-link");
            menuButton[2].setAttribute("class", "nav-link");
        });
        // add "selected" class to Projects link and remove it from Now link
        menuButton[1].addEventListener("click", function () {
            menuButton[0].setAttribute("class", "nav-link");
            menuButton[1].setAttribute("class", "nav-link selected");
            menuButton[2].setAttribute("class", "nav-link");
        });
        // add "selected" class to Projects link and remove it from Now link
        menuButton[2].addEventListener("click", function () {
            menuButton[0].setAttribute("class", "nav-link");
            menuButton[1].setAttribute("class", "nav-link");
            menuButton[2].setAttribute("class", "nav-link selected");
        });
    }

    // ensure that the link for the current page has the "selected" class
    if (currentPage === "index") {
        menuButton[0].setAttribute("class", "nav-link selected");
    } else if (currentPage === "now") {
        menuButton[1].setAttribute("class", "nav-link selected");
    } else if (currentPage === "projects") {
        menuButton[2].setAttribute("class", "nav-link selected");
    }
});
