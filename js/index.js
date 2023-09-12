//menu toggler code
const menuBtn = document.querySelector(".menu-toggle > img");
const menu = document.querySelector(".menu");
const header = document.querySelector(".header");
const headerInverted = document.querySelector(".header.inverted-header");
const invertedHeaderImg =
  headerInverted?.querySelector('img[src="./assets/logo.png"]') ||
  headerInverted?.querySelector('img[src="./assets/logo-inverted.png"]');
const invertedHeaderBars =
  headerInverted?.querySelector('img[src="./assets/bars.svg"]') ||
  headerInverted?.querySelector('img[src="./assets/bars-inverted.svg"]');
const invertedHeaderBtn = headerInverted?.querySelector(".right button");
const overlay = document.querySelector(".overlay");

let menuOpened = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("bg-dark");
    headerInverted?.querySelectorAll("a")?.forEach((el) => {
      el.classList.remove("lg:text-black");
      el.classList.add("lg:text-white");
    });
    if (invertedHeaderImg) invertedHeaderImg.src = "./assets/logo.png";
    if (invertedHeaderBars && !menuOpened)
      invertedHeaderBars.src = "./assets/bars.svg";
    if (invertedHeaderBtn) {
      invertedHeaderBtn.classList.remove(
        "bg-black",
        "text-white",
        "hover:bg-white",
        "hover:text-black",
        "border-black"
      );
      invertedHeaderBtn.classList.add(
        "bg-white",
        "text-black",
        "hover:bg-black",
        "hover:text-white",
        "border-white"
      );
    }
  } else {
    header.classList.remove("bg-dark");
    headerInverted?.querySelectorAll("a")?.forEach((el) => {
      el.classList.remove("lg:text-white");
      el.classList.add("lg:text-black");
    });
    if (invertedHeaderImg) invertedHeaderImg.src = "./assets/logo-inverted.png";
    if (invertedHeaderBars && !menuOpened)
      invertedHeaderBars.src = "./assets/bars-inverted.svg";
    if (invertedHeaderBtn) {
      invertedHeaderBtn.classList.remove(
        "bg-white",
        "text-black",
        "hover:bg-black",
        "hover:text-white",
        "border-white"
      );
      invertedHeaderBtn.classList.add(
        "bg-black",
        "text-white",
        "hover:bg-white",
        "hover:text-black",
        "border-black"
      );
    }
  }
});

menuBtn.addEventListener("click", () => {
  if (menuOpened) {
    menuOpened = false;
    if (window.scrollY === 0 && headerInverted)
      menuBtn.src = "./assets/bars-inverted.svg";
    else menuBtn.src = "./assets/bars.svg";
    overlay.style.display = "none";
    menu.style.right = "-100%";
  } else {
    menuOpened = true;
    menuBtn.src = "./assets/cross.svg";
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
