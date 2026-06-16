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

menuToggle.addEventListener('click', () => {

  menu.classList.toggle('active');

  // animação hamburguer
  menuToggle.classList.toggle('active');

});

// =========================
// FECHAR MENU AO CLICAR
// =========================

const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {

  link.addEventListener('click', () => {

    menu.classList.remove('active');
    menuToggle.classList.remove('active');

  });

});

// =========================
// SCROLL SUAVE SEM #
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function(e){

    const targetId = this.getAttribute('href');

    if(targetId.length > 1){

      e.preventDefault();

      const target = document.querySelector(targetId);

      if(target){

        target.scrollIntoView({
          behavior:'smooth'
        });

        history.replaceState(null, null, ' ');

      }

    }

  });

});

alert("JS carregado");

console.log("1");

const nav = document.querySelector('.nav');

console.log("2");

// resto do código FAQ...

console.log("3");

// resto dos cards...

console.log("4");

// bloco whatsapp...

console.log("5");

// MENU MOBILE
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

console.log("6");

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});
