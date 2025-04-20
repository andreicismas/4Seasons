document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});

const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});



setTimeout(function () {
  document.getElementById("whatsapp-btn").style.display = "block";
}, 3000);

document.getElementById("whatsapp-btn").addEventListener("click", function () {
  window.location.href = "https://wa.me/+393463244526";
});