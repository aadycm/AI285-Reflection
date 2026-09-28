import type { Reflection } from "../types";

/** ─── WEEK 5 ─────────────────────────────────────────────────────────────── */
const week5: Reflection = {
  week: 5,
  title: "Real People, Not AI Personas",
  dateRange: "September 21 – September 25",
  status: "published",
  isPlaceholder: false,

  excerpt:
    "Idea validation week. I interviewed three people about Hydro Node and found out that the AI personas I built in Week 3 had been agreeing with me. Real people led with the concerns the AI glossed over.",

  tags: ["idea validation", "customer interviews", "Hydro Node", "agent reliability"],

  keyLearningMoments: [
    "This week was about idea validation, which means going out and testing whether the thing you are building is actually wanted instead of assuming it. For my challenge project, Hydro Node, my core question was whether urban beginners would really want an automated hydroponic system, and whether the idea that it runs itself and tells you what to do in plain language feels worth it to someone who didn't build it. I interviewed three people: two housemates who are beginners, and an adult relative who has grown herbs and vegetables for years as my outside contact.",
    "The biggest thing I learned about interviewing is how much more you get by asking for stories instead of opinions. Asking what went wrong the last time someone tried to grow something got me the concrete frustrations — forgetting to water, not knowing what was wrong, cleaning turning into a chore. A yes or no question about whether they liked my idea would not have got me any of that.",
    "The surprise was that the most experienced grower was the most skeptical. He liked the idea of growing year-round, especially when the weather is bad, but he wanted to know how much he was actually getting out of it before spending money on the system. Expertise turned into harder questions about yield and running cost, not more enthusiasm. My beginner housemate put the other half of it plainly: they would use it if they didn't have to remember to water it every day.",
  ],

  personalConnections: [
    "Hydro Node is my own project, so this wasn't a hypothetical exercise. The interviews changed the pitch. I went in assuming it was effortless and cheaper than the store, and I came out convinced the real pitch is effortless and actually produces enough to be worth it, with nothing extra to clean or replace. I rewrote the value proposition to lead with effort instead of cost, to name a genuinely usable harvest, and to call out the ongoing pod and part costs that two of three people said would make them quit.",
    "The part that connects most to what I want to do after this is the comparison between the AI personas and the real people. I have been reading about agent reliability on my own, and this was a clean example of the exact failure I care about. The personas were agreeable and mostly handed back what I already believed. They sounded reasonable, which is what makes it dangerous — nothing about the output told me it was wrong. If I want to do research in this area, being able to notice that pattern is the skill, and I got to see it on my own project instead of in a paper.",
  ],

  challengesAndGrowth: [
    "It was a tight week. My second midterm was this week as well, and it went well, but fitting three interviews around studying for it meant there wasn't much slack anywhere. Getting the interviews done at all took more scheduling than I expected, since I needed my outside contact as well as my housemates.",
    "The hard part of the interviews themselves was listening more than I talked and not defending the concept when someone pushed back on it. My instinct when the experienced grower said a small indoor unit might not produce enough was to explain why he was wrong. Sitting with it instead is where the useful feedback came from, and it was harder than I expected.",
    "I also only got vague answers on the specifics that matter most: how much yield and what price point would make it feel worth it, and how much cleaning people will actually tolerate before they give up. If I did more interviews I would push on those directly, and I would try to reach a couple of people who don't really cook, to see whether framing it around herbs you actually cook with leaves them out.",
  ],

  ai: {
    tool: "Claude — used in Week 3 to generate the personas I tested this week, and again in Claude Code to write this reflection.",
    purpose:
      "I used Claude to turn my interview notes and my Week 5 assignment into this reflection. The more important AI use was the personas I generated with Claude in Week 3, which I deliberately tested against real interviews as part of this week's assignment.",
    howItHelped:
      "The personas were genuinely useful as a starting point for structuring my questions and thinking about who my users are. What they were not useful for was telling me where the idea was weak, and the only way I found that out was by putting them next to three real conversations.",
    verification: {
      aiOriginallySaid:
        "through the personas I generated with it in Week 3, that convenience was the hook, that cost was a minor concern, and that the main barrier to adoption would be people's fear of the technology.",
      iChangedItTo:
        "a value proposition built on what real people actually said. Convenience held up as the hook, but Claude's personas had badly under-weighted ongoing cost and yield, and nobody mentioned fear of the technology at all. Replacement parts, electricity, cleaning and whether it grows enough came up immediately and repeatedly, so I rewrote the pitch around effort and usable harvest instead.",
      howIChecked:
        "Three real interviews, including an outside contact with years of growing experience who was not in my friend group. All three raised yield or ongoing cost in their own words, and the experienced grower raised it hardest, which is the opposite of what the personas predicted.",
    },
  },
};

export default week5;
