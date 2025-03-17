document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', (e) => {
        if (button.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(button.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        }
    });
});
