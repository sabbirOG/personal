import React, { useState } from 'react';
import { Award, Compass, Feather, BookOpen, Clock, ChevronRight, Bookmark } from 'lucide-react';
import { DOSSIER_DATA, SITE_META } from '../data/content';

export default function DossierPage({ onOpenLightbox }) {
  const [activeTab, setActiveTab] = useState('manifesto'); // 'manifesto' | 'canon' | 'timeline' | 'press'

  return (
    <div className="w-full">
      {/* 1. Header Banner */}
      <section className="border-b border-black/10 dark:border-white/10 px-4 md:px-12 py-12 bg-[#FAF8F5] dark:bg-[#121110]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Portrait frame from billboard archive */}
          <div className="md:col-span-4">
            <div
              onClick={() =>
                onOpenLightbox({
                  id: "sabbir-portrait-dossier",
                  title: "Sabbir Ahmed — Software Engineer",
                  image: "/placeholders/dossier-portrait.jpg",
                  category: "ENGINEER PROFILE",
                  curatorNote: "Sabbir Ahmed, Software Engineer at Softrover and CS Student at United International University.",
                  location: "Dhaka, Bangladesh",
                })
              }
              className="editorial-img-wrap group cursor-pointer border-2 border-black/15 dark:border-white/20 p-2 bg-black/5 dark:bg-white/5"
            >
              <img
                src="/placeholders/dossier-portrait.jpg"
                alt="Sabbir Ahmed Software Engineer"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="p-2 text-[10px] font-mono text-center text-neutral-500 border-t border-black/10 dark:border-white/10 mt-2">
                PROFILE SPECIMEN // ENG NO. 01
              </div>
            </div>
          </div>

          {/* Dossier Monograph Details */}
          <div className="md:col-span-8 space-y-4">
            <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#B93826]">
              ENGINEERING DOSSIER · CURRICULUM VITAE
            </div>
            <h2 className="font-masthead text-4xl sm:text-6xl font-light text-[#1A1816] dark:text-[#FAF8F5]">
              {SITE_META.legalName}
            </h2>
            <div className="text-xl font-editorial italic text-neutral-600 dark:text-neutral-400">
              "{SITE_META.subTitleMonogram}" — {SITE_META.title}
            </div>

            <p className="font-news text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed pt-2">
              {DOSSIER_DATA.biography}
            </p>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-black/10 dark:border-white/10 font-mono text-xs text-neutral-500">
              <div>
                <span className="block text-[10px] uppercase text-neutral-400">ROLE</span>
                <span className="text-neutral-800 dark:text-neutral-200">Software Engineer</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-neutral-400">COMPANY</span>
                <span className="text-neutral-800 dark:text-neutral-200">Softrover</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-neutral-400">UNIVERSITY</span>
                <span className="text-neutral-800 dark:text-neutral-200">UIU (Student)</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-neutral-400">LOCATION</span>
                <span className="text-neutral-800 dark:text-neutral-200">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Dossier Section Navigation Tabs */}
      <div className="border-b border-black/10 dark:border-white/10 px-4 md:px-12 py-3 bg-[#F4F1EB] dark:bg-[#161514] sticky top-0 z-30">
        <div className="max-w-6xl mx-auto flex items-center justify-start overflow-x-auto gap-2 sm:gap-4 no-scrollbar">
          <div className="flex space-x-2 md:space-x-4">
            {[
              { id: 'manifesto', label: 'THE MANIFESTO', icon: Feather },
              { id: 'canon', label: 'THE PERSONAL CANON', icon: Bookmark },
              { id: 'timeline', label: 'CHRONOLOGY', icon: Clock },
              { id: 'press', label: 'PRESS LEDGER', icon: BookOpen },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-mono tracking-wider uppercase flex items-center space-x-1.5 sm:space-x-2 rounded transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-[#1A1816] text-white dark:bg-[#FAF8F5] dark:text-black font-semibold'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Tab Content */}
      <section className="px-6 md:px-12 py-14 max-w-5xl mx-auto">
        {/* TAB 1: MANIFESTO */}
        {activeTab === 'manifesto' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="border-b border-black/10 dark:border-white/10 pb-6">
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#B93826]">PHILOSOPHY</span>
              <h3 className="font-masthead text-3xl md:text-4xl font-light text-[#1A1816] dark:text-[#FAF8F5] mt-1">
                The Three Tenets of Quiet Modernism
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {DOSSIER_DATA.manifesto.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F3EFE9] dark:bg-[#181716] border border-black/10 dark:border-white/10 p-6 space-y-4 rounded-sm"
                >
                  <div className="font-masthead text-xl text-[#B93826] font-medium">
                    {item.title}
                  </div>
                  <p className="font-editorial text-base text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                    "{item.description}"
                  </p>
                </div>
              ))}
            </div>

            <div className="p-8 border border-black/15 dark:border-white/15 bg-[#FAF8F5] dark:bg-[#141312] text-center space-y-3">
              <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#C29B38]">
                ARCHIVAL CREED
              </div>
              <p className="font-masthead text-2xl md:text-3xl font-light italic max-w-2xl mx-auto">
                "We build not to be remembered by the crowds, but to stand true before the dawn."
              </p>
              <div className="text-xs font-mono text-neutral-500">— S.A., 2026</div>
            </div>
          </div>
        )}

        {/* TAB 2: PERSONAL CANON */}
        {activeTab === 'canon' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="border-b border-black/10 dark:border-white/10 pb-6">
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#B93826]">CURATED ARTIFACTS</span>
              <h3 className="font-masthead text-3xl md:text-4xl font-light text-[#1A1816] dark:text-[#FAF8F5] mt-1">
                The Personal Canon
              </h3>
              <p className="font-editorial italic text-neutral-600 dark:text-neutral-400 text-base mt-2">
                Objects, spaces, and texts that inform Sabbir's creative direction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {DOSSIER_DATA.canon.map((cat, idx) => (
                <div
                  key={idx}
                  className="border border-black/10 dark:border-white/10 p-6 bg-[#FAF8F5] dark:bg-[#141312] space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-2">
                    <span className="font-mono text-xs tracking-widest uppercase font-bold text-[#B93826]">
                      {cat.category}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">CATEGORY 0{idx + 1}</span>
                  </div>

                  <ul className="space-y-3 font-editorial text-lg text-neutral-800 dark:text-neutral-200">
                    {cat.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start space-x-2">
                        <span className="text-[#C29B38] font-mono text-xs mt-1">■</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: CHRONOLOGY */}
        {activeTab === 'timeline' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="border-b border-black/10 dark:border-white/10 pb-6">
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#B93826]">EPOCHS</span>
              <h3 className="font-masthead text-3xl md:text-4xl font-light text-[#1A1816] dark:text-[#FAF8F5] mt-1">
                Chronology & Cultural Milestones
              </h3>
            </div>

            <div className="relative border-l-2 border-black/15 dark:border-white/15 ml-4 pl-6 space-y-10">
              {DOSSIER_DATA.timeline.map((event, idx) => (
                <div key={idx} className="relative group">
                  {/* Pin marker */}
                  <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#1A1816] dark:bg-[#FAF8F5] border-2 border-white dark:border-black group-hover:bg-[#B93826] transition-colors" />

                  <div className="text-xs font-mono font-bold text-[#B93826] tracking-widest mb-1">
                    {event.year}
                  </div>
                  <p className="font-editorial text-lg md:text-xl text-neutral-800 dark:text-neutral-200 leading-relaxed">
                    {event.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: PRESS LEDGER */}
        {activeTab === 'press' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="border-b border-black/10 dark:border-white/10 pb-6">
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#B93826]">MEDIA ARCHIVES</span>
              <h3 className="font-masthead text-3xl md:text-4xl font-light text-[#1A1816] dark:text-[#FAF8F5] mt-1">
                Selected Press Features
              </h3>
            </div>

            <div className="space-y-6">
              {[
                {
                  pub: "SOFTROVER TECH JOURNAL",
                  title: "Engineering Scalable Web Systems at Softrover",
                  desc: "A deep dive into backend microservices, database performance, and team engineering practices.",
                  date: "September 2026",
                  image: "/placeholders/hero-velocity.jpg",
                },
                {
                  pub: "DEV DIALOGUE",
                  title: "The Craft of Clean Code: Notes from an Engineer",
                  desc: "Balancing computer science theory at UIU with daily production sprints and resilient web delivery.",
                  date: "Autumn 2026",
                  image: "/placeholders/architectural-skyline.jpg",
                },
                {
                  pub: "UIU TECH CHRONICLE",
                  title: "Student Spotlight: Software Engineering in Practice",
                  desc: "Reflections on undergraduate computer science research, open source toolsets, and professional growth.",
                  date: "June 2026",
                  image: "/placeholders/hero-monograph.jpg",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  onClick={() =>
                    onOpenLightbox({
                      id: `press-${idx}`,
                      title: item.title,
                      image: item.image,
                      category: item.pub,
                      curatorNote: item.desc,
                    })
                  }
                  className="p-6 border border-black/10 dark:border-white/10 bg-[#FAF8F5] dark:bg-[#141312] flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer hover:border-black dark:hover:border-white transition-all group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 text-[10px] font-mono tracking-widest text-[#B93826] uppercase">
                      <span>{item.pub}</span>
                      <span>·</span>
                      <span className="text-neutral-400">{item.date}</span>
                    </div>
                    <h4 className="font-masthead text-xl md:text-2xl font-light group-hover:text-[#B93826] transition-colors">
                      {item.title}
                    </h4>
                    <p className="font-news text-sm text-neutral-600 dark:text-neutral-400 max-w-xl">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 text-xs font-mono text-neutral-500 group-hover:text-black dark:group-hover:text-white whitespace-nowrap">
                    <span>INSPECT ARCHIVAL CLIP</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

