// ---- Dark Mode ----
function toggleDark() {
  let isDark = document.body.getAttribute('data-bs-theme') === 'dark';
  document.body.setAttribute('data-bs-theme', isDark ? 'light' : 'dark');
  localStorage.setItem('darkMode', !isDark ? 'dark' : 'light');
}
window.onload = function() {
  // Init dark mode state
  if (localStorage.getItem('darkMode') === 'dark') {
    document.body.setAttribute('data-bs-theme', 'dark');
    document.getElementById('darkSwitch').checked = true;
  }
  // Animated counters
  animateCounters();
  // Newsletter popup (show after 7s)
  setTimeout(() => {
    document.getElementById('newsletter-popup').classList.add('show');
  }, 7000);
};

// ---- Language Switch (static demo) ----
function setLang(lang) {
  // Highlight active button
  Array.from(document.querySelectorAll('#lang-switch .btn')).forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.trim().toLowerCase() === lang) btn.classList.add('active');
  });
  // Example: Switch demo texts (for now, just swap some headlines)
  const head = document.getElementById('hero-headline');
  const sub = document.getElementById('hero-sub');
  if (lang === 'en') {
    head.innerHTML = "#1 Africa AI Trading Company <br><span class='text-success'>Halal. Automated. Scalable.</span>";
    sub.innerHTML = "Unlock <b>AI-powered Forex signals, automation, and ethical trading</b>—built for the Muslim world, but open to all. Join Sarka Forex and start your journey to financial freedom, the halal way.";
  } else if (lang === 'ha') {
    head.innerHTML = "#1 Kamfanin Ciniki na AI a Afirka <br><span class='text-success'>Halal. Ta atomatik. Mai fa'ida.</span>";
    sub.innerHTML = "Buɗe <b>alamomin ciniki na AI, atomatik, da ciniki mai tsafta</b>—an gina shi don duniya Musulmai, amma yana buɗe wa kowa. Shiga Sarka Forex don tafiya zuwa 'yancin kuɗi na halal.";
  } else if (lang === 'ar') {
    head.innerHTML = "الشركة الأولى لتداول الذكاء الاصطناعي في أفريقيا <br><span class='text-success'>حلال. مؤتمت. قابل للتوسع.</span>";
    sub.innerHTML = "افتح <b>إشارات الفوركس المدعومة بالذكاء الاصطناعي والتداول الأخلاقي</b>—بُنيت للعالم الإسلامي، ومفتوحة للجميع. انضم إلى سركة فوركس وابدأ رحلتك نحو الحرية المالية، بطريقة حلال.";
  }
}

// ---- Animated Counters ----
function animateCounters() {
  document.querySelectorAll('.counter').forEach(el => {
    let countTo = parseInt(el.getAttribute('data-count'));
    let count = 0;
    let speed = Math.max(15, 1500 / countTo);
    let inc = Math.ceil(countTo / 90);
    function run() {
      count += inc;
      if (count > countTo) count = countTo;
      el.textContent = count.toLocaleString();
      if (count < countTo) setTimeout(run, speed);
    }
    run();
  });
}

// ---- Newsletter Popup ----
function closeNewsletter() {
  document.getElementById('newsletter-popup').classList.remove('show');
}
function subscribeNewsletter() {
  closeNewsletter();
  alert("Thank you for joining the Sarka Forex newsletter! (In sha Allah, no spam, just value)");
}
