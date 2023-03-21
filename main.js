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
if (window.matchMedia("(max-width: 964px)").matches) {
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        toggleNav();
    }))
}

// Dots background
// const container = document.querySelector('.dots-container');
// const about = document.getElementById("about");
// const dots = [];
// let dotWidth;
// const minWidth = 0.7;

// for (let i = 0; i < 15; i++) {
//   const dot = document.createElement('div');
//   dot.classList.add('dot');
//   dotWidth = Math.floor(Math.random() * 150) + 5;

//   while (dotWidth < minWidth) {
//     dotWidth = Math.floor(Math.random() * 150) + 5;
//   }

//   dot.style.width = `${dotWidth}px`;
//   dot.style.height = `${dotWidth}px`;
//   dot.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
//   dot.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
  
//   // Check for overlaps and re-position the dot if necessary
//   let overlap = true;
//   while (overlap) {
//     overlap = false;
//     for (const otherDot of dots) {
//       if (getDistance(dot, otherDot) < (dot.offsetWidth + otherDot.offsetWidth) / 2) {
//         overlap = true;
//         dot.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
//         dot.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
//         break;
//       }
//     }
//   }
  
//   dots.push(dot);
//   container.appendChild(dot);
// }

// function getDistance(dot1, dot2) {
//   const xDiff = dot1.offsetLeft - dot2.offsetLeft;
//   const yDiff = dot1.offsetTop - dot2.offsetTop;
//   return Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
// }

