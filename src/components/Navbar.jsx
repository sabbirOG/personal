import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe, Clock } from 'lucide-react';
import AmbientSound from './AmbientSound';
import { NAVIGATION_LINKS, SITE_META } from '../data/content';

export default function Navbar({ activePage, setActivePage, isDarkMode, setIsDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState('');
  const [selectedCity, setSelectedCity] = useState('DHK');

  useEffect(() => {
    const updateTime = () => {
      const timeZones = {
        DHK: 'Asia/Dhaka',
        LON: 'Europe/London',
        NYC: 'America/New_York',
        TYO: 'Asia/Tokyo',
      };
      const now = new Date();
      const timeStr = new Intl.DateTimeFormat('en-US', {
        timeZone: timeZones[selectedCity],
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(now);
      setTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [selectedCity]);

  const toggleCity = () => {
    const cities = ['DHK', 'LON', 'NYC', 'TYO'];
    const nextIdx = (cities.indexOf(selectedCity) + 1) % cities.length;
    setSelectedCity(cities[nextIdx]);
  };

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full relative z-40 bg-[#FAF8F5] dark:bg-[#121110] text-[#1A1816] dark:text-[#E8E6E3] transition-colors duration-500">
      {/* 1. Top Utility Header Bar */}
      <div className="border-b border-black/10 dark:border-white/10 px-4 md:px-12 py-2 text-[10px] uppercase font-mono tracking-[0.2em] flex flex-wrap items-center justify-between gap-2">
        {/* Left: Clock */}
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleCity}
            className="flex items-center space-x-1.5 hover:text-black dark:hover:text-white transition-colors cursor-pointer text-neutral-600 dark:text-neutral-400"
            title="Click to switch city timezone"
          >
            <Clock className="w-3 h-3 text-[#B93826]" />
            <span>{selectedCity} : {time || '12:00:00 PM'}</span>
          </button>
          <span className="hidden sm:inline-block text-neutral-400">|</span>
          <span className="hidden sm:inline-block text-neutral-500">{SITE_META.season}</span>
        </div>

        {/* Center: Monograph Stamp */}
        <div className="hidden lg:block tracking-[0.3em] font-semibold text-neutral-700 dark:text-neutral-300">
          {SITE_META.issue}
        </div>

        {/* Right: Sound & Dark Mode */}
        <div className="flex items-center space-x-3">
          <AmbientSound />

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            title={isDarkMode ? "Switch to Linen paper" : "Switch to Nocturne mode"}
            className="p-1.5 rounded-full border border-black/15 dark:border-white/20 hover:border-black dark:hover:border-white transition-colors cursor-pointer text-neutral-600 dark:text-neutral-300"
          >
            {isDarkMode ? <Sun className="w-3 h-3" /> : <Moon className="w-3 h-3" />}
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded border border-black/15 dark:border-white/20 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* 2. Giant Editorial Masthead */}
      <div className="text-center py-6 md:py-9 px-4 border-b border-black/10 dark:border-white/10 relative overflow-hidden">
        <div className="text-[10px] md:text-xs font-mono uppercase tracking-[0.35em] text-neutral-500 dark:text-neutral-400 mb-2">
          THE MONOGRAPH & DISPATCHES OF
        </div>
        
        <h1
          onClick={() => handleNavClick('cover')}
          className="font-masthead text-4xl sm:text-6xl md:text-8xl tracking-[-0.03em] font-normal cursor-pointer select-none hover:opacity-90 transition-opacity"
        >
          {SITE_META.name}
        </h1>

        <div className="flex items-center justify-center flex-wrap gap-2 text-[10px] md:text-xs tracking-[0.25em] font-editorial italic text-neutral-600 dark:text-neutral-400 mt-2">
          <span>{SITE_META.subTitleMonogram}</span>
          <span>·</span>
          <span>SOFTROVER</span>
          <span>·</span>
          <span>UIU</span>
          <span>·</span>
          <span>{SITE_META.location}</span>
        </div>
      </div>

      {/* 3. Primary Horizontal Editorial Nav Bar */}
      <nav className="hidden md:flex items-center justify-center border-b border-black/10 dark:border-white/10 px-8 py-3.5">
        <ul className="flex items-center space-x-10 text-[11px] font-mono tracking-[0.25em] uppercase">
          {NAVIGATION_LINKS.map((link, idx) => {
            const isActive = activePage === link.id;
            return (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 transition-all duration-300 cursor-pointer group flex items-center space-x-1.5 ${
                    isActive
                      ? 'text-[#B93826] dark:text-[#E87560] font-semibold'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  <span className="text-[9px] text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                    0{idx + 1}.
                  </span>
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B93826] dark:bg-[#E87560]" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* 4. Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-black/10 dark:border-white/10 bg-[#FAF8F5] dark:bg-[#121110] px-6 py-6 animate-fadeIn">
          <ul className="space-y-4">
            {NAVIGATION_LINKS.map((link, idx) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left py-2 flex items-baseline justify-between border-b border-black/5 dark:border-white/5 ${
                    activePage === link.id
                      ? 'text-[#B93826] font-semibold'
                      : 'text-neutral-700 dark:text-neutral-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono text-neutral-400">0{idx + 1}</span>
                    <span className="font-masthead text-xl">{link.label}</span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 tracking-wider">
                    {link.sublabel}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

