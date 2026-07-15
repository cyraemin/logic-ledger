/* =========================================================
   PROJECTS PAGE
   ========================================================= */

function projectCardHtml(project){
  const tagsHtml = project.tags.map(t => `<span class="tag">${t}</span>`).join("");

  const galleryHtml = project.gallery.length
    ? `
      <details class="dashboard-section">
        <summary>View Dashboard &amp; Visualizations</summary>
        <div class="gallery">
          ${project.gallery.map(src => `<img src="${src}" alt="${project.name} visualization" loading="lazy">`).join("")}
        </div>
      </details>
    `
    : "";

  return `
    <article class="card project-card">
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <div class="tag-row">${tagsHtml}</div>
      <a href="${project.repo}" target="_blank" rel="noopener" class="repo-btn">GitHub Repository</a>
      ${galleryHtml}
    </article>
  `;
}

function initProjectsPage(){
  const mount = document.getElementById("projects-grid");
  if (!mount) return;

  mount.innerHTML = PROJECTS.map(projectCardHtml).join("");
}

document.addEventListener("DOMContentLoaded", initProjectsPage);
