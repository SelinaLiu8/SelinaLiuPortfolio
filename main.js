const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
const menuItem = document.querySelector(".nav-item");

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

menuItem.addEventListener("click", () => {
    toggleNav();
})