import React, { useState } from 'react';
import { ArrowRight, BookOpen, Compass, Eye, Sparkles, MoveRight } from 'lucide-react';
import { HERO_STORIES, TRIPTYCH_SPREAD, JOURNAL_ARTICLES, SITE_META } from '../data/content';

export default function CoverPage({ setActivePage, onOpenLightbox }) {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const currentStory = HERO_STORIES[activeStoryIdx];

  return (
    <div className="w-full">
      {/* 1. Hero Feature Section */}
      <section className="border-b border-black/10 dark:border-white/10 px-4 md:px-12 py-8 md:py-14">
        <div className="max-w-7xl mx-auto">
          {/* Issue Meta Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-black/10 dark:border-white/10 gap-3 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500">
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-[#B93826] inline-block animate-pulse" />
              <span className="text-[#B93826] font-semibold">{currentStory.tag}</span>
              <span>—</span>
              <span>{currentStory.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>COVER STORY {activeStoryIdx + 1} OF {HERO_STORIES.length}</span>
              <div className="flex space-x-1 pl-3">
                {HERO_STORIES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStoryIdx(idx)}
                    className={`w-6 h-1.5 rounded-full transition-all cursor-pointer ${
                      activeStoryIdx === idx
                        ? 'bg-[#B93826] w-9'
                        : 'bg-black/20 dark:bg-white/20 hover:bg-black/50 dark:hover:bg-white/50'
                    }`}
                    aria-label={`Go to story ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Main Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 pt-8 items-center">
            {/* Left Column: Typography & Story */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="text-xs font-mono tracking-[0.2em] uppercase text-[#B93826] dark:text-[#E87560]">
                  {currentStory.readingTime}
                </div>
                <h2 className="font-masthead text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.08] tracking-tight text-[#1A1816] dark:text-[#FAF8F5]">
                  {currentStory.title}
                </h2>
                <p className="font-editorial text-lg md:text-xl italic text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {currentStory.subtitle}
                </p>
              </div>

              {/* Editorial Pull Quote Box */}
              <div className="border-l-2 border-[#1A1816] dark:border-white pl-4 py-2 my-6 bg-black/[0.02] dark:bg-white/[0.02]">
                <p className="font-editorial text-base sm:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed italic">
                  "{currentStory.quote}"
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setActivePage('journal')}
                  className="px-6 py-3 bg-[#1A1816] text-[#FAF8F5] dark:bg-[#FAF8F5] dark:text-[#1A1816] hover:bg-[#B93826] dark:hover:bg-[#B93826] dark:hover:text-white transition-all duration-300 text-xs font-mono tracking-[0.2em] uppercase flex items-center space-x-2 rounded-sm cursor-pointer shadow-sm group"
                >
                  <span>READ ARTICLE</span>
                  <MoveRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() =>
                    onOpenLightbox({
                      id: currentStory.id,
                      title: currentStory.title,
                      image: currentStory.image,
                      category: currentStory.tag,
                      curatorNote: currentStory.quote,
                      location: "Bangkok & Private Archives",
                    })
                  }
                  className="px-5 py-3 border border-black/15 dark:border-white/20 hover:border-black dark:hover:border-white text-xs font-mono tracking-[0.2em] uppercase flex items-center space-x-2 rounded-sm transition-colors cursor-pointer text-neutral-700 dark:text-neutral-300"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>VIEW ARCHIVAL PLATE</span>
                </button>
              </div>

              {/* Photo attribution */}
              <div className="text-[10px] font-mono text-neutral-400 pt-2 tracking-wider">
                PHOTO: {currentStory.photographer}
              </div>
            </div>

            {/* Right Column: Hero Framing Image */}
            <div className="lg:col-span-7">
              <div
                onClick={() =>
                  onOpenLightbox({
                    id: currentStory.id,
                    title: currentStory.title,
                    image: currentStory.image,
                    category: currentStory.tag,
                    curatorNote: currentStory.quote,
                    location: "Bangkok & Private Archives",
                  })
                }
                className="editorial-img-wrap group cursor-pointer border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 relative aspect-[16/11] md:aspect-[16/10] overflow-hidden"
              >
                <img
                  src={currentStory.image}
                  alt={currentStory.alt}
                  className="w-full h-full object-cover object-center filter contrast-[1.03] group-hover:scale-105 transition-transform duration-1000"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white text-xs font-mono tracking-widest flex items-center space-x-2">
                    <Eye className="w-4 h-4 text-[#C29B38]" />
                    <span>CLICK TO ENLARGE IN ARCHIVAL LIGHTBOX</span>
                  </div>
                </div>

                {/* Floating Plate Stamp */}
                <div className="absolute top-4 right-4 bg-[#FAF8F5]/90 dark:bg-[#121110]/90 backdrop-blur-sm border border-black/10 dark:border-white/10 px-3 py-1 text-[9px] font-mono tracking-widest uppercase">
                  PLATE REF. 0{activeStoryIdx + 1}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Dispatches Marquee / Ticker */}
      <div className="bg-[#1A1816] text-[#FAF8F5] py-2.5 px-4 overflow-hidden border-b border-black/20">
        <div className="flex items-center space-x-8 text-[11px] font-mono tracking-[0.25em] whitespace-nowrap animate-pulse">
          <span className="text-[#C29B38] font-bold">DISPATCH:</span>
          <span>SOFTWARE ENGINEER @ SOFTROVER</span>
          <span className="text-neutral-500">///</span>
          <span>COMPUTER SCIENCE @ UNITED INTERNATIONAL UNIVERSITY (UIU)</span>
          <span className="text-neutral-500">///</span>
          <span>FULL-STACK ARCHITECTURE & SCALABLE SYSTEMS</span>
          <span className="text-neutral-500">///</span>
          <span>DHAKA, BANGLADESH</span>
        </div>
      </div>

      {/* 3. The Triptych Editorial Spread (Inspired by Reference 7) */}
      <section className="px-4 md:px-12 py-16 border-b border-black/10 dark:border-white/10 bg-[#F4F1EB] dark:bg-[#161514] transition-colors">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#B93826]">
              ENGINEERING PERSPECTIVES
            </div>
            <h3 className="font-masthead text-3xl md:text-4xl font-light tracking-tight">
              Production, Academia & Systems
            </h3>
            <p className="font-editorial text-neutral-600 dark:text-neutral-400 italic text-base">
              A continuous study across production engineering at Softrover, computer science at UIU, and developer craft.
            </p>
          </div>

          {/* The Triptych Display Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRIPTYCH_SPREAD.map((panel, idx) => (
              <div
                key={idx}
                onClick={() =>
                  onOpenLightbox({
                    id: `triptych-${idx}`,
                    title: panel.title + " — " + panel.subtitle,
                    image: panel.image,
                    category: "TRIPTYCH STUDY",
                    curatorNote: panel.description,
                    location: panel.location,
                  })
                }
                className="group cursor-pointer bg-[#FAF8F5] dark:bg-[#121110] border border-black/10 dark:border-white/10 p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Photo with subtle framing */}
                <div className="editorial-img-wrap aspect-[4/5] bg-black/5 dark:bg-white/5 overflow-hidden mb-4 border border-black/5 dark:border-white/5">
                  <img
                    src={panel.image}
                    alt={panel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.02]"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                    <span>PANEL 0{idx + 1}</span>
                    <span className="text-[#C29B38]">{panel.location}</span>
                  </div>
                  <h4 className="font-masthead text-xl font-normal group-hover:text-[#B93826] transition-colors">
                    {panel.title}
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                    {panel.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => setActivePage('archive')}
              className="inline-flex items-center space-x-2 text-xs font-mono tracking-[0.25em] uppercase hover:text-[#B93826] transition-colors border-b border-black/20 dark:border-white/20 pb-1 cursor-pointer group"
            >
              <span>EXPLORE COMPLETE VISUAL ARCHIVE</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Editorial Spread: Youth, Dialogue & Society (Inspired by Reference 2) */}
      <section className="px-4 md:px-12 py-16 border-b border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text column with Thai script inspired directly by reference 2 */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#B93826]">
                SOFTWARE ENGINEERING & CRAFT
              </div>
              <h3 className="font-masthead text-3xl sm:text-4xl font-light leading-tight">
                "Good software is invisible in its complexity and enduring in its craft."
              </h3>
              <p className="font-editorial italic text-xl text-neutral-700 dark:text-neutral-300">
                Bridging foundational computer science with real-world production velocity.
              </p>

              <div className="font-news text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 space-y-4 border-t border-black/10 dark:border-white/10 pt-4">
                <p>
                  As a Software Engineer at Softrover and an undergraduate student at United International University (UIU), Sabbir Ahmed designs and implements high-throughput web architectures, dependable backend logic, and clean user interfaces.
                </p>
                <p>
                  “The highest discipline in engineering is not adding more complexity, but distilling problems until the resulting code is intuitive, maintainable, and resilient.”
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActivePage('journal')}
                  className="text-xs font-mono tracking-[0.2em] uppercase text-[#1A1816] dark:text-[#FAF8F5] hover:text-[#B93826] transition-colors flex items-center space-x-2 cursor-pointer font-semibold"
                >
                  <span>READ ESSAY TRANSCRIPT</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: The dual-photo spread */}
            <div className="lg:col-span-7">
              <div
                onClick={() =>
                  onOpenLightbox({
                    id: "cultural-dialogue-plate",
                    title: "Collaborative Engineering & UIU Lab Sessions",
                    image: "/placeholders/cultural-dialogue.jpg",
                    category: "ENGINEERING DISPATCH",
                    curatorNote: "Interactive pair programming, code reviews, and system architecture planning in Dhaka.",
                    location: "Softrover / UIU Labs",
                  })
                }
                className="editorial-img-wrap group cursor-pointer border border-black/10 dark:border-white/10 bg-black/5 p-2"
              >
                <img
                  src="/placeholders/cultural-dialogue.jpg"
                  alt="Software Engineering Lab Sessions"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-700"
                />
                <div className="p-3 text-[10px] font-mono text-neutral-400 flex justify-between items-center">
                  <span>FIG 2.4 — WORKSHOP SESSIONS & SYSTEM DESIGN DISCUSSIONS</span>
                  <span className="text-[#C29B38] font-bold">CLICK TO INSPECT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Metrics & Engineering Focus Band */}
      <section className="px-4 md:px-12 py-14 bg-[#1A1816] text-[#FAF8F5] border-b border-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="font-masthead text-3xl sm:text-4xl md:text-5xl font-light text-[#C29B38]">
                SOFTROVER
              </div>
              <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400">
                Software Engineer
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-masthead text-3xl sm:text-4xl md:text-5xl font-light text-[#C29B38]">
                UIU
              </div>
              <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400">
                Computer Science
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-masthead text-3xl sm:text-4xl md:text-5xl font-light text-[#C29B38]">
                FULL-STACK
              </div>
              <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400">
                Web & Cloud Systems
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-masthead text-3xl sm:text-4xl md:text-5xl font-light text-[#C29B38]">
                DHAKA
              </div>
              <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400">
                Base Coordinates
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Selected Dialogue Inquiries & CTA to Contact */}
      <section className="px-4 md:px-12 py-16 text-center max-w-4xl mx-auto space-y-6">
        <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#B93826]">
          DIRECT INQUIRIES & STUDIO
        </div>
        <h3 className="font-masthead text-3xl sm:text-5xl font-light">
          "Quietude is the highest form of presence."
        </h3>
        <p className="font-editorial italic text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          For design collaborations, architectural advisory, or direct correspondence with the studio.
        </p>
        <div className="pt-4">
          <button
            onClick={() => setActivePage('correspondence')}
            className="px-8 py-3.5 bg-[#1A1816] text-[#FAF8F5] dark:bg-[#FAF8F5] dark:text-[#1A1816] hover:bg-[#B93826] dark:hover:bg-[#B93826] dark:hover:text-white transition-all text-xs font-mono tracking-[0.25em] uppercase cursor-pointer"
          >
            OPEN DIRECT INQUIRIES
          </button>
        </div>
      </section>
    </div>
  );
}

