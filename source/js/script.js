var navigation = document.querySelector(".main-nav");
var navigationBtn = navigation.querySelector(".main-nav__toggle");
var logos = navigation.querySelectorAll(".logo__image");

var filter = document.querySelector(".filter");
var filterShowBtn = filter.querySelector(".filter__show-btn");
var filterHideBtn = filter.querySelector(".country-filter__hide-btn");
var countryBtns = filter.querySelectorAll(".filter__link");
var countryLinks = filter.querySelectorAll(".country-filter__link");
var alphabethBtns = filter.querySelectorAll(".country-filter__alphabeth-btn");
var countryLists = filter.querySelectorAll(".country-filter__list-by-letter");

navigation.classList.remove("main-nav--no-js");
navigation.classList.remove("main-nav--menu-opened");
logos[1].classList.remove("logo__image--shown");
logos[0].classList.add("logo__image--shown");

navigationBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  navigation.classList.toggle("main-nav--menu-opened");
  if (navigation.classList.contains("main-nav--menu-opened")) {
    logos[0].classList.remove("logo__image--shown");
    logos[1].classList.add("logo__image--shown");
  } else {
    logos[1].classList.remove("logo__image--shown");
    logos[0].classList.add("logo__image--shown");
  }
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    navigation.classList.add("main-nav--scroll-menu");
    logos[0].classList.add("logo__image--hidden");
    logos[1].classList.add("logo__image--scroll-menu");
  } else {
    navigation.classList.remove("main-nav--scroll-menu");
    logos[0].classList.remove("logo__image--hidden");
    logos[1].classList.remove("logo__image--scroll-menu");
  }
}

filter.classList.remove("filter--no-js");
filter.classList.remove("filter--opened");
filterShowBtn.classList.remove("filter__show-btn--opened");

filterShowBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  filterShowBtn.classList.toggle("filter__show-btn--opened");
  filter.classList.toggle("filter--opened");
});

filterHideBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  filterShowBtn.classList.remove("filter__show-btn--opened");
  filter.classList.remove("filter--opened");
});

for (var i=0; i<countryLinks.length; i++) {
  if (countryLinks[i].href.indexOf("europe") > -1) {
    countryLinks[i].style.display = "inline";
  } else {
    countryLinks[i].style.display = "none";
  }
}

for (var i=0; i<countryBtns.length; i++) {
  countryBtns[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    for (var j=0; j<countryBtns.length; j++) {
      countryBtns[j].classList.remove("filter__link--current");
    }
    this.classList.add("filter__link--current");

    var country = this.getAttribute("data-filter");
    for (var k=0; k<countryLinks.length; k++) {
      if (countryLinks[k].href.indexOf(country) > -1) {
        countryLinks[k].style.display = "inline";
      } else {
        countryLinks[k].style.display = "none";
      }
    }
  });
}

var alphabethBtnsClickHandler = function (alphabethBtn, countryList) {
  alphabethBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    for (var j=0; j<countryLists.length; j++) {
      alphabethBtns[j].classList.remove("country-filter__alphabeth-btn--active");
      countryLists[j].classList.remove("country-filter__list-by-letter--shown");
    }
    alphabethBtn.classList.add("country-filter__alphabeth-btn--active");
    countryList.classList.add("country-filter__list-by-letter--shown");
  });
}

for (var i=0; i<alphabethBtns.length; i++) {
  alphabethBtnsClickHandler(alphabethBtns[i], countryLists[i]);
}
