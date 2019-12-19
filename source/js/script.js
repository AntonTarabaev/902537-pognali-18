let navigation = document.querySelector(".main-nav");
let navigationBtn = navigation.querySelector(".main-nav__toggle");
let logos = navigation.querySelectorAll(".logo__image");

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
