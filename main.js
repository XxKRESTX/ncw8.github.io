let cardHover = document.querySelectorAll('.experience-card');

cardHover.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseout', () => {
        card.style.boxShadow = 'none';
    }); 
});