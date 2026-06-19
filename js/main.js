document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("posts-list");
  let currentLang = "zh";

  // Read progress from localStorage
  function getReadDays() {
    try {
      return JSON.parse(localStorage.getItem("string_studio_read") || "[]");
    } catch {
      return [];
    }
  }

  try {
    const res = await fetch("posts/posts.json");
    const posts = await res.json();

    if (posts.length === 0) {
      container.innerHTML =
        '<div class="empty-state"><p>No posts yet. Start writing!</p></div>';
      return;
    }

    // Sort by date ascending for progress calculation, descending for display
    const sortedByDate = [...posts].sort((a, b) => new Date(a.date) - new Date(b.date));
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Add lang toggle button to header
    const header = document.querySelector(".site-header .container");
    const langBtn = document.createElement("button");
    langBtn.className = "lang-toggle";
    langBtn.id = "lang-btn";
    langBtn.textContent = "EN";
    header.appendChild(langBtn);

    function renderPosts() {
      const readDays = getReadDays();
      const readCount = sortedByDate.filter((p) => readDays.includes(p.slug)).length;
      const totalCount = sortedByDate.length;

      // Find next unread post
      const nextUnread = sortedByDate.find((p) => !readDays.includes(p.slug));

      // Progress bar section
      const progressPct = totalCount > 0 ? Math.round((readCount / totalCount) * 100) : 0;

      const continueHtml = nextUnread
        ? `<a class="continue-btn" href="post.html?slug=${nextUnread.slug}">
            ${currentLang === "zh" ? "Continue Reading" : "Continue Reading"}: ${currentLang === "zh" ? nextUnread.title : (nextUnread.title_en || nextUnread.title)}
           </a>`
        : `<span class="progress-complete">${currentLang === "zh" ? "All done!" : "All done!"}</span>`;

      const progressHtml = `
        <div class="progress-section">
          <div class="progress-header">
            <span class="progress-label">${currentLang === "zh" ? "Reading Progress" : "Reading Progress"}</span>
            <span class="progress-count">${readCount} / ${totalCount}</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${progressPct}%"></div>
          </div>
          ${continueHtml}
        </div>
      `;

      const cardsHtml = posts
        .map((post) => {
          const isRead = readDays.includes(post.slug);
          return `
        <div class="post-card ${isRead ? "post-card-read" : ""}" onclick="location.href='post.html?slug=${post.slug}'">
          <div class="post-card-top">
            <div class="post-card-date">${post.date}</div>
            ${isRead ? '<span class="read-badge">Read</span>' : ""}
          </div>
          <div class="post-card-title">${currentLang === "zh" ? post.title : (post.title_en || post.title)}</div>
          <div class="post-card-summary">${currentLang === "zh" ? post.summary : (post.summary_en || post.summary)}</div>
          <div class="post-card-tags">
            ${post.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </div>
      `;
        })
        .join("");

      container.innerHTML = progressHtml + cardsHtml;
    }

    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "zh" ? "en" : "zh";
      langBtn.textContent = currentLang === "zh" ? "EN" : "ZH";
      renderPosts();
    });

    renderPosts();
  } catch (err) {
    container.innerHTML =
      '<div class="empty-state"><p>Failed to load posts.</p></div>';
  }
});
