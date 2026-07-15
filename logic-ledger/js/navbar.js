/* =========================================================
   NAVBAR + FOOTER
   Rendered via JS (not fetch()) so the site still works when
   opened directly from disk with no local server.
   ========================================================= */

const NAV_LINKS = [
  { label: "Home", href: "index.html" },
  { label: "Algorithms", href: "algorithms.html" },
  { label: "Projects", href: "projects.html" },
  { label: "Notes", href: "notes.html" },
  { label: "Roadmap", href: "index.html#roadmap" }
];

function currentPageName(){
  const path = window.location.pathname.split("/").pop();
  return path === "" ? "index.html" : path;
}

function renderNavbar(){
  const mount = document.getElementById("navbar-mount");
  if (!mount) return;

  const current = currentPageName();

  const linksHtml = NAV_LINKS.map(link => {
    const isActive = link.href.split("#")[0] === current;
    return `<li><a href="${link.href}" class="${isActive ? "is-active" : ""}">${link.label}</a></li>`;
  }).join("");

  mount.innerHTML = `
    <nav class="navbar">
      <a class="navbar-brand" href="index.html">Logic Ledger <span>☁</span></a>

      <button class="navbar-toggle" id="navbar-toggle" aria-label="Toggle navigation" aria-expanded="false">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      <ul class="navbar-links" id="navbar-links">
        ${linksHtml}
      </ul>

      <div class="navbar-right">
        <div class="navbar-search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <circle cx="11" cy="11" r="7"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" id="global-search" placeholder="Search algorithms..." autocomplete="off">
        </div>
      </div>
    </nav>
  `;

  const toggle = document.getElementById("navbar-toggle");
  const links = document.getElementById("navbar-links");
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Global search: typing here jumps to the Algorithms page with a query param
  const globalSearch = document.getElementById("global-search");
  globalSearch.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && globalSearch.value.trim()){
      window.location.href = `algorithms.html?q=${encodeURIComponent(globalSearch.value.trim())}`;
    }
  });
}

function renderFooter(){
  const mount = document.getElementById("footer-mount");
  if (!mount) return;

  const linksHtml = SOCIAL_LINKS.map(link =>
    `<a href="${link.href}" target="_blank" rel="noopener">${link.label}</a>`
  ).join("");

  mount.innerHTML = `
    <footer>
      <h3>Let's Connect</h3>
      <div class="social-links">${linksHtml}</div>
      <p class="footer-text">Built with curiosity, coffee and machine learning.</p>
    </footer>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  renderFooter();
});
