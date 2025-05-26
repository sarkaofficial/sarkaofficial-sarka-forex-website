// assets/js/scripts.js

// --- Dark Mode Toggle ---
function toggleDark() {
  const body = document.body;
  const isDark = body.getAttribute("data-bs-theme") === "dark";
  body.setAttribute("data-bs-theme", isDark ? "light" : "dark");
  localStorage.setItem('sarka_theme', isDark ? "light" : "dark");
}

// On load, restore theme preference
(function(){
  const theme = localStorage.getItem('sarka_theme') || "light";
  document.body.setAttribute("data-bs-theme", theme);
  document.getElementById('darkSwitch').checked = theme === "dark";
})();

// --- Language Switch (DEMO) ---
const translations = {
  en: {},
  ha: {
    // Example: add real translations here
    "Sarka Forex": "Sarka Forex (Hausa)",
    "Get Free Signals Now": "Samu Alamomi Kyauta Yanzu",
    "Contact": "Tuntuba",
    "Home": "Gida",
    // ...add more as needed
  },
  ar: {
    "Sarka Forex": "سرقة فوركس",
    "Get Free Signals Now": "احصل على إشارات مجانية الآن",
    "Contact": "اتصل بنا",
    "Home": "الرئيسية",
    // ...add more as needed
  }
};

function setLang(lang) {
  localStorage.setItem('sarka_lang', lang);
  translatePage(lang);
}

// On load, restore language
(function() {
  const lang = localStorage.getItem('sarka_lang') || "en";
  translatePage(lang);
})();

function translatePage(lang) {
  // For demo: swap some text only
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    el.textContent = translations[lang][key] || key;
  });
}

// --- Navbar Active Highlight ---
(function() {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const url = window.location.pathname.split('/').pop();
  navLinks.forEach(link => {
    if (link.getAttribute('href') === url) {
      link.classList.add('active');
    }
  });
})();
