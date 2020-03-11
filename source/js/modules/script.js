'use strict';

(function () {
  return new window.Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
})();
