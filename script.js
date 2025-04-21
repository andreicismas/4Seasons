document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});





setTimeout(function () {
  document.getElementById("whatsapp-btn").style.display = "block";
}, 3000);

document.getElementById("whatsapp-btn").addEventListener("click", function () {
  window.location.href = "https://wa.me/+393463244526";
});




// inizio carousel
const slides = document.querySelectorAll(".carousel-slide");
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

showSlide(current);

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 3000);

// fine carousel