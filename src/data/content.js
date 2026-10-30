// ==============================================================================
// EDITORIAL SITE CONTENT & MEDIA CONFIGURATION (100% ENGLISH)
// ------------------------------------------------------------------------------
// Personal Site of: Sabbir Ahmed
// ==============================================================================

export const SITE_META = {
  name: "SABBIR AHMED",
  legalName: "Sabbir Ahmed",
  subTitleMonogram: "S. AHMED // PERSONAL MONOGRAPH",
  title: "Founder, Creative Director & Technologist",
  issue: "VOLUME IV / SPECIAL EDITION",
  season: "AUTUMN / WINTER EDITION",
  location: "DHAKA · LONDON · NEW YORK",
  established: "2026",
  quote: "True distinction is not excess; it is the deliberate preservation of quietude, craftsmanship, and clarity in a noisy world.",
};

export const NAVIGATION_LINKS = [
  { id: "cover", label: "Cover", sublabel: "Overview" },
  { id: "journal", label: "Journal", sublabel: "Essays & Interviews" },
  { id: "archive", label: "Archive", sublabel: "Visual Works" },
  { id: "dossier", label: "Profile", sublabel: "Biography & Canon" },
  { id: "correspondence", label: "Contact", sublabel: "Direct Inquiries" },
];

export const HERO_STORIES = [
  {
    id: "story-1",
    tag: "FEATURED MONOGRAPH",
    title: "The Architecture of Quietude",
    subtitle: "Conversations on craft, digital architecture, and the gravity of purpose.",
    date: "OCTOBER 2026",
    readingTime: "6 MIN READ",
    image: "/placeholders/hero-quietude.jpg",
    alt: "Editorial portrait study in natural window light",
    quote: "When you stand high above the city, silence is not empty; it is dense with focus and intention.",
    photographer: "Dialogue Editorial Monograph",
  },
  {
    id: "story-2",
    tag: "SPECIAL FEATURE",
    title: "Velocity & Restraint: Sabbir Ahmed",
    subtitle: "A candid portrait of modern leadership, design systems, and mechanical speed.",
    date: "SEPTEMBER 2026",
    readingTime: "8 MIN READ",
    image: "/placeholders/hero-velocity.jpg",
    alt: "Sculptural automotive study in architectural lighting",
    quote: "Velocity without direction is merely panic. True poise lies in knowing when to brake.",
    photographer: "Exclusive Series",
  },
  {
    id: "story-3",
    tag: "PORTFOLIO ARCHIVE",
    title: "The Solitude of Building: Monologue",
    subtitle: "Reflections on public work, digital discipline, and creative freedom.",
    date: "JUNE 2026",
    readingTime: "4 MIN READ",
    image: "/placeholders/hero-monograph.jpg",
    alt: "Minimalist portrait monograph study",
    quote: "Work celebrated in public belongs to everyone except the person who built it in the quiet hours.",
    photographer: "Studio Archives",
  },
];

export const TRIPTYCH_SPREAD = [
  {
    title: "Velocity",
    subtitle: "British Racing Green & Modern Lines",
    description: "The intersection of precision automotive engineering and sculptural form.",
    image: "/placeholders/triptych-velocity.jpg",
    aspect: "tall",
    location: "Studio Pavilion",
  },
  {
    title: "Presence",
    subtitle: "Tailored Form & Quiet Posture",
    description: "The poise required to craft enduring work with uncompromising standards.",
    image: "/placeholders/triptych-presence.jpg",
    aspect: "portrait",
    location: "Private Residence",
  },
  {
    title: "Stroll",
    subtitle: "Classical Colonnades & Sunlight",
    description: "Finding moments of calm along historical stone walkways.",
    image: "/placeholders/triptych-stroll.jpg",
    aspect: "tall",
    location: "Historic Quarter",
  },
];

export const JOURNAL_ARTICLES = [
  {
    id: "article-1",
    issue: "ISSUE NUMBER 18",
    category: "COVER INTERVIEW",
    title: "Beyond the Glass Tower: Solitude, Velocity, and What Remains Unsaid",
    subHeading: "In conversation with Sabbir Ahmed on craft, independence, and architectural silence.",
    author: "Editorial Board",
    date: "Autumn 2026",
    readTime: "7 min read",
    heroImage: "/placeholders/architectural-skyline.jpg",
    secondaryImage: "/placeholders/hero-velocity.jpg",
    excerpt: "Standing against ceiling-height glass overlooking the skyline, Sabbir Ahmed contemplates the fragile balance between public output and private autonomy.",
    pullQuote: "People imagine power as an expanding sphere. In reality, it is a narrowing corridor where fewer compromises are permissible.",
    sections: [
      {
        heading: "I. The View from the Studio",
        body: `From here, the arterial highways twist like illuminated ribbons through the dusk. The horns and sirens are silenced by triple-glazed acoustic glass, reducing the city's fever to an ambient pantomime.

To build meaningful digital products and enduring creative artifacts is to learn early that noise is the enemy of depth. Long before the public accolades arrive, the internal script has already been written: poise under scrutiny, unwavering resolve in creative decisions, and quiet discipline when confronted with turbulence.`,
      },
      {
        heading: "II. The Grammar of Restraint",
        body: `We speak about his fascination with speed and mechanical precision. The classic sports coupe sitting downstairs in the private concourse is not a trophy of ostentation; to Sabbir, it represents the only space where decisions have immediate, unmediated consequence.

"When you take a corner at speed, there are no advisers, no public relations strategies, no corporate meetings," he murmurs, his fingers tracing the rim of a hand-thrown ceramic cup. "There is only weight transfer, mechanical grip, and the apex. For those few seconds, life is entirely honest."`,
      },
      {
        heading: "III. Between Public Monument and Private Craft",
        body: `The conversation turns to the next generation of creators, engineers, and independent builders. Across global creative hubs, an emerging cohort is rewriting what digital craftsmanship means. Sabbir’s role balances executive vision with hands-on architectural design.

"Technology without taste is merely noise," he concludes, watching the city lights flicker into life. "If all we do is copy yesterday's templates, we have failed tomorrow before it even arrives."`,
      },
    ],
  },
  {
    id: "article-2",
    issue: "ISSUE NUMBER 16",
    category: "LIFESTYLE & ESSAYS",
    title: "The Architecture of Morning: Notes from an Unhurried Studio",
    subHeading: "A personal reflection on sunlight, morning tea, and unhurried focus.",
    author: "Sabbir Ahmed",
    date: "Summer 2026",
    readTime: "5 min read",
    heroImage: "/placeholders/lifestyle-morning.jpg",
    secondaryImage: "/placeholders/cultural-dialogue.jpg",
    excerpt: "A personal reflection on the scent of fresh citrus, morning tea, and the rare gift of hours with nowhere to be.",
    pullQuote: "Simplicity is not the absence of richness, but the arrival at clarity.",
    sections: [
      {
        heading: "I. The Geometry of the Workspace",
        body: `There is a particular angle that the morning sun strikes the studio desk at 7:15 AM. It catches the sliced fruit and warm wood, casting clean geometric shadows across the notebook.

For years, work was an orchestrated affair of meetings and reactive messages. Now, learning to design and think with deliberate slowness feels like reclaiming a territory I didn't know was occupied.`,
      },
      {
        heading: "II. Warmth in Minor Keys",
        body: `Creativity in adulthood is often weighed down by ceremony. The best breakthroughs are always the informal ones: tea poured from a simple ceramic pot, laughter with close collaborators, and sketches drawn on napkins that turn into year-long obsessions.

The photographs captured on these rolls of 35mm film belong to the private journal: unstyled moments, wrinkled linen, and honest work.`,
      },
    ],
  },
  {
    id: "article-3",
    issue: "SPECIAL REPORT",
    category: "MONOGRAPH",
    title: "The Anatomy of an Independent Builder",
    subHeading: "Reflections on staying true to one's aesthetic compass.",
    author: "Cultural Review",
    date: "June 2026",
    readTime: "4 min read",
    heroImage: "/placeholders/hero-monograph.jpg",
    secondaryImage: "/placeholders/triptych-presence.jpg",
    excerpt: "When the digital world demands constant performance, how do you preserve the core of who you actually are?",
    pullQuote: "You learn to step back from public vanity metrics and evaluate your work strictly by the standards of timeless craft.",
    sections: [
      {
        heading: "I. The Principle of Independence",
        body: `Every creative journey faces the temptation of consensus. The loudest voices urge you to adopt generic templates, follow predictable playbooks, and chase fleeting algorithms.

Yet behind enduring achievements is an unapologetic dedication to nuance: analog books, meticulous typography, and nocturnal work sessions where every detail is tuned by human hand.`,
      },
    ],
  },
];

export const ARCHIVE_WORKS = [
  {
    id: "arch-1",
    title: "The Blue Hour / Skyline Horizon",
    category: "Architectural & Space",
    year: "2026",
    location: "Studio Horizon",
    image: "/placeholders/architectural-skyline.jpg",
    camera: "Leica M11 · 50mm Lens",
    curatorNote: "Natural dusk backlight framing contemplative architecture overlooking the cityscape.",
  },
  {
    id: "arch-2",
    title: "Triptych of Velocity & Form",
    category: "Campaign & Tailoring",
    year: "2026",
    location: "London & New York",
    image: "/placeholders/triptych-velocity.jpg",
    camera: "Hasselblad 907X · 45mm",
    curatorNote: "Exploration of tailored outerwear juxtaposed with precision sports car coachwork.",
  },
  {
    id: "arch-3",
    title: "Monograph Portrait Study",
    category: "Editorial Portrait",
    year: "2026",
    location: "Studio Central",
    image: "/placeholders/hero-monograph.jpg",
    camera: "Phase One IQ4 150MP",
    curatorNote: "High contrast Bodoni typography alongside studio portraiture.",
  },
  {
    id: "arch-4",
    title: "Domestic Cadence / Citrus & Linen",
    category: "Personal Diary",
    year: "2026",
    location: "Private Residence",
    image: "/placeholders/lifestyle-morning.jpg",
    camera: "Contax T2 · 35mm Lens",
    curatorNote: "Candid warm morning frames; natural window illumination on raw wood and morning citrus.",
  },
  {
    id: "arch-5",
    title: "Automotive Monograph Spread",
    category: "Campaign & Tailoring",
    year: "2026",
    location: "Grand Concourse",
    image: "/placeholders/hero-velocity.jpg",
    camera: "Leica SL2-S · 24-90mm",
    curatorNote: "Editorial automotive composition exploring aerodynamic lines and quiet power.",
  },
  {
    id: "arch-6",
    title: "Colonial Balustrades & Sunlight",
    category: "Architectural & Space",
    year: "2026",
    location: "Historic Quarter",
    image: "/placeholders/triptych-stroll.jpg",
    camera: "Leica M10-R · 35mm Lens",
    curatorNote: "Study in classical walkways, arches, and architectural rhythm.",
  },
  {
    id: "arch-7",
    title: "Cultural Dialogue & Mentorship",
    category: "Publication Design",
    year: "2026",
    location: "Arts Pavilion",
    image: "/placeholders/cultural-dialogue.jpg",
    camera: "Leica Q2 · 28mm Lens",
    curatorNote: "Open creative studio sessions fostering next-generation design initiatives.",
  },
];

export const DOSSIER_DATA = {
  biography: `Sabbir Ahmed is a creative director, founder, and technologist known for synthesizing high-taste design systems with robust digital architecture. Educated across engineering and visual arts, his philosophy champions understated luxury, timeless typography, and intentional craftsmanship.`,
  manifesto: [
    {
      title: "I. The Principle of Understatement",
      description: "True luxury never announces itself with loud neon. It is felt in the weight of an unlacquered brass door handle, the drape of unbroken wool, and the silence of a well-proportioned interface.",
    },
    {
      title: "II. Stewardship Over Ownership",
      description: "One does not truly own rare automobiles, historical spaces, or masterworks of code. We are merely their temporary custodians, charged with passing them forward untarnished.",
    },
    {
      title: "III. The Cultivation of Solitude",
      description: "In an era of relentless hyper-connectivity, the greatest privilege is unreachable time. Without solitude, taste degenerates into mere consensus.",
    },
  ],
  canon: [
    { category: "Horology", items: ["Patek Philippe Nautilus 3700", "Cartier Tank Cintree 1921", "Audemars Piguet Extra-Thin Royal Oak"] },
    { category: "Automotive", items: ["Aston Martin DBS Superleggera", "Porsche 911 Turbo 1979", "Ferrari 250 GT Berlinetta"] },
    { category: "Architecture", items: ["Tadao Ando / Church of Light", "Geoffrey Bawa / Lunuganga Estate", "Kengo Kuma / Asakusa Center"] },
    { category: "Literature", items: ["Yukio Mishima / The Temple of the Golden Pavilion", "Albert Camus / The Myth of Sisyphus", "Junichiro Tanizaki / In Praise of Shadows"] },
  ],
  timeline: [
    { year: "2021", event: "Establishment of the independent studio and launch of the Dialogue Journal." },
    { year: "2023", event: "Fellowship for experimental digital interfaces and typography systems." },
    { year: "2025", event: "Launch of the private design salon and architectural research studio." },
    { year: "2026", event: "Curated retrospective 'Velocity & Silence' showcasing digital and physical works." },
  ],
};
