/* =========================================================
   ALGORITHMS PAGE — render + search + filter
   ========================================================= */

const STATUS_META = {
  done:      { label: "✅ Done",      badgeClass: "status-badge--done" },
  learning:  { label: "🔄 Learning",  badgeClass: "status-badge--learning" },
  upcoming:  { label: "🔜 Upcoming",  badgeClass: "status-badge--upcoming" }
};

function algoCardHtml(algo){
  const meta = STATUS_META[algo.status];

  const repoBtn = algo.repo
    ? `<a href="${algo.repo}" target="_blank" rel="noopener" class="repo-btn btn--sm">GitHub Repository</a>`
    : "";

  const notesBtn = algo.notes
    ? `<a href="${algo.notes}" target="_blank" class="notes-button btn--sm">Open Notes</a>`
    : "";

  return `
    <article class="card algo-card" data-name="${algo.name.toLowerCase()}" data-status="${algo.status}">
      <div class="algo-card-top">
        <h3>${algo.name}</h3>
        <span class="status-badge ${meta.badgeClass}">${meta.label}</span>
      </div>
      <p>${algo.description}</p>
      <div class="algo-card-actions">
        ${repoBtn}
        ${notesBtn}
      </div>
    </article>
  `;
}

function renderAlgorithms(list){
  const mount = document.getElementById("algorithms-grid");
  if (!mount) return;

  if (list.length === 0){
    mount.innerHTML = "";
    document.getElementById("no-results").classList.add("is-visible");
    return;
  }

  document.getElementById("no-results").classList.remove("is-visible");
  mount.innerHTML = list.map(algoCardHtml).join("");
}

function applyAlgorithmFilters(){
  const query = document.getElementById("algo-search").value.trim().toLowerCase();
  const activeChip = document.querySelector(".filter-chip.is-active");
  const statusFilter = activeChip ? activeChip.dataset.status : "all";

  const filtered = ALGORITHMS.filter(algo => {
    const matchesQuery = algo.name.toLowerCase().includes(query);
    const matchesStatus = statusFilter === "all" || algo.status === statusFilter;
    return matchesQuery && matchesStatus;
  });

  renderAlgorithms(filtered);
}

function initAlgorithmsPage(){
  const grid = document.getElementById("algorithms-grid");
  if (!grid) return;

  renderAlgorithms(ALGORITHMS);

  const searchInput = document.getElementById("algo-search");

  // Pick up ?q= from the navbar's global search
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q");
  if (q) searchInput.value = q;

  searchInput.addEventListener("input", applyAlgorithmFilters);

  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      applyAlgorithmFilters();
    });
  });

  applyAlgorithmFilters();
}

document.addEventListener("DOMContentLoaded", initAlgorithmsPage);
