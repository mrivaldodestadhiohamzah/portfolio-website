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
    "projects.viewDetails": "Lihat Detail",
    "projects.clickHint": "Klik untuk melihat detail",
    "projects.liveDemo": "Demo Langsung",
    "projects.sourceCode": "Source Code",
    "modal.close": "Tutup",
    "project.notes.title": "Notes Studio",
    "project.notes.description": "Notes Studio adalah aplikasi catatan berbasis web yang dibuat untuk membuat, mengedit, mencari, menyematkan, mengarsipkan, mengimpor, dan mengekspor catatan. Project ini menggunakan penyimpanan lokal browser sehingga tetap dapat digunakan tanpa backend.",
    "project.story.title": "StoryNest",
    "project.story.description": "StoryNest adalah aplikasi web untuk menulis dan mengelola cerita pendek. Project ini menyediakan halaman daftar cerita, form penulisan cerita, dan tampilan yang sederhana agar pengguna dapat menyimpan cerita dengan lebih rapi.",
    "project.himo.label": "Versi awal sebelum NERVA",
    "project.himo.title": "HIMO / Hidden Mood",
    "project.himo.description": "HIMO atau Hidden Mood adalah project awal untuk membantu pengguna mencatat kondisi mood dan melihat hasil analisis sederhana. Project ini menjadi dasar pengembangan untuk sistem yang lebih lengkap.",
    "project.nerva.label": "Featured Project",
    "project.nerva.title": "NERVA",
    "project.nerva.description": "NERVA adalah pengembangan dari HIMO yang berfokus pada pemantauan stres dan kondisi mental pengguna. Sistem ini menggabungkan kuesioner DASS-21, analisis teks curhat, dashboard, riwayat, hasil analisis, dan rekomendasi video. Project ini dikembangkan menggunakan React, Tailwind CSS, dan Express.js.",
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
    "projects.viewDetails": "View Details",
    "projects.clickHint": "Click to view details",
    "projects.liveDemo": "Live Demo",
    "projects.sourceCode": "Source Code",
    "modal.close": "Close",
    "project.notes.title": "Notes Studio",
    "project.notes.description": "Notes Studio is a web-based notes application for creating, editing, searching, pinning, archiving, importing, and exporting notes. It uses browser local storage, so it can run without a backend.",
    "project.story.title": "StoryNest",
    "project.story.description": "StoryNest is a web application for writing and managing short stories. It includes a story list, a writing form, and a simple interface to help users organize their stories more easily.",
    "project.himo.label": "Earlier version before NERVA",
    "project.himo.title": "HIMO / Hidden Mood",
    "project.himo.description": "HIMO or Hidden Mood is an early project designed to help users record their mood condition and view simple analysis results. This project became the foundation for a more complete system.",
    "project.nerva.label": "Featured Project",
    "project.nerva.title": "NERVA",
    "project.nerva.description": "NERVA is an improved version of HIMO focused on monitoring user stress and mental wellness. It combines the DASS-21 questionnaire, mood text analysis, dashboard, history, analysis results, and video recommendations. This project was developed using React, Tailwind CSS, and Express.js.",
    "skills.eyebrow": "Skills",
    "skills.title": "Technologies and areas I use to build websites.",
    "contact.eyebrow": "Contact",
    "contact.title": "Let us connect and discuss job opportunities or collaboration.",
    "contact.body": "I am open to opportunities as a web developer, frontend developer, or fullstack developer.",
    "footer.text": "© 2026 Portfolio M Rivaldo Destadhio Hamzah. All Rights Reserved."
  }
};

const projects = {
  notes: {
    titleKey: "project.notes.title",
    descriptionKey: "project.notes.description",
    label: "",
    images: [{ src: "assets/notes.png", alt: "Notes Studio project screenshot" }],
    tech: ["HTML", "CSS", "JavaScript", "React", "Local Storage", "Responsive UI"],
    liveDemo: "https://mrivaldodestadhiohamzah.github.io/NoteStudio/",
    sourceCode: "https://github.com/mrivaldodestadhiohamzah/NoteStudio"
  },
  story: {
    titleKey: "project.story.title",
    descriptionKey: "project.story.description",
    label: "",
    images: [{ src: "assets/storynest.png", alt: "StoryNest project screenshot" }],
    tech: ["HTML", "CSS", "JavaScript", "React", "Local Storage", "Responsive Design"],
    liveDemo: "https://mrivaldodestadhiohamzah.github.io/StoryNest/",
    sourceCode: "https://github.com/mrivaldodestadhiohamzah/StoryNest"
  },
  himo: {
    titleKey: "project.himo.title",
    descriptionKey: "project.himo.description",
    labelKey: "project.himo.label",
    images: [
      { src: "assets/himo-before.png", alt: "HIMO data input screen" },
      { src: "assets/himo-after.png", alt: "HIMO analysis result screen" },
      { src: "assets/himo-result.png", alt: "HIMO account result screen" }
    ],
    tech: ["HTML", "CSS", "JavaScript", "UI/UX Design", "Machine Learning Integration Concept"]
  },
  nerva: {
    titleKey: "project.nerva.title",
    descriptionKey: "project.nerva.description",
    labelKey: "project.nerva.label",
    images: [
      { src: "assets/nerva-mood.png", alt: "NERVA mood check screen" },
      { src: "assets/nerva-history.png", alt: "NERVA history screen" },
      { src: "assets/nerva-dashboard.png", alt: "NERVA dashboard screen" },
      { src: "assets/nerva-result.png", alt: "NERVA result screen" },
      { src: "assets/nerva-interface.png", alt: "NERVA interface screen" }
    ],
    tech: [
      "React",
      "Tailwind CSS",
      "Express.js",
      "JavaScript",
      "DASS-21 Questionnaire",
      "Dashboard UI",
      "Data Visualization Concept",
      "Machine Learning Integration Concept"
    ]
  }
};

const languageButtons = document.querySelectorAll(".lang-btn");
const translatableElements = document.querySelectorAll("[data-i18n]");
const translatableAriaElements = document.querySelectorAll("[data-i18n-aria-label]");
const menuToggle = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");
const navLinks = document.querySelectorAll(".nav-links a");
const projectCards = document.querySelectorAll(".clickable-project");
const modal = document.querySelector("#project-modal");
const modalDialog = modal.querySelector(".project-modal");
const modalClose = modal.querySelector(".modal-close");
const modalImage = document.querySelector("#modal-image");
const modalLabel = document.querySelector("#modal-label");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");
const modalTags = document.querySelector("#modal-tags");
const modalActions = document.querySelector("#modal-actions");
const modalThumbnails = document.querySelector("#modal-thumbnails");
const prevButton = document.querySelector("[data-gallery-prev]");
const nextButton = document.querySelector("[data-gallery-next]");

let currentLanguage = localStorage.getItem("portfolio-language") || "id";
let activeProjectId = null;
let activeImageIndex = 0;

function t(key) {
  return translations[currentLanguage]?.[key] || translations.id[key] || key;
}

function setLanguage(language) {
  currentLanguage = translations[language] ? language : "id";

  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });

  translatableAriaElements.forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (translations[currentLanguage][key]) {
      element.setAttribute("aria-label", translations[currentLanguage][key]);
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLanguage);
  });

  document.documentElement.lang = currentLanguage;
  localStorage.setItem("portfolio-language", currentLanguage);

  if (activeProjectId) {
    renderModalContent(activeProjectId, activeImageIndex);
  }
}

function closeMobileMenu() {
  navPanel.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

function renderModalImage(project, imageIndex) {
  const image = project.images[imageIndex];
  modalImage.src = image.src;
  modalImage.alt = image.alt;

  [...modalThumbnails.children].forEach((button, index) => {
    button.classList.toggle("active", index === imageIndex);
    button.setAttribute("aria-current", index === imageIndex ? "true" : "false");
  });
}

function changeModalImage(direction) {
  if (!activeProjectId) return;

  const project = projects[activeProjectId];
  if (project.images.length <= 1) return;

  activeImageIndex = (activeImageIndex + direction + project.images.length) % project.images.length;
  renderModalImage(project, activeImageIndex);
}

function createModalLink(href, text, variant) {
  const link = document.createElement("a");
  link.className = `btn small ${variant}`;
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = text;
  return link;
}

function renderModalContent(projectId, imageIndex = 0) {
  const project = projects[projectId];
  if (!project) return;

  activeProjectId = projectId;
  activeImageIndex = Math.min(imageIndex, project.images.length - 1);

  modalLabel.textContent = project.labelKey ? t(project.labelKey) : "";
  modalLabel.hidden = !project.labelKey;
  modalTitle.textContent = t(project.titleKey);
  modalDescription.textContent = t(project.descriptionKey);

  modalTags.innerHTML = "";
  project.tech.forEach((technology) => {
    const tag = document.createElement("span");
    tag.textContent = technology;
    modalTags.appendChild(tag);
  });

  modalActions.innerHTML = "";
  if (project.liveDemo && project.sourceCode) {
    modalActions.appendChild(createModalLink(project.liveDemo, t("projects.liveDemo"), "primary"));
    modalActions.appendChild(createModalLink(project.sourceCode, t("projects.sourceCode"), "ghost"));
  }

  modalThumbnails.innerHTML = "";
  project.images.forEach((image, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-label", `${t(project.titleKey)} image ${index + 1}`);
    button.addEventListener("click", () => {
      activeImageIndex = index;
      renderModalImage(project, activeImageIndex);
    });

    const thumbnail = document.createElement("img");
    thumbnail.src = image.src;
    thumbnail.alt = image.alt;
    button.appendChild(thumbnail);
    modalThumbnails.appendChild(button);
  });

  const hasMultipleImages = project.images.length > 1;
  prevButton.hidden = !hasMultipleImages;
  nextButton.hidden = !hasMultipleImages;
  modalThumbnails.hidden = !hasMultipleImages;

  renderModalImage(project, activeImageIndex);
}

function openProjectModal(projectId) {
  renderModalContent(projectId, 0);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose.focus();
}

function closeProjectModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  activeProjectId = null;
  activeImageIndex = 0;
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

projectCards.forEach((card) => {
  card.addEventListener("click", (event) => {
    if (event.target.closest("a")) return;
    openProjectModal(card.dataset.projectId);
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProjectModal(card.dataset.projectId);
    }
  });
});

modalClose.addEventListener("click", closeProjectModal);
prevButton.addEventListener("click", () => changeModalImage(-1));
nextButton.addEventListener("click", () => changeModalImage(1));

modal.addEventListener("click", (event) => {
  if (!modalDialog.contains(event.target)) {
    closeProjectModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (!activeProjectId) return;

  if (event.key === "Escape") {
    closeProjectModal();
  }

  if (event.key === "ArrowLeft") {
    changeModalImage(-1);
  }

  if (event.key === "ArrowRight") {
    changeModalImage(1);
  }
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

setLanguage(currentLanguage);
