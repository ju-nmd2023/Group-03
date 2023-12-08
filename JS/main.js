const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

const promoElement = document.getElementById("promo");

const inputElement = document.getElementById("promoinput");

const bottonElement = document.getElementById("apply-button");

bottonElement.addEventListener("click", function (event) {
  promoElement.innerText = "Super!";
});
