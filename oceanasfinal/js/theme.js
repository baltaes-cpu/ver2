// === Toggle de tema con persistencia ===
const THEME_KEY = 'oceanas_theme';

// Al cargar la página, aplicar el tema guardado o por defecto "light"
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
  } else {
    document.body.setAttribute('data-theme', 'light'); // tema claro por defecto
  }
});

// Función para alternar entre claro y oscuro
function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem(THEME_KEY, newTheme);
}

