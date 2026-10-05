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
    "I spent a good amount of time on Hydro Node this week as well, which is the project I would be storyboarding and prototyping for.",
  ],

  personalConnections: [
    "I am more involved in research right now than I have been so far this semester, and it is taking up a lot of my time. That is the direction I want to go after graduating, so the time is worth spending, but it does mean everything else has to fit around it.",
    "Prototyping connects to that more than I expected. A lot of research work is the same shape: build the smallest version that lets you test the question, see what happens, and then decide whether the idea holds up. The course is framing it around products and users, but the underlying habit of testing something early rather than building the whole thing first is the same one I need in research.",
  ],

  challengesAndGrowth: [
    "This was a tight week. I had quizzes, assignments and research work all landing at the same time, and I was trying to make progress on Hydro Node on top of that. Nothing was especially hard on its own, it was the amount of it at once that made it difficult.",
    "What I am learning from weeks like this is that I have to be realistic about what actually fits. The research is the priority for me right now, so the honest answer is that other things got the time that was left over rather than the time I would have liked to give them.",
  ],

  ai: {
    tool: "Claude (Opus 5) in Claude Code for writing this reflection, and AI assistance for code on Hydro Node.",
    purpose:
      "I used AI to help write code for Hydro Node, and Claude to turn my notes about the week into this reflection.",
    howItHelped:
      "For Hydro Node it gave me code to start from rather than writing everything myself, which is useful in a week this busy. For the journal, Claude turned short notes into the weekly sections.",
    verification: {
      aiOriginallySaid:
        "gave me code for Hydro Node that looked right but had bugs in it. It did not work properly when I actually ran it, and parts of it malfunctioned.",
      iChangedItTo:
        "a working version after I debugged it myself. I had to go through the code and fix the parts that were broken rather than assuming what it gave me was ready to use.",
      howIChecked:
        "I ran it. That is the whole point with code — it either works or it does not, and this did not until I went through and fixed it.",
    },
  },
};

export default week6;
