import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';

import CoverPage from './pages/CoverPage';
import JournalPage from './pages/JournalPage';
import ArchivePage from './pages/ArchivePage';
import DossierPage from './pages/DossierPage';
import CorrespondencePage from './pages/CorrespondencePage';
import { ARCHIVE_WORKS } from './data/content';

export default function App() {
  const [activePage, setActivePage] = useState('cover');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lightboxItem, setLightboxItem] = useState(null);

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['cover', 'journal', 'archive', 'dossier', 'correspondence'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when page changes
  const handlePageChange = (page) => {
    setActivePage(page);
    window.location.hash = page;
  };

  // Dark mode effect on root element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Open lightbox with safe fallback
  const handleOpenLightbox = (item) => {
    setLightboxItem(item);
  };

  return (
    <div
      className={`min-h-screen flex flex-col bg-[#FAF8F5] dark:bg-[#121110] text-[#1A1816] dark:text-[#E8E6E3] transition-colors duration-500 font-sans-clean relative`}
    >
      {/* Background grain texture */}
      <div className="fixed inset-0 pointer-events-none bg-grain opacity-40 z-50"></div>

      {/* Main Header / Masthead */}
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* Dynamic Page Rendering */}
      <main className="flex-1 w-full">
        {activePage === 'cover' && (
          <CoverPage
            setActivePage={handlePageChange}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {activePage === 'journal' && (
          <JournalPage
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {activePage === 'archive' && (
          <ArchivePage
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {activePage === 'dossier' && (
          <DossierPage
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {activePage === 'correspondence' && (
          <CorrespondencePage />
        )}
      </main>

      {/* Luxury Colophon Footer */}
      <Footer setActivePage={handlePageChange} />

      {/* Fullscreen Lightbox Modal */}
      {lightboxItem && (
        <Lightbox
          item={lightboxItem}
          items={ARCHIVE_WORKS}
          onClose={() => setLightboxItem(null)}
          onSelect={(newItem) => setLightboxItem(newItem)}
        />
      )}
    </div>
  );
}
