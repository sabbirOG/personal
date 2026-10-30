import React from 'react';
import { ArrowUp } from 'lucide-react';
import { NAVIGATION_LINKS, SITE_META } from '../data/content';

export default function Footer({ setActivePage }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-black/10 dark:border-white/10 bg-[#FAF8F5] dark:bg-[#121110] text-[#1A1816] dark:text-[#E8E6E3] transition-colors duration-500 py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Minimal Signature Title */}
        <div className="space-y-1">
          <h2
            onClick={scrollToTop}
            className="font-masthead text-2xl sm:text-3xl font-light tracking-wider hover:opacity-80 transition-opacity cursor-pointer select-none"
          >
            {SITE_META.name}
          </h2>
          <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-500">
            SOFTWARE ENGINEER @ SOFTROVER · STUDENT @ UIU
          </p>
        </div>

        {/* Quiet Inline Navigation */}
        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-400">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => {
                    setActivePage(link.id);
                    scrollToTop();
                  }}
                  className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Minimal Hairline Divider */}
        <div className="w-12 h-[1px] bg-black/15 dark:bg-white/15 my-2" />

        {/* Bottom Credits & Back to Top */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-400 gap-4 pt-2">
          <span>© {new Date().getFullYear()} SABBIR AHMED. ALL RIGHTS RESERVED.</span>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 hover:text-black dark:hover:text-white transition-colors cursor-pointer group tracking-wider"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
