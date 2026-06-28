const tabs = document.querySelectorAll(".process-container .p-tab");
const contents = document.querySelectorAll(
  ".process-container .tab-content-container",
);

const removeActiveClass = () => {
  tabs.forEach((t) => {
    t.classList.remove("active");
  });

  contents.forEach((c) => {
    c.classList.remove("active");
  });
};

//Loop through each tab, update active status upon click
tabs.forEach((t, i) => {
  t.addEventListener("click", () => {
    removeActiveClass();
    contents[i].classList.add("active");
    t.classList.add("active");

    swipers[i].update();
  });
});

//Swipers: One set of slides per tab
const swipers = [];

contents.forEach((content) => {
  const swiper = new Swiper(content.querySelector(".card-wrapper"), {
    loop: true,
    spaceBetween: 30,
    //Updating visibility statuses
    observer: true,
    observeParents: true,

    //Each swiper is synced to its own tab
    pagination: {
      el: content.querySelector(".swiper-pagination"),
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: content.querySelector(".swiper-button-next"),
      prevEl: content.querySelector(".swiper-button-prev"),
    },
  });

  swipers.push(swiper);
});
