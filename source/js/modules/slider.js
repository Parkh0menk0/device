'use strict';

(function () {
  return new window.Swiper('.swiper-container', {
    direction: 'horizontal',
    observeParents: true,
    observer: true,
    slidesPerView: 'auto',
    effect: 'slide',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loopedSlides: 3,
    breakpointsInverse: true,
  });
})();
