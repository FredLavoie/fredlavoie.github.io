// @ts-check

// @ts-ignore
const swup = new Swup();

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelectorAll(".nav-link");
    const homeButton = document.querySelector("#home-link");

    if (!!menuButton) {
        // toggle show/hide menu on mobile
        menuButton[0].addEventListener("click", function () {
            menuButton[0].setAttribute("class", "nav-link selected");
            menuButton[1].setAttribute("class", "nav-link");
        });

        menuButton[1].addEventListener("click", function () {
            menuButton[1].setAttribute("class", "nav-link selected");
            menuButton[0].setAttribute("class", "nav-link");
        });
    }

    if (!!homeButton) {
        homeButton.addEventListener("click", function () {
            menuButton[0].setAttribute("class", "nav-link");
            menuButton[1].setAttribute("class", "nav-link");
        });
    }
});
