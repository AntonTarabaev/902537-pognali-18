var navigation = document.querySelector(".main-nav");
var navigationBtn = navigation.querySelector(".main-nav__toggle");
var logos = navigation.querySelectorAll(".logo__image");

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

var scrollFunction = function () {
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

window.onscroll = function() {scrollFunction()};

var modal = document.querySelector(".tariffs__modal");
if (modal) {
  var modalOpen = document.querySelector(".tariffs__link");
  var modalClose = modal.querySelector(".tariffs__business-close");

  modalOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("tariffs__modal--shown");
  });

  modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("tariffs__modal--shown");
  });
}

var map = document.querySelector(".map");
if (map) {
  var myMap;
  var markerSize = [41, 41];

  if (document.body.clientWidth > 767) {
    markerSize = [54, 54];
  }

  ymaps.ready(init);

  function init () {
    myMap = new ymaps.Map(map, {
        center: [59.936220, 30.321155],
        zoom: 16,
        controls: []
    }, {
        searchControlProvider: "yandex#search"
    });

    myPlacemark = new ymaps.Placemark([59.936220, 30.321155], {
          hintContent: "Сервис по поиску попутчиков «Погнали», ул. Большая Конюшенная, 19/8"
        }, {
            iconLayout: "default#image",
            iconImageHref: "img/map-marker.svg",
            iconImageSize: markerSize,
            iconImageOffset: [-20, -30]
        });

    myMap.geoObjects
        .add(myPlacemark)
  }
}

var filter = document.querySelector(".filter");
if (filter) {
  var filterShowBtn = filter.querySelector(".filter__show-btn");
  var filterHideBtn = filter.querySelector(".country-filter__hide-btn");
  var countryBtns = filter.querySelectorAll(".filter__link");
  var countryLinks = filter.querySelectorAll(".country-filter__link");
  var alphabethBtns = filter.querySelectorAll(".country-filter__alphabeth-btn");
  var countryLists = filter.querySelectorAll(".country-filter__list-by-letter");

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
    if (!(countryLinks[i].href.indexOf("europe") > -1)) {
      countryLinks[i].classList.add("country-filter__link--hidden");
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
          countryLinks[k].classList.remove("country-filter__link--hidden");
        } else {
          countryLinks[k].classList.add("country-filter__link--hidden");
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

  var companionsForm = document.querySelector(".companions-form");
  var formBtns = companionsForm.querySelectorAll(".companions-form__btn");
  var formFields = companionsForm.querySelectorAll(".companions-form__field");

  var formBtnsClickHandler = function (formBtn, formField) {
    formBtn.addEventListener("click", function (evt) {
      evt.preventDefault();
      formBtn.classList.toggle("companions-form__btn--closed");
      formField.classList.toggle("companions-form__field--collapsed");
    });
  }

  for (var i=0; i<formBtns.length; i++) {
    formBtnsClickHandler(formBtns[i], formFields[i]);
  }

  var likeBtns = document.querySelectorAll(".companion__like-btn")

  for (var i=0; i<likeBtns.length; i++) {
    likeBtns[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      this.classList.toggle("companion__like-btn--liked");
    });
  }
}

var addPlan = document.querySelector(".add-plan");
if (addPlan) {
  var stepsList = addPlan.querySelector(".steps__list");
  var steps = stepsList.querySelectorAll(".steps__item");
  var stepsNextBtns = stepsList.querySelectorAll(".steps__next-btn");
  var stepsPrevBtns = stepsList.querySelectorAll(".steps__prev-btn");
  var countrySelect = stepsList.querySelector(".routes__item--country-select");
  var openCountrySelect = countrySelect.querySelector(".routes__select");
  var adultsN = stepsList.querySelector("[name=adults]");
  var daysN = stepsList.querySelector("[name=days]");
  var plusBtns = stepsList.querySelectorAll(".number-controls__btn--more");
  var minusBtns = stepsList.querySelectorAll(".number-controls__btn--less");

  stepsList.classList.remove("steps__list--no-js");
  for (var i=1; i<steps.length; i++) {
    steps[i].classList.add("visually-hidden");
  }

  var changeStep = function (step, nextStep, stepNextBtn, stepPrevBtn) {
    stepNextBtn.addEventListener("click", function (evt) {
      evt.preventDefault();
      step.classList.add("visually-hidden");
      nextStep.classList.remove("visually-hidden");
      window.scroll({
        left: 0,
        top: addPlan.offsetTop - 25,
        behavior: "smooth"
      });
    });

    stepPrevBtn.addEventListener("click", function (evt) {
      evt.preventDefault();
      nextStep.classList.add("visually-hidden");
      step.classList.remove("visually-hidden");
      window.scroll({
        left: 0,
        top: addPlan.offsetTop - 25,
        behavior: "smooth"
      });
    });
  }

  for (var i=0; i<stepsNextBtns.length; i++) {
    changeStep (steps[i], steps[i+1], stepsNextBtns[i], stepsPrevBtns[i]);
  }

  openCountrySelect.addEventListener("click", function(evt) {
    evt.preventDefault();
    countrySelect.classList.toggle("routes__item--active");
  });

  var adultsValue = parseFloat(adultsN.value, 10);
  var daysValue = parseFloat(daysN.value, 10);

  minusBtns[0].addEventListener ("click", function(evt) {
    evt.preventDefault();
    if (adultsValue > 1) {
      adultsValue--;
      adultsN.value = adultsValue;
    }
  });

  plusBtns[0].addEventListener ("click", function(evt) {
    evt.preventDefault();
    if (adultsValue < 15) {
      adultsValue++;
      adultsN.value = adultsValue;
    }
  });

  minusBtns[1].addEventListener ("click", function(evt) {
    evt.preventDefault();
    if (daysValue > 1) {
      daysValue--;
      daysN.value = daysValue;
    }
  });

  plusBtns[1].addEventListener ("click", function(evt) {
    evt.preventDefault();
    if (daysValue < 30) {
      daysValue++;
      daysN.value = daysValue;
    }
  });

  var alphabethBtns = document.querySelectorAll(".country-filter__alphabeth-btn");
  var countryLists = document.querySelectorAll(".country-filter__list-by-letter");

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
}
