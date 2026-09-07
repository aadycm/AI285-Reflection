import type { Reflection } from "../types";

/** ─── WEEK 2 ─────────────────────────────────────────────────────────────── */
const week2: Reflection = {
  week: 2,
  title: "Building My First Agent",
  dateRange: "August 31 – September 4",
  status: "published",
  isPlaceholder: false,

  excerpt:
    "We covered AI workflow tools like n8n and Zapier this week, and Fusco showed us the backend of what the AI is actually doing in them. I went and tried building an agent myself afterwards, which was the best thing I got out of the week.",

  tags: ["ai workflows", "n8n", "agents"],

  keyLearningMoments: [
    "This week we went through AI workflows and the tools people build them with, mainly n8n and Zapier AI. What made it land was that Fusco did not just show us the front end of it — he showed the backend as well, so we could see what the AI is actually doing at each step instead of treating the whole thing as a black box.",
    "I went and looked at it properly on my own after class and tried building an agent myself in n8n. Actually putting one together is a different thing from watching someone else do it, and a lot of what he had shown made more sense once I was the one wiring the steps together.",
    "The Gen AI content this week was genuinely impressive. Seeing what these tools can automate once they are chained together properly is different from knowing about them in the abstract.",
  ],

  personalConnections: [
    "This is the part of AI I signed up for. I said in Week 1 that I am interested in AI as something you actually use rather than something you read about, and building a working agent in n8n is about as direct an example of that as I could ask for. It is the first thing this semester that I would want to keep building on outside of class.",
    "It was a long weekend, so I went to Pittsburgh for a couple of days. I visited some temples while I was there and went to a Mexican restaurant, did some shopping, and got back today.",
    "Agent use is the thing I would point to if someone asked what I learned this week. Automated workflows are the kind of skill that carries past the course, and as a CS senior that matters more to me than something I would only use for an assignment.",
  ],

  challengesAndGrowth: [
    "The main difficulty is that I am still catching up. I missed the first week, so there are a few things I did not get the first time round, and this week I was working through those while also keeping up with assignments landing across my other courses.",
    "I have not fully caught up yet, and I would rather say that than pretend otherwise. What I have been doing is working through the missed material as I go rather than trying to clear all of it at once, and building the n8n agent actually helped with that — going and doing the thing on my own filled in gaps that I would not have closed just by reading back over notes.",
  ],

  ai: {
    tool: "Claude (Opus 5), used inside Claude Code",
    purpose:
      "To turn my rough notes about this week into a full entry, and to keep the structure consistent with Week 1 so the journal reads the same way from week to week.",
    howItHelped:
      "I gave it a few lines about the workflow tools we covered, the agent I built afterwards, and the trip to Pittsburgh, and it worked those into proper paragraphs instead of me starting from a blank page. It also pointed out that my first set of notes was almost entirely about my weekend and had nothing from the course in it, which is the part I would have missed on my own.",
    verification: {
      aiOriginallySaid:
        "framed this week as settling back in, with a line about the trip being a good reset before the semester properly picks up, and titled the entry \"Settling Back In\".",
      iChangedItTo:
        "an entry about the n8n agent, and an honest note that I am still catching up rather than settled. It had written the week as more under control than it actually was.",
      howIChecked:
        "My own week. I missed the first week of class and I am still working through what I did not get, so describing it as settled would not have been true.",
    },
  },
};

export default week2;
