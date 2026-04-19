# Luma Integration Plan

Event URL: https://luma.com/aiforum
Capacity: 400 attendees

---

## What we can do with a Luma API key

### High Priority

**1. Live spot counter**
Replace the hardcoded "400" with a real-time remaining capacity pulled from Luma.
Show on the Apply section: "X spots remaining".

**2. Sold-out state**
When capacity hits 0, automatically disable the ticket button and show "SOLD OUT" instead of "Get Your Ticket". No manual intervention needed.

**3. Webhook → n8n → Vercel redeploy**
Every new Luma registration fires a webhook → n8n receives it → triggers a Vercel deploy → site rebuilds with a fresh spot count. Keeps the counter accurate without polling.

---

### Medium Priority

**4. Embedded registration form**
Embed Luma's registration form directly on the page instead of redirecting to luma.com. Smoother user experience, keeps attendees on the site.

**5. Sync event details from Luma**
Pull date, description, and cover image directly from Luma so edits made on Luma reflect on the site automatically — replaces some hardcoded values in `src/data/event.ts`.

---

### Lower Priority

**6. Confirmed attendee / speaker display**
Pull the guest list from Luma to display confirmed speakers or attendees on the site.

**7. Day-of check-in dashboard**
Internal page for the team to manage check-ins on the day of the event.

---

## Implementation steps (when API key is ready)

1. Add `LUMA_API_KEY` as a Vercel environment variable
2. Create `scripts/fetch-luma.ts` — fetches remaining capacity from Luma, writes to `src/data/luma-snapshot.json`
3. Update Vercel build command: `node scripts/fetch-luma.ts && vite build`
4. Update `src/components/sections/Apply.tsx` to read the snapshot and show live count + sold-out state
5. In Luma event settings, add webhook pointing to n8n
6. n8n workflow: [Luma webhook] → [POST to Vercel deploy hook]

## Files to touch
- `src/data/event.ts` — `maxAttendees` currently hardcoded at 400
- `src/components/sections/Apply.tsx` — ticket button and spot count
- `scripts/fetch-luma.ts` — to be created
- `vercel.json` — update build command
