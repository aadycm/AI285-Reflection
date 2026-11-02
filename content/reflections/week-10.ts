import type { Reflection } from "../types";

const week10: Reflection = {
  week: 10,
  title: "When the Results Don't Match",
  dateRange: "October 26 – October 30",
  status: "published",
  isPlaceholder: false,
  excerpt: "I got results for the ambiguous-risk part of my human-versus-LLM research, and they did not support the hypothesis. Alongside grad applications, I also had to check AI-assisted CSV updates after some columns were missed.",
  tags: ["human vs LLM", "research", "data verification"],

  keyLearningMoments: [
    "The main thing this week was getting results for the ambiguous-risk part of my research comparing humans and LLMs. The results did not support the hypothesis. That is where the work stands right now, and I want to describe it that way rather than make it sound like the results confirmed what I expected.",
    "For me, this brings up an important part of doing research. Having an idea of what might happen is different from actually seeing what the results show. A result that does not support the hypothesis still gives me something to think about. The next step is understanding it carefully rather than trying to make it fit the original idea.",
    "I also used Claude Code and Codex mainly for updating CSV files. Some columns were not checked, so I had to test in a sandbox. That was another practical reminder that getting AI to help with data work still leaves me responsible for checking the output.",
  ],

  personalConnections: [
    "I am still working on grad applications, so the research and the applications are both part of my week. Since I want to continue in AI and related research, this is useful experience to reflect on. I want to be able to explain what I worked on and what the results actually say, even when they do not support the hypothesis.",
    "This connects with what I wrote last week about checking research claims in my SOP. Last week, the issue was fake numbers in an AI-generated draft. This week, I have my own results to describe, and the same rule applies: the explanation has to follow the work. It also connects with this course's emphasis on verifying what AI gives me.",
  ],

  challengesAndGrowth: [
    "The practical challenge was checking the CSV work instead of assuming all the columns had been covered. I used a sandbox to test after noticing the missed checks. That gave me a concrete way to look at the issue rather than just rely on the AI's output.",
    "Between that, the research results and grad applications, there was plenty to work on. Going forward, I want to keep verification as part of the process, especially when AI is helping update research data. It can help with the work, but I still need to check the details before relying on them.",
  ],

  ai: {
    tool: "Claude Code and Codex",
    purpose: "I used Claude Code and Codex mainly to help update CSV files for my work. I also used Codex to organize my notes and draft this reflection.",
    howItHelped: "The tools helped with the CSV updates and with turning my short notes into the journal's weekly sections. The missed column checks also gave me a specific example to reflect on rather than only saying that AI needs verification in general.",
    verification: {
      aiOriginallySaid: "helped with the CSV updates but missed checking some columns.",
      iChangedItTo: "a process that included my own sandbox testing instead of relying only on the AI-assisted updates.",
      howIChecked: "I tested in a sandbox after noticing that some columns had not been checked. I am recording the missed checks without assuming that the AI covered every column.",
    },
  },
};

export default week10;
