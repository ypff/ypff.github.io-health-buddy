document.querySelector('.cta-button').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#subscribe').scrollIntoView({ behavior: 'smooth' });
});
