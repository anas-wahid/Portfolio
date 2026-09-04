import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Clock,
  Copy,
  Check,
  ArrowUpRight,
  Send,
} from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    handle: 'muhammad-anas',
    url: 'https://linkedin.com/in/muhammad-anas',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Twitter / X',
    handle: '@anas_dev',
    url: 'https://twitter.com/anas_dev',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    handle: '@anas-wahid',
    url: 'https://github.com/anas-wahid',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('annswahid@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative z-10 py-24 md:py-32 px-6 sm:px-10 lg:px-10 overflow-hidden scroll-mt-6"
    >
      {/* Background ambient */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#D4FF00]/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl">
        {/* Section Label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label block mb-8"
        >
          <span className="text-[#D4FF00]">06</span> | Contact
        </motion.span>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.05] mb-4">
            Let's Work{' '}
            <span className="text-[#D4FF00]">Together</span>.
          </h2>
          <p className="text-base sm:text-lg text-white/40 font-light leading-relaxed max-w-lg">
            Have a project in mind or just want to chat? Reach out through any channel below.
          </p>
        </motion.div>

        {/* Two equal columns side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT Column — Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl p-7 sm:p-8 bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Email row */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/50 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase font-bold text-white/25 tracking-wider block">
                    Email
                  </span>
                  <span className="text-sm font-semibold text-white truncate block">
                    annswahid@gmail.com
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-medium text-white/50 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
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

              {/* Availability row */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/50 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-white/25 tracking-wider block">
                    Availability
                  </span>
                  <span className="text-sm font-semibold text-white/75 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse-lime" />
                    Open for new projects
                  </span>
                </div>
              </div>
            </div>

            {/* Send a Message button */}
            <a
              href="mailto:annswahid@gmail.com"
              className="mt-8 w-full py-3.5 px-5 bg-[#D4FF00] text-black font-bold text-sm rounded-full hover:brightness-110 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(212,255,0,0.25)]"
            >
              Send a Message
              <Send className="w-4 h-4" />
            </a>
          </motion.div>

          {/* RIGHT Column — Social Links Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-3xl p-7 sm:p-8 bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between"
          >
            <div className="flex flex-col gap-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#D4FF00]/30 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/40 group-hover:text-[#D4FF00] group-hover:border-[#D4FF00]/30 transition-all duration-300 shrink-0">
                    {link.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-bold text-white block">
                      {link.name}
                    </span>
                    <span className="text-xs text-white/30 font-medium">
                      {link.handle}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4.5 h-4.5 text-white/15 group-hover:text-[#D4FF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
