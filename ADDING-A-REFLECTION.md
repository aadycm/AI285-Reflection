# Adding a weekly reflection

The whole weekly workflow is **edit one file, commit, push.** Vercel rebuilds and
the new week appears in the timeline, the archive, the progress bar and the
"latest reflection" slot on the home page automatically. You never edit
navigation or layout.

---

## The 6-step weekly routine

**1. Open the file for the week.**

```
content/reflections/week-02.ts
```

(Week 3 is `week-03.ts`, Week 10 is `week-10.ts`, and so on. All fifteen files
already exist.)

**2. Fill in the fields.** Everything is labelled. A finished week looks like:

```ts
const week2: Reflection = {
  week: 2,
  title: "The Week I Stopped Trusting My Own Summary",
  dateRange: "August 31 – September 4",
  status: "published",     // ← was "upcoming"
  isPlaceholder: false,    // ← was true
  excerpt: "One or two sentences shown on the week card and in the archive.",
  tags: ["ethics", "group work"],

  keyLearningMoments: [
    "A paragraph about what actually landed this week.",
    "Another paragraph.",
  ],

  personalConnections: [
    "How it connects to your own goals, interests or plans.",
  ],

  challengesAndGrowth: [
    "What was hard, and what you did about it.",
  ],

  ai: { /* see step 4 */ },
};
```

**3. Set the two switches.**

| Field | Change it to | What it does |
| --- | --- | --- |
| `status` | `"published"` | Makes the week readable and counts it toward progress |
| `isPlaceholder` | `false` | Removes the yellow "this is scaffolding" notice |

**4. Document the AI tool.**

```ts
  ai: {
    tool: "Claude (Opus 5)",
    purpose: "What you asked it to do.",
    howItHelped: "What is concretely better in this entry because of it.",
    verification: {
      aiOriginallySaid: "…",
      iChangedItTo: "…",
      howIChecked: "…",
    },
  },
```

**5. Write the Verification Nudge.** This is a graded requirement, so the site
renders it in its own gold panel on every entry. Name **one** specific thing:

> **The AI originally** described the Week 2 reading as arguing X.
> **I changed it to** Y — the reading actually argues the opposite.
> **How I checked:** reread pages 40–43 and my lecture notes from Tuesday.

If you leave it blank the site says *"Not recorded yet"* in that panel, so a
missing verification note is impossible to overlook.

**6. Publish.**

```bash
git add . && git commit -m "Add Week 2 reflection" && git push
```

Vercel deploys automatically. That's it.

---

## Three ways to write a section

Every section (`keyLearningMoments`, `personalConnections`,
`challengesAndGrowth`) is a list, and each item can be one of three things:

```ts
"Just a plain string."                       // → a paragraph
{ list: ["First point", "Second point"] }    // → a bulleted list
{ quote: "A line worth pulling out.",        // → a pull quote
  attribution: "Optional source" }
```

Mix them freely:

```ts
keyLearningMoments: [
  "Opening paragraph.",
  { list: ["One thing", "Another thing"] },
  { quote: "Something from the reading.", attribution: "Author, p. 41" },
  "Closing paragraph.",
],
```

---

## The other files you'll edit

| File | What's in it | How often |
| --- | --- | --- |
| `content/site.ts` | Your name, course, instructor, institution, term | **Once, first** |
| `content/about.ts` | The three About-page sections | Once, early |
| `content/reflections/week-NN.ts` | One weekly reflection | Weekly |
| `content/final-reflection.ts` | The end-of-semester meta-reflection | Once, at the end |

`content/reflections/_TEMPLATE.txt` is a copy-paste reference.
`content/index.ts` wires everything together — **you never need to touch it.**

---

## Placeholder text

Anything wrapped in `[square brackets]` is a prompt, not real content. While
`isPlaceholder` is `true`, the site displays a visible notice on that entry so
scaffolding is never mistaken for your actual experience. Replace the bracketed
text, flip the flag, and the notice disappears.

---

## Working locally (optional)

You do not need to run the site locally — you can edit files directly on
GitHub and let Vercel rebuild. But if you want to preview first:

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>. Changes appear as you save.

Before pushing a big change, this catches typos:

```bash
npm run build
```
