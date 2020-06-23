// index // 

let searchForm = document.querySelector(".search-form");
let searchButton = document.querySelector(".button-search");
let arrivalInput = document.querySelector(".arrival-input");
let departureInput = document.querySelector(".departure-input");
let adultsInput = document.querySelector("#adults");
let childrenInput = document.querySelector("#children");

searchForm.classList.add("popup-close");

searchButton.addEventListener("click", function() {
  if (searchForm.classList.contains("popup-close")) {
    searchForm.classList.remove("popup-close");
    searchForm.classList.add("popup-show");
    arrivalInput.focus();
  } else {
    searchForm.classList.remove("popup-show");
    searchForm.classList.add("popup-close");
  }
});


window.addEventListener("keydown", function (evt) {
  if(evt.keyCode === 27) {
    if(searchForm.classList.contains("popup-show")) {
      evt.preventDefault();
      searchForm.classList.remove("popup-show");
      searchForm.classList.add("popup-close");
    }
  }
});

// inner //
