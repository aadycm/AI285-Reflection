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
  isPlaceholder: false,

  intro: [
    "My name is Aadithya Chandramouli, and I am a senior at Penn State University majoring in Computer Science.",
    "I wanted to take AI 285 because it aligns closely with my interests in AI and its real-world applications.",
  ],

  whyThisFormat: [
    "I chose a website over a document because, from what I know, building and maintaining a website keeps things more organized and quicker to get to than a document would.",
  ],

  responsibleAI: [
    "I believe using AI for day-to-day work is going to help me a lot. When I am building something, I usually put in my own ideas and effort first, and from there I ask AI how I can refine what I have and make it more efficient.",
  ],
};
