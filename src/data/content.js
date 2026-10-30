// ==============================================================================
// EDITORIAL SITE CONTENT & MEDIA CONFIGURATION
// ------------------------------------------------------------------------------
// Sabbir Ahmed — Software Engineer @ Softrover | Student @ UIU
// ==============================================================================

export const SITE_META = {
  name: "SABBIR AHMED",
  legalName: "Sabbir Ahmed",
  role: "Software Engineer @ Softrover",
  education: "Student, United International University",
  subTitleMonogram: "S. AHMED // SOFTWARE ENGINEER",
  title: "Software Engineer @ Softrover · Student @ UIU",
  issue: "VOLUME IV / DEV MONOGRAPH",
  season: "AUTUMN / WINTER EDITION",
  location: "DHAKA, BANGLADESH",
  company: "Softrover",
  university: "United International University",
  established: "2026",
  quote: "Good software is like good architecture: invisible in its complexity, deliberate in its restraint, and enduring in its craft.",
};

export const NAVIGATION_LINKS = [
  { id: "cover", label: "Cover", sublabel: "Overview" },
  { id: "journal", label: "Journal", sublabel: "Engineering & Essays" },
  { id: "archive", label: "Archive", sublabel: "Projects & Systems" },
  { id: "dossier", label: "Profile", sublabel: "Career, UIU & Stack" },
  { id: "correspondence", label: "Contact", sublabel: "Get in Touch" },
];

export const HERO_STORIES = [
  {
    id: "story-1",
    tag: "SOFTWARE ENGINEERING MONOGRAPH",
    title: "The Architecture of Code & Quietude",
    subtitle: "Reflections on system design, production engineering at Softrover, and the discipline of clean code.",
    date: "OCTOBER 2026",
    readingTime: "5 MIN READ",
    image: "/placeholders/hero-quietude.jpg",
    alt: "Engineer portrait study in natural window light",
    quote: "Simplicity in software is not merely aesthetic; it is the ultimate measure of reliability and scalability.",
    photographer: "Studio Archives",
  },
  {
    id: "story-2",
    tag: "FEATURE @ SOFTROVER",
    title: "Engineering with Velocity: Building at Softrover",
    subtitle: "A look into day-to-day software engineering, shipping robust features, and collaborative problem-solving.",
    date: "SEPTEMBER 2026",
    readingTime: "7 MIN READ",
    image: "/placeholders/hero-velocity.jpg",
    alt: "Precision engineering and modern mechanical study",
    quote: "Velocity without architecture is technical debt. Real momentum comes from building on clean foundations.",
    photographer: "Softrover Engineering Journal",
  },
  {
    id: "story-3",
    tag: "UIU ACADEMIA & PRACTICE",
    title: "From Classroom Theory to Production Systems",
    subtitle: "Balancing computer science studies at United International University with real-world engineering.",
    date: "JUNE 2026",
    readingTime: "4 MIN READ",
    image: "/placeholders/hero-monograph.jpg",
    alt: "Minimalist workspace and engineering study",
    quote: "Academia teaches you how algorithms think; production teaches you how real users behave.",
    photographer: "UIU Campus & Studio",
  },
];

export const TRIPTYCH_SPREAD = [
  {
    title: "Engineering",
    subtitle: "Softrover Systems & Backend Craft",
    description: "Architecting resilient APIs, scalable backend logic, and clean modern web platforms.",
    image: "/placeholders/triptych-velocity.jpg",
    aspect: "tall",
    location: "Softrover HQ, Dhaka",
  },
  {
    title: "Academia",
    subtitle: "United International University",
    description: "Deepening algorithmic knowledge, data structures, and foundational computer science at UIU.",
    image: "/placeholders/triptych-presence.jpg",
    aspect: "portrait",
    location: "UIU Campus, Dhaka",
  },
  {
    title: "Exploration",
    subtitle: "Modern Interfaces & Dev Tools",
    description: "Constantly experimenting with developer ergonomics, performance optimizations, and open source.",
    image: "/placeholders/triptych-stroll.jpg",
    aspect: "tall",
    location: "Studio Workspace",
  },
];

export const JOURNAL_ARTICLES = [
  {
    id: "article-1",
    issue: "DEV JOURNAL NO. 18",
    category: "ENGINEERING ESSAY",
    title: "The Craft of Invisible Architecture: Notes from a Software Engineer",
    subHeading: "In conversation with Sabbir Ahmed on building scalable systems at Softrover and studying at UIU.",
    author: "Sabbir Ahmed",
    date: "Autumn 2026",
    readTime: "6 min read",
    heroImage: "/placeholders/architectural-skyline.jpg",
    secondaryImage: "/placeholders/hero-velocity.jpg",
    excerpt: "Software engineering is often misunderstood as typing code fast. In truth, it is the quiet, deliberate process of understanding a problem so deeply that the solution becomes simple.",
    pullQuote: "Good code explains itself; great architecture makes the hard parts look effortless.",
    sections: [
      {
        heading: "I. The View from the Editor",
        body: `Every morning at Softrover begins with a clean slate: tickets to review, systems to architect, and edge cases to untangle. Working as a software engineer teaches you quickly that code is read ten times more often than it is written.

When you write software, you are not communicating with a machine alone; you are communicating with your future teammates and your future self. That understanding changes how you structure functions, name variables, and design database schemas.`,
      },
      {
        heading: "II. Bridging UIU Computer Science and Industry",
        body: `Studying at United International University (UIU) while engineering at Softrover offers an invaluable duality. In class, we dive into algorithm complexity, compiler design, and operating system internals. At Softrover, we face production deadlines, distributed latencies, and real user feedback.

The intersection is where true growth happens. Theory gives you the mental models to debug impossible bugs; production gives you the pragmatism to know when an 80% solution shipped today is better than perfection delayed for months.`,
      },
      {
        heading: "III. The Discipline of Restraint",
        body: `It is easy to add another dependency, another microservice, or another layer of abstraction. The real challenge—and true senior craftsmanship—is knowing what to leave out.

At Softrover, we value systems that are maintainable, testable, and robust under pressure. That discipline of restraint is what separates fragile software from software that stands the test of time.`,
      },
    ],
  },
  {
    id: "article-2",
    issue: "STUDENT & BUILDER NO. 16",
    category: "PERSONAL JOURNEY",
    title: "The Two Desks: Life Between UIU Lectures and Softrover Sprints",
    subHeading: "How balancing university studies and full-time software engineering sharpened my focus.",
    author: "Sabbir Ahmed",
    date: "Summer 2026",
    readTime: "5 min read",
    heroImage: "/placeholders/lifestyle-morning.jpg",
    secondaryImage: "/placeholders/cultural-dialogue.jpg",
    excerpt: "Balancing exams at United International University with production deployments at Softrover requires rigorous time management and deliberate focus.",
    pullQuote: "Discipline is choosing between what you want now and what you want most.",
    sections: [
      {
        heading: "I. The Morning Commute in Dhaka",
        body: `Dhaka is a city that never stops moving. Navigating between morning classes at UIU's campus and the engineering desk at Softrover demands ruthless prioritization.

You learn to make every block of time count: reading documentation during commutes, writing unit tests with focused intensity, and participating in university group projects with clear collaborative goals.`,
      },
      {
        heading: "II. The Joy of Shipping",
        body: `Nothing matches the sensation of seeing a feature you designed, coded, and reviewed go live to production. When users interact seamlessly with a product built at Softrover, the late-night debugging and academic exams all feel completely worthwhile.`,
      },
    ],
  },
  {
    id: "article-3",
    issue: "CODE ARCHITECTURE",
    category: "TECHNICAL NOTES",
    title: "Clean Systems, Minimalist Codebases, and Human Empathy",
    subHeading: "Why empathy for other developers is the foundation of high-quality software.",
    author: "Sabbir Ahmed",
    date: "June 2026",
    readTime: "4 min read",
    heroImage: "/placeholders/hero-monograph.jpg",
    secondaryImage: "/placeholders/triptych-presence.jpg",
    excerpt: "The best software engineers are not the ones who write the most esoteric code; they are the ones who write code anyone on the team can understand in minutes.",
    pullQuote: "Code is a craft of communication. Clear code is a sign of clear thought.",
    sections: [
      {
        heading: "I. The Principle of Clarity",
        body: `Clever code often breaks in production at 2 AM. Readable, predictable code endures. As I continue my journey as a software engineer at Softrover and a student at UIU, this principle guides every pull request: write code that welcomes the next reader with clarity.`,
      },
    ],
  },
];

export const ARCHIVE_WORKS = [
  {
    id: "arch-1",
    title: "Softrover Enterprise Client Platform",
    category: "Full-Stack & Backend",
    year: "2026",
    location: "Softrover, Dhaka",
    image: "/placeholders/architectural-skyline.jpg",
    camera: "Production Engineering",
    curatorNote: "Architected high-throughput REST APIs and scalable database schemas for core client solutions.",
  },
  {
    id: "arch-2",
    title: "UIU Distributed Computing Study",
    category: "Academic Research",
    year: "2026",
    location: "UIU Labs",
    image: "/placeholders/triptych-velocity.jpg",
    camera: "Computer Science Dept.",
    curatorNote: "Exploration of concurrent algorithms, memory management, and asynchronous task scheduling.",
  },
  {
    id: "arch-3",
    title: "Minimalist Developer Workspace",
    category: "Ergonomics & Tools",
    year: "2026",
    location: "Private Studio, Dhaka",
    image: "/placeholders/hero-monograph.jpg",
    camera: "Workspace Setup",
    curatorNote: "Curated mechanical keyboard, terminal-centric workflow, and distraction-free programming environment.",
  },
  {
    id: "arch-4",
    title: "Performance Optimization Sprint",
    category: "Software Engineering",
    year: "2026",
    location: "Softrover",
    image: "/placeholders/lifestyle-morning.jpg",
    camera: "Web Vitals & Latency",
    curatorNote: "Refactored key database queries and bundle size, reducing page load latency by 45%.",
  },
  {
    id: "arch-5",
    title: "Modern Design System & Component Library",
    category: "Frontend Architecture",
    year: "2026",
    location: "Softrover",
    image: "/placeholders/hero-velocity.jpg",
    camera: "React & Tailwind",
    curatorNote: "Engineered accessible, reusable component primitives with zero layout shift and fluid responsiveness.",
  },
  {
    id: "arch-6",
    title: "United International University Campus",
    category: "Academic Journey",
    year: "2026",
    location: "UIU Campus, Dhaka",
    image: "/placeholders/triptych-stroll.jpg",
    camera: "University Life",
    curatorNote: "Lectures, lab sessions, and collaborative software engineering projects at UIU.",
  },
  {
    id: "arch-7",
    title: "Open Source Utilities & Dev CLI",
    category: "Open Source",
    year: "2026",
    location: "GitHub",
    image: "/placeholders/cultural-dialogue.jpg",
    camera: "Node.js & Go",
    curatorNote: "Author of developer productivity scripts and automated workflow toolsets.",
  },
];

export const DOSSIER_DATA = {
  biography: `Sabbir Ahmed is a software engineer at Softrover and an undergraduate student at United International University (UIU) in Dhaka, Bangladesh. He specializes in designing and building scalable web applications, robust backend architectures, and high-performance user interfaces. Balancing theoretical computer science with real-world production engineering, he is dedicated to clean craftsmanship, intentional design, and continuous learning.`,
  manifesto: [
    {
      title: "I. Clean Architecture Over Complexity",
      description: "Any engineer can make a system complicated. True senior engineering lies in distilling complex business requirements into simple, maintainable, and testable code.",
    },
    {
      title: "II. Production Reliability & Empathy",
      description: "Every line of code impacts real users and fellow teammates. We build with thorough test suites, clear documentation, and empathy for whoever maintains the system next.",
    },
    {
      title: "III. Continuous Academic & Practical Growth",
      description: "Technology evolves rapidly. Bridging strong computer science fundamentals from UIU with hands-on production velocity at Softrover creates an unbreakable foundation.",
    },
  ],
  canon: [
    { 
      category: "Core Stack", 
      items: ["JavaScript / TypeScript", "Python & Go", "React & Next.js", "Node.js & Express", "PostgreSQL & MongoDB"] 
    },
    { 
      category: "Engineering Tools", 
      items: ["Git & GitHub Workflows", "Docker & Containerization", "Linux & Shell Scripting", "Postman & REST APIs", "Tailwind CSS & Modern UI"] 
    },
    { 
      category: "Academia @ UIU", 
      items: ["Data Structures & Algorithms", "Database Management Systems", "Object Oriented Programming", "Computer Networks & OS"] 
    },
    { 
      category: "Foundational Reading", 
      items: ["Clean Architecture (Robert C. Martin)", "Designing Data-Intensive Applications", "The Pragmatic Programmer", "Refactoring (Martin Fowler)"] 
    },
  ],
  timeline: [
    { year: "2023", event: "Enrolled in Computer Science at United International University (UIU), Dhaka." },
    { year: "2024", event: "Engineered full-stack applications, distributed algorithms, and open source projects." },
    { year: "2025", event: "Joined Softrover as Software Engineer, architecting client solutions and web platforms." },
    { year: "2026", event: "Launched personal developer monograph, technical articles, and scalable software systems." },
  ],
};
