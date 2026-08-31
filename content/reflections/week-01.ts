import type { Reflection } from "../types";

/**
 * ─── WEEK 1 ──────────────────────────────────────────────────────────────────
 *  The three reflection sections below are PROMPTS, not writing. Answer them in
 *  your own words, delete the brackets, then set `isPlaceholder: false`.
 *
 *  Length: the course asks for 300–500 words across the three sections, so
 *  roughly 120–170 words each. The entry shows its own word count in the
 *  metadata line under the title, so you can check as you go.
 *
 *  Week 1 also has to cover three things the later weeks don't: introduce
 *  yourself, say what platform you picked, and name the AI tool you selected.
 *  The prompts below put each of those somewhere sensible.
 *
 *  The AI documentation at the bottom is already filled in, because it is a
 *  factual record of how this site was actually built. Check it reads true to
 *  you and edit anything that doesn't.
 */
const week1: Reflection = {
  week: 1,
  title: "Syllabus Week",
  dateRange: "August 24 – August 28",
  status: "published",

  // ⬇︎ Change to false once the three sections below are your own writing.
  isPlaceholder: true,

  excerpt:
    "[Two sentences on what the first week actually was for you — what you walked in expecting, and what you walked out with.]",

  tags: ["syllabus week", "getting started"],

  keyLearningMoments: [
    "[Introduce yourself first — a few sentences. Your name, that you're a CS senior at Penn State, and why you signed up for this course. Then say what this journal is and what you intend to do with it every week until December.]",
    "[What did Professor Fusco spend the most time on in the first class? Not the whole syllabus — the one part he slowed down for.]",
    "[Experiential Learning Skills: what did you find out the course is actually about, compared to what you assumed when you registered for it? Was there anything in the syllabus that surprised you?]",
  ],

  personalConnections: [
    "[You took this course because it lines up with your interest in AI and how it gets used in the real world. Did Week 1 confirm that, complicate it, or point somewhere you weren't expecting?]",
    "[Why you chose a website over a document, a blog or a video — you said building and maintaining one keeps things more organized and quicker to get to. Say that in your own words here, since the assignment asks you to explain your platform choice.]",
    "[You're a CS senior — where does this course sit next to the rest of your final year and whatever comes after it? What do you actually want out of the next fifteen weeks?]",
  ],

  challengesAndGrowth: [
    "[Syllabus week is usually easy, so the honest answer might not be about the material. Was the harder part setting this site up, working out what a 'reflection' is supposed to sound like, or being asked to write about yourself at all?]",
    "[Whatever it was — what did you actually do about it?]",
    "[How you plan to use AI for the rest of the semester: where you think it belongs in your process, and where you've decided it doesn't.]",
  ],

  ai: {
    tool: "Claude (Opus 5), used inside Claude Code",
    purpose:
      "To build and deploy this journal itself — the site structure, the weekly content system, the timeline and progress tracking, and the mobile layout — rather than to write the reflections that go in it.",
    howItHelped:
      "It turned a semester's worth of scaffolding into something I only have to add one file to each week. The timeline, archive, progress bar and week-to-week navigation all update on their own when I publish a new entry, so the only thing left for me to do each week is the actual writing.",
    verification: {
      aiOriginallySaid:
        "set the course up as \"AI 285\" with a placeholder title and no instructor, and dated the semester as Fall 2026 with Week 1 running August 24–28 — dates it worked out from the calendar, not from my syllabus.",
      iChangedItTo:
        "the real course title, Experiential Learning Skills, and my instructor's name, David Fusco. The week dates are still the ones it guessed, so I need to check them against the syllabus and correct them.",
      howIChecked:
        "[Open the syllabus, confirm the actual Week 1 dates, and update this note to say what you found.]",
    },
  },
};

export default week1;
