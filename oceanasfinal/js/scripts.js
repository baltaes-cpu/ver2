
/* ---------- Menú hamburguesa ---------- */
function toggleMenu() {
  const menu = document.getElementById('navMenu');
  const btn = document.querySelector('.menu-toggle');
  if (!menu) return;
  const isActive = menu.classList.toggle('active');
  if (btn) btn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
}

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



