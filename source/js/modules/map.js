'use strict';

(function () {
  var mapLink = document.querySelector('.feedback__map');
  var mapPopup = document.querySelector('.map');
  var mapClose = mapPopup.querySelector('.map__close');

  mapLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });

  mapClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.style.display = 'none';
    document.body.style.overflow = 'visible';
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.style.display === 'block' && document.body.style.overflow === 'hidden') {
        evt.preventDefault();
        mapPopup.style.display = 'none';
        document.body.style.overflow = 'visible';
      }
    }
  });
})();
