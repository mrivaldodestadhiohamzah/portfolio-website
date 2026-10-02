# M. Rivaldo Destadhio Hamzah

This is my personal portfolio website for showcasing web development work. It includes project previews, detailed screenshot galleries, a NERVA video walkthrough, selected live demos, and an Indonesian/English language switcher.

Live portfolio: <https://mrivaldodestadhiohamzah.github.io/portfolio-website/>

## Features

- Static HTML, CSS, and JavaScript setup that can be deployed directly to GitHub Pages.
- Responsive layout for desktop, tablet, and mobile screens.
- Indonesian and English content with language preference saved in local storage.
- Downloadable CV in the hero section.
- Clickable project cards with responsive modal galleries.
- Keyboard and button navigation for multi-image project showcases.
- NERVA video preview with a poster image fallback.
- External demo and source links for projects where they are available.

## Projects

### HireFlow

HireFlow is a recruiting web application for managing candidates, hiring pipelines, jobs, interviews, and candidate context in one workspace. The portfolio uses six screenshots: the landing page, registration screen, dashboard, candidates view, jobs view, and recruitment pipeline.

My contribution covers the landing page and recruiter workspace, including the dashboard, candidate management, jobs, interviews, filters, pipeline, and candidate details. The repository also includes service foundations for ASP.NET Core, EF Core, PostgreSQL, and FastAPI.

- Live Demo: <https://hireflow-zeta-eight.vercel.app/>
- Source Code: <https://github.com/mrivaldodestadhiohamzah/hireflow>
- Tech: Next.js, React, TypeScript, Tailwind CSS, ASP.NET Core, FastAPI, PostgreSQL

### NERVA

NERVA is a student stress classification web application that combines journal text analysis with the DASS-21 questionnaire to provide a more contextual view of stress levels. The portfolio presents NERVA as a showcase with a video walkthrough and interface screenshots.

My contribution covered website/fullstack development, backend work, and security implementation across the journal input, DASS-21 check, dashboard, history, and result visualization flows. The project is presented with the current implementation stack: React, Tailwind CSS, Express.js, JavaScript, DASS-21, dashboard UI, and data visualization.

Technical highlights shown in the project detail view include journal text analysis, the Express.js backend flow, and DASS-21-based result visualization.

- Showcase only
- Tech: React, Tailwind CSS, Express.js, JavaScript, DASS-21, dashboard UI, data visualization

### Notes Studio

Notes Studio is a web-based notes application for creating, editing, searching, pinning, archiving, importing, and exporting notes. It uses browser local storage, so it can run without a backend.

- Live Demo: <https://mrivaldodestadhiohamzah.github.io/NoteStudio/>
- Source Code: <https://github.com/mrivaldodestadhiohamzah/NoteStudio>
- Tech: HTML, CSS, JavaScript, React, Local Storage, Responsive UI

### StoryNest

StoryNest is a web application for writing and managing short stories. It includes a story list, a writing form, and a simple interface to help users organize their stories more easily.

- Live Demo: <https://mrivaldodestadhiohamzah.github.io/StoryNest/>
- Source Code: <https://github.com/mrivaldodestadhiohamzah/StoryNest>
- Tech: HTML, CSS, JavaScript, React, Local Storage, Responsive Design

### HIMO / Hidden Mood

HIMO or Hidden Mood is an early project designed to help users record their mood condition and view simple analysis results. This project became the foundation for a more complete system.

- Showcase only
- Tech: HTML, CSS, JavaScript, UI/UX Design

HIMO and NERVA are presented as project showcases without Live Demo or Source Code buttons. Every project card can be opened to view its screenshots, explanation, and technology tags.

## Folder Structure

```text
portfolio-website/
|-- index.html
|-- style.css
|-- script.js
|-- README.md
|-- .gitignore
`-- assets/
    |-- CV_M.Rivaldo_Destadhio_Hamzah.pdf
    |-- notes.png
    |-- storynest.png
    |-- himo-before.png
    |-- himo-after.png
    |-- himo-result.png
    |-- nerva-mood.png
    |-- nerva-history.png
    |-- nerva-dashboard.png
    |-- nerva-result.png
    |-- nerva-interface.png
    |-- NervaVID.mp4
    |-- hireflowlanding.png
    |-- hireflowregis.png
    |-- hiredash.png
    |-- candidates.png
    |-- jobs.png
    `-- pipline.png
```

## Experience and Education

The portfolio includes factual experience from Dicoding Coding Camp 2026 powered by DBS Foundation, DCN Telkom University, PT Telkom Infrastruktur Indonesia (Infranexia), Telkom Test House, and BPS.

Education: S1 Teknik Telekomunikasi at Universitas Telkom, 2022–2026.

## Run Locally

The site has no build step. Open `index.html` directly in a browser, or run a small local server from the project folder:

```bash
python -m http.server 8099
```

Then open <http://127.0.0.1:8099/>.

## Deploy To GitHub Pages

The repository is deployed from the `main` branch using the `/root` folder.

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/mrivaldodestadhiohamzah/portfolio-website.git
git push -u origin main
```

In GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/root`, then click **Save**.

The live URL is:

<https://mrivaldodestadhiohamzah.github.io/portfolio-website/>

## Contact

- Email: <mrivaldodestadhiohamzah@gmail.com>
- GitHub: <https://github.com/mrivaldodestadhiohamzah>
- LinkedIn: <https://www.linkedin.com/in/mrivaldodhz/>
- WhatsApp: <https://wa.me/6289624574877>
- Phone: 089624574877
