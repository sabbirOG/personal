// ==============================================================================
// SOFTWARE ENGINEER PORTFOLIO & JOURNAL DATA
// ------------------------------------------------------------------------------
// Sabbir Ahmed — Software Engineer @ Softrover | Student @ UIU (Dhaka)
// ==============================================================================

export const SITE_META = {
  name: "SABBIR AHMED",
  legalName: "Sabbir Ahmed",
  role: "Software Engineer @ Softrover",
  education: "Computer Science @ United International University (UIU)",
  subTitleMonogram: "S. AHMED // SOFTWARE ENGINEER",
  title: "Software Engineer @ Softrover · Student @ UIU",
  issue: "VOLUME IV / DEV JOURNAL",
  season: "PRODUCTION & ACADEMIA",
  location: "DHAKA, BANGLADESH",
  company: "Softrover",
  university: "United International University",
  established: "2026",
  quote: "Writing clean, maintainable software is about clarity of thought: solving complex engineering problems with simplicity, precision, and reliable code.",
};

export const NAVIGATION_LINKS = [
  { id: "cover", label: "Home", sublabel: "Overview" },
  { id: "journal", label: "Articles", sublabel: "Engineering Insights" },
  { id: "archive", label: "Projects", sublabel: "Systems & Code" },
  { id: "dossier", label: "About", sublabel: "Experience & Stack" },
  { id: "correspondence", label: "Contact", sublabel: "Get in Touch" },
];

export const HERO_STORIES = [
  {
    id: "story-1",
    tag: "ENGINEERING FEATURE",
    title: "Building Reliable Systems: The Software Engineer's Craft",
    subtitle: "Insights on scalable web engineering at Softrover, distributed thinking, and writing maintainable codebases.",
    date: "OCTOBER 2026",
    readingTime: "5 MIN READ",
    image: "/placeholders/hero-quietude.jpg",
    alt: "Software engineer focus in modern workspace",
    quote: "Simplicity in software is not merely aesthetic; it is the ultimate measure of reliability, testability, and team velocity.",
    photographer: "Engineering Archives",
  },
  {
    id: "story-2",
    tag: "INSIDE SOFTROVER",
    title: "High Velocity, Clean Code: Shipping at Softrover",
    subtitle: "How our engineering team approaches production sprints, backend scalability, and resilient microservices.",
    date: "SEPTEMBER 2026",
    readingTime: "7 MIN READ",
    image: "/placeholders/hero-velocity.jpg",
    alt: "Precision development and modern code workflow",
    quote: "Speed without test coverage is just accumulating technical debt. Real momentum comes from clean, decoupled systems.",
    photographer: "Softrover Tech Series",
  },
  {
    id: "story-3",
    tag: "UIU CS INSIGHTS",
    title: "From Algorithmic Theory to Production Software",
    subtitle: "Connecting rigorous computer science coursework at United International University with real-world industry delivery.",
    date: "JUNE 2026",
    readingTime: "4 MIN READ",
    image: "/placeholders/hero-monograph.jpg",
    alt: "Computer science research and workspace",
    quote: "Academia provides the algorithmic mental models; production engineering teaches you resilience, latency, and real-world edge cases.",
    photographer: "UIU Labs & Studio",
  },
];

export const TRIPTYCH_SPREAD = [
  {
    title: "Backend & APIs",
    subtitle: "Softrover Production Work",
    description: "Designing RESTful services, database schemas, and caching layers that scale under concurrent load.",
    image: "/placeholders/triptych-velocity.jpg",
    aspect: "tall",
    location: "Softrover Engineering, Dhaka",
  },
  {
    title: "Computer Science",
    subtitle: "United International University",
    description: "Deepening theoretical knowledge in data structures, algorithms, operating systems, and network protocols.",
    image: "/placeholders/triptych-presence.jpg",
    aspect: "portrait",
    location: "UIU Campus, Dhaka",
  },
  {
    title: "Modern Frontend",
    subtitle: "React, Next.js & UI Engineering",
    description: "Building responsive, accessible web interfaces with clean component architectures and zero bloat.",
    image: "/placeholders/triptych-stroll.jpg",
    aspect: "tall",
    location: "Personal Dev Workspace",
  },
];

export const JOURNAL_ARTICLES = [
  {
    id: "article-1",
    issue: "DEV INSIGHTS NO. 18",
    category: "SYSTEM DESIGN",
    title: "The Discipline of Clean Code: Lessons from Production Engineering",
    subHeading: "Reflections from Sabbir Ahmed on shipping scalable features at Softrover and studying CS at UIU.",
    author: "Sabbir Ahmed",
    date: "Autumn 2026",
    readTime: "6 min read",
    heroImage: "/placeholders/architectural-skyline.jpg",
    secondaryImage: "/placeholders/hero-velocity.jpg",
    excerpt: "Software engineering is more than just making code work once. It is the practice of crafting systems that any engineer can understand, modify, and scale with confidence.",
    pullQuote: "Good code explains itself; great system design makes complex business logic feel intuitive and maintainable.",
    sections: [
      {
        heading: "I. The Production Mindset",
        body: `Every sprint at Softrover begins with real business requirements: high-throughput APIs, database query optimization, and intuitive user workflows. As a software engineer, you quickly realize that code is read significantly more often than it is typed.

When designing a backend service or a frontend state machine, your primary audience is fellow developers and your future self. That awareness shapes how you structure directories, manage errors, and document APIs.`,
      },
      {
        heading: "II. Bridging UIU Computer Science and Real-World Delivery",
        body: `Studying Computer Science at United International University (UIU) while simultaneously engineering at Softrover provides a strong practical feedback loop.

In the classroom, we analyze graph algorithms, time complexity, and memory management. At Softrover, we apply those fundamentals to optimize database query performance, debug race conditions, and minimize latency. The combination of strong theory and daily shipping turns abstract concepts into instinctive engineering judgment.`,
      },
      {
        heading: "III. Restraint Over Over-Engineering",
        body: `It is tempting to adopt every trendy framework or introduce complex abstractions prematurely. Senior engineering, however, is about restraint: choosing boring, proven technologies that solve the actual problem with zero unnecessary complexity.

At Softrover, we prioritize readability, unit test coverage, and clear boundaries between domain logic and external infrastructure.`,
      },
    ],
  },
  {
    id: "article-2",
    issue: "DEV JOURNEY NO. 16",
    category: "CAREER & GROWTH",
    title: "Dual Focus: Balancing Full-Time Engineering and University Studies",
    subHeading: "How managing Softrover client projects alongside university coursework builds deep focus.",
    author: "Sabbir Ahmed",
    date: "Summer 2026",
    readTime: "5 min read",
    heroImage: "/placeholders/lifestyle-morning.jpg",
    secondaryImage: "/placeholders/cultural-dialogue.jpg",
    excerpt: "Managing production deployments at Softrover while preparing for exams at United International University requires intentional time-blocking and deliberate execution.",
    pullQuote: "Consistency beats intensity. Making steady, focused progress on your codebase every day compounds dramatically over time.",
    sections: [
      {
        heading: "I. The Engineering Workflow",
        body: `Balancing responsibilities between Softrover's development team and university group projects requires clear systems: keeping pull requests small and focused, automating CI checks, and communicating blockers early.

Whether writing Node.js services or studying compiler theory, the approach remains the same: break large, overwhelming problems down into small, verifiable functions.`,
      },
      {
        heading: "II. The Satisfaction of Impact",
        body: `There is a unique satisfaction in seeing a feature you researched, implemented, and tested being actively used in production by clients. It validates the long hours spent in the UIU labs and fuels my passion for building software that matters.`,
      },
    ],
  },
  {
    id: "article-3",
    issue: "CODE PRINCIPLES",
    category: "BEST PRACTICES",
    title: "Empathy-Driven Engineering: Writing Code for Humans",
    subHeading: "Why the most technical engineers are often the most empathetic communicators.",
    author: "Sabbir Ahmed",
    date: "June 2026",
    readTime: "4 min read",
    heroImage: "/placeholders/hero-monograph.jpg",
    secondaryImage: "/placeholders/triptych-presence.jpg",
    excerpt: "Writing software is an inherently collaborative human craft. Great engineers write code that is welcoming, readable, and respectful of the next maintainer.",
    pullQuote: "Write your code as if the next person maintaining it is a close colleague who will review it during an on-call rotation.",
    sections: [
      {
        heading: "I. The True Goal of Software Engineering",
        body: `Clever, dense code that tries to show off usually leads to production bugs that are hard to diagnose. Clear, predictable code endures. At Softrover and in all my projects, I treat clarity as the non-negotiable metric of engineering excellence.`,
      },
    ],
  },
];

export const ARCHIVE_WORKS = [
  {
    id: "arch-1",
    title: "Softrover Full-Stack Client Platform",
    category: "Web & Backend Systems",
    year: "2026",
    location: "Softrover, Dhaka",
    image: "/placeholders/architectural-skyline.jpg",
    camera: "TypeScript · Node.js · PostgreSQL",
    curatorNote: "Architected high-throughput REST APIs, authentication flows, and relational database schemas for enterprise clients.",
  },
  {
    id: "arch-2",
    title: "UIU Distributed Systems & Algorithms",
    category: "Computer Science",
    year: "2026",
    location: "UIU Labs",
    image: "/placeholders/triptych-velocity.jpg",
    camera: "Python · C++ · Algorithms",
    curatorNote: "Academic research and implementations of concurrent processing, memory management, and graph traversal algorithms.",
  },
  {
    id: "arch-3",
    title: "Developer Productivity CLI & Tooling",
    category: "Developer Tooling",
    year: "2026",
    location: "Open Source / GitHub",
    image: "/placeholders/hero-monograph.jpg",
    camera: "Go · Shell · Node.js",
    curatorNote: "Custom command-line utilities and automation scripts streamlining daily development environments and git flows.",
  },
  {
    id: "arch-4",
    title: "API Performance & Database Optimization",
    category: "Backend Engineering",
    year: "2026",
    location: "Softrover",
    image: "/placeholders/lifestyle-morning.jpg",
    camera: "PostgreSQL · Redis · Docker",
    curatorNote: "Refactored slow database queries, introduced indexing and Redis caching, slashing API response latency by over 40%.",
  },
  {
    id: "arch-5",
    title: "Design System & React Component Kit",
    category: "Frontend Engineering",
    year: "2026",
    location: "Softrover",
    image: "/placeholders/hero-velocity.jpg",
    camera: "React · TypeScript · Tailwind",
    curatorNote: "Built modular, accessible UI component libraries with strict TypeScript typing, responsive layouts, and zero runtime bloat.",
  },
  {
    id: "arch-6",
    title: "UIU Academic Projects & Lab Systems",
    category: "University Projects",
    year: "2026",
    location: "UIU Campus, Dhaka",
    image: "/placeholders/triptych-stroll.jpg",
    camera: "Full-Stack Development",
    curatorNote: "Collaborative software engineering semester projects, code reviews, and software testing presentations at UIU.",
  },
  {
    id: "arch-7",
    title: "Open Source Contributions & Experiments",
    category: "Open Source",
    year: "2026",
    location: "GitHub",
    image: "/placeholders/cultural-dialogue.jpg",
    camera: "Next.js · JavaScript · Git",
    curatorNote: "Contributing to community libraries, experimenting with new web APIs, and building developer utility projects.",
  },
];

export const DOSSIER_DATA = {
  biography: `Sabbir Ahmed is a software engineer at Softrover and an undergraduate Computer Science student at United International University (UIU) in Dhaka, Bangladesh. He specializes in full-stack web engineering, resilient backend systems, and clean interface development. Balancing core computer science principles with high-velocity product delivery at Softrover, he builds software with a focus on maintainability, performance, and developer empathy.`,
  manifesto: [
    {
      title: "I. Clean Systems Over Premature Complexity",
      description: "Any engineer can write code a computer understands. Great engineers write code that humans can effortlessly maintain, test, and adapt as requirements evolve.",
    },
    {
      title: "II. Production Reliability & Rigorous Testing",
      description: "Writing code is only the first step. True engineering lies in defensive error handling, thorough unit testing, and building systems that perform dependably under load.",
    },
    {
      title: "III. Strong Fundamentals & Continuous Growth",
      description: "Frameworks come and go. Grounding day-to-day engineering at Softrover in the core algorithmic and systems fundamentals taught at UIU ensures lasting technical excellence.",
    },
  ],
  canon: [
    { 
      category: "Languages & Core", 
      items: ["TypeScript & JavaScript (ESNext)", "Python", "Go", "SQL (PostgreSQL)", "HTML5 & Modern CSS"] 
    },
    { 
      category: "Frameworks & Backend", 
      items: ["React & Next.js", "Node.js & Express", "Tailwind CSS", "RESTful API Architecture", "Redis & PostgreSQL"] 
    },
    { 
      category: "Tools & DevOps", 
      items: ["Git & GitHub Workflows", "Docker & Containerization", "Linux Environments", "Postman & API Testing", "Vite & Modern Bundlers"] 
    },
    { 
      category: "Computer Science @ UIU", 
      items: ["Data Structures & Algorithms", "Database Management Systems", "Object-Oriented Design", "Computer Networks & OS"] 
    },
  ],
  timeline: [
    { year: "2023", event: "Began Computer Science degree at United International University (UIU), Dhaka." },
    { year: "2024", event: "Built full-stack web applications, deepened knowledge in data structures and algorithmic efficiency." },
    { year: "2025", event: "Joined Softrover as Software Engineer, shipping production client features and robust API services." },
    { year: "2026", event: "Engineered scalable web systems, technical dev articles, and modern developer portfolio." },
  ],
};
