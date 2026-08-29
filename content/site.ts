/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  START HERE — your name, your course, your semester.
 * ─────────────────────────────────────────────────────────────────────────────
 *  Everything in this file is scaffolding until you replace it. Anything still
 *  wrapped in [square brackets] is a placeholder and will be flagged as such
 *  on the site, so nothing here is ever presented as your real experience.
 */

export const site = {
  /** Shown in the header, the page titles and the footer. */
  journalTitle: "Semester Reflections",

  /** Replace with your name. */
  studentName: "[Your Name]",

  /** Optional — a program, major, or year. Leave as "" to hide it. */
  studentProgram: "[Your Major / Year]",

  /** Used for metadata and the footer. Leave as "" to hide it. */
  studentEmail: "",

  course: {
    code: "AI 285",
    /** Replace with the official course title from your syllabus. */
    title: "[Course Title]",
    /** Replace with your instructor's name. */
    instructor: "[Instructor Name]",
    institution: "[University Name]",
    term: "Fall 2026",
  },

  /** Total weeks in the journal. The timeline and progress bar read this. */
  totalWeeks: 15,

  /**
   * Set this once your site is live on Vercel, e.g.
   * "https://ai285-reflection.vercel.app". It is only used for SEO metadata
   * and the sitemap — the site works fine without it.
   */
  siteUrl: "https://ai285-reflection.vercel.app",

  /** One or two sentences for the home page and search engines. */
  tagline:
    "A semester-long digital reflection journal — one entry a week, from Week 1 through the final meta-reflection.",
} as const;

/** True for any string still wrapped in [brackets]. */
export function isUnfilled(value: string): boolean {
  return /^\s*\[.*\]\s*$/.test(value);
}
