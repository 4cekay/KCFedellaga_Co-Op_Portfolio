let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
};

new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: 30,

  // Pagination bullets
  pagination: {
    el: document.querySelector(".swiper-pagination"),
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: document.querySelector(".swiper-button-next"),
    prevEl: document.querySelector(".swiper-button-prev"),
  },
});
