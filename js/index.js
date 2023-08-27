//menu toggler code
const menuBtn = document.querySelector(".menu-toggle > img");
const menu = document.querySelector(".menu");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");

let menuOpened = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("bg-dark");
  } else {
    header.classList.remove("bg-dark");
  }
});

menuBtn.addEventListener("click", () => {
  if (menuOpened) {
    menuOpened = false;
    menuBtn.src = "/assets/bars.svg";
    overlay.style.display = "none";
    menu.style.right = "-100%";
  } else {
    menuOpened = true;
    menuBtn.src = "/assets/cross.svg";
    overlay.style.display = "block";
    menu.style.right = "0px";
  }
});

//review slider ---------
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 1,
    width: "100%",
    drag: true,
    arrows: false,
    pagination: true,
    perMove: 1,
    autoplay: true,
  });
  splide.mount();
});
