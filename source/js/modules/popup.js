'use strict';

(function () {
  var writeLink = document.querySelectorAll('.feedback__btn')[1];
  var writePopup = document.querySelector('.write-us');
  var writeClose = writePopup.querySelector('.write-us__close');
  var mapLink = document.querySelector('.feedback__map');
  var mapPopup = document.querySelector('.map');
  var mapClose = mapPopup.querySelector('.map__close');
  var form = writePopup.querySelector('.feedback-form');
  var fieldName = form.querySelector('input[name=name]');
  var fieldEmail = form.querySelector('input[name=email]');
  var fieldTextarea = form.querySelector('[name=textarea]');

  var isStorageSupport = true;
  var storage = {
    name: '',
    email: ''
  };

  try {
    storage.name = localStorage.getItem('name');
    storage.email = localStorage.getItem('email');
  } catch (err) {
    isStorageSupport = false;
  }

  /**
   * Функция задающая фокус полям формы обратной связи.
   * @function
   * @param {Object} storageObj объект хранилища полей LocalStorage;
   */
  function setFocus(storageObj) {
    if (storageObj.name) {
      fieldName.value = storageObj.name;

      if (storageObj.email) {
        fieldEmail.value = storageObj.email;
        fieldTextarea.focus();
      } else {
        fieldEmail.focus();
      }

    } else {
      fieldName.focus();
    }
  }

  /**
   * Функция открытия окна формы обратной связи.
   * @function
   */
  function openPopup() {
    writePopup.style.display = 'block';
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onEscPress);
    setFocus(storage);
  }

  /**
   * Функция открытия карты.
   * @function
   */
  function openMap() {
    mapPopup.style.display = 'block';
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onEscPress);
    setFocus(storage);
  }

  /**
   * Функция закрытия окна формы.
   * @function
   */
  function closeModal() {
    form.reset();
    writePopup.style.display = 'none';
    document.body.style.overflow = 'visible';
    window.removeEventListener('keydown', onEscPress);
  }

  /**
   * Функция закрытия окна карты.
   * @function
   */
  function closeMap() {
    mapPopup.style.display = 'none';
    document.body.style.overflow = 'visible';
    window.removeEventListener('keydown', onEscPress);
  }

  /**
   * Функция для закрытия модального окна по нажатии клавиши Esc.
   * @function
   * @param {Object} evt объект события;
   */
  function onEscPress(evt) {
    if (evt.keyCode === 27) {
      if (writePopup.style.display === 'block') {
        closeModal();
      }
      if (mapPopup.style.display === 'block') {
        closeMap();
      }
    }
  }

  if (writeLink) {
    writeLink.addEventListener('click', function (evt) {
      evt.preventDefault();
      openPopup();
    });
  }

  if (writeClose) {
    writeClose.addEventListener('click', function (evt) {
      evt.preventDefault();
      closeModal();
    });
  }

  if (mapLink) {
    mapLink.addEventListener('click', function (evt) {
      evt.preventDefault();
      openMap();
    });
  }

  if (mapClose) {
    mapClose.addEventListener('click', function (evt) {
      evt.preventDefault();
      closeMap();
    });
  }
})();
