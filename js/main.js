// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuLinks = mobileMenu.querySelectorAll('a');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('nav a, #mobile-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash) {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Back to top button
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopBtn.classList.remove('hidden');
  } else {
    backToTopBtn.classList.add('hidden');
  }
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact form validation
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !subject || !message) {
      formMessage.textContent = 'Please fill in all fields.';
      formMessage.className = 'text-red-600';
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      formMessage.textContent = 'Please enter a valid email address.';
      formMessage.className = 'text-red-600';
      return;
    }
    formMessage.textContent = 'Thank you for contacting us! We will get back to you soon.';
    formMessage.className = 'text-green-600';
    contactForm.reset();
});
}

// Newsletter signup validation
const newsletterForm = document.getElementById('newsletter-form');
const newsletterMsg = document.getElementById('newsletter-message');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value.trim();
    if (!email) {
      newsletterMsg.textContent = 'Please enter your email address.';
      newsletterMsg.className = 'text-red-600';
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      newsletterMsg.textContent = 'Please enter a valid email address.';
      newsletterMsg.className = 'text-red-600';
      return;
    }
    newsletterMsg.textContent = 'Thank you for subscribing!';
    newsletterMsg.className = 'text-green-600';
    newsletterForm.reset();
  });
}

// Section reveal animations (fadeInUp)
const revealEls = document.querySelectorAll('section, .team-card, .testimonial-card');
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.92;
  revealEls.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('animate-fadeInUp');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);
