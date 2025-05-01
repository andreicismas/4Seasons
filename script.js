const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  toggle.classList.toggle("active"); // Aggiunto per animare l’icona
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

// consenso coockies
window.onload = function() {
  // Verifica se siamo sulla pagina principale (index.html)
  if (window.location.pathname === "/index.html" && !document.cookie.includes("cookie_consent=true")) {
    document.getElementById("cookie-popup").style.display = "block";
  }

  document.getElementById("accept-cookies-popup").addEventListener("click", function() {
    document.cookie = "cookie_consent=true; path=/; max-age=" + 60*60*24*365; // Imposta il cookie
    document.getElementById("cookie-popup").style.display = "none"; // Nasconde il banner
  });
};


