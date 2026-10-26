import type { Reflection } from "../types";

const week9: Reflection = {
  week: 9,
  title: "Checking What AI Gives Me",
  dateRange: "October 19 – October 23",
  status: "published",
  isPlaceholder: false,
  excerpt: "Being sick made this a tight week. Between pending coursework, AgentDojo research and grad applications, the biggest reminder was to check what AI writes, especially when it puts numbers into my research story.",
  tags: ["AgentDojo", "grad applications", "AI verification"],
  keyLearningMoments: [
    "This week was tight. I was sick and couldn't attend class, and I also had a lot of research and classwork pending. So this reflection is about what I was working on outside class rather than a discussion I attended.",
    "I have been using AgentDojo for my research and working on attacks. The attacks worked, but that alone does not give the whole picture of the results. For me, this connects to the question I have been interested in for a while: how reliable an agent really is when it is tested. I want to be careful about how I describe that work rather than making the results sound stronger than they are.",
    "The clearest lesson this week actually came from working on my statement of purpose. Claude included fake numbers when drafting ideas about my research results. I caught that and changed the research-results part. It was a direct reminder that something can read well and still be wrong.",
  ],
  personalConnections: [
    "I am working on grad applications and tweaking my SOP, so explaining my research is a big part of what I am doing right now. I want it to communicate my interests in AI and the work I have actually done. Numbers that I never got from my research do not belong in that explanation, even if they make the paragraph sound more impressive.",
    "After the problems with Claude's drafting and brainstorming, I switched to Gemini. I still need to check what comes back. Changing tools does not change the fact that this is my application and my research to explain. That connects with the verification habit in this course and with my own interest in agent reliability.",
  ],
  challengesAndGrowth: [
    "The difficult part was being sick while having coursework, research and applications all needing attention. I couldn't attend class, and there was already work pending. It was not a week where everything went smoothly, and I don't want to write it like it was.",
    "One concrete thing I did work through was the SOP draft. I corrected the research results instead of leaving the generated numbers in there, and tried another tool for the ideas. Going forward, I want to keep that same level of attention on any research claims AI helps me write. Getting the wording right matters, but getting the facts right matters more.",
  ],
  ai: {
    tool: "Claude and Gemini for SOP drafting and brainstorming; ChatGPT/Codex for this reflection",
    purpose: "I used Claude to help draft and brainstorm ideas for my statement of purpose, then switched to Gemini after errors in the draft. I used ChatGPT/Codex to organize my notes into this weekly reflection.",
    howItHelped: "The tools gave me drafts and ideas to work with while preparing my applications. For the journal, AI helped structure my notes about being sick, working on AgentDojo and correcting my SOP, but the research results still had to come from me.",
    verification: {
      aiOriginallySaid: "included fabricated numbers when describing my research results in an SOP draft.",
      iChangedItTo: "a corrected description of my research results instead of keeping the fake numbers Claude supplied.",
      howIChecked: "I compared what the draft claimed with my own research results. The numbers Claude supplied were not my results, so I changed that part of the draft.",
    },
  },
};

export default week9;
