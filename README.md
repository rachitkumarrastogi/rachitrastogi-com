# rachitrastogi.com

Personal portfolio — AI Engineering Leader & Platform Architect.

## Project structure

```
rachitrastogi.com/
├── assets/resume/          # Source resume (.docx) — not served on web
├── docs/                   # Guides (photo uploads, etc.)
├── public/
│   ├── favicon.svg
│   ├── resume/               # PDF served at /resume/...
│   └── photos/               # Journey map & headshot images
├── src/
│   ├── components/
│   │   ├── layout/           # Header, Footer, nav, social icons
│   │   ├── sections/         # Page sections (Hero, About, …)
│   │   ├── journey/          # Interactive map
│   │   └── projects/         # Project showcase cards
│   ├── data/                 # Content (edit here)
│   └── lib/                  # Theme utilities
├── package.json
└── wrangler.toml             # Cloudflare Pages deploy
```

## Develop

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run build
```

Cloudflare Pages: build `npm run build`, output `dist/`.

## Content

| What | Where |
|------|--------|
| Profile, links | `src/data/profile.ts` |
| Journey map pins | `src/data/journey.ts` |
| Career history | `src/data/career.ts` |
| Projects | `src/data/projects.ts` |
| Education | `src/data/skills.ts` |
| Photos | `public/photos/` — see [docs/PHOTOS.md](docs/PHOTOS.md) |
