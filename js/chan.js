window.onload = function () {
  // 배너 스와이퍼
  const swBanner = new Swiper(".sw-banner", {
    slidesPerView: 4,
    spaceBetween: 10,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 4,
      },
    },

    navigation: {
      nextEl: ".banner .sw-next",
      prevEl: ".banner .sw-prev",
    },
    pagination: {
      el: ".sw-banner-pg ",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  // 미니배너 스와이퍼
  const swMini = new Swiper(".sw-mini", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".mini .sw-next",
      prevEl: ".mini .sw-prev",
    },
    pagination: {
      el: ".sw-mini-pg ",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
};
