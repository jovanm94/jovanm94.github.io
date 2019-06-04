let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");
let navbar = document.getElementsByClassName("navbar")[0];

navBarToggle.addEventListener("click", () =>
  mainNav.classList.toggle("active")
);

// Get elements
let callToAction = document.getElementsByClassName("btn-request-demo");
let modal = document.querySelector(".modal");
let backdrop = document.querySelector(".backdrop");
let cancel = document.querySelector(".btn-cancel");

let closeModal = () => {
  modal.classList.remove("open");
  backdrop.classList.remove("open");
};

let openModal = () => {
  modal.classList.add("open");
  backdrop.classList.add("open");
};

let callToActionArr = [...callToAction];

callToActionArr.map(item => {
  item.addEventListener("click", openModal);
});

cancel.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true
});

console.log(navbar);
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  if (scrolled > 20) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});
