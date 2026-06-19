# String Studio

A daily challenge project documenting Computer Science & Coding knowledge. The author reads CS and programming textbooks every day, takes notes with illustrations, and shares key concepts, insights, and learning reflections through articles.

## How to Add a New Post

1. Create a markdown file in `posts/` folder, e.g. `posts/day1.md`
2. Add the post metadata to `posts/posts.json`:

```json
{
  "slug": "day1",
  "title": "Day 1 - Your Title Here",
  "date": "2026-06-21",
  "summary": "A short description of the post.",
  "tags": ["topic1", "topic2"]
}
```

3. Write your content in the markdown file. You can use:
   - **Text** with full Markdown syntax
   - **Code blocks** with syntax highlighting (use \`\`\`python, \`\`\`javascript, etc.)
   - **Images** - put images in `images/` and reference them: `![alt](images/my-image.png)`
   - **Tables, blockquotes, lists** and more

## How to Run Locally

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

Then open `http://localhost:8000` in your browser.

## Deploy on GitHub Pages

1. Go to repo Settings > Pages
2. Set source to "Deploy from a branch"
3. Select `main` branch and `/ (root)` folder
4. Save - your site will be live at `https://<username>.github.io/string_studio_cdy/`
