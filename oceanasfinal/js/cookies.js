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

  function getConsent() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null;
  }
  function setConsent(consent) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  }
  function showBanner() { banner.hidden = false; }
  function hideBanner() { banner.hidden = true; }

  function loadScripts(consent) {
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

  function acceptAll() {
    const consent = { necessary: true, analytics: true, marketing: true };
    setConsent(consent); hideBanner(); loadScripts(consent);
  }
  function rejectAll() {
    const consent = { necessary: true, analytics: false, marketing: false };
    setConsent(consent); hideBanner();
  }
  function save() {
    const consent = {
      necessary: true,
      analytics: inputs.analytics.checked,
      marketing: inputs.marketing.checked
    };
    setConsent(consent); hideBanner(); loadScripts(consent);
  }

  buttons.acceptAll.addEventListener('click', acceptAll);
  buttons.rejectAll.addEventListener('click', rejectAll);
  buttons.save.addEventListener('click', save);
  openBtn.addEventListener('click', () => showBanner());

  const existing = getConsent();
  if (!existing) showBanner(); else loadScripts(existing);
})();
