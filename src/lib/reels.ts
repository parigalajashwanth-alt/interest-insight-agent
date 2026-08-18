export type Reel = {
  id: string;
  title: string;
  creator: string;
  caption: string;
  transcript: string;
  tags: string[];
  genre: string;
  durationSec: number;
};

export const SAMPLE_REELS: Reel[] = [
  {
    id: "r1",
    title: "Java devs when the semicolon disappears",
    creator: "@bugs.and.beans",
    caption: "POV: 400 lines compile fine until one ; goes missing 💀 #javamemes",
    transcript:
      "Dramatic zoom on a developer staring at a red terminal. Caption cards: 'expected ;' ... 'me: I AM the semicolon'. Laugh track over an IntelliJ screen full of stack traces.",
    tags: ["java", "meme", "compiler", "humor"],
    genre: "Programming memes",
    durationSec: 21,
  },
  {
    id: "r2",
    title: "A day in the life of a software engineer (Bangalore)",
    creator: "@shreya.builds",
    caption: "6:30am gym, standup at 10, two design reviews, shipping at 8pm.",
    transcript:
      "Vlog cuts: metro ride, badge-in at office, whiteboard with boxes labelled 'API gateway' and 'queue', pair programming session, evening walk while talking about a production incident.",
    tags: ["swe life", "vlog", "workday", "engineering culture"],
    genre: "Career / lifestyle",
    durationSec: 44,
  },
  {
    id: "r3",
    title: "Interviewer: reverse a linked list. Me: reverses life choices",
    creator: "@ctrl.alt.cope",
    caption: "The whiteboard round hits different at 9am ☠️",
    transcript:
      "Skit of a mock interview. Interviewer asks for O(1) space reversal; candidate draws arrows on a napkin, sweats, then whispers 'can I use recursion?'. Punchline card: 'passed anyway'.",
    tags: ["dsa", "interview", "linked list", "humor"],
    genre: "Programming memes",
    durationSec: 27,
  },
  {
    id: "r4",
    title: "MacBook Air M-series vs 40k Windows laptop for coding",
    creator: "@spec.sheet",
    caption: "Which one survives 30 Chrome tabs, Docker and an Android emulator?",
    transcript:
      "Side by side benchmark: build times for a Gradle project, thermals under load, battery drain while running containers. Verdict segment on RAM headroom and why 8GB struggles with local databases.",
    tags: ["laptops", "hardware", "benchmarks", "dev setup"],
    genre: "Gadgets",
    durationSec: 58,
  },
  {
    id: "r5",
    title: "Cat knocks over the entire chessboard, wins on time",
    creator: "@paw.gambit",
    caption: "New opening theory just dropped 🐈",
    transcript:
      "Slow motion of a cat walking across a chess board, pieces scattering, owner laughing off camera. Trending audio, no dialogue.",
    tags: ["pets", "funny", "chess"],
    genre: "Entertainment",
    durationSec: 14,
  },
  {
    id: "r6",
    title: "Clutch 1v4 with 7 HP in ranked",
    creator: "@aim.dust",
    caption: "Held the angle for 12 seconds. Worth it.",
    transcript:
      "First person shooter gameplay, crosshair placement commentary, callouts about utility usage and economy for the next round.",
    tags: ["gaming", "fps", "ranked"],
    genre: "Gaming",
    durationSec: 33,
  },
  {
    id: "r7",
    title: "I let an AI agent refactor my codebase for 3 hours",
    creator: "@midnight.commits",
    caption: "It deleted my tests. Then it wrote better ones.",
    transcript:
      "Screen recording of an agent loop editing files, running the test suite, failing, reading the stack trace and patching. Narration about context windows, tool calls and why review still matters.",
    tags: ["ai", "agents", "refactoring", "tooling"],
    genre: "AI",
    durationSec: 51,
  },
  {
    id: "r8",
    title: "Why that popular app went down for 4 hours yesterday",
    creator: "@postmortem.daily",
    caption: "A config push, a cache stampede, and no circuit breaker.",
    transcript:
      "News-style breakdown with a simple architecture diagram: clients, CDN, regional cache, primary database. Explains retry storms and how backpressure would have contained the outage.",
    tags: ["tech news", "outage", "system design", "reliability"],
    genre: "Tech news",
    durationSec: 47,
  },
];