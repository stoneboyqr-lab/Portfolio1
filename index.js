const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active'); // toggle animation
});


const text = "Full Stack Developer | Clean, Modern Websites";
const heroSub = document.querySelector('.hero-sub');
let i = 0;

function typeEffect() {
  if (i < text.length) {
    heroSub.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

