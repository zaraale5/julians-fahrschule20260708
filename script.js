// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');
let navIsOpen = false;

navToggle && navToggle.addEventListener('click', () => {
  navIsOpen = !navIsOpen;
  navToggle.setAttribute('aria-expanded', navIsOpen);
  mobileMenu.setAttribute('aria-hidden', !navIsOpen);
  mobileMenu.style.display = navIsOpen ? 'flex' : 'none';
  if(navIsOpen) mobileMenu.focus();
});

// Close mobile nav on ESC
window.addEventListener('keydown', function(e) {
  if(navIsOpen && (e.key === 'Escape' || e.key === 'Esc')) {
    navIsOpen = false;
    navToggle.setAttribute('aria-expanded', false);
    mobileMenu.setAttribute('aria-hidden', true);
    mobileMenu.style.display = 'none';
    navToggle.focus();
  }
});

// Smooth scroll for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
  link.addEventListener('click', function(e){
    const target = document.querySelector(link.getAttribute('href'));
    if(target) {
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
      target.setAttribute('tabindex', '-1');
      target.focus();
    }
  });
});

// Keyboard focus visible polyfill
function handleFocus(e) {
  if(e.key === 'Tab') document.body.classList.add('user-is-tabbing');
}
document.addEventListener('keydown', handleFocus);
