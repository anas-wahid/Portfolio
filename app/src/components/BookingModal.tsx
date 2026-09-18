import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Calendar, Loader2 } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const calUrl = 'https://cal.com/m-anns-lbri37?theme=dark&layout=month_view';
  const [isLoading, setIsLoading] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', damping: 26, stiffness: 360 }}
        className="relative z-10 w-full max-w-4xl bg-[#0F1014] text-white rounded-2xl sm:rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden border border-white/[0.08] flex flex-col h-[85vh] sm:h-[680px] max-h-[90vh]"
      >
        {/* Header Bar */}
        <div className="px-5 sm:px-6 py-3.5 border-b border-white/[0.06] bg-white/[0.015] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#D4FF00]/10 border border-[#D4FF00]/20 flex items-center justify-center text-[#D4FF00]">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#D4FF00] tracking-wider uppercase block leading-tight">
                Book a Call
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white/90">
                Muhammad Anas · 30 Min Meeting
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-white/40 hover:text-white rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Cal.com Embedded */}
        <div className="relative flex-1 w-full bg-[#0F1014] overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-0">
              <Loader2 className="w-6 h-6 animate-spin text-[#D4FF00]" />
              <span className="text-xs font-mono text-white/40">Loading calendar...</span>
            </div>
          )}

          <iframe
            src={calUrl}
            title="Book a call with Muhammad Anas"
            className="w-full h-full border-0 relative z-10"
            style={{ colorScheme: 'dark' }}
            onLoad={() => setIsLoading(false)}
            allow="camera; microphone; autoplay; fullscreen"
          />
        </div>
      </motion.div>
    </div>
  );
}
