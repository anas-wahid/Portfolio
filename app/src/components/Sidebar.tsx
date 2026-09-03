import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Command, Menu, X } from 'lucide-react';

const navLinks = [
  { num: '01', label: 'Intro', href: '#hero' },
  { num: '02', label: 'About', href: '#about' },
  { num: '03', label: 'Skills', href: '#skills' },
  { num: '04', label: 'Projects', href: '#projects' },
  { num: '05', label: 'FAQ', href: '#faq' },
  { num: '06', label: 'Contact', href: '#contact' },
];

interface SidebarProps {
  onOpenCommandPalette: () => void;
}

export default function Sidebar({ onOpenCommandPalette }: SidebarProps) {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll spy
  const handleScroll = useCallback(() => {
    const sections = navLinks.map((l) => l.href.replace('#', ''));
    const scrollY = window.scrollY + 200;

    // If near bottom of page, activate last section (contact)
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120) {
      setActiveSection('contact');
      return;
    }

    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && el.offsetTop <= scrollY) {
        setActiveSection(sections[i]);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    setActiveSection(targetId);
    const el = document.getElementById(targetId) || document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 20;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="sidebar-fixed bg-[#0B0C0E] border-r border-white/[0.06] flex flex-col justify-between py-8 px-4">
        {/* Top: Identity */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-xl font-bold text-white tracking-tight">
              Muhammad Anas
            </h1>
            <div className="flex items-center gap-1.5 mt-1.5 text-white/40 text-xs">
              <MapPin className="w-3 h-3" />
              <span>Pakistan</span>
            </div>
            <p className="text-[11px] text-white/30 mt-1 font-medium tracking-wide">
              Full-Stack & AI Engineer
            </p>
          </motion.div>

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06]"
          >
            <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse-lime" />
            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/60">
              Available
            </span>
          </motion.div>

          {/* Navigation Links */}
          <nav className="mt-10 flex flex-col gap-1">
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className={`flex items-center gap-3 py-2.5 px-3 rounded-lg text-left transition-all duration-300 group cursor-pointer ${
                    isActive
                      ? 'bg-white/[0.06] text-white'
                      : 'text-white/30 hover:text-white/60 hover:bg-white/[0.03]'
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono font-bold tracking-wider transition-colors duration-300 ${
                      isActive ? 'text-[#D4FF00]' : 'text-white/20 group-hover:text-white/40'
                    }`}
                  >
                    {link.num}
                  </span>
                  <span className="text-sm font-medium">{link.label}</span>
                </motion.button>
              );
            })}
          </nav>
        </div>

        {/* Bottom: Command Palette Trigger */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          onClick={onOpenCommandPalette}
          className="flex items-center gap-2 text-white/25 hover:text-white/50 transition-colors text-xs group cursor-pointer"
        >
          <Command className="w-3.5 h-3.5" />
          <span className="font-medium">Navigate</span>
          <kbd className="ml-auto px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-[10px] font-mono text-white/30 group-hover:text-white/50 transition-colors">
            ⌘K
          </kbd>
        </motion.button>
      </aside>

      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#0B0C0E]/90 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="flex items-center justify-between px-4 h-14">
          <div>
            <h1 className="text-sm font-bold text-white">Muhammad Anas</h1>
            <p className="text-[10px] text-white/30">Full-Stack Engineer</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse-lime" />
              <span className="text-[9px] tracking-wider uppercase text-white/40 font-semibold">
                Available
              </span>
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.05] text-white/60"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-[#0B0C0E] border-b border-white/[0.06] px-4 py-3"
          >
            <nav className="flex flex-col gap-0.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className={`flex items-center gap-3 py-2.5 px-3 rounded-lg text-left transition-all ${
                      isActive
                        ? 'bg-white/[0.06] text-white'
                        : 'text-white/40 hover:text-white/60'
                    }`}
                  >
                    <span
                      className={`text-[10px] font-mono font-bold ${
                        isActive ? 'text-[#D4FF00]' : 'text-white/20'
                      }`}
                    >
                      {link.num}
                    </span>
                    <span className="text-sm font-medium">{link.label}</span>
                  </button>
                );
              })}
            </nav>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="flex items-center gap-2 text-white/25 text-xs mt-3 px-3 py-2"
            >
              <Command className="w-3 h-3" />
              <span>Navigate</span>
              <kbd className="ml-2 px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-[10px] font-mono">
                ⌘K
              </kbd>
            </button>
          </motion.div>
        )}
      </div>
    </>
  );
}
