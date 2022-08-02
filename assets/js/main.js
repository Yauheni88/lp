const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 40,
    slidesPerView: 5,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 3,
        spaceBetween: 12
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 5,
        spaceBetween: 40
      }
    }

  });