import React from 'react';
import { ArrowUp, Compass, Mail, ShieldCheck } from 'lucide-react';
import { NAVIGATION_LINKS, SITE_META } from '../data/content';

export default function Footer({ setActivePage }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#141312] text-[#E8E6E3] border-t border-white/10 pt-16 pb-12 px-6 md:px-16 transition-colors font-sans-clean">
      <div className="max-w-7xl mx-auto">
        {/* Top Colophon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Col 1: Editorial Seal */}
          <div className="md:col-span-5 space-y-4">
            <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#C29B38]">
              STUDIO PUBLICATION DETAILS
            </div>
            <h2 className="font-masthead text-3xl md:text-4xl font-light text-white tracking-wide">
              {SITE_META.name}
            </h2>
            <p className="font-editorial italic text-base text-neutral-400 max-w-md leading-relaxed">
              "{SITE_META.quote}"
            </p>
            <div className="pt-2 text-xs font-mono text-neutral-500 space-y-1">
              <p>DHAKA · PRIVATE STUDIO</p>
              <p>LONDON · NEW YORK RESIDENCIES</p>
            </div>
          </div>

          {/* Col 2: Directory */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400">
              DIRECTORY INDEX
            </div>
            <ul className="space-y-2 text-sm font-mono text-neutral-300">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      setActivePage(link.id);
                      scrollToTop();
                    }}
                    className="hover:text-white transition-colors cursor-pointer flex items-center space-x-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-[#C29B38] transition-colors" />
                    <span>{link.label}</span>
                    <span className="text-[10px] text-neutral-500">— {link.sublabel}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Curatorial Credits */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400">
              PRODUCTION & SPECIFICATIONS
            </div>
            <div className="space-y-2 text-xs font-mono text-neutral-400 leading-relaxed">
              <p>
                <strong className="text-neutral-200">Typography:</strong> Bodoni Moda Display, Cormorant Garamond, Plus Jakarta Sans.
              </p>
              <p>
                <strong className="text-neutral-200">Photography:</strong> Archival collections from Dialogue Magazine, Exclusive4U, and private commissions.
              </p>
              <p>
                <strong className="text-neutral-200">Press & Representation:</strong> Sabbir Ahmed Studio & Private Office.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-500 gap-4">
          <div>
            © {new Date().getFullYear()} SABBIR AHMED ARCHIVE. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors cursor-pointer border border-white/10 px-3 py-1.5 rounded-full hover:border-white/30"
          >
            <span>BACK TO MASTHEAD</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

