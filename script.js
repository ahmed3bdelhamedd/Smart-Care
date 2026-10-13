document.addEventListener("DOMContentLoaded", () => {
  // Inject Header
  const headerHTML = `
    <nav class="smart-navbar">
      <a href="index.html" class="nav-brand">
        <img src="logo.jpg" alt="Logo" class="logo-img">
        <span class="brand-title">Smart Care</span>
      </a>
      <ul class="nav-links">
        <li><a href="index.html" class="nav-link" data-ar="الرئيسية (CEO)" data-en="CEO Dashboard">الرئيسية (CEO)</a></li>
        <li><a href="healthcare.html" class="nav-link" data-ar="القطاع الطبي" data-en="Healthcare ERP">القطاع الطبي</a></li>
        <li><a href="risk-engine.html" class="nav-link" data-ar="محرك المخاطر" data-en="Risk Engine">محرك المخاطر</a></li>
        <li class="dropdown">
          <a href="#" data-ar="القطاعات والأقسام ▾" data-en="Sectors ▾">القطاعات والأقسام ▾</a>
          <div class="dropdown-content">
            <a href="finance.html" data-ar="💰 الإدارة المالية" data-en="💰 Financial Health">💰 الإدارة المالية</a>
            <a href="hr.html" data-ar="👥 الموارد البشرية" data-en="👥 Human Resources">👥 الموارد البشرية</a>
            <a href="logistics.html" data-ar="📦 اللوجستيات" data-en="📦 Logistics & Supply">📦 اللوجستيات</a>
            <a href="real-estate.html" data-ar="🏢 العقارات والأصول" data-en="🏢 Real Estate Assets">🏢 العقارات والأصول</a>
            <a href="education.html" data-ar="🎓 التعليم والتدريب" data-en="🎓 Education & Training">🎓 التعليم والتدريب</a>
            <a href="maintenance.html" data-ar="⚙️ الصيانة والتشغيل" data-en="⚙️ Predictive Maintenance">⚙️ الصيانة والتشغيل</a>
          </div>
        </li>
      </ul>
      <div class="nav-controls">
        <button class="control-btn" id="theme-toggle">🌓 الوضع الداكن</button>
        <button class="control-btn" id="lang-toggle">🌐 EN</button>
      </div>
    </nav>
  `;
  
  const headerPlaceholder = document.getElementById('navbar-placeholder');
  if(headerPlaceholder) headerPlaceholder.innerHTML = headerHTML;

  // Theme Toggle
  const themeBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'dark';
  if(currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    if(themeBtn) themeBtn.textContent = '☀️ الوضع الفاتح';
  }

  if(themeBtn) {
    themeBtn.addEventListener('click', () => {
      let th = document.documentElement.getAttribute('data-theme');
      if(th === 'light') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
        themeBtn.textContent = '🌓 الوضع الداكن';
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeBtn.textContent = '☀️ الوضع الفاتح';
      }
    });
  }

  // Language Toggle
  const langBtn = document.getElementById('lang-toggle');
  let currentLang = localStorage.getItem('lang') || 'ar';
  
  function setLanguage(lang) {
    document.querySelectorAll('[data-ar]').forEach(el => {
      el.textContent = el.getAttribute(`data-${lang}`);
    });
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('lang', lang);
    if(langBtn) langBtn.textContent = lang === 'ar' ? '🌐 EN' : '🌐 AR';
  }

  setLanguage(currentLang);

  if(langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'ar' ? 'en' : 'ar';
      setLanguage(currentLang);
    });
  }
});
