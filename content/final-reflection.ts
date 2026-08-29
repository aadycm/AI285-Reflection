import type { MetaReflection } from "./types";

/**
 * ─── FINAL SEMESTER META-REFLECTION ──────────────────────────────────────────
 *  The dedicated home for your end-of-semester reflection. The six prompts are
 *  already laid out; write into the `blocks` arrays underneath each one.
 *  Then set `status: "published"` and `isPlaceholder: false`.
 */
const finalReflection: MetaReflection = {
  title: "",
  dateRange: "December 7 – December 11",
  status: "upcoming",
  isPlaceholder: true,
  excerpt: "",

  sections: [
    {
      heading: "How My Thinking Changed",
      prompt:
        "Look back at Week 1. What did you believe then that you no longer believe, or believe differently?",
      blocks: [],
    },
    {
      heading: "How My Learning Evolved",
      prompt:
        "How did the way you study, prepare, participate or process the material shift across the semester?",
      blocks: [],
    },
    {
      heading: "How My Use of AI Changed",
      prompt:
        "Compare how you used AI in Week 1 to how you used it by Week 15. What did you stop doing? What did you start doing?",
      blocks: [],
    },
    {
      heading: "What I Learned About Verifying AI Output",
      prompt:
        "Across fifteen verification notes, what patterns did you notice in what AI gets wrong — and in how you catch it?",
      blocks: [],
    },
    {
      heading: "Challenges I Encountered",
      prompt:
        "What was genuinely hard this semester — in the material, the workload, the process, or the writing itself?",
      blocks: [],
    },
    {
      heading: "Overall Growth",
      prompt:
        "What can you do now that you could not do in August? What are you taking with you?",
      blocks: [],
    },
  ],

  ai: {
    tool: "",
    purpose: "",
    howItHelped: "",
    verification: {
      aiOriginallySaid: "",
      iChangedItTo: "",
      howIChecked: "",
    },
  },
};

export default finalReflection;
