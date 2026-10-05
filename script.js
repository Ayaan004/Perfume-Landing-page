// Toggle Mobile Navigation Menu
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
  });
}

// Close menu when clicking on navigation link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

// Active Link Highlight on Scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute('id');
    const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    }
  });
});
// Search Modal Toggle
const searchIcon = document.querySelector('.ri-search-line').parentElement;
const searchModal = document.getElementById('search-modal');
const closeSearch = document.getElementById('close-search');

if (searchIcon && searchModal) {
  searchIcon.addEventListener('click', (e) => {
    e.preventDefault();
    searchModal.classList.add('active');
  });
}

if (closeSearch) {
  closeSearch.addEventListener('click', () => {
    searchModal.classList.remove('active');
  });
}

// Simple Interactive Add to Cart counter
const cartBadge = document.querySelector('.cart-badge');
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
let cartCount = 2;

addToCartBtns.forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    cartBadge.textContent = cartCount;
    button.innerHTML = '<i class="ri-check-line"></i> Added';
    setTimeout(() => {
      button.innerHTML = '<i class="ri-shopping-bag-line"></i> Add to Cart';
    }, 2000);
  });
});