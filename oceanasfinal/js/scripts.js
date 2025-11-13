function toggleTheme() {
    const body = document.body;
    const newTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    const icon = document.querySelector('.theme-toggle i');
    if (icon) {
        icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

function toggleMenu() {
    const menu = document.getElementById('navMenu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Al cargar la página, aplicar el tema guardado o el preferido del sistema
window.addEventListener('load', () => {
    const saved = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.body.setAttribute('data-theme', saved);

    const icon = document.querySelector('.theme-toggle i');
    if (icon) {
        icon.className = saved === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
});

    document.body.setAttribute('data-theme', saved);

    const icon = document.querySelector('.theme-toggle i');
    if (icon) {
        icon.className = saved === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
});

