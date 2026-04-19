# Forum Website — Project Notes

## Stack
- Vite + React 19 + TypeScript (strict) + Tailwind CSS 4
- Deploying to **Vercel**
- Node package manager: npm

## Content layer
All site content lives in `src/data/`. Components **never import directly from these files** — they always import from `src/content.ts`.

```
src/
  content.ts        ← single import point for all components
  data/
    event.ts        ← EVENT config, INTRO_PARAGRAPH, isIntroWordHighlighted
    nav.ts          ← NAV_LINKS
    faculty.ts      ← FACULTY profiles
    itinerary.ts    ← ITINERARY schedule
    program.ts      ← PILLARS, PROGRAM_ITEMS
    registry.ts     ← REGISTRY_INTRO, REGISTRY_CATEGORIES
    sponsors.ts     ← GOLD_SPONSOR, REGULAR_SPONSORS, SUPPORTED_BY
```

**Why this matters:** When migrating to Notion or Google Sheets, only `src/data/*.ts` files change. `src/content.ts` and all components stay untouched.

## Planned: CMS for non-technical editors
Non-technical team members need to edit faculty profiles, event details, itinerary, and sponsors without touching code.

**Chosen approach:** Notion or Google Sheets + n8n + Vercel

| | Notion | Google Sheets |
|---|---|---|
| Editor UX | Cleaner, better for rich text bios | Familiar spreadsheet |
| n8n trigger | Poll every ~10 min | Native webhook (instant) |
| Rich text | Native | Awkward |
| Cost | Free | Free |

**When ready to implement:**
1. Pick content source (Notion or Sheets)
2. Add API token as Vercel environment variable (`NOTION_TOKEN` or Google service account)
3. Write `scripts/fetch-content.ts` — fetches from API, writes to `src/data/*.ts`
4. Update Vercel build command: `node scripts/fetch-content.ts && vite build`
5. Set up n8n: trigger on content change → POST to Vercel deploy hook URL
6. Add `vercel.json` with security headers

## Security notes
- `innerHTML` was removed from `Faculty.tsx` — use `createElement` + `textContent` if placeholder logic changes
- No `dangerouslySetInnerHTML` anywhere — keep it that way
- All external links must have `rel="noopener noreferrer"`
- Secrets go in `.env.local` (gitignored) — never hardcode in source

## Adding a new faculty member
Edit `src/data/faculty.ts`. Add image to `public/`. Bio supports plain strings and `{ highlight: "text" }` objects for turquoise highlights.

## Adding a sponsor
- Gold sponsor: edit `GOLD_SPONSOR` in `src/data/sponsors.ts`
- Regular sponsor: add to `REGULAR_SPONSORS`
- Supported by logos: add to `SUPPORTED_BY` with appropriate Tailwind `className` for sizing
