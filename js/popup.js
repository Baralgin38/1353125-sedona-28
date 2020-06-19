let searchPopup = document.querySelector(".search-popup");
let searchForm = document.querySelector(".search-form");
let searchButton = document.querySelector(".button-search");
let arrivalInput = document.querySelector(".arrival-input");
let departureInput = document.querySelector(".departure-input");
let adultsInput = document.querySelector("#adults");
let childrenInput = document.querySelector("#children");

searchButton.addEventListener("click", function() {
  if (searchPopup.classList.contains("popup-close")) {
    searchPopup.classList.remove("popup-close");
    searchPopup.classList.add("popup-show");
    arrivalInput.focus();
  } else {
    searchPopup.classList.add("popup-close");
    searchPopup.classList.remove("popup-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if(evt.keyCode === 27) {
    if(searchPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      searchPopup.classList.remove("popup-show");
      searchPopup.classList.add("popup-close");
    }
  }
});


