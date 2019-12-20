var modalOpen = document.querySelector(".tariffs__link");
var modal = document.querySelector(".tariffs__modal");
var modalClose = modal.querySelector(".tariffs__business-close");

modalOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("tariffs__modal--shown");
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("tariffs__modal--shown");
});
