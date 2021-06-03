$(function(){
    // banner slide
    let swiper_banner = new Swiper(".banner", {
        autoplay : {
            delay : 2000,
        },
        loop : true,
        effect: "fade",
      });

      // kakao video slide
      var swiper_video = new Swiper(".brand_video", {
        slidesPerView: 3,
        spaceBetween: 10,
        loop : true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
      });
})// document ready