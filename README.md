Logic Ledger ☁️

A machine learning portfolio and documentation site — algorithms tracked, projects shipped, and handwritten notes, all in one place. Built as a static, dependency-free multi-page site with a pastel lavender glassmorphism aesthetic.

Author: Tamsil Sameera · LinkedIn · tamsilsamira@gmail.com


Overview

Logic Ledger documents a machine learning learning journey: which algorithms are done, which are in progress, what's been built, and where the handwritten notes for each topic live. It started as a single HTML file and is now a scalable multi-page site where new content is added by editing data, not markup.

Features


Searchable, filterable algorithm tracker — live search plus status chips (Done / Learning / Upcoming)
Data-driven content — algorithms, projects, and notes all render from one JS data file; no HTML duplication when adding new content
Centralized notes library — every handwritten PDF in one place instead of scattered across folders
Sticky glass navbar with a working mobile menu
Fully responsive, down to small mobile widths
Zero build step, zero dependencies — open index.html directly, or serve it with any static file server
CSS-only hero banner — no image asset required


Tech stack

Plain HTML5, CSS3 (custom properties for theming, no framework), and vanilla JavaScript (ES6+, no bundler, no npm packages). Google Fonts (Playfair Display + Quicksand) loaded via CDN link.

Project structure

logic-ledger/
├── index.html                Home — banner, ML intro, roadmap, progress summary
├── algorithms.html           Searchable/filterable grid of tracked algorithms
├── projects.html             GitHub repos + dashboard image galleries
├── notes.html                Centralized handwritten notes (PDF links)
├── requirements.txt          Optional local-dev tooling (see below)
│
├── css/
│   ├── variables.css         Design tokens — every color/radius/shadow lives here
│   ├── base.css               Reset + base typography
│   ├── layout.css             Sections, containers, grids, ambient sparkles
│   ├── navbar.css             Sticky glass navbar (desktop + mobile menu)
│   ├── search.css             Navbar search + algorithm search/filter chips
│   ├── banner.css             CSS-only homepage hero banner
│   ├── buttons.css            Pill buttons (notes / repo / filter)
│   ├── cards.css              Card system: algorithm / project / note cards
│   ├── gallery.css            Dashboard image grid
│   ├── footer.css             Footer + social links
│   └── responsive.css         Global mobile overrides
│
├── js/
│   ├── data.js                 Single source of truth for all content
│   ├── navbar.js               Renders sticky navbar + footer on every page
│   ├── sparkles.js             Ambient floating sparkle decoration
│   ├── render-home.js          Roadmap + progress summary (index.html)
│   ├── render-algorithms.js    Algorithm cards, search, status filter chips
│   ├── render-projects.js      Project cards + dashboard galleries
│   └── render-notes.js         Notes library cards
│
└── assets/
    ├── images/                 Optional — only needed for a photo banner
    └── notes/                  Handwritten PDF notes

Getting started

Prerequisites

None. This is a static site — any modern browser is enough. Python is only needed if you want to serve it over localhost instead of opening the file directly (see below).

Installation

bashgit clone https://github.com/cyraemin/logic-ledger.git
cd logic-ledger

Running locally

Option A — open directly (fastest):
Double-click index.html, or open it via File → Open in your browser. Everything renders client-side with no fetch() calls, so file:// works fine.

Option B — local server (optional):

bashpip install -r requirements.txt   # optional, see requirements.txt
python3 -m http.server 8080

Then visit http://localhost:8080/index.html.

Use the navbar to move between pages rather than opening each .html file manually.

Managing content

Everything on the Algorithms, Projects, and Notes pages is generated from js/data.js. Add one object to the relevant array and the page re-renders automatically — no HTML editing required.

Add an algorithm:

js{
  id: "svm",
  name: "Support Vector Machines",
  status: "upcoming",                     // 'done' | 'learning' | 'upcoming'
  description: "...",
  repo: "https://github.com/you/repo",    // or null
  notes: "assets/notes/svm-notes.pdf"     // or null
}

Add a project: add to PROJECTS, with an optional gallery: [] array of image paths. Leave it empty to hide the dashboard toggle.

Add a note: add to NOTES with a topic, description, and file path to the PDF, and drop the PDF into assets/notes/.

Customization


Colors, radii, shadows — all defined once in css/variables.css. Nothing else should need editing to reskin the site.
Banner — currently a CSS-only gradient scene in css/banner.css. To switch to a photo, add an image to assets/images/ and replace the background property with background-image.
Dashboard gallery — drop PNGs into assets/dashboards/<project-id>/ and list their paths in that project's gallery array in js/data.js.


Roadmap

Python → Statistics → Probability → NumPy → Pandas → Data Visualization → Exploratory Data Analysis → Machine Learning → Deep Learning → Model Deployment

License

Personal portfolio project. Feel free to fork the structure for your own portfolio — please don't reuse the notes/content as your own.
Contentpdfpdfpdfpdfpdfpdf<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Logic Ledger ☁️</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Dipasted