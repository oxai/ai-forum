# Oxford Frontier AI Forum 2026 — Landing Site

Single-page landing site for the Oxford Frontier AI Forum 2026 (Saturday 30 May 2026, Mathematical Institute, Oxford).

Built with React 19, Vite 6, TypeScript and Tailwind CSS v4, with `motion/react` for animations.

## Prerequisites

- Node.js 20+

## Getting started

```bash
npm install
npm run dev
```

The dev server runs on [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the Vite dev server.
- `npm run build` — type-check and produce a production build in `dist/`.
- `npm run preview` — preview the production build locally.
- `npm run lint` — run the TypeScript type-checker.
- `npm run clean` — remove `dist/`.

## Project layout

```text
forum-website/
├─ index.html
├─ public/                      Static images served at the site root
└─ src/
   ├─ App.tsx                   Page composition
   ├─ main.tsx                  React entry point
   ├─ index.css                 Tailwind v4 import + theme tokens + fonts
   ├─ types.ts                  Shared types for content data
   ├─ data/
   │  └─ site.ts                All content (nav, pillars, program, itinerary, faculty, sponsors…)
   └─ components/
      ├─ ui/                    Reusable primitives: FadeIn, Word, CountdownTimer
      ├─ layout/                Navbar, Footer, NetworkBackground
      └─ sections/              One file per page section
```

## Editing content

All site copy — navigation links, pillars, program items, itinerary, faculty and sponsor data — lives in `src/data/site.ts`, typed against the interfaces in `src/types.ts`. The React components only render that data; no copy is hard-coded inside components.

## Styling

The brand palette and fonts are declared as Tailwind v4 theme tokens in `src/index.css` using the `@theme` directive. The accent color (`--color-turquoise: #32FFB6`) is available throughout as `text-turquoise`, `bg-turquoise`, `border-turquoise`, etc.
