import type { Reflection } from "../types";

/**
 * ─── WEEK 1 ──────────────────────────────────────────────────────────────────
 *  Most of this is drafted from what you actually said about yourself, your
 *  platform choice and how you use AI. The remaining [bracketed] lines are the
 *  ones only you can answer, because they are about what happened in class.
 *
 *  Fill those in, delete the brackets, then set `isPlaceholder: false`.
 *  The entry shows its own word count under the title — the course wants
 *  300–500 words across the three sections.
 */
const week1: Reflection = {
  week: 1,
  title: "Syllabus Week",
  dateRange: "August 24 – August 28",
  status: "published",

  // ⬇︎ Change to false once the bracketed gaps below are filled in.
  isPlaceholder: true,

  excerpt:
    "The first week of AI 285, which was mostly about getting set up — picking a platform, working out what I want this journal to be, and deciding how I'm going to use AI for the rest of the semester.",

  tags: ["syllabus week", "getting started"],

  keyLearningMoments: [
    "My name is Aadithya Chandramouli and I am a senior at Penn State University majoring in Computer Science. I signed up for AI 285 because it lines up closely with what I am already interested in, which is AI and how it actually gets used in the real world rather than just in theory. This site is where I am going to write one reflection every week for the rest of the semester, from now through Week 15, and then a final one at the end looking back across all of them.",
    "[What did Professor Fusco spend the most time on in the first class? Not the whole syllabus — the one part he slowed down for, and why you think he did.]",
    "[Experiential Learning Skills: now that you have seen the syllabus, what is the course actually about compared to what you assumed when you registered? Was there anything in it you were not expecting?]",
  ],

  personalConnections: [
    "[Week 1 either confirmed what you expected from this course or it did not. Say which, in a sentence or two.]",
    "I picked a website for this instead of a document because, from what I know, building and maintaining a site keeps everything more organized and quicker to get to. Every week gets its own page, the whole semester is laid out in one place, and I can see where I am in it without scrolling through one long file. It also means that adding a new week is a small, contained job rather than something I have to reorganize around every time.",
    "As a CS senior this is one of my last semesters, so I want to get something concrete out of it rather than just finishing it. What I want by December is a record I would actually read back, and a clearer sense of where AI fits into the way I work. [Add anything more specific you want out of the next fifteen weeks — something you could genuinely check in December.]",
  ],

  challengesAndGrowth: [
    "[Syllabus week is usually light, so the honest answer here probably is not the course material. Was the harder part setting this site up, working out what a reflection is supposed to sound like, or being asked to write about yourself at all? Whatever it was, say what you actually did about it.]",
    "For the rest of the semester I want to use AI the same way I already do when I build things. I usually put in my own ideas and effort first, get something working, and then ask AI how I can refine it or make it more efficient. That is the part I find genuinely useful — not having it start from nothing, but having it look at something I have already done and point out where it could be better. The part I want to be careful about is letting it do the thinking for me, especially in a course where the whole point is reflecting on my own experience.",
  ],

  ai: {
    tool: "Claude (Opus 5), used inside Claude Code",
    purpose:
      "Two things. First, to build and deploy this journal itself — the site structure, the weekly content system, the timeline and progress tracking, and the mobile layout. Second, to help me draft this first entry from notes I gave it about myself, why I picked this platform, and how I plan to use AI this semester.",
    howItHelped:
      "On the site side it turned a semester of scaffolding into something I only have to add one file to each week, since the timeline, archive, progress bar and week-to-week navigation all update on their own when I publish. On the writing side it worked from what I had already told it rather than inventing anything, and it left the parts about what actually happened in class for me to write, since it had no way of knowing those.",
    verification: {
      aiOriginallySaid:
        "set the course up as \"AI 285\" with a placeholder title and no instructor, and dated the semester as Fall 2026 with Week 1 running August 24–28 — dates it worked out from the calendar rather than from my syllabus.",
      iChangedItTo:
        "the real course title, Experiential Learning Skills, and my instructor's name, David Fusco. The week dates are still the ones it guessed, so I need to check them against the syllabus and correct them.",
      howIChecked:
        "[Open the syllabus, confirm the actual Week 1 dates, and finish this sentence with what you found.]",
    },
  },
};

export default week1;
