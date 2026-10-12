import type { Reflection } from "../types";

/** ─── WEEK 7 ─────────────────────────────────────────────────────────────── */
const week7: Reflection = {
  week: 7,
  title: "Peer Review, and Attacks That Didn't Land",
  dateRange: "October 5 – October 9",
  status: "published",
  isPlaceholder: false,

  excerpt:
    "Prototyping peer review in class, and the week my research properly started — prompt injection and RL. My first runs through AgentDojo went the opposite way to what I expected.",

  tags: ["peer review", "prototyping", "prompt injection", "AgentDojo", "research"],

  keyLearningMoments: [
    "This week was prototyping peer review, which I found more interesting than I expected. Building a prototype is one thing, but having other people look at it and tell you what they see is a different kind of information. You know what you meant it to do, so you read it that way automatically. Someone seeing it for the first time does not have that, and what confuses them is the actual signal.",
    "It follows on from Week 5 more than I realised at the time. The hard part of the interviews was listening without defending the idea, and peer review is the same skill in a different setting. The instinct is to explain why the thing they are confused about is actually fine. The useful move is to treat the confusion as the finding.",
  ],

  personalConnections: [
    "This was the week my research properly started. I am working on prompt injection and RL with Amulya Yadav, and on prompt injection with Saha. That is the direction I have been pointing at in these reflections all semester, so actually starting on it is a good feeling.",
    "What I did not expect is how closely it lines up with this course. In Week 4 I built a custom GPT for Hydro Node and injected prompts into it to see whether it would hold to its instructions, and it did not. That was a side experiment on my own project. Now it is the thing I am researching. The journal has quietly tracked the whole path — Week 4 breaking my own assistant, Week 5 finding that Claude's personas handed back my own assumptions, Week 6 catching a sensor bug the code was never going to flag, and now this.",
    "The common thread is that none of those failures announced themselves. The assistant still answered, the personas still sounded reasonable, the sensor still returned numbers. That is the part of agent reliability I keep running into, and it is why I wanted to work on it.",
  ],

  challengesAndGrowth: [
    "The results were not what I expected. I ran attacks against my agents through AgentDojo and several of them were flagged and failed rather than getting through. I had gone in assuming they would land, partly because of how easily my own GPT fell over in Week 4.",
    "It is a useful kind of wrong to be. It means my mental model of how easy these attacks are was built on one informal experiment on a system I set up myself, not on anything measured. Running it properly against a benchmark is what showed me the difference, and now the question is why those attacks failed, which is a better question than the one I started with.",
    "On top of that, starting research in the same stretch as coursework is a lot to hold at once. The research is where my attention wants to be right now, and I am still working out how to give the rest of it a fair share.",
  ],

  ai: {
    tool: "Claude (Opus 5) in Claude Code for writing this reflection. The AI agents I am testing in my research, evaluated through AgentDojo, are the systems being checked.",
    purpose:
      "In research, I am using AI agents as the thing under test rather than as an assistant — running prompt injection attacks against them through AgentDojo to see how they hold up. For the journal, I used Claude to turn my notes into this entry.",
    howItHelped:
      "Running attacks through a benchmark instead of trying them by hand is what made the result trustworthy. Doing it informally, the way I did on my own GPT in Week 4, tells you something happened but not how often or under what conditions.",
    verification: {
      aiOriginallySaid:
        "through my Week 4 experiment on my own custom GPT, that prompt injection attacks go through fairly easily. I carried that assumption into this week.",
      iChangedItTo:
        "a more careful position after running the attacks through AgentDojo, where several were flagged and failed instead of succeeding. The agents held up better than my earlier informal test suggested, so I stopped treating one experiment on a system I built myself as evidence of how these attacks behave generally.",
      howIChecked:
        "AgentDojo. Running the attacks through a benchmark gave me results I could actually look at, rather than an impression from one setup where I already knew the instructions I had written.",
    },
  },
};

export default week7;
