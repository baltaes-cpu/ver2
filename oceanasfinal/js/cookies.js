// === GESTIÓN DE COOKIES (Náutica OCEANAS - estilo propio) ===
const COOKIE_NAME = 'oceanas_cookies';

// Mostrar banner si no hay consentimiento previo
window.addEventListener('load', () => {
    const consent = localStorage.getItem(COOKIE_NAME);
    if (!consent) {
        document.getElementById('cookie-banner').style.display = 'block';
    }
});

// Aceptar todas (en tu caso solo necesarias)
function acceptCookies() {
    localStorage.setItem(COOKIE_NAME, JSON.stringify({ necessary: true }));
    hideBanner();
}

// Rechazar (solo necesarias)
function rejectCookies() {
    localStorage.setItem(COOKIE_NAME, JSON.stringify({ necessary: true }));
    hideBanner();
}

// Mostrar configuración
function showCookieSettings() {
    document.getElementById('cookie-modal').style.display = 'flex';
}

// Cerrar configuración
function closeCookieModal() {
    document.getElementById('cookie-modal').style.display = 'none';
}

// Guardar preferencias (en tu caso solo necesarias)
function saveCookieSettings() {
    acceptCookies();
    closeCookieModal();
}

// Mostrar política
function showCookiePolicy() {
    document.getElementById('cookie-policy-modal').style.display = 'flex';
}

// Cerrar política
function closeCookiePolicy() {
    document.getElementById('cookie-policy-modal').style.display = 'none';
}

// Ocultar banner
function hideBanner() {
    document.getElementById('cookie-banner').style.display = 'none';
}

// Cerrar modales al hacer clic fuera
window.onclick = function(e) {
    const modal1 = document.getElementById('cookie-modal');
    const modal2 = document.getElementById('cookie-policy-modal');
    if (e.target === modal1) closeCookieModal();
    if (e.target === modal2) closeCookiePolicy();
};
