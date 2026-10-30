import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ item, items = [], onClose, onSelect }) {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < items.length - 1;

  const handlePrev = (e) => {
    e.stopPropagation();
    if (hasPrev && onSelect) onSelect(items[currentIndex - 1]);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (hasNext && onSelect) onSelect(items[currentIndex + 1]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onSelect(items[currentIndex - 1]);
      if (e.key === 'ArrowRight' && hasNext) onSelect(items[currentIndex + 1]);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, hasPrev, hasNext, onClose, onSelect, items]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8 animate-fadeIn"
    >
      {/* Minimal Top Close & Index */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-white/50 text-xs font-mono">
        <span>
          {currentIndex >= 0 ? String(currentIndex + 1).padStart(2, '0') : '01'} / {String(items.length).padStart(2, '0')}
        </span>
        <button
          onClick={onClose}
          className="p-2 text-white/70 hover:text-white transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev Navigation */}
      {hasPrev && (
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-2 text-white/40 hover:text-white transition-colors cursor-pointer"
          aria-label="Previous"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
      )}

      {/* Next Navigation */}
      {hasNext && (
        <button
          onClick={handleNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-2 text-white/40 hover:text-white transition-colors cursor-pointer"
          aria-label="Next"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      )}

      {/* Clean, Simple Image & Caption Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-4xl w-full flex flex-col items-center text-center space-y-4"
      >
        <div className="relative max-h-[72vh] overflow-hidden flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[72vh] w-auto max-w-full object-contain rounded-sm shadow-2xl"
          />
        </div>

        {/* Clean, Simple Typography Details */}
        <div className="space-y-1 max-w-2xl px-4">
          <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#C29B38]">
            {item.category}
          </div>
          <h3 className="font-masthead text-xl md:text-2xl font-light text-white tracking-wide">
            {item.title}
          </h3>
          {item.curatorNote && (
            <p className="font-editorial italic text-sm md:text-base text-neutral-300">
              "{item.curatorNote}"
            </p>
          )}
          {item.camera && (
            <div className="pt-2 text-xs font-mono text-neutral-400">
              {item.camera}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
