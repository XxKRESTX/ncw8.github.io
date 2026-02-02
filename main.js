// Experience Card Hover Effect
const experienceCards = document.querySelectorAll('.experience-card');

experienceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('active');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('active');
    });
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');
const menuIcon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('open');
    
    // Toggle icon between bars and X
    if (navbar.classList.contains('open')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
});

// Close menu when clicking a nav link (for mobile)
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 992) {
            navbar.classList.remove('open');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });
});