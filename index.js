const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active'); // toggle animation
});


const text = "Web Developer Building Full-Stack Applications";
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

