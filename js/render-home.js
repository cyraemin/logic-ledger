/* =========================================================
   HOMEPAGE — roadmap + progress summary
   ========================================================= */

function initRoadmap(){
  const mount = document.getElementById("roadmap-content");
  if (!mount) return;
  mount.textContent = ROADMAP.join(" → ");
}

function initProgressSummary(){
  const mount = document.getElementById("progress-summary");
  if (!mount) return;

  const done = ALGORITHMS.filter(a => a.status === "done").length;
  const total = ALGORITHMS.length;
  const pct = Math.round((done / total) * 100);

  const learning = ALGORITHMS.find(a => a.status === "learning");

  mount.innerHTML = `
    <p>${done} of ${total} algorithms complete.</p>
    <div class="progress">
      <div class="progress-fill" style="width:${pct}%"></div>
    </div>
    <div class="progress-caption">
      <span>${pct}% through the algorithms roadmap</span>
      <a href="algorithms.html">View all →</a>
    </div>
    ${learning ? `
      <div class="card" style="margin-top:24px;">
        <h3>Currently Learning: ${learning.name}</h3>
        <p>${learning.description}</p>
      </div>
    ` : ""}
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  initRoadmap();
  initProgressSummary();
});
