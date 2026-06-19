document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("post-content");
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  if (!slug) {
    location.href = "index.html";
    return;
  }

  // Read progress helpers
  function getReadDays() {
    try {
      return JSON.parse(localStorage.getItem("string_studio_read") || "[]");
    } catch {
      return [];
    }
  }
  function saveReadDays(arr) {
    localStorage.setItem("string_studio_read", JSON.stringify(arr));
  }

  try {
    const metaRes = await fetch("posts/posts.json");
    const posts = await metaRes.json();
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
      container.innerHTML = "<p>Post not found.</p>";
      return;
    }

    const mdRes = await fetch(`posts/${post.slug}.md`);
    const mdText = await mdRes.text();

    marked.setOptions({
      highlight: function (code, lang) {
        if (lang && hljs.getLanguage(lang)) {
          return hljs.highlight(code, { language: lang }).value;
        }
        return hljs.highlightAuto(code).value;
      },
      breaks: true,
    });

    // Split content by <!-- EN --> marker
    const parts = mdText.split("<!-- EN -->");
    const zhContent = marked.parse(parts[0].trim());
    const enContent = parts[1] ? marked.parse(parts[1].trim()) : null;

    document.title = `${post.title} - String Studio`;

    const tagsHtml = post.tags
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");

    const langBtnHtml = enContent
      ? `<button class="lang-toggle" id="lang-btn" onclick="toggleLang()">EN</button>`
      : "";

    // Check if already read
    const readDays = getReadDays();
    const isRead = readDays.includes(slug);

    container.innerHTML = `
      <div class="post-header-row">
        <div class="post-meta">${post.date}</div>
        <div class="post-header-actions">
          ${langBtnHtml}
        </div>
      </div>
      <h1 id="post-title">${post.title}</h1>
      <div class="post-article-tags">${tagsHtml}</div>
      <div class="post-body" id="post-body-zh">${zhContent}</div>
      ${enContent ? `<div class="post-body" id="post-body-en" style="display:none">${enContent}</div>` : ""}
      <div class="mark-read-section">
        <button class="bookmark-btn ${isRead ? "bookmarked" : ""}" id="bookmark-btn" onclick="toggleBookmark()">
          ${isRead ? "Completed" : "Mark as Read"}
        </button>
      </div>
    `;

    // Store data for toggling
    window._postTitleZh = post.title;
    window._postTitleEn = post.title_en || post.title;
    window._currentLang = "zh";
    window._slug = slug;

    // Toggle bookmark function
    window.toggleBookmark = function () {
      const btn = document.getElementById("bookmark-btn");
      const days = getReadDays();
      const idx = days.indexOf(slug);
      if (idx === -1) {
        days.push(slug);
        btn.textContent = "Completed";
        btn.classList.add("bookmarked");
      } else {
        days.splice(idx, 1);
        btn.textContent = "Mark as Read";
        btn.classList.remove("bookmarked");
      }
      saveReadDays(days);
    };
  } catch (err) {
    container.innerHTML = "<p>Failed to load post.</p>";
  }
});

function toggleLang() {
  const btn = document.getElementById("lang-btn");
  const zhDiv = document.getElementById("post-body-zh");
  const enDiv = document.getElementById("post-body-en");
  const titleEl = document.getElementById("post-title");

  if (!enDiv) return;

  if (window._currentLang === "zh") {
    zhDiv.style.display = "none";
    enDiv.style.display = "block";
    btn.textContent = "ZH";
    titleEl.textContent = window._postTitleEn;
    window._currentLang = "en";
  } else {
    zhDiv.style.display = "block";
    enDiv.style.display = "none";
    btn.textContent = "EN";
    titleEl.textContent = window._postTitleZh;
    window._currentLang = "zh";
  }
}
