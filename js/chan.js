window.onload = function () {
  // 배너 스와이퍼
  const swBanner = new Swiper(".sw-banner", {
    slidesPerView: 4,
    spaceBetween: 10,

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
  // 추천 상품 스와이퍼
  const swRecommend = new Swiper(".sw-recommend", {
    slidesPerView: 5.5,
    spaceBetween: 15,
  });

  // 결제혜택 스와이퍼
  const swPayment = new Swiper(".sw-payment", {
    slidesPerView: 6.3,
    spaceBetween: 10,
  });
};

window.addEventListener("load", function () {
  AOS.init();
  // gotop바로가기 기능
  const gotop = this.document.querySelector(".gotop");
  //   위로 가기 기능
  gotop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  //   waypoint.js적용
  const waypoint_service = new Waypoint({
    element: document.querySelector(".mini"),
    handler: function (direction) {
      console.log(direction);
      if (direction === "down") {
        gotop.classList.add("active");
      } else {
        gotop.classList.remove("active");
      }
    },
    offset: "50%",
  });
  const waypoint_footer = new Waypoint({
    element: document.querySelector(".footer"),
    handler: function (direction) {
      console.log(direction);
      if (direction === "down") {
        gotop.classList.add("active-footer");
      } else {
        gotop.classList.remove("active-footer");
      }
    },
    offset: "95%",
  });
});


