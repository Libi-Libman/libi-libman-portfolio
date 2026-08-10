# Libi Libman — portfolio

A React + TypeScript + Tailwind implementation of the "Pixel A11y Portfolio"
design (Lotus colour scheme), built from the Claude Design handoff bundle in
`project/` and `chats/` (see below).

## Running it

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build to dist/
npm run lint     # eslint, including jsx-a11y checks
```

## Structure

- `src/components/` — one component per page section (`Header`, `Hero`,
  `A11yStats`, `QuestLog`/`ProjectCard`, `StatsSection`
  (`SkillsStats`/`AuditChecklist`), `Contact`, `Footer`).
- `src/data/` — `projects.ts` and `skills.ts`, the editable content for the
  Quest Log and Stats sections.
- `tailwind.config.ts` — the Lotus palette (deep forest/teal + hot-pink
  accent) as named design tokens.
- `public/resume.pdf` — placeholder résumé; replace with the real file when
  it's ready (the "RESUME (PDF)" button already links to `/resume.pdf`).

## Known placeholders (by design, see chat transcript)

- The 6 Quest Log project cards use the placeholder a11y-project set from the
  design, with placeholder striped screenshot blocks — no real screenshots
  were provided.
- Project case-study links, the archive page, and the accessibility
  statement page don't exist yet; their links are marked "(coming soon)" for
  screen reader users rather than left as unlabeled dead links.
- `public/resume.pdf` is a stub — swap in the real résumé.

---

## About the design handoff bundle (original notes)

This repo started as a **handoff bundle** from Claude Design (claude.ai/design):
a user mocked up designs in HTML/CSS/JS using an AI design tool, then
exported the bundle so a coding agent could implement the design for real.

- `chats/chat1.md` — the design conversation. The user asked for a cozy
  pixel-art accessibility-focused portfolio inspired by cofounder.co, iterated
  through several layout/colour directions, and landed on turn 4a: the 2a
  layout (dusk hero + a11y stats + Quest Log projects + Stats/audit + inn
  contact form) in the 3a "Lotus" palette (deep forest + teal, hot-pink
  accent). That turn is what's implemented here.
- `project/Pixel A11y Portfolio.dc.html` — the exported design prototype
  (all explored directions, not just the final one). Turn `4a` is the
  approved design.
- `project/support.js` — generated runtime that powers the `.dc.html`
  prototype viewer only; not used by the implemented app.
