var swiper = new Swiper(".swiper-container", {
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: true,
  // },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 1000,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
