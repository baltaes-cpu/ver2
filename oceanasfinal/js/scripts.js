/* ---------- Cambio de tema ---------- */
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

/* ---------- Menú hamburguesa ---------- */
function toggleMenu() {
  const menu = document.getElementById('navMenu');
  const btn = document.querySelector('.menu-toggle');
  if (menu) {
    menu.classList.toggle('active');
    if (btn) {
      btn.setAttribute('aria-expanded', menu.classList.contains('active') ? 'true' : 'false');
    }
  }
}

/* ---------- Inicialización al cargar ---------- */
window.addEventListener('load', () => {
  // Tema guardado o preferencia del sistema
  const saved = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').dark ? 'light' : 'dark');
  document.body.setAttribute('data-theme', saved);

  const icon = document.querySelector('.theme-toggle i');
  if (icon) {
    icon.className = saved === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
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



