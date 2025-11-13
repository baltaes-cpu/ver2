// cookies.js - Gestor de consentimiento de cookies
(function () {
  const STORAGE_KEY = 'cookieConsentV1';
  const banner = document.getElementById('cookie-banner');
  const openBtn = document.getElementById('cookie-open-preferences');

  const inputs = {
    analytics: document.getElementById('cookie-analytics'),
    marketing: document.getElementById('cookie-marketing'),
  };

  const buttons = {
    acceptAll: document.getElementById('cookie-accept-all'),
    rejectAll: document.getElementById('cookie-reject-all'),
    save: document.getElementById('cookie-save'),
  };

  // Recuperar consentimiento guardado
  function getConsent() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null;
    } catch {
      return null;
    }
  }

  // Guardar consentimiento
  function setConsent(consent) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  }

  // Mostrar/Ocultar banner
  function showBanner() { banner.hidden = false; }
  function hideBanner() { banner.hidden = true; }

  // Aplicar preferencias en la UI
  function applyUI(consent) {
    if (!consent) return;
    inputs.analytics.checked = !!consent.analytics;
    inputs.marketing.checked = !!consent.marketing;
  }

  // Cargar scripts diferidos según consentimiento
  function loadDeferredScripts(consent) {
    document.querySelectorAll('script[type="text/plain"][data-category]').forEach(script => {
      const cat = script.getAttribute('data-category');
      if (consent[cat]) {
        const s = document.createElement('script');
        if (script.getAttribute('data-src')) {
          s.src = script.getAttribute('data-src');
          s.async = true;
        } else {
          s.textContent = script.textContent;
        }
        document.head.appendChild(s);
        script.type = 'text/processed';
      }
    });
  }

  // Acciones de los botones
  function acceptAll() {
    const consent = { necessary: true, analytics: true, marketing: true, ts: Date.now() };
    setConsent(consent);
    hideBanner();
    loadDeferredScripts(consent);
  }

  function rejectAll() {
    const consent = { necessary: true, analytics: false, marketing: false, ts: Date.now() };
    setConsent(consent);
    hideBanner();
  }

  function save() {
    const consent = {
      necessary: true,
      analytics: inputs.analytics.checked,
      marketing: inputs.marketing.checked,
      ts: Date.now()
    };
    setConsent(consent);
    hideBanner();
    loadDeferredScripts(consent);
  }

  // Eventos
  buttons.acceptAll.addEventListener('click', acceptAll);
  buttons.rejectAll.addEventListener('click', rejectAll);
  buttons.save.addEventListener('click', save);
  openBtn.addEventListener('click', () => {
    applyUI(getConsent());
