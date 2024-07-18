const darkModeToggle = document.getElementById('darkModeToggle');
const modeIcon = document.getElementById('modeIcon');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Change l'icône en fonction du mode actuel
    if (document.body.classList.contains('dark-mode')) {
        modeIcon.src = 'assets/img/icons/sun-moon.svg'; // Changer vers l'icône de mode sombre
        modeIcon.alt = 'Dark Mode';
    } else {
        modeIcon.src = 'assets/img/icons/sun-moon.svg'; // Changer vers l'icône de mode clair
        modeIcon.alt = 'Light Mode';
    }
});
