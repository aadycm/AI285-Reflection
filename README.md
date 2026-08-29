# Semester Reflections — AI 285

A semester-long digital reflection journal: one entry per week from Week 1
through Week 15, followed by a final meta-reflection. Every entry carries
documented AI use and an explicit **Verification Nudge** stating one thing the
AI got wrong or one thing that was changed after checking it.

**→ Adding a week each week: [ADDING-A-REFLECTION.md](./ADDING-A-REFLECTION.md)**

---

## Start here

Before anything else, open [`content/site.ts`](./content/site.ts) and replace
the bracketed placeholders — your name, course title, instructor, institution.
Anything still in `[brackets]` is flagged on the site as unfilled, so nothing
scaffolded is ever presented as real.

Then write [`content/about.ts`](./content/about.ts) and
[`content/reflections/week-01.ts`](./content/reflections/week-01.ts).

## Where everything lives

```
content/
  site.ts                    ← your name, course, term          (edit first)
  about.ts                   ← the three About-page sections
  final-reflection.ts        ← the end-of-semester meta-reflection
  reflections/
    week-01.ts … week-15.ts  ← one file per week                (edit weekly)
    _TEMPLATE.txt            ← copy-paste reference
  types.ts                   ← field definitions (rarely edited)
  index.ts                   ← wires it together (never edited)

app/                         ← the pages
  page.tsx                     /                  home
  reflections/page.tsx         /reflections       searchable archive
  reflections/[week]/page.tsx  /reflections/week-N one reflection
  journey/page.tsx             /journey           semester timeline
  final-reflection/page.tsx    /final-reflection  meta-reflection
  about/page.tsx               /about

components/                  ← reusable UI
  AIDocumentation.tsx        ← the per-week AI block
  VerificationNudge.tsx      ← the highlighted verification panel
  Timeline.tsx               ← both the home strip and the journey timeline
  SemesterProgress.tsx       ← the animated progress dial
```

Everything derives from the content files. Publish a week and the timeline,
archive, progress percentage, prev/next navigation, home-page "latest
reflection" and sitemap all update on their own.

## Commands

```bash
npm install     # once
npm run dev     # local preview at http://localhost:3000
npm run build   # production build — run before pushing a big change
npm run typecheck
```

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · plain CSS Modules.
No UI framework, no CMS, no analytics, no runtime dependencies beyond React.
Every page is statically pre-rendered.

## Deployment

Hosted on GitHub, deployed on Vercel. Pushing to `main` triggers a rebuild —
see [DEPLOY.md](./DEPLOY.md).
