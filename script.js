// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Navigation scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(15, 15, 26, 0.98)';
        nav.style.padding = '0.5rem 0';
    } else {
        nav.style.background = 'rgba(15, 15, 26, 0.95)';
        nav.style.padding = '1rem 0';
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    // Add initial animation to hero
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.animationDelay = '0.5s';
});

// Make certification names open Drive links while appearing as plain text
document.querySelectorAll('.cert-name').forEach(el => {
    el.addEventListener('click', () => {
        const url = el.getAttribute('data-link');
        if (url) window.open(url, '_blank', 'noopener');
    });

    // Keyboard accessibility: Enter or Space opens the link
    el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const url = el.getAttribute('data-link');
            if (url) window.open(url, '_blank', 'noopener');
        }
    });
});