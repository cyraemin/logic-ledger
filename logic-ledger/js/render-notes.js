/* =========================================================
   NOTES PAGE
   ========================================================= */

function noteCardHtml(note){
  return `
    <article class="card note-card">
      <div class="note-card-info">
        <h3>${note.topic}</h3>
        <p>${note.description}</p>
      </div>
      <a href="${note.file}" target="_blank" class="notes-button">Open Notes</a>
    </article>
  `;
}

function initNotesPage(){
  const mount = document.getElementById("notes-grid");
  if (!mount) return;

  mount.innerHTML = NOTES.map(noteCardHtml).join("");
}

document.addEventListener("DOMContentLoaded", initNotesPage);
