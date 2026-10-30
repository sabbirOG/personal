import React, { useState } from 'react';
import { BookOpen, Clock, Heart, Share2, Type, ArrowLeft, ArrowRight, Eye } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/content';

export default function JournalPage({ onOpenLightbox }) {
  const [selectedArticleId, setSelectedArticleId] = useState(JOURNAL_ARTICLES[0].id);
  const [fontSizeLarge, setFontSizeLarge] = useState(false);
  const [fontSerif, setFontSerif] = useState(true);
  const [likes, setLikes] = useState({ 'article-1': 142, 'article-2': 98, 'article-3': 230 });
  const [hasLiked, setHasLiked] = useState({});
  const [copied, setCopied] = useState(false);

  const article = JOURNAL_ARTICLES.find((a) => a.id === selectedArticleId) || JOURNAL_ARTICLES[0];

  const handleLike = (id) => {
    if (!hasLiked[id]) {
      setLikes((prev) => ({ ...prev, [id]: prev[id] + 1 }));
      setHasLiked((prev) => ({ ...prev, [id]: true }));
    }
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full">
      {/* 1. DIALOGUE Masthead Header Banner (Inspired by Reference 4) */}
      <section className="border-b border-black/10 dark:border-white/10 px-4 md:px-12 py-8 bg-[#F4F1EB] dark:bg-[#151413] transition-colors">
        <div className="max-w-5xl mx-auto text-center space-y-3">
          <div className="text-[10px] font-mono tracking-[0.35em] uppercase text-neutral-500">
            DIGITAL CULTURE & CRITIQUE JOURNAL
          </div>
          <h2 className="font-masthead text-5xl sm:text-7xl md:text-8xl font-normal tracking-wide text-[#1A1816] dark:text-[#FAF8F5]">
            D I A L O G U E
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-600 dark:text-neutral-400 pt-2 border-t border-black/10 dark:border-white/10 max-w-xl mx-auto">
            <span>PORTFOLIO</span>
            <span>·</span>
            <span>ESSAY</span>
            <span>·</span>
            <span>LIFESTYLE</span>
            <span>·</span>
            <span>ARCHIVE</span>
            <span>·</span>
            <span>CRITIQUE</span>
          </div>
        </div>
      </section>

      {/* 2. Article Navigation Tabs */}
      <div className="border-b border-black/10 dark:border-white/10 px-4 md:px-12 py-3 bg-[#FAF8F5] dark:bg-[#121110] sticky top-0 z-30 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 overflow-x-auto pb-1">
          <div className="flex items-center space-x-2 md:space-x-4">
            {JOURNAL_ARTICLES.map((art, idx) => (
              <button
                key={art.id}
                onClick={() => setSelectedArticleId(art.id)}
                className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-all rounded cursor-pointer whitespace-nowrap ${
                  selectedArticleId === art.id
                    ? 'bg-[#1A1816] text-white dark:bg-[#FAF8F5] dark:text-black font-semibold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                <span>VOL 0{idx + 1} : {art.category}</span>
              </button>
            ))}
          </div>

          {/* Reader Preferences Toolset */}
          <div className="flex items-center space-x-2 text-xs font-mono text-neutral-500">
            <button
              onClick={() => setFontSizeLarge(!fontSizeLarge)}
              title="Toggle reading font size"
              className={`p-1.5 border rounded cursor-pointer transition-colors ${
                fontSizeLarge
                  ? 'border-[#B93826] text-[#B93826]'
                  : 'border-black/15 dark:border-white/20 hover:border-black dark:hover:border-white'
              }`}
            >
              <Type className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setFontSerif(!fontSerif)}
              title="Toggle Serif / Sans body typography"
              className="px-2 py-1 text-[10px] border border-black/15 dark:border-white/20 rounded cursor-pointer hover:border-black dark:hover:border-white"
            >
              {fontSerif ? 'SERIF' : 'SANS'}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Main Reading Article */}
      <article className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-16 space-y-12">
        {/* Article Header */}
        <header className="space-y-6 border-b border-black/10 dark:border-white/10 pb-10">
          <div className="flex items-center justify-between text-xs font-mono tracking-[0.2em] uppercase text-neutral-500">
            <span className="text-[#B93826] font-semibold">{article.issue}</span>
            <div className="flex items-center space-x-3">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
              <span>·</span>
              <span>{article.date}</span>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="font-masthead text-3xl sm:text-5xl md:text-6xl font-light text-[#1A1816] dark:text-[#FAF8F5] leading-[1.12]">
              {article.title}
            </h1>
            {article.subHeading && (
              <h2 className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-sans font-normal pt-1">
                {article.subHeading}
              </h2>
            )}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/5 text-xs font-mono text-neutral-500">
            <div>WORDS BY : <strong className="text-neutral-800 dark:text-neutral-200">{article.author}</strong></div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleLike(article.id)}
                className={`flex items-center space-x-1 cursor-pointer transition-colors ${
                  hasLiked[article.id] ? 'text-[#B93826]' : 'hover:text-black dark:hover:text-white'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${hasLiked[article.id] ? 'fill-current' : ''}`} />
                <span>{likes[article.id]}</span>
              </button>
              <button
                onClick={handleShare}
                className="flex items-center space-x-1 hover:text-black dark:hover:text-white cursor-pointer"
                title="Copy article link"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copied ? 'COPIED' : 'SHARE'}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Hero Image for this Article */}
        <div
          onClick={() =>
            onOpenLightbox({
              id: article.id,
              title: article.title,
              image: article.heroImage,
              category: article.category,
              curatorNote: article.pullQuote,
            })
          }
          className="editorial-img-wrap group cursor-pointer border border-black/10 dark:border-white/10 bg-black/5 relative overflow-hidden"
        >
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full h-auto max-h-[600px] object-cover mx-auto group-hover:scale-102 transition-transform duration-700"
          />
          <div className="p-3 bg-[#FAF8F5] dark:bg-[#121110] border-t border-black/10 dark:border-white/10 flex items-center justify-between text-[10px] font-mono text-neutral-500">
            <span>PLATE DISPATCH: {article.title}</span>
            <span className="flex items-center space-x-1 text-[#C29B38]">
              <Eye className="w-3 h-3" />
              <span>CLICK FOR FULLSCREEN INSPECTION</span>
            </span>
          </div>
        </div>

        {/* Pull Quote Callout */}
        <div className="my-10 p-6 md:p-8 bg-[#F3EFE9] dark:bg-[#181716] border-l-4 border-[#B93826] space-y-2">
          <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#B93826]">
            EDITORIAL KEYNOTE
          </div>
          <p className="font-editorial italic text-2xl md:text-3xl text-neutral-800 dark:text-neutral-200 leading-snug">
            "{article.pullQuote}"
          </p>
        </div>

        {/* Body Text Sections */}
        <div
          className={`space-y-10 ${
            fontSerif ? 'font-news' : 'font-sans-clean'
          } ${fontSizeLarge ? 'text-lg md:text-xl leading-relaxed' : 'text-base md:text-lg leading-relaxed'} text-neutral-800 dark:text-neutral-200`}
        >
          {article.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="font-masthead text-2xl md:text-3xl font-light text-[#1A1816] dark:text-[#FAF8F5] pt-4">
                {section.heading}
              </h3>
              <div className={idx === 0 ? 'drop-cap whitespace-pre-line' : 'whitespace-pre-line'}>
                {section.body}
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Supporting Image Spread (if present) */}
        {article.secondaryImage && (
          <div
            onClick={() =>
              onOpenLightbox({
                id: `${article.id}-sec`,
                title: `${article.title} (Companion Plate)`,
                image: article.secondaryImage,
                category: "COMPANION MONOGRAPH",
                curatorNote: "Archival companion plate published alongside the monograph text.",
              })
            }
            className="editorial-img-wrap group cursor-pointer border border-black/10 dark:border-white/10 bg-black/5 p-2 my-10"
          >
            <img
              src={article.secondaryImage}
              alt="Companion Plate"
              className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-700"
            />
            <div className="p-3 text-[10px] font-mono text-neutral-500 flex justify-between">
              <span>COMPANION ARCHIVAL PRINT</span>
              <span className="text-[#C29B38] font-semibold">TAP TO INSPECT PLATE</span>
            </div>
          </div>
        )}

        {/* Sign-off Colophon */}
        <div className="pt-10 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#C29B38]" />
            <span>AUTHENTICATED BY SABBIR AHMED STUDIO & MONOGRAPH OFFICE</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                const currentIdx = JOURNAL_ARTICLES.findIndex((a) => a.id === selectedArticleId);
                const prevIdx = (currentIdx - 1 + JOURNAL_ARTICLES.length) % JOURNAL_ARTICLES.length;
                setSelectedArticleId(JOURNAL_ARTICLES[prevIdx].id);
                window.scrollTo({ top: 300, behavior: 'smooth' });
              }}
              className="flex items-center space-x-1 hover:text-black dark:hover:text-white cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>PREVIOUS</span>
            </button>
            <span>/</span>
            <button
              onClick={() => {
                const currentIdx = JOURNAL_ARTICLES.findIndex((a) => a.id === selectedArticleId);
                const nextIdx = (currentIdx + 1) % JOURNAL_ARTICLES.length;
                setSelectedArticleId(JOURNAL_ARTICLES[nextIdx].id);
                window.scrollTo({ top: 300, behavior: 'smooth' });
              }}
              className="flex items-center space-x-1 hover:text-black dark:hover:text-white cursor-pointer"
            >
              <span>NEXT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

