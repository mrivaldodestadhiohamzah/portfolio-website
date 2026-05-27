# M Rivaldo Destadhio Hamzah Portfolio Website

This is a modern, responsive, frontend-only portfolio website for **M Rivaldo Destadhio Hamzah**. It showcases web developer and fullstack developer projects with a bilingual Indonesian/English interface, clickable project cards, and responsive project detail modals.

## Portfolio Projects

The portfolio displays four projects:

- **Notes Studio**: active Live Demo and Source Code links.
- **StoryNest**: active Live Demo and Source Code links.
- **HIMO / Hidden Mood**: project showcase only, without Live Demo and Source Code buttons.
- **NERVA**: project showcase only, without Live Demo and Source Code buttons.

All project cards can be clicked to view detailed images, project descriptions, and technology stacks in a modal/lightbox. Projects with multiple screenshots include gallery navigation and thumbnails.

## Project Structure

```text
portfolio-website/
|-- index.html
|-- style.css
|-- script.js
|-- README.md
`-- assets/
    |-- notes.png
    |-- StoryNest.png
    |-- sebelum.png
    |-- sesudah.png
    |-- akunhasil.png
    |-- moodc.png
    |-- history.png
    |-- dashboard.png
    |-- result.png
    `-- interface.png
```

## Main Features

- Static website compatible with GitHub Pages.
- No backend, database, login system, or server-side routing.
- Responsive layout for desktop, tablet, and mobile.
- Indonesian and English language switcher with `localStorage`.
- Clickable project cards with modal/lightbox details.
- Larger project image preview with gallery navigation.
- Keyboard support for modals:
  - `Escape` closes the modal.
  - `ArrowLeft` and `ArrowRight` change images.
- Recruiter-ready contact section.

## How To Edit

### Edit Your Name

Open `index.html` and search for:

```html
M Rivaldo Destadhio Hamzah
```

Update the hero, about, contact, and footer text if needed.

### Edit Project Data

Open `script.js`. Project data is managed in the `projects` object:

```js
const projects = {
  notes: {},
  story: {},
  himo: {},
  nerva: {}
};
```

Project descriptions are managed inside the `translations` object for both languages:

```js
project.notes.description
project.story.description
project.himo.description
project.nerva.description
```

### Change Image Paths

Open `index.html` for card preview images and `script.js` for modal gallery images. Change paths such as:

```html
assets/notes.png
```

If your file extension changes, update the path. Example:

```html
assets/notes.jpg
```

All paths are relative, so they work on GitHub Pages.

### Edit Contact Links

The contact links are in `index.html`:

- Email: `mailto:mrivaldodestadhiohamzah@gmail.com`
- GitHub: `https://github.com/mrivaldodestadhiohamzah`
- LinkedIn: `https://www.linkedin.com/in/mrivaldodhz/`
- WhatsApp: `https://wa.me/6289624574877`
- Phone display: `089624574877`

### Edit Live Demo And Source Code Links

Notes Studio and StoryNest links are in both `index.html` and `script.js`.

HIMO and NERVA intentionally do not show Live Demo or Source Code buttons.

## How To Open Locally

You can open the website directly:

1. Open the `portfolio-website` folder.
2. Double-click `index.html`.

You can also run a local static server:

```bash
python -m http.server 8099
```

Then open:

```text
http://127.0.0.1:8099/
```

## GitHub Push Instructions

Run these commands inside the `portfolio-website` folder:

```bash
git add .
git commit -m "Improve portfolio project modal showcase"
git branch -M main
git remote set-url origin https://github.com/mrivaldodestadhiohamzah/portfolio-website.git
git push -u origin main
```

If the remote does not exist yet, use:

```bash
git remote add origin https://github.com/mrivaldodestadhiohamzah/portfolio-website.git
```

## GitHub Pages Deployment

This website is compatible with GitHub Pages.

1. Open the `portfolio-website` repository on GitHub.
2. Go to **Settings**.
3. Open **Pages**.
4. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
5. Click **Save**.

Expected live portfolio URL:

```text
https://mrivaldodestadhiohamzah.github.io/portfolio-website/
```

If the repository name changes, the URL format becomes:

```text
https://mrivaldodestadhiohamzah.github.io/REPOSITORY-NAME/
```
