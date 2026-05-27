const translations = {
  id: {
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.projects": "Project",
    "nav.skills": "Keahlian",
    "nav.contact": "Kontak",
    "hero.title": "Halo, saya seorang Web Developer",
    "hero.subtitle": "Saya membangun website modern, responsif, dan fungsional untuk berbagai kebutuhan digital.",
    "hero.projectsButton": "Lihat Project",
    "hero.contactButton": "Hubungi Saya",
    "hero.projectMetric": "Project showcase",
    "about.eyebrow": "Tentang Saya",
    "about.title": "Membangun pengalaman web yang rapi, cepat, dan mudah digunakan.",
    "about.body": "Saya M Rivaldo Destadhio Hamzah, seorang web developer yang tertarik pada pengembangan frontend dan fullstack. Saya telah membangun beberapa project seperti aplikasi manajemen catatan, aplikasi penulisan cerita, sistem pemantauan kesehatan mental, serta pengembangan sistem mental wellness dengan DASS-21 dan fitur analisis.",
    "projects.eyebrow": "Project Pilihan",
    "projects.title": "Project yang menunjukkan kemampuan saya membangun produk digital.",
    "projects.liveDemo": "Live Demo",
    "projects.sourceCode": "Source Code",
    "project.notes.title": "Notes Studio",
    "project.notes.description": "Notes Studio adalah aplikasi manajemen catatan berbasis local-first yang memungkinkan pengguna membuat, mengedit, mengelola, mencari, menyematkan, mengarsipkan, mengimpor, dan mengekspor catatan. Aplikasi ini dirancang agar tetap dapat digunakan tanpa backend dengan memanfaatkan browser storage.",
    "project.story.title": "StoryNest",
    "project.story.description": "StoryNest adalah aplikasi web untuk menulis, menyimpan, mengelola, dan menampilkan cerita pendek. Aplikasi ini memiliki tampilan yang bersih, daftar cerita, formulir penulisan cerita, serta konsep peta visual berbasis garis lintang dan garis bujur.",
    "project.himo.label": "Versi awal sebelum NERVA",
    "project.himo.title": "HIMO / Hidden Mood",
    "project.himo.description": "HIMO atau Hidden Mood adalah sistem awal yang berfokus pada pemantauan mood dan tingkat stres pengguna. Project ini menampilkan proses pengisian data, hasil analisis, dan halaman akun pengguna. HIMO menjadi dasar pengembangan untuk sistem yang lebih lengkap, yaitu NERVA.",
    "project.nerva.label": "Featured Project",
    "project.nerva.title": "NERVA",
    "project.nerva.description": "NERVA adalah versi pengembangan dari HIMO. NERVA merupakan platform web mental wellness yang menggabungkan hasil kuesioner DASS-21 dan analisis teks curhat untuk memantau tingkat stres pengguna. Sistem ini memiliki fitur cek mood, dashboard, riwayat analisis, hasil gabungan, rekomendasi video, serta pengaturan akun.",
    "skills.eyebrow": "Keahlian",
    "skills.title": "Teknologi dan area yang saya gunakan untuk membangun website.",
    "contact.eyebrow": "Kontak",
    "contact.title": "Mari terhubung dan diskusikan peluang kerja atau kolaborasi.",
    "contact.body": "Saya terbuka untuk kesempatan sebagai web developer, frontend developer, atau fullstack developer.",
    "footer.text": "© 2026 Portfolio M Rivaldo Destadhio Hamzah. Semua Hak Dilindungi."
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "hero.title": "Hi, I am a Web Developer",
    "hero.subtitle": "I build modern, responsive, and functional websites for various digital needs.",
    "hero.projectsButton": "View Projects",
    "hero.contactButton": "Contact Me",
    "hero.projectMetric": "Project showcase",
    "about.eyebrow": "About Me",
    "about.title": "Building clean, fast, and easy-to-use web experiences.",
    "about.body": "I am M Rivaldo Destadhio Hamzah, a web developer interested in frontend and fullstack development. I have built several projects including a notes management app, a story writing app, a mental wellness and stress monitoring system, and an improved mental wellness platform with DASS-21 and analysis features.",
    "projects.eyebrow": "Selected Projects",
    "projects.title": "Projects that show how I build practical digital products.",
    "projects.liveDemo": "Live Demo",
    "projects.sourceCode": "Source Code",
    "project.notes.title": "Notes Studio",
    "project.notes.description": "Notes Studio is a local-first notes management application that allows users to create, edit, organize, search, pin, archive, import, and export notes. It is designed to work without a backend by using browser storage.",
    "project.story.title": "StoryNest",
    "project.story.description": "StoryNest is a storytelling web application for writing, saving, managing, and displaying short stories. It includes a clean interface, story list, story form, and a visual map concept based on latitude and longitude.",
    "project.himo.label": "Earlier version before NERVA",
    "project.himo.title": "HIMO / Hidden Mood",
    "project.himo.description": "HIMO or Hidden Mood is an early system focused on monitoring user mood and stress levels. This project includes data input, analysis results, and user account pages. HIMO became the foundation for the improved system, NERVA.",
    "project.nerva.label": "Featured Project",
    "project.nerva.title": "NERVA",
    "project.nerva.description": "NERVA is the improved version of HIMO. NERVA is a mental wellness web platform that combines DASS-21 questionnaire results and mood text analysis to monitor user stress levels. The system includes mood checking, dashboard, analysis history, combined results, video recommendations, and account settings.",
    "skills.eyebrow": "Skills",
    "skills.title": "Technologies and areas I use to build websites.",
    "contact.eyebrow": "Contact",
    "contact.title": "Let us connect and discuss job opportunities or collaboration.",
    "contact.body": "I am open to opportunities as a web developer, frontend developer, or fullstack developer.",
    "footer.text": "© 2026 Portfolio M Rivaldo Destadhio Hamzah. All Rights Reserved."
  }
};

const languageButtons = document.querySelectorAll(".lang-btn");
const translatableElements = document.querySelectorAll("[data-i18n]");
const menuToggle = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");
const navLinks = document.querySelectorAll(".nav-links a");

function setLanguage(language) {
  const dictionary = translations[language] || translations.id;

  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === language);
  });

  document.documentElement.lang = language;
  localStorage.setItem("portfolio-language", language);
}

function closeMobileMenu() {
  navPanel.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

menuToggle.addEventListener("click", () => {
  const isOpen = navPanel.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
);

document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));

setLanguage(localStorage.getItem("portfolio-language") || "id");
