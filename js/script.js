var link = document.querySelector(".contact__link");
var popup = document.querySelector(".feedback-modal");
var close = popup.querySelector(".btn-modal--close");
var formName = popup.querySelector("[name=form-name]");
var mapLink = document.querySelector(".map");
var mapPopup = document.querySelector(".map-modal");
var closeMap = mapPopup.querySelector(".btn-modal--close");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("feedback-modal__show");
  formName.focus();
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("map-modal--show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("feedback-modal__show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("map-modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("feedback-modal__show")) {
      popup.classList.remove("feedback-modal__show");
    }
    if (mapPopup.classList.contains("map-modal--show")) {
      mapPopup.classList.remove("map-modal--show");
    }
  }
});