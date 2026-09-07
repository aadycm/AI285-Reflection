import type { Reflection } from "../types";

/** ─── WEEK 1 ─────────────────────────────────────────────────────────────── */
const week1: Reflection = {
  week: 1,
  title: "Syllabus Week",
  dateRange: "August 24 – August 28",
  status: "published",
  isPlaceholder: false,

  excerpt:
    "I missed the first week of class, so most of Week 1 for me was catching up, working out from the syllabus what this course is going to be, and getting this journal set up.",

  tags: ["syllabus week", "getting started"],

  keyLearningMoments: [
    "My name is Aadithya Chandramouli and I am a senior at Penn State University majoring in Computer Science. I signed up for AI 285 because it lines up closely with what I am already interested in, which is AI and how it actually gets used in the real world rather than just in theory. This site is where I am going to write one reflection every week for the rest of the semester, from now through Week 15, and then a final one at the end looking back across all of them.",
    "I did not make it to class in the first week, so Week 1 for me was less about anything that happened in the room and more about working out what the course was going to be from the syllabus and the course setup. What came through is that this is a practical course rather than a theoretical one, and that most of it is going to be about actually using AI tools rather than reading about them.",
    "That matched what I was assuming when I registered. I picked this course expecting hands-on AI work, so finding out from the syllabus that it is built around practical use was a good sign rather than a surprise.",
  ],

  personalConnections: [
    "Week 1 confirmed what I expected from the course. I wanted something that dealt with AI as a thing you use rather than a thing you study, and everything in the syllabus pointed that way.",
    "I picked a website for this instead of a document because, from what I know, building and maintaining a site keeps everything more organized and quicker to get to. Every week gets its own page, the whole semester is laid out in one place, and I can see where I am in it without scrolling through one long file. It also means that adding a new week is a small, contained job rather than something I have to reorganize around every time.",
    "As a CS senior this is one of my last semesters, so I want to get something concrete out of it rather than just finishing it. What I want by December is a record I would actually read back, and a clearer sense of where AI fits into the way I work.",
  ],

  challengesAndGrowth: [
    "The harder part of Week 1 was not the course material. It was coping with the assignment work across my courses, and on top of that I was not really sure what these reflections were supposed to be. Having missed the first class I did not have the context that would normally tell me what was expected, so I was working it out from the assignment description on my own.",
    "Building this site is actually what sorted that out. Laying out the sections for every week — key learning moments, personal connections, challenges, and the AI documentation — forced me to understand what each part is asking for before I had to write anything into it. By the time the structure was done I had a much clearer idea of what I was meant to be writing each week.",
    "For the rest of the semester I want to use AI the same way I already do when I build things. I usually put in my own ideas and effort first, get something working, and then ask AI how I can refine it or make it more efficient. That is the part I find genuinely useful — not having it start from nothing, but having it look at something I have already done and point out where it could be better. The part I want to be careful about is letting it do the thinking for me, especially in a course where the whole point is reflecting on my own experience.",
  ],

  ai: {
    tool: "Claude (Opus 5), used inside Claude Code",
    purpose:
      "Two things. First, to build and deploy this journal itself — the site structure, the weekly content system, the timeline and progress tracking, and the mobile layout. Second, to help me draft this first entry from notes I gave it about myself, why I picked this platform, and how I plan to use AI this semester.",
    howItHelped:
      "On the site side it turned a semester of scaffolding into something I only have to add one file to each week, since the timeline, archive, progress bar and week-to-week navigation all update on their own when I publish. On the writing side it worked from what I had already told it rather than inventing anything, and it left the parts about what actually happened in class for me to fill in, since it had no way of knowing those.",
    verification: {
      aiOriginallySaid:
        "set the course up as \"AI 285\" with a placeholder title and no instructor, and dated the semester as Fall 2026 with Week 1 running August 24–28 — dates it worked out from the calendar rather than from my course material.",
      iChangedItTo:
        "the real course title, Experiential Learning Skills, and my instructor's name, David Fusco, both of which it had left as blanks for me to supply.",
      howIChecked:
        "I checked the dates against the course calendar, and those ones turned out to be right. The course title and instructor were the parts it had no way of knowing, and those I filled in myself.",
    },
  },
};

export default week1;
