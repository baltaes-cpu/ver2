/* ---------- Cambio de tema ---------- */
function applyTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  const icon = document.querySelector('.theme-toggle i');
  if (icon) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

function toggleTheme() {
  const current = document.body.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  applyTheme(next);
}

/* ---------- Menú hamburguesa ---------- */
function toggleMenu() {
  const menu = document.getElementById('navMenu');
  const btn = document.querySelector('.menu-toggle');
  if (!menu) return;
  const isActive = menu.classList.toggle('active');
  if (btn) btn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
}

/* ---------- Inicialización al cargar ---------- */
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light'; // SIEMPRE claro por defecto
  applyTheme(savedTheme);
});

/* ---------- Cerrar menú al hacer clic en un enlace ---------- */
document.addEventListener('click', (e) => {
  if (e.target.closest('#navMenu a')) {
    const menu = document.getElementById('navMenu');
    const btn = document.querySelector('.menu-toggle');
    if (menu && menu.classList.contains('active')) {
      menu.classList.remove('active');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    }
  }
});


