# marckayrouz.com

Personal site. Built with [Astro](https://astro.build), deployed to GitHub Pages on the apex domain `marckayrouz.com`.

## Local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs ./dist
npm run preview  # serves the build locally
```

## Layout

```
src/
  components/   small UI pieces
  content/      markdown content collections (notes/)
  layouts/      page shells
  pages/        routes
  styles/       global CSS
public/         static assets copied as-is (CNAME, favicons, og image)
```

## Deploy

A push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys to GitHub Pages. The custom domain is wired through `public/CNAME`.

## Adding a note

Drop a markdown file in `src/content/notes/` with this frontmatter:

```yaml
---
title: "Post title"
date: 2026-05-02
summary: "One-line summary used on the index."
draft: false
---
```

Drafts are excluded from the production build.
