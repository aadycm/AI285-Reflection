import type { Reflection } from "../types";

/** ─── WEEK 8 ─────────────────────────────────────────────────────────────── */
const week8: Reflection = {
  week: 8,
  title: "Halfway, and Something That Made Things Up",
  dateRange: "October 12 – October 16",
  status: "published",
  isPlaceholder: false,

  excerpt:
    "Class was on AI tools and vision. In my research, an AI generated content that wasn't backed by the data and didn't flag that it had done it. Halfway through the semester, that is the clearest version yet of the thing I keep running into.",

  tags: ["AI tools", "vision", "research", "hallucination", "midpoint"],

  keyLearningMoments: [
    "Class this week was on AI tools and vision, and we went through workflow tools — Zapier, Make and n8n. Zapier and n8n came up back in Week 2, when Fusco showed the backend of what the AI was doing in them, and that was the week I went off and built my first agent in n8n. Coming back to them now, with Make added, lands differently than it did then, because in between I have spent a semester finding out how these systems fail. Week 8 is also the midpoint, so rather than treat it as just another week I went back over the first seven. The course has moved in a line I didn't notice while I was inside it: AI personas in Week 3, a custom assistant in Week 4, real interviews in Week 5, prototyping and storyboards in Week 6, peer review in Week 7. Each step takes the thing you built and puts it in front of something that can tell you it is wrong — first real users, then a working prototype, then other people's eyes.",
    "The pattern I keep hitting is that none of the failures announce themselves. My Week 4 assistant still answered when I injected prompts into it. Claude's Week 5 personas still sounded reasonable while handing back my own assumptions. The Week 6 sensor still returned numbers, they were just wrong. In Week 7 the attacks I was confident would land were flagged and failed instead. Four different systems, same shape — the output looked fine.",
    "This week gave me the sharpest version of it yet, and it was in my research rather than in class.",
  ],

  personalConnections: [
    "Prompt injection started as a side experiment on my own custom GPT in Week 4 and is now what I actually research, with Amulya Yadav and with Saha. I did not plan that. Looking back through these entries, the journal recorded the path before I had noticed it was a path.",
    "That makes this week's incident land differently than it would have in September. I am working on how AI systems fail and whether you can trust what they give back. Then one of the tools I was using generated content that was not supported by the data and did not say so. It is one thing to study that behaviour and another to have it turn up in your own work.",
  ],

  challengesAndGrowth: [
    "In my research, working in AgentDojo, the agent generated fake data — including currencies and trading figures that were not in the dataset at all. It did not ask, it did not flag anything, and it did not read as a guess. Honestly it was unsettling, because the invented numbers looked exactly like the real ones. Fabricated figures in a trading context are not a cosmetic error either. If I had not caught them, everything built on top of them would have been wrong.",
    "I had to go back over the whole thing and fix it. Not a quick check of the part I was suspicious about, but a full pass, because once I knew it had invented something I no longer knew which parts I could trust. That is the real cost of this kind of error. A tool that breaks loudly costs you the broken part. A tool that invents quietly costs you confidence in everything it touched.",
    "The recurring difficulty of the semester has been volume rather than difficulty — midterms in Weeks 4 and 5, quizzes and assignments in Week 6, research starting in Week 7. What has actually changed is what I do with AI output. In Week 4 I would have taken a working assistant as finished. This week I rechecked an entire piece of research against the data, and I think that shift is the most useful thing this course has given me so far.",
  ],

  ai: {
    tool: "AgentDojo in my research, which is where the fabricated data came from, and Claude (Opus 5) in Claude Code for writing this reflection.",
    purpose:
      "In research I was running agents in AgentDojo against a dataset, continuing the prompt injection work I started in Week 7. For the journal, I used Claude to turn my notes into this entry.",
    howItHelped:
      "It is genuinely faster for research work, which is why I use it. But this week showed the cost of that speed: the time I saved generating the output came straight back out of my week when I had to re-verify all of it against the data.",
    verification: {
      aiOriginallySaid:
        "generated fake data in my research — currencies and trading figures that I had not asked for and that were not in the dataset. Nothing in the output marked them as uncertain or invented; they were formatted and worded exactly like the figures that were real.",
      iChangedItTo:
        "a corrected version after going back through the whole task myself and rewriting the parts that were wrong. I did a full pass rather than a spot check, because once I knew it had fabricated one thing I could not assume the rest was sound.",
      howIChecked:
        "I checked it against the actual data. That is the only thing that settles it — the claims either hold up against what the data says or they do not, and these did not.",
    },
  },
};

export default week8;
