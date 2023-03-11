const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");

function viewMyWorkBtn() {
    window.location.href = "work.html";
}

function openResume() {
    window.open("Resume(10/26).pdf", "_blank");
}

function toggleNav() {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

burger.addEventListener("click", () => {
    toggleNav();
})

// TODO: fix the code so it only effects mobile

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    if (window.matchMedia("min-width: 965").matches) {
        return;
    }
    else {
        toggleNav();
    }
}))