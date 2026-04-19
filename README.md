# Mark Lack — AI & Data Portfolio Site

A clean, professional single-page portfolio website for an executive-level AI and data leader. Built with plain HTML, CSS, and minimal JavaScript. No frameworks, no build step, GitHub Pages ready.

---

## Overview

This site presents Mark Lack as a VP / Head of AI & Data Platforms, highlighting his hands-on work building practical enterprise AI systems. The design is restrained, professional, and easy to customize.

## Why I Built This

Executive AI leaders need a credible web presence that shows real work, not just credentials. This site surfaces concrete projects, communicates a clear point of view on enterprise AI, and makes it easy for potential collaborators or hiring managers to reach out.

## Sections Included

| Section | Description |
|---|---|
| **Hero** | Name, title, intro, and links to GitHub/LinkedIn |
| **About** | Executive positioning — practical AI, enterprise focus |
| **Featured AI Projects** | Four project cards linking to GitHub repos |
| **AI Approach** | Philosophy: grounded, decision-oriented, systems-thinking |
| **Contact / Links** | LinkedIn, GitHub, and email |

---

## How to Customize Links

Open `index.html` and update:

- **GitHub URL**: search for `https://github.com/marklack`
- **LinkedIn URL**: search for `https://linkedin.com/in/mark-lack`
- **Email**: search for `marklackwork@gmail.com`
- **Project links**: each `<article class="project-card">` contains a `<a class="card-link" href="...">` — update the `href` values

---

## How to Run Locally

No build tools needed. Open the project folder and run a simple local server:

**Option 1 — Python (recommended):**
```bash
cd ai-portfolio-site
python -m http.server 8080
```
Then open [http://localhost:8080](http://localhost:8080) in your browser.

**Option 2 — VS Code:**
Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, right-click `index.html`, and select "Open with Live Server."

**Option 3 — Open directly:**
Double-click `index.html` to open it in your browser. Smooth scrolling and nav highlighting will still work.

---

## How to Deploy on GitHub Pages

### Step 1 — Initialize and push the repo

```bash
cd ai-portfolio-site
git init
git add .
git commit -m "Initial commit: portfolio site"
git branch -M main
git remote add origin https://github.com/marklack/ai-portfolio-site.git
git push -u origin main
```

> Replace `marklack/ai-portfolio-site` with your actual GitHub username and repo name.

### Step 2 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`
4. Set **Branch** to `main` and folder to `/ (root)`
5. Click **Save**
6. Wait 1–2 minutes, then visit `https://<your-username>.github.io/ai-portfolio-site/`

GitHub will show a green banner with your live URL once deployment is complete.

---

## Author

**Mark Lack**
VP / Head of AI & Data Platforms

- [linkedin.com/in/mark-lack](https://linkedin.com/in/mark-lack)
- [github.com/marklack](https://github.com/marklack)
- marklackwork@gmail.com
