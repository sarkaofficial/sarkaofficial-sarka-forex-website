// assets/js/scripts.js

// --- Dark Mode (Global) ---
function setTheme(theme) {
  document.body.setAttribute('data-bs-theme', theme);
  localStorage.setItem('sarka_theme', theme);
  // Set switch (check all pages for ID)
  const darkSwitch = document.getElementById('darkSwitch');
  if (darkSwitch) darkSwitch.checked = theme === 'dark';
}
function toggleDark() {
  setTheme(document.body.getAttribute("data-bs-theme") === "dark" ? "light" : "dark");
}
document.addEventListener('DOMContentLoaded', function() {
  // Set saved theme
  const theme = localStorage.getItem('sarka_theme') || "light";
  setTheme(theme);
  // Set switch event (for all pages)
  const darkSwitch = document.getElementById('darkSwitch');
  if (darkSwitch) darkSwitch.onchange = toggleDark;
});

// --- Navbar Active Highlight ---
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const url = window.location.pathname.split('/').pop();
  navLinks.forEach(link => {
    if (link.getAttribute('href') === url) link.classList.add('active');
  });
});

// --- Full Auto-Translate (ALL text) ---
const sarkaTranslations = {
  en: {},
  ha: {
    "Home": "Gida",
    "About": "Game da Mu",
    "Services": "Ayyuka",
    "Signals": "Alamomi",
    "AI Tools": "Kayan AI",
    "Testimonials": "Shaida",
    "Blog": "Labaranmu",
    "FAQs": "Tambayoyi",
    "Community": "Al'umma",
    "Contact": "Tuntuba",
    "Get Free Signals Now": "Samu Alamomi Kyauta Yanzu",
    "AI Forex Signals": "Alamomin AI na Forex",
    "100% halal, AI-powered, and Africa’s most trusted signals.": "Cikakke halal, na AI kuma amintattun alamomi a Afirka.",
    "Ready for Halal AI Signals?": "Shirye don Alamomin AI na Halal?",
    "Join on WhatsApp": "Shiga ta WhatsApp",
    "We reply in minutes, not days!": "Muna bada amsa cikin mintuna, ba kwana ba!",
    "Contact Form": "Fom din Tuntuba",
    "Your Name": "Sunan ku",
    "Your Email": "Imel dinku",
    "Your Message": "Saƙonku",
    "Send Message": "Aika Saƙo",
    // ...add more as you need!
  },
  ar: {
    "Home": "الرئيسية",
    "About": "من نحن",
    "Services": "الخدمات",
    "Signals": "الإشارات",
    "AI Tools": "أدوات الذكاء الاصطناعي",
    "Testimonials": "التوصيات",
    "Blog": "مدونتنا",
    "FAQs": "الأسئلة الشائعة",
    "Community": "المجتمع",
    "Contact": "اتصل بنا",
    "Get Free Signals Now": "احصل على إشارات مجانية الآن",
    "AI Forex Signals": "إشارات الفوركس بالذكاء الاصطناعي",
    "100% halal, AI-powered, and Africa’s most trusted signals.": "إشارات حلال 100٪ ومدعومة بالذكاء الاصطناعي والأكثر موثوقية في إفريقيا.",
    "Ready for Halal AI Signals?": "جاهز لإشارات الذكاء الاصطناعي الحلال؟",
    "Join on WhatsApp": "انضم عبر واتساب",
    "We reply in minutes, not days!": "نرد خلال دقائق وليس أيام!",
    "Contact Form": "نموذج الاتصال",
    "Your Name": "اسمك",
    "Your Email": "بريدك الإلكتروني",
    "Your Message": "رسالتك",
    "Send Message": "إرسال الرسالة",
    // ...add more as you need!
  }
};

// Translate ALL visible text with data-translate or plain text nodes
function setLang(lang) {
  localStorage.setItem('sarka_lang', lang);
  translateAll(lang);
}
document.addEventListener('DOMContentLoaded', function() {
  const lang = localStorage.getItem('sarka_lang') || "en";
  translateAll(lang);
});
function translateAll(lang) {
  // 1. Translate with data-translate attribute
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    el.textContent = sarkaTranslations[lang][key] || key;
  });
  // 2. Translate navbar/footer/buttons/etc by their innerText
  Object.entries(sarkaTranslations[lang]).forEach(([en, val]) => {
    document.querySelectorAll('*').forEach(el => {
      if (el.children.length === 0 && el.innerText.trim() === en) {
        el.innerText = val;
      }
    });
  });
}
