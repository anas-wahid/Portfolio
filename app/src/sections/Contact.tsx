import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Clock,
  Calendar,
  Send,
  Check,
  Copy,
  ArrowUpRight,
  Sparkles,
  MessageSquare,
} from 'lucide-react';
import { useBooking } from '@/providers/BookingProvider';

const projectTypes = [
  'AI Agents & Automation',
  'Full-Stack Web App',
  'SaaS MVP',
  'AI / LLM Integration',
  'Consulting & Architecture',
];

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com', handle: '@anas' },
  { name: 'LinkedIn', url: 'https://linkedin.com', handle: 'in/muhammad-anas' },
  { name: 'Twitter / X', url: 'https://twitter.com', handle: '@anas_dev' },
];

export default function Contact() {
  const { openBooking } = useBooking();

  const [selectedType, setSelectedType] = useState('AI Agents & Automation');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@creative.dev');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative z-10 py-24 md:py-32 px-6 sm:px-10 lg:px-10 overflow-hidden scroll-mt-6 min-h-[85vh] flex flex-col justify-center"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#D4FF00]/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl">
        {/* Section Label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label block mb-8"
        >
          06 | Contact &amp; Booking
        </motion.span>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.05] mb-4">
            Let's Build Something{' '}
            <span className="text-[#D4FF00]">Extraordinary</span>.
          </h2>
          <p className="text-base sm:text-lg text-white/45 font-light leading-relaxed max-w-2xl">
            Have an upcoming project, an AI concept to bring to life, or want to
            explore working together? Book a call directly or send a message below.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Direct Call & Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Direct Booking Schedule Card */}
            <div className="rounded-3xl p-7 bg-gradient-to-br from-[#D4FF00]/[0.08] via-white/[0.02] to-transparent border border-[#D4FF00]/20 relative overflow-hidden group hover:border-[#D4FF00]/40 transition-all duration-500 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#D4FF00]/15 border border-[#D4FF00]/30 flex items-center justify-center text-[#D4FF00]">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4FF00]/10 border border-[#D4FF00]/20 text-[11px] font-semibold text-[#D4FF00]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse-lime" />
                    Instant Schedule
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                    Book a 30-Min Strategy Call
                  </h3>
                  <p className="text-xs sm:text-sm text-white/45 leading-relaxed font-light">
                    Pick a live slot directly on my calendar. We'll discuss your
                    goals, technical requirements, and how to execute efficiently.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1 text-xs text-white/35 font-medium">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                    <Clock className="w-3.5 h-3.5 text-[#D4FF00]/70" /> 30 Minutes
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4FF00]/70" /> Free Consultation
                  </span>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={openBooking}
                  className="w-full py-3.5 px-5 bg-[#D4FF00] text-black font-bold text-sm rounded-full hover:brightness-110 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(212,255,0,0.25)] cursor-pointer"
                >
                  Open Calendar &amp; Pick Time
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Contact & Details Card */}
            <div className="rounded-3xl p-7 bg-white/[0.02] border border-white/[0.06] space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/60">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-white/30 tracking-wider">
                      Direct Email
                    </div>
                    <div className="text-sm font-semibold text-white">
                      hello@creative.dev
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-medium text-white/70 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#D4FF00]" />
                      <span className="text-[#D4FF00]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-white/30 tracking-wider block">
                    Location
                  </span>
                  <span className="text-white/75 font-medium flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D4FF00]/70" /> Global Remote
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-white/30 tracking-wider block">
                    Response Time
                  </span>
                  <span className="text-white/75 font-medium">Within 24 Hours</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex items-center gap-2">
                {socialLinks.map((item, i) => (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 text-center rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-[#D4FF00]/30 hover:bg-white/[0.05] text-[11px] font-medium text-white/50 hover:text-white transition-all duration-300"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7 rounded-3xl p-7 sm:p-9 bg-white/[0.02] border border-white/[0.06] relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#D4FF00]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Send a Project Inquiry
                  </h3>
                  <p className="text-xs text-white/35 font-light">
                    Have specific project requirements? Fill in the details below.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Project Type Selectable Pills */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-bold text-white/40 mb-2.5">
                    What are you looking to build?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => {
                      const isSelected = selectedType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedType(type)}
                          className={`text-xs px-3.5 py-1.5 rounded-full border transition-all duration-300 cursor-pointer ${
                            isSelected
                              ? 'bg-[#D4FF00] border-[#D4FF00] text-black font-semibold shadow-[0_2px_12px_rgba(212,255,0,0.2)]'
                              : 'bg-white/[0.02] border-white/[0.06] text-white/60 hover:border-white/20 hover:text-white'
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-bold text-white/40 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#D4FF00]/60 focus:bg-white/[0.05] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-bold text-white/40 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#D4FF00]/60 focus:bg-white/[0.05] transition-all"
                    />
                  </div>
                </div>

                {/* Message Box */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-bold text-white/40 mb-1.5">
                    Project Overview / Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Briefly tell me about your goals, scope, and timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#D4FF00]/60 focus:bg-white/[0.05] transition-all resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className="w-full sm:w-auto px-8 py-3.5 bg-white/[0.06] hover:bg-[#D4FF00] text-white hover:text-black border border-white/[0.1] hover:border-[#D4FF00] font-bold text-sm rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : submitted ? (
                      <span className="flex items-center gap-2 text-[#D4FF00] group-hover:text-black font-semibold">
                        <Check className="w-4 h-4" /> Message Sent Successfully!
                      </span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
