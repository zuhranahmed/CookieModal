const openModal = document.querySelector(".open");
const closeModal = document.querySelector(".close");
const closeCookie = document.querySelector(".close-cookie");
const modal = document.querySelector(".modal");
const claimCookie = document.querySelector(".claim");
const cookie = document.querySelector(".cookie");

openModal.addEventListener("click", function () {
  modal.classList.toggle("active");
  openModal.classList.toggle("active");
});

closeModal.addEventListener("click", function () {
  modal.classList.toggle("active");
  openModal.classList.remove("active");
});

claimCookie.addEventListener("click", function () {
  cookie.classList.toggle("active");
  modal.classList.toggle("active");
});

closeCookie.addEventListener("click", function () {
  cookie.classList.toggle("active");
  openModal.classList.toggle("active");
});
