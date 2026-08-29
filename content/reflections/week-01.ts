import type { Reflection } from "../types";

/**
 * ─── WEEK 1 ──────────────────────────────────────────────────────────────────
 *  Replace the bracketed text with your own writing, then set
 *  `isPlaceholder: false`. Until you do, the site shows a visible notice that
 *  this page is scaffolding rather than your real reflection.
 */
const week1: Reflection = {
  week: 1,
  title: "[Your Week 1 title]",
  dateRange: "August 24 – August 28",
  status: "published",

  // ⬇︎ Change to false once the writing below is genuinely yours.
  isPlaceholder: true,

  excerpt:
    "[One or two sentences summarising your first week — this is what appears on the week card and in the archive.]",

  tags: ["orientation", "setting up the journal"],

  keyLearningMoments: [
    "[Who you are, in your own words: your name, your program, what brought you to this course, and what you were hoping for when you walked in.]",
    "[What this journal is: describe what you intend to do here each week for the rest of the semester, and what you want it to be by Week 15.]",
    "[Which concept, discussion, activity or reading from Week 1 actually stayed with you after class ended — and why that one rather than another.]",
  ],

  personalConnections: [
    "[Why you chose this format: what made a website the right home for a semester of reflection, compared with a document or a notebook.]",
    "[How Week 1's content connects to your own experiences, interests, goals or plans after graduation.]",
    {
      list: [
        "[What you want to be able to do by the end of the semester]",
        "[A question you are carrying into Week 2]",
        "[Something you want to be less uncertain about by the midpoint]",
      ],
    },
  ],

  challengesAndGrowth: [
    "[What was hard about Week 1 — the material, the setup, the pace, the unfamiliarity — and what you actually did about it.]",
    "[How you plan to use AI this semester: where you think it belongs in your process, and where you have decided it does not.]",
  ],

  ai: {
    tool: "[AI tool you used, e.g. Claude (Opus 5)]",
    purpose:
      "[What you asked it to do — e.g. structure the journal, pressure-test an argument, tidy phrasing after the ideas were already yours.]",
    howItHelped:
      "[How it improved this reflection specifically. Be concrete: what is better here because of it?]",
    verification: {
      aiOriginallySaid:
        "[What the AI originally suggested, wrote or claimed — quote or paraphrase it.]",
      iChangedItTo:
        "[What you replaced it with after checking.]",
      howIChecked:
        "[How you verified — your class notes, the syllabus, the assigned reading, or your own memory of what actually happened.]",
    },
  },
};

export default week1;
