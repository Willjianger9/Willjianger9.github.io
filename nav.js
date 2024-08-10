// nav.js

document.addEventListener('DOMContentLoaded', function () {
    // JavaScript for Dynamic Island hover effects
    const nav = document.getElementById('dynamic-island');
    const navLinks = document.querySelectorAll('.nav-links a');

    nav.addEventListener('mouseenter', () => {
        nav.style.transform = 'scale(1.05)';
        nav.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.6)';
    });

    nav.addEventListener('mouseleave', () => {
        nav.style.transform = 'scale(1)';
        nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    });

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#000';
            link.style.backgroundColor = '#fff';
            link.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.4)';
            link.style.transform = 'scale(1.05)';
        });

        link.addEventListener('mouseleave', () => {
            link.style.color = '#fff';
            link.style.backgroundColor = '#333';
            link.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.3)';
            link.style.transform = 'scale(1)';
        });
    });
});
