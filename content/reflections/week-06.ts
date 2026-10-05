import type { Reflection } from "../types";

/** ─── WEEK 6 ─────────────────────────────────────────────────────────────── */
const week6: Reflection = {
  week: 6,
  title: "Prototyping and Storyboards",
  dateRange: "September 28 – October 2",
  status: "published",
  isPlaceholder: false,

  excerpt:
    "Class was on prototyping and storyboards, which landed well right after the interviews. A tight week otherwise, with quizzes, assignments and research all at once, and AI-written code for Hydro Node that didn't work until I debugged it.",

  tags: ["prototyping", "storyboards", "Hydro Node", "research"],

  keyLearningMoments: [
    "We covered prototyping and storyboards this week. The timing worked out well, because it comes straight after Week 5, where I spent the whole week finding out what people actually want from Hydro Node. Storyboarding is about laying out the experience step by step, and prototyping is about building something rough enough to put in front of someone instead of describing it to them. Both are the natural next thing to do once you have interview findings sitting in front of you.",
    "The part that stuck with me is that a prototype does not have to be the real thing. The point is to make something concrete enough that people can react to it, which is a different goal from building it properly. That is a different mindset from how I normally approach building something, where I want it to actually work before I show anyone.",
    "I spent a good amount of time on Hydro Node this week as well, using both Claude and ChatGPT on it. I also tried ChatGPT's Codex for the first time and it was really cool. It does a lot of the work for me now and loops on the bugs itself instead of me taking each one back to it, which is a noticeable step up from pasting code back and forth.",
  ],

  personalConnections: [
    "I am more involved in research right now than I have been so far this semester, and it is taking up a lot of my time. That is the direction I want to go after graduating, so the time is worth spending, but it does mean everything else has to fit around it.",
    "Prototyping connects to that more than I expected. A lot of research work is the same shape: build the smallest version that lets you test the question, see what happens, and then decide whether the idea holds up. The course is framing it around products and users, but the underlying habit of testing something early rather than building the whole thing first is the same one I need in research.",
  ],

  challengesAndGrowth: [
    "This was a tight week. I had quizzes, assignments and research work all landing at the same time, and I was trying to make progress on Hydro Node on top of that. Nothing was especially hard on its own, it was the amount of it at once that made it difficult.",
    "The one that actually cost me time was a sensor on Hydro Node getting stuck, so the data wasn't reading properly. That was a pain to track down, because the system keeps running and the readings keep coming through — they're just wrong. A bug that stops things is easy to spot. A bug that quietly gives you bad data is the kind you only catch because you go looking.",
    "What I am learning from weeks like this is that I have to be realistic about what actually fits. The research is the priority for me right now, so the honest answer is that other things got the time that was left over rather than the time I would have liked to give them.",
  ],

  ai: {
    tool: "Claude and ChatGPT for Hydro Node, including ChatGPT's Codex for the first time this week, and Claude (Opus 5) in Claude Code for writing this reflection.",
    purpose:
      "I used Claude and ChatGPT to help write code for Hydro Node, tried Codex for the coding work, and used Claude to turn my notes about the week into this reflection.",
    howItHelped:
      "Codex was the useful one this week. It handles a lot of the work now and loops on bugs itself rather than me carrying each error back to it, which saved real time in a week this full. For the journal, Claude turned short notes into the weekly sections.",
    verification: {
      aiOriginallySaid:
        "gave me code for Hydro Node that looked right but had bugs in it, and did not work properly when I actually ran it.",
      iChangedItTo:
        "a working version after debugging it myself. The one that took longest was a stuck sensor, where the data wasn't reading properly but the readings still looked like readings. Nothing in the AI's output was going to tell me that — the code ran fine, the numbers were just wrong.",
      howIChecked:
        "I ran it and then checked the data against what the sensor should actually have been reporting. Running it is enough to catch code that breaks. Checking the output against reality is the only way to catch code that runs and still gives you the wrong answer.",
    },
  },
};

export default week6;
