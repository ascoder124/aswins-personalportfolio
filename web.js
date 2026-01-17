// Toggle Menu Icon
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  });
}

// Scroll Section Active Navigation
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const offset = section.offsetTop - 100;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollY >= offset && scrollY < offset + height) {
      // Remove active class from all links
      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      // Add active class to the matching link
      const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }

      section.classList.add('show-animate');
    } else {
      section.classList.remove('show-animate');
    }
  });

  // Sticky Header
  const header = document.querySelector('header');
  if (header) {
    header.classList.toggle('sticky', scrollY > 100);
  }

  // Close mobile menu on scroll
  if (menuIcon && navbar) {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  }
});

// Close mobile menu when clicking on nav links
// Close mobile menu when clicking on nav links
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (menuIcon && navbar) {
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
    }
  });
});

// Contact Form Submission Logic
let submitted = false;

function closeModal() {
  const modal = document.getElementById('confirmation-modal');
  if (modal) {
    modal.style.display = 'none';
  }
  // Optional: Reset form after closing
  const form = document.querySelector('form[aria-label="Contact form"]');
  if (form) {
    form.reset();
  }
  submitted = false; // Reset submitted state
}

// Attach event listener to close button
document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.querySelector('.close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
});

// Close modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById('confirmation-modal');
  if (event.target == modal) {
    closeModal();
  }
}
