import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, ExternalLink, Clock, Tag } from 'lucide-react';
import { useEffect } from 'react';

export interface CaseStudyData {
  title: string;
  subtitle: string;
  duration: string;
  categories: string[];
  tags: string[];
  overview: string;
  problem: string;
  solution: string;
  results: { label: string; value: string }[];
  images: string[];
  visitSite: string;
  liveUrl?: string;
}

interface CaseStudyModalProps {
  data: CaseStudyData | null;
  onClose: () => void;
}

export default function CaseStudyModal({ data, onClose }: CaseStudyModalProps) {
  // Close on Escape
  useEffect(() => {
    if (!data) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [data, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (data) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [data]);

  return (
    <AnimatePresence>
      {data && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center p-0 sm:p-6 pointer-events-none"
          >
            <div className="relative w-full sm:max-w-4xl max-h-[95vh] sm:max-h-[88vh] bg-[#111214] border border-white/[0.08] rounded-t-3xl sm:rounded-3xl overflow-hidden flex flex-col pointer-events-auto shadow-2xl shadow-black/60">

              {/* Top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4FF00]/30 to-transparent" />

              {/* Header */}
              <div className="flex items-start justify-between px-6 sm:px-8 pt-6 sm:pt-8 pb-5 border-b border-white/[0.06] shrink-0">
                <div className="pr-8">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    {data.categories.map((cat) => (
                      <span key={cat} className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#D4FF00]/70 px-2 py-0.5 rounded-full bg-[#D4FF00]/[0.07] border border-[#D4FF00]/[0.12]">
                        {cat}
                      </span>
                    ))}
                    <span className="flex items-center gap-1 text-[10px] text-white/30">
                      <Clock className="w-3 h-3" />
                      {data.duration}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight">
                    {data.title}
                  </h2>
                  <p className="text-sm text-white/40 mt-1 font-light">{data.subtitle}</p>
                </div>

                <button
                  onClick={onClose}
                  className="shrink-0 w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.1] transition-all duration-200 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto flex-1 px-6 sm:px-8 py-6 sm:py-8 space-y-8">

                {/* Hero Image */}
                {data.images[0] && (
                  <div className="rounded-2xl overflow-hidden border border-white/[0.06] aspect-[16/9] bg-white/[0.02]">
                    <img
                      src={data.images[0]}
                      alt={data.title}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        const t = e.target as HTMLImageElement;
                        t.style.display = 'none';
                      }}
                    />
                  </div>
                )}

                {/* Overview */}
                <div>
                  <h3 className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/30 mb-3">Overview</h3>
                  <p className="text-sm sm:text-base text-white/60 font-light leading-[1.8]">{data.overview}</p>
                </div>

                {/* Problem / Solution */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/[0.025] border border-white/[0.06] p-5 sm:p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400/70" />
                      <h3 className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/35">The Challenge</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-white/50 font-light leading-relaxed">{data.problem}</p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.025] border border-white/[0.06] p-5 sm:p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]/70" />
                      <h3 className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/35">The Solution</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-white/50 font-light leading-relaxed">{data.solution}</p>
                  </div>
                </div>

                {/* Results / Metrics */}
                {data.results.length > 0 && (
                  <div>
                    <h3 className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/30 mb-4">Key Outcomes</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {data.results.map((r) => (
                        <div key={r.label} className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-4 text-center">
                          <div className="text-xl sm:text-2xl font-black text-[#D4FF00] mb-1">{r.value}</div>
                          <div className="text-[10px] text-white/30 font-medium leading-tight">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* More Screenshots */}
                {data.images.length > 1 && (
                  <div>
                    <h3 className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/30 mb-4">Screenshots</h3>
                    <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
                      {data.images.slice(1).map((img, i) => (
                        <div key={i} className="flex-shrink-0 w-[220px] sm:w-[280px] rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.02] aspect-[4/3]">
                          <img
                            src={img}
                            alt={`Screenshot ${i + 2}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                {data.tags.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-3 h-3 text-white/30" />
                      <h3 className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/30">Tech Stack</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {data.tags.map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.07] text-white/45 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer CTA */}
              <div className="shrink-0 px-6 sm:px-8 py-4 sm:py-5 border-t border-white/[0.06] flex items-center justify-between gap-4 bg-[#0F1012]">
                <p className="text-xs text-white/25 hidden sm:block">Case Study — {data.title}</p>
                <div className="flex items-center gap-2 ml-auto">
                  <button
                    onClick={onClose}
                    className="px-4 py-2 rounded-full text-xs font-medium text-white/40 hover:text-white/70 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-200 cursor-pointer"
                  >
                    Close
                  </button>
                  {data.visitSite && data.visitSite !== '#' && (
                    <a
                      href={data.visitSite}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#D4FF00] text-black text-xs font-bold hover:brightness-110 transition-all duration-200"
                    >
                      Visit site
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
