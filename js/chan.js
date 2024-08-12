window.onload = function () {
  // 스크롤 시 헤더 고정
  $(function () {
    var head = $(".header-down-tab").offset().top;

    $(window).scroll(function () {
      var window = $(this).scrollTop();

      if (head <= window) {
        $(".header-down-tab").addClass("fixed");
      } else {
        $(".header-down-tab").removeClass("fixed");
      }
    });
  });
  // 배너 스와이퍼
  const swBanner = new Swiper(".sw-banner", {
    breakpoints: {
      881: {
        slidesPerView: 4,
        spaceBetween: 10,
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
  // 배너 스와이퍼 (반응형)
  const swBanner2 = new Swiper(".sw-banner2", {
    breakpoints: {
      880: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: ".banner2 .sw-next",
      prevEl: ".banner2 .sw-prev",
    },
    pagination: {
      el: ".sw-banner2-pg ",
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

  // 결제혜택 스와이퍼
  const swPayment = new Swiper(".sw-payment", {
    // slidesPerView: 5.4,
    // spaceBetween: 10,
    // 결제혜택 반응형

    slidesPerView: 6,
    spaceBetween: 10,
  });

  // 추천 상품 스와이퍼
const swRecommend = new Swiper(".sw-recommend", {
  slidesPerView: 5.6,
  spaceBetween: 15,
  on: {
    slideChange: UpdateBtn, // 슬라이드가 변경될 때 버튼 상태 업데이트
  },
});
document.querySelector(".recommend .sw-next").addEventListener("click", function () {
  swRecommend.slideTo(swRecommend.slides.length - 1);
});
document.querySelector(".recommend .sw-prev").addEventListener("click",function(){
  swRecommend.slideTo(0)
})


const recomPrev = document.querySelector(".recommend .sw-prev")
const recomNext = document.querySelector(".recommend .sw-next")
function UpdateBtn(){
  if(swRecommend.activeIndex === 0){
    recomPrev.classList.add("hidden");
  }else{
    recomPrev.classList.remove("hidden")
  }
  if(swRecommend.isEnd){
    recomNext.classList.add("hidden")
  } else {
    recomNext.classList.remove("hidden")
  }
}
UpdateBtn()
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
  // 사자고 탭메뉴 버튼 효과
  // 탭 버튼과 탭 내용 부분들을 querySelectorAll을 사용해 변수에 담는다.
  const tabItem = document.querySelectorAll(".tab__item");
  const tabContent = document.querySelectorAll(".tab__content");

  // 탭 버튼들을 forEach 문을 통해 한번씩 순회한다.
  // 이때 index도 같이 가져온다.
  tabItem.forEach((item, index) => {
    // 탭 버튼에 클릭 이벤트를 준다.
    item.addEventListener("click", (e) => {
      // 탭 버튼들을 forEach 문을 통해 한번씩 순회한다.
      tabItem.forEach((item) => {
        // 탭 버튼들의 active 클래스를 제거한다.
        item.classList.remove("active");
      });
      // 클릭한 index의 탭 버튼에 active 클래스를 추가한다.
      tabItem[index].classList.add("active");

      // 탭 버튼의 id값을 string으로 가져온다.
      const tabItemId = String(item.id);
      // 탭 내용 부분들을 forEach 문을 통해 한번씩 순회한다.
      tabContent.forEach((item, index) => {
        // 탭 내용 부분들 전부 active 클래스를 제거한다.
        item.classList.remove("active");

        // 탭 내용의 id값을 string으로 가져온다.
        const tabContentId = String(item.id);
        // 만약 탭 버튼의 id 값과 탭 내용의 id값이 같다면,
        // 해당 탭 내용에 active 클래스를 추가한다.
        if (tabContentId === tabItemId) {
          tabContent[index].classList.add("active");
        }
      });
    });
  });

  // 이벤트 탭메뉴 버튼 효과
  // 탭 버튼과 탭 내용 부분들을 querySelectorAll을 사용해 변수에 담는다.
  const eventItem = document.querySelectorAll(".event__item");
  const eventContent = document.querySelectorAll(".event__content");

  // 탭 버튼들을 forEach 문을 통해 한번씩 순회한다.
  // 이때 index도 같이 가져온다.
  eventItem.forEach((item, index) => {
    // 탭 버튼에 클릭 이벤트를 준다.
    item.addEventListener("click", (e) => {
      // 탭 버튼들을 forEach 문을 통해 한번씩 순회한다.
      eventItem.forEach((item) => {
        // 탭 버튼들의 active 클래스를 제거한다.
        item.classList.remove("active");
      });
      // 클릭한 index의 탭 버튼에 active 클래스를 추가한다.
      eventItem[index].classList.add("active");

      // 탭 버튼의 id값을 string으로 가져온다.
      const eventItemId = String(item.id);
      // 탭 내용 부분들을 forEach 문을 통해 한번씩 순회한다.
      eventContent.forEach((item, index) => {
        // 탭 내용 부분들 전부 active 클래스를 제거한다.
        item.classList.remove("active");

        // 탭 내용의 id값을 string으로 가져온다.
        const eventContentId = String(item.id);
        // 만약 탭 버튼의 id 값과 탭 내용의 id값이 같다면,
        // 해당 탭 내용에 active 클래스를 추가한다.
        if (eventContentId === eventItemId) {
          eventContent[index].classList.add("active");
        }
      });
    });
    // 큐레이션 탭메뉴 버튼 효과
    // 탭 버튼과 탭 내용 부분들을 querySelectorAll을 사용해 변수에 담는다.
    const curItem = document.querySelectorAll(".cur__item");
    const curContent = document.querySelectorAll(".cur__content");

    // 탭 버튼들을 forEach 문을 통해 한번씩 순회한다.
    // 이때 index도 같이 가져온다.
    curItem.forEach((item, index) => {
      // 탭 버튼에 클릭 이벤트를 준다.
      item.addEventListener("click", (e) => {
        // 탭 버튼들을 forEach 문을 통해 한번씩 순회한다.
        curItem.forEach((item) => {
          // 탭 버튼들의 active 클래스를 제거한다.
          item.classList.remove("active");
        });
        // 클릭한 index의 탭 버튼에 active 클래스를 추가한다.
        curItem[index].classList.add("active");

        // 탭 버튼의 id값을 string으로 가져온다.
        const curItemId = String(item.id);
        // 탭 내용 부분들을 forEach 문을 통해 한번씩 순회한다.
        curContent.forEach((item, index) => {
          // 탭 내용 부분들 전부 active 클래스를 제거한다.
          item.classList.remove("active");

          // 탭 내용의 id값을 string으로 가져온다.
          const curContentId = String(item.id);
          // 만약 탭 버튼의 id 값과 탭 내용의 id값이 같다면,
          // 해당 탭 내용에 active 클래스를 추가한다.
          if (curContentId === curItemId) {
            curContent[index].classList.add("active");
          }
        });
      });
    });
  });
});
