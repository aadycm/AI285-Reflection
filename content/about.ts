/**
 * ─── THE ABOUT PAGE ──────────────────────────────────────────────────────────
 *  Three short, personal sections. Replace the bracketed prompts with your own
 *  writing. Each array is a list of paragraphs — add or remove as you like.
 */
import type { Block } from "./types";

export const about: {
  /** Set to false once the writing below is genuinely yours. */
  isPlaceholder: boolean;
  intro: Block[];
  whyThisFormat: Block[];
  responsibleAI: Block[];
} = {
  isPlaceholder: true,

  intro: [
    "[Introduce yourself in two or three sentences: your name, your program or year, and what you are studying.]",
    "[What brought you to this course, and what you are hoping to get out of it.]",
  ],

  whyThisFormat: [
    "[Why a website rather than a document: what does a public, cumulative, week-by-week format make possible that a private file would not?]",
    "[What you want this to be by the end of the semester — a record, an argument, a portfolio piece, something you would actually reread.]",
  ],

  responsibleAI: [
    "[Where AI belongs in your process — and where you have decided it does not.]",
    "[What you always do yourself, before any tool is involved.]",
    "[How you check what a tool gives you, and why the verification note appears on every single entry here.]",
  ],
};
