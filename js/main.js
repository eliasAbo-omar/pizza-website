/*=============== SHOW MENU ===============*/
let navMenu = document.getElementById("nav-menu");
let navToggle = document.getElementById("nav-toggle");
let navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.add("show");
  });
}

if (navClose) {
  navClose.addEventListener("click", function () {
    navMenu.classList.remove("show");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we Click on each nav__link, we remove the show class
  navMenu.classList.remove("show");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  // Add A Class if the Bottom offset is Greater than 50 of the viewport
  if (this.scrollY >= 50) {
    header.classList.add("shadow-header");
  } else {
    header.classList.remove("shadow-header");
  }
};

window.addEventListener("scroll", shadowHeader);

/*=============== SWIPER POPULAR ===============*/

const swiperPopular = new Swiper(".popular__swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
});

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  // When the user scrolls down 20px from the top of the document, show the button
  if (this.scrollY >= 664) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 58;
    const sectionId = section.getAttribute("id");
    const sectionClass = document.querySelector(
      ".nav__menu a[href*=" + sectionId + "]",
    );
    if (scrollDown >= sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  // reset: true, // animation repeat
});

sr.reveal(`.home__data, .popular__container, .footer`);
sr.reveal(`.home__board`, { delay: 700, distance: `100px`, origin: `right` });
sr.reveal(`.home__pizza`, {
  delay: 1400,
  distance: `100px`,
  origin: "bottom",
  rotate: { z: -90 },
});
sr.reveal(`.home__ingredient`, {
  delay: 2000,
  interval: 100,
});
sr.reveal(`.about__data, .recipe__list, .contact__data`, {
  origin: "right",
});
sr.reveal(`.about__img, .recipe__img, .contact__img`, {
  origin: "left",
});
sr.reveal(`.products__card`, {
  interval: 200,
});
