import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, MapPin, Calendar, Maximize2 } from 'lucide-react';

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8 animate-fadeIn"
    >
      {/* Top controls */}
      <div className="absolute top-6 left-8 right-8 flex items-center justify-between text-white/70 z-20">
        <div className="flex items-center space-x-3 text-xs tracking-[0.2em] uppercase font-mono">
          <span>PLATE {currentIndex >= 0 ? String(currentIndex + 1).padStart(2, '0') : '01'}</span>
          <span>/</span>
          <span>{String(items.length).padStart(2, '0')}</span>
          <span className="hidden sm:inline-block ml-4 text-white/40">[{item.category || 'ARCHIVAL STUDY'}]</span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full border border-white/20 hover:border-white text-white/80 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev button */}
      {hasPrev && (
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 border border-white/20 hover:border-white text-white/80 hover:text-white transition-all cursor-pointer z-20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {hasNext && (
        <button
          onClick={handleNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 border border-white/20 hover:border-white text-white/80 hover:text-white transition-all cursor-pointer z-20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Content Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-5xl w-full max-h-[85vh] flex flex-col md:flex-row bg-[#161514] border border-white/10 rounded-sm overflow-hidden shadow-2xl"
      >
        {/* Photo Container */}
        <div className="md:w-3/5 bg-black flex items-center justify-center p-2 relative group overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[60vh] md:max-h-[80vh] w-auto max-w-full object-contain mx-auto"
          />
        </div>

        {/* Archival metadata sidebar */}
        <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 text-[#E8E6E3] overflow-y-auto">
          <div>
            <div className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#C29B38] mb-2">
              {item.category || 'EXHIBITION SPECIMEN'}
            </div>
            <h3 className="font-masthead text-2xl md:text-3xl font-light text-white leading-tight mb-4">
              {item.title}
            </h3>

            {item.curatorNote && (
              <p className="font-editorial italic text-base text-neutral-300 mb-6 leading-relaxed border-l-2 border-[#C29B38]/60 pl-3">
                "{item.curatorNote}"
              </p>
            )}

            <div className="space-y-3 font-mono text-xs border-t border-white/10 pt-4 text-neutral-400">
              {item.location && (
                <div className="flex items-center space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                  <span>LOCATION: {item.location}</span>
                </div>
              )}
              {item.year && (
                <div className="flex items-center space-x-2">
                  <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                  <span>CHRONO: {item.year}</span>
                </div>
              )}
              {item.camera && (
                <div className="flex items-center space-x-2">
                  <Camera className="w-3.5 h-3.5 text-neutral-500" />
                  <span>STACK / TOOLS: {item.camera}</span>
                </div>
              )}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-500">
            <span>SABBIR AHMED // SOFTWARE ENGINEER</span>
            <span>SOFTROVER &middot; UIU</span>
          </div>
        </div>
      </div>
    </div>
  );
}

