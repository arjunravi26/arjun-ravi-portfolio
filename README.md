# Arjun Ravi — Portfolio

A lightweight, static personal portfolio built with Astro, TypeScript, Markdown and plain CSS. It has no database, application backend, authentication layer or runtime API.

## Requirements

- Node.js 22.23.4 or newer
- npm 9.6.5 or newer

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Astro.

## Production build

```bash
npm run build
npm run preview
```

The generated static site is written to `dist/`.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Keep the build command as `npm run build` and output directory as `dist` (Vercel normally detects Astro automatically).
4. Optionally set `SITE_URL` to the final public URL for canonical links and social previews.

The project uses static output and does not need a server adapter.

## Update profile details

Edit `src/data/site.ts`:

- `headline`, `intro`, `introSecond`: homepage introduction.
- `availability` and `location`: current job-search status and location.
- `email`, `github`, `linkedin`, `medium`, `leetcode`: public links.
- `proofPoints`: the three contribution metrics on the homepage.
- `timeline`, `education`, `skillGroups`: experience, education and skills.

Keep performance claims tied to a clear measurement context. Do not publish confidential client data or credentials.

## Add a Medium article

Create a Markdown file in `src/content/writing/`, for example `my-new-medium-post.md`:

```yaml
---
title: "Article title"
date: 2026-12-01
category: "LLM Systems"
summary: "One sentence, written by you, explaining what the reader will learn."
type: external
externalUrl: "https://medium.com/@your-handle/article-url"
featured: false
---
```

The article appears automatically in the homepage's recent-writing list and the `/writing/` archive after deployment. The full article remains on Medium.

## Publish a native article

Create a Markdown file in `src/content/writing/` with the same metadata, set `type: native`, and write the article below the frontmatter. It will get its own `/writing/<slug>/` page and appear in the same archive.

## Add or edit a project

Create or edit a Markdown file in `src/content/work/`. Use `content-templates/project.md` as the starting point. Set `featured: true` and an `order` value to show it on the homepage. Add a repository URL only when the repository is public and relevant.

## Replace the resume

Replace `public/resume.pdf` with the latest public-safe PDF. The homepage and navigation already link to `/resume.pdf`. Keep personal phone details off the public copy if you do not want them indexed or scraped.

## Design notes

- Single-column editorial layout, with a narrow reading measure.
- Light theme with system-preference dark mode.
- Minimal JavaScript; no analytics or third-party runtime services.
- Project case studies and writing archive are statically generated.
