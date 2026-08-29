/**
 * Content types for the reflection journal.
 *
 * You should not normally need to edit this file. It exists so that your editor
 * can autocomplete and warn you if a weekly reflection is missing something.
 *
 * See ADDING-A-REFLECTION.md for the weekly workflow.
 */

/**
 * A block of writing inside a reflection section.
 *
 *  - A plain string renders as a paragraph.
 *  - `{ list: [...] }` renders as a bulleted list.
 *  - `{ quote: "...", attribution: "..." }` renders as a pull quote.
 */
export type Block =
  | string
  | { list: string[] }
  | { quote: string; attribution?: string };

/** The AI documentation required for every week. */
export interface AIDocumentation {
  /** e.g. "Claude (Opus 5)", "ChatGPT", "Claude + Grammarly" */
  tool: string;
  /** Why you reached for the tool this week. */
  purpose: string;
  /** How it actually improved the reflection. */
  howItHelped: string;
  /**
   * The Verification Nudge — required by the assignment.
   * State ONE thing the AI got wrong, or one thing you changed.
   */
  verification: {
    /** What the AI originally produced or claimed. */
    aiOriginallySaid: string;
    /** What you changed it to. */
    iChangedItTo: string;
    /** How you checked (notes, syllabus, reading, instructor, your own memory). */
    howIChecked: string;
  };
}

/** One weekly reflection. */
export interface Reflection {
  /** 1 through 15. */
  week: number;
  /** Your own title for the week. */
  title: string;
  /** e.g. "September 1 – September 5" */
  dateRange: string;
  /**
   * "published" makes the week readable on the site and counts toward progress.
   * "upcoming" shows it in the timeline as a future week.
   */
  status: "published" | "upcoming";
  /**
   * Leave `true` while the text is still sample/scaffold text. The site will
   * display a visible notice so placeholder writing is never mistaken for
   * your real experience. Set to `false` once the week is genuinely yours.
   */
  isPlaceholder: boolean;
  /** 1–2 sentences shown on cards and in the archive. */
  excerpt: string;
  /** Optional short labels, e.g. ["ethics", "group work"] */
  tags?: string[];

  /** What concepts, discussions, activities or experiences resonated. */
  keyLearningMoments: Block[];
  /** How the week connects to your experiences, goals, interests, future plans. */
  personalConnections: Block[];
  /** What was difficult, and how you worked through it. */
  challengesAndGrowth: Block[];

  /** AI tool documentation + the Verification Nudge. */
  ai: AIDocumentation;
}

/** The end-of-semester meta-reflection. */
export interface MetaReflection {
  title: string;
  dateRange: string;
  status: "published" | "upcoming";
  isPlaceholder: boolean;
  excerpt: string;
  /** Six guided prompts, already scaffolded for you. */
  sections: { heading: string; prompt: string; blocks: Block[] }[];
  ai: AIDocumentation;
}
