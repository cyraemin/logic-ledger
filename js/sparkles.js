/* =========================================================
   AMBIENT SPARKLES
   ========================================================= */

function renderSparkles(){
  const mount = document.getElementById("sparkle-mount");
  if (!mount) return;

  mount.innerHTML = `
    <div class="sparkle s1">✦</div>
    <div class="sparkle s2">✧</div>
    <div class="sparkle s3">✦</div>
    <div class="sparkle s4">✧</div>
  `;
}

document.addEventListener("DOMContentLoaded", renderSparkles);
