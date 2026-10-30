import React, { useState } from 'react';
import { Grid, Columns, Film, Eye, Filter, Sparkles, MapPin, Camera } from 'lucide-react';
import { ARCHIVE_WORKS } from '../data/content';

export default function ArchivePage({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [viewMode, setViewMode] = useState('editorial'); // 'editorial' | 'grid' | 'contact-sheet'

  const categories = ['ALL', 'Web & Backend Systems', 'Computer Science', 'Frontend Engineering', 'Developer Tooling', 'Open Source'];

  const filteredWorks =
    activeCategory === 'ALL'
      ? ARCHIVE_WORKS
      : ARCHIVE_WORKS.filter((work) => work.category === activeCategory);

  return (
    <div className="w-full">
      {/* 1. Archive Header */}
      <section className="border-b border-black/10 dark:border-white/10 px-4 sm:px-6 md:px-12 py-8 sm:py-10 bg-[#FAF8F5] dark:bg-[#121110]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 sm:space-y-3">
            <div className="text-[10px] font-mono tracking-[0.25em] sm:tracking-[0.35em] uppercase text-[#B93826]">
              SOFTWARE PROJECTS & SYSTEMS REPOSITORY
            </div>
            <h2 className="font-masthead text-3xl sm:text-5xl md:text-6xl font-light text-[#1A1816] dark:text-[#FAF8F5]">
              Projects & Engineering Archive
            </h2>
            <p className="font-editorial italic text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl">
              Production web applications at Softrover, Computer Science research at UIU, developer toolsets, and open-source systems.
            </p>
          </div>

          {/* View Mode Controls */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 border border-black/15 dark:border-white/15 p-1 rounded-sm bg-white/40 dark:bg-black/40 backdrop-blur-sm self-start md:self-end">
            <button
              onClick={() => setViewMode('editorial')}
              title="Editorial Spread View"
              className={`px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-mono tracking-wider flex items-center space-x-1.5 rounded cursor-pointer transition-all ${
                viewMode === 'editorial'
                  ? 'bg-[#1A1816] text-white dark:bg-[#FAF8F5] dark:text-black font-semibold'
                  : 'text-neutral-500 hover:text-black dark:hover:text-white'
              }`}
            >
              <Columns className="w-3.5 h-3.5" />
              <span>EDITORIAL</span>
            </button>

            <button
              onClick={() => setViewMode('grid')}
              title="Curator Grid View"
              className={`px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-mono tracking-wider flex items-center space-x-1.5 rounded cursor-pointer transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#1A1816] text-white dark:bg-[#FAF8F5] dark:text-black font-semibold'
                  : 'text-neutral-500 hover:text-black dark:hover:text-white'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>GRID</span>
            </button>

            <button
              onClick={() => setViewMode('contact-sheet')}
              title="35mm Filmstrip / Contact Sheet View"
              className={`px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-mono tracking-wider flex items-center space-x-1.5 rounded cursor-pointer transition-all ${
                viewMode === 'contact-sheet'
                  ? 'bg-[#1A1816] text-white dark:bg-[#FAF8F5] dark:text-black font-semibold'
                  : 'text-neutral-500 hover:text-black dark:hover:text-white'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>35MM</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Filter Bar */}
      <div className="border-b border-black/10 dark:border-white/10 px-4 md:px-12 py-3 bg-[#F4F1EB] dark:bg-[#161514] overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center space-x-3 text-xs font-mono uppercase tracking-wider text-neutral-500 whitespace-nowrap">
          <span className="flex items-center space-x-1 text-black dark:text-white font-semibold pr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>FILTER:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-black text-white dark:bg-white dark:text-black font-semibold'
                  : 'hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Main Display Based on View Mode */}
      <section className="px-4 md:px-12 py-12 max-w-7xl mx-auto">
        {/* MODE A: EDITORIAL SPREAD */}
        {viewMode === 'editorial' && (
          <div className="space-y-16">
            {filteredWorks.map((work, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={work.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center border-b border-black/10 dark:border-white/10 pb-16 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Photo frame */}
                  <div
                    onClick={() => onOpenLightbox(work)}
                    className={`editorial-img-wrap group cursor-pointer border border-black/10 dark:border-white/10 p-2 bg-black/5 dark:bg-white/5 ${
                      isEven ? 'lg:col-span-7' : 'lg:col-span-7 lg:order-2'
                    }`}
                  >
                    <div className="overflow-hidden relative max-h-[550px] flex items-center justify-center bg-black/5">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-auto max-h-[550px] object-cover group-hover:scale-103 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-mono tracking-widest">
                        <Eye className="w-5 h-5 mr-2 text-[#C29B38]" />
                        <span>OPEN CURATOR LIGHTBOX</span>
                      </div>
                    </div>
                  </div>

                  {/* Metadata and narrative */}
                  <div className={`space-y-5 ${isEven ? 'lg:col-span-5' : 'lg:col-span-5 lg:order-1'}`}>
                    <div className="flex items-center space-x-3 text-[10px] font-mono tracking-[0.25em] text-[#B93826] uppercase">
                      <span>PLATE NO. {String(idx + 1).padStart(2, '0')}</span>
                      <span>·</span>
                      <span>{work.year}</span>
                    </div>

                    <h3
                      onClick={() => onOpenLightbox(work)}
                      className="font-masthead text-3xl md:text-4xl font-light text-[#1A1816] dark:text-[#FAF8F5] hover:text-[#B93826] transition-colors cursor-pointer"
                    >
                      {work.title}
                    </h3>

                    <p className="font-editorial italic text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
                      "{work.curatorNote}"
                    </p>

                    <div className="space-y-2 border-t border-black/10 dark:border-white/10 pt-4 font-mono text-xs text-neutral-500">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                        <span>LOCATION : {work.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Camera className="w-3.5 h-3.5 text-neutral-400" />
                        <span>OPTICS : {work.camera}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => onOpenLightbox(work)}
                        className="text-xs font-mono tracking-[0.2em] uppercase text-[#1A1816] dark:text-[#FAF8F5] border-b border-black dark:border-white pb-1 hover:border-[#B93826] hover:text-[#B93826] transition-colors cursor-pointer"
                      >
                        VIEW FULL DETAILS →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* MODE B: CURATOR'S GRID */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorks.map((work, idx) => (
              <div
                key={work.id}
                onClick={() => onOpenLightbox(work)}
                className="group cursor-pointer bg-[#FAF8F5] dark:bg-[#141312] border border-black/10 dark:border-white/10 p-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="editorial-img-wrap aspect-[4/3] overflow-hidden bg-black/5 dark:bg-white/5 mb-3">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-1.5 p-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                    <span>PLATE 0{idx + 1}</span>
                    <span className="text-[#C29B38]">{work.year}</span>
                  </div>
                  <h4 className="font-masthead text-xl font-normal group-hover:text-[#B93826] transition-colors line-clamp-1">
                    {work.title}
                  </h4>
                  <p className="font-mono text-xs text-neutral-500 line-clamp-1">
                    {work.category} · {work.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* MODE C: 35MM CONTACT SHEET / FILMSTRIP */}
        {viewMode === 'contact-sheet' && (
          <div className="bg-[#0D0D0C] text-[#E8E6E3] p-6 md:p-10 border border-white/20 rounded-sm space-y-10">
            {/* Film Header */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-b border-white/20 pb-4 text-xs font-mono text-neutral-400 gap-2">
              <div className="flex items-center space-x-3">
                <span className="text-[#C29B38] font-bold text-sm tracking-widest">KODAK PORTRA 400</span>
                <span>·</span>
                <span>EMULSION NO. 4029-SA</span>
              </div>
              <div>SABBIR AHMED STUDIO CONTACT SHEET · 35MM ROLLS</div>
            </div>

            {/* Filmstrip Roll Frames */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredWorks.map((work, idx) => (
                <div
                  key={work.id}
                  onClick={() => onOpenLightbox(work)}
                  className="border border-white/20 p-3 bg-black hover:border-[#C29B38] transition-all cursor-pointer group space-y-2 relative"
                >
                  {/* Sprocket holes indicator */}
                  <div className="flex justify-between items-center text-[9px] font-mono text-neutral-500 pb-1 border-b border-white/10">
                    <span>■ ■ ■ FRAME {String(idx + 1).padStart(2, '0')}</span>
                    <span>35MM</span>
                  </div>

                  <div className="aspect-[3/2] overflow-hidden bg-neutral-900">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.05]"
                    />
                  </div>

                  <div className="pt-1 text-[11px] font-mono">
                    <div className="text-white group-hover:text-[#C29B38] transition-colors truncate">
                      {work.title}
                    </div>
                    <div className="text-neutral-500 text-[10px]">{work.camera}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center text-xs font-mono text-neutral-500 pt-4 border-t border-white/10">
              DEVELOPED AT STUDIO ANALOG LAB · MASTER ARCHIVES
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

