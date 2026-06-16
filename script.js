// =========================
// NAV SCROLL
// =========================

const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {

  if(window.scrollY > 50){
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

});

// =========================
// FAQ
// =========================

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {

  const button = item.querySelector('.faq-question');

  button.addEventListener('click', () => {

    const isActive = item.classList.contains('active');

    faqItems.forEach(faq => {
      faq.classList.remove('active');
    });

    if(!isActive){
      item.classList.add('active');
    }

  });

});

// =========================
// CARDS MOBILE (TAP)
// =========================

const cards = document.querySelectorAll('.info-card');

cards.forEach(card => {

  card.addEventListener('click', () => {

    // só funciona no mobile
    if(window.innerWidth <= 900){

      card.classList.toggle('active');

    }

  });

});

// =========================
// WHATSAPP COLORS
// =========================

const footer = document.querySelector('footer');
const heroContainer = document.querySelector('.hero-container');

const whatsapp = document.querySelector('.whatsapp-float');

window.addEventListener('scroll', () => {

  const screenHeight = window.innerHeight;

  /* =========================
     HERO IMAGE
  ========================= */

  const heroHeight = heroContainer.offsetHeight;

  if(window.scrollY < heroHeight - 900){

    whatsapp.classList.add('hero-visible');

  } else {

    whatsapp.classList.remove('hero-visible');

  }

  /* =========================
     FOOTER
  ========================= */

  const footerTop = footer.getBoundingClientRect().top;

  if(footerTop < screenHeight - 100){

    whatsapp.classList.add('footer-visible');

  } else {

    whatsapp.classList.remove('footer-visible');

  }

});

// =========================
// MENU MOBILE
// =========================

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

console.log("MENU:", menu);
console.log("BOTAO:", menuToggle);

menuToggle.addEventListener('click', () => {

  console.log("CLICOU");

  menu.classList.toggle('active');

  menuToggle.classList.toggle('active');

});
