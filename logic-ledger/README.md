# Logic Ledger

A machine learning portfolio and documentation site. Refactored from a single
HTML file into a scalable multi-page structure — same pastel lavender
glassmorphism look, split into separate HTML / CSS / JS files.

## Structure

```
logic-ledger/
├── index.html            Home — banner, ML intro, roadmap, progress summary
├── algorithms.html        Searchable/filterable grid of all 11 algorithms
├── projects.html          GitHub repos + dashboard image galleries
├── notes.html             Centralized handwritten notes (PDF links)
│
├── css/
│   ├── variables.css       Design tokens — every color/radius/shadow lives here
│   ├── base.css             Reset + base typography
│   ├── layout.css           Sections, containers, grids, sparkles
│   ├── navbar.css           Sticky glass navbar (desktop + mobile menu)
│   ├── search.css           Navbar search + algorithms page search/filter chips
│   ├── banner.css           Homepage hero banner
│   ├── buttons.css          Pill buttons (notes / repo / filter)
│   ├── cards.css            Card system: algorithm / project / note cards
│   ├── gallery.css          Dashboard image grid
│   ├── footer.css           Footer + social links
│   └── responsive.css       Global mobile overrides
│
├── js/
│   ├── data.js               *** Single source of truth for content ***
│   ├── navbar.js             Renders sticky navbar + footer on every page
│   ├── sparkles.js           Ambient floating sparkle decoration
│   ├── render-home.js        Roadmap + progress summary (index.html)
│   ├── render-algorithms.js  Algorithm cards, search, status filter chips
│   ├── render-projects.js    Project cards + dashboard galleries
│   └── render-notes.js       Notes library cards
│
└── assets/
    ├── images/            optional — only needed if you switch the banner to a photo
    ├── notes/             PDF notes go here
    └── dashboards/<repo>/ Per-project chart images go here
```

## How to add content (no HTML editing required)

Everything on the Algorithms, Projects, and Notes pages is generated from
`js/data.js`. To add something new, add one object to the relevant array —
the page re-renders automatically.

**New algorithm:**
```js
{
  id: "svm",
  name: "Support Vector Machines",
  status: "upcoming",          // 'done' | 'learning' | 'upcoming'
  description: "...",
  repo: "https://github.com/you/repo",   // or null
  notes: "assets/notes/svm-notes.pdf"    // or null
}
```

**New project:** add to `PROJECTS`, with an optional `gallery: []` array of
image paths — leave it empty to hide the dashboard toggle entirely.

**New notes entry:** add to `NOTES` with a `topic`, `description`, and `file`
path to the PDF.

## Notes

- The homepage banner is CSS-only (gradient + floating blobs) — no image
  asset required. If you ever want a photo banner instead, add an image to
  `assets/images/` and swap the `background` in `css/banner.css` for a
  `background-image`.
- The Linear Regression project card has no dashboard gallery for now —
  `gallery: []` in `js/data.js`. To bring it back, drop PNGs into
  `assets/dashboards/linear-regression/` and list their paths in that array;
  the "View Dashboard & Visualizations" toggle appears automatically once
  the array isn't empty.

## Running locally

No build step. Any static server works, e.g.:

```
python3 -m http.server 8080
```

Then open `http://localhost:8080/index.html`. (Opening `index.html` directly
via `file://` also works — nothing here depends on a server.)
