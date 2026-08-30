import type { Reflection } from "../types";

/**
 * ─── WEEK 1 ──────────────────────────────────────────────────────────────────
 *  The three reflection sections below are PROMPTS, not writing. Answer them in
 *  your own words, delete the brackets, then set `isPlaceholder: false`.
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
    "[What did Professor Fusco spend the most time on in the first class? Not the whole syllabus — the one part he slowed down for.]",
    "[Experiential Learning Skills: what did you find out the course is actually about, compared to what you assumed when you registered for it?]",
    "[Was there anything in the syllabus that surprised you, or that you weren't expecting from a course like this? The reflection journal requirement itself is fair game here.]",
  ],

  personalConnections: [
    "[You took this course because it lines up with your interest in AI and how it gets used in the real world. Did Week 1 confirm that, complicate it, or point somewhere you weren't expecting?]",
    "[You're a CS senior — where does this course sit next to the rest of your final year and whatever comes after it?]",
    "[What do you actually want out of the next fifteen weeks? Be specific enough that you could check in December whether you got it.]",
  ],

  challengesAndGrowth: [
    "[Syllabus week is usually easy, so the honest answer might not be about the material. Was the harder part setting this site up, working out what a 'reflection' is supposed to sound like, or being asked to write about yourself at all?]",
    "[Whatever it was — what did you actually do about it?]",
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
