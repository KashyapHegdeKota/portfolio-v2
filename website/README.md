# Kashyap Hegde Kota Portfolio

High-polish developer portfolio built with Next.js App Router, Tailwind CSS,
Framer Motion, optimized local assets, and a filesystem-backed MDX blog.

## Commands

```bash
npm run dev
npm run lint
npm run build
npm run start
```

The dev server runs with the stable Next.js dev bundler. Production builds
statically prerender the home page, blog index, and every MDX slug generated
from local content.

## Route Map

- `/` renders the interactive portfolio homepage.
- `/blog` renders the local MDX blog index.
- `/blog/[slug]` renders statically generated MDX post pages.
- `/Resume` redirects to `/resume.pdf`.

## Architecture

- `src/app/layout.js` owns the global shell, cursor, loader, navbar, route
  transitions, and footer.
- `src/components/FluidCursor.js` implements the spring cursor and hover modes.
- `src/components/Magnetic.js` provides the reusable magnetic hover wrapper.
- `src/components/Hero.js`, `Projects.js`, `ExperienceTimeline.js`, and
  `Contact.js` compose the homepage sections.
- `src/components/PageTransition.js` manages route-level AnimatePresence
  transitions and active path context.
- `src/data/projects.js` stores the Bento grid project model.
- `src/lib/blog.js` parses local MDX frontmatter with `gray-matter` and derives
  reading time.
- `src/content/blog/*.mdx` contains blog posts.

## Blog Workflow

Add a new post under `src/content/blog`:

```mdx
---
title: "Post Title"
description: "Short summary shown on index cards."
date: "2026-07-09"
tags:
  - Next.js
  - Motion
featured: false
draft: false
---

Write the post in MDX here.
```

The filename becomes the slug unless `slug` is provided in frontmatter. Drafts
are excluded from both the index and static slug generation.

## Styling System

The site uses a dark base palette centered on `#0a0a0a`, semantic accents,
glass panels, responsive fluid typography, and article-specific `.prose-blog`
rules. Tailwind scans App Router files, components, data, lib helpers, and local
MDX content.

## Verification

Last verified with:

```bash
npm run lint
npm run build
```
