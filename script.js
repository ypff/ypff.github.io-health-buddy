document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', (e) => {
        if (button.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(button.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Fade-in effect for sections on scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));
