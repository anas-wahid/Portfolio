import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  User,
  Wrench,
  FolderKanban,
  HelpCircle,
  Mail,
} from 'lucide-react';

const commands = [
  { label: 'Intro', href: '#hero', icon: Home, group: 'Sections' },
  { label: 'About', href: '#about', icon: User, group: 'Sections' },
  { label: 'Skills', href: '#skills', icon: Wrench, group: 'Sections' },
  { label: 'Projects', href: '#projects', icon: FolderKanban, group: 'Sections' },
  { label: 'FAQ', href: '#faq', icon: HelpCircle, group: 'Sections' },
  { label: 'Contact', href: '#contact', icon: Mail, group: 'Sections' },
];

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const [search, setSearch] = useState('');

  // ⌘K / Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === 'Escape' && open) {
        onOpenChange(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onOpenChange]);

  const navigateTo = (href: string) => {
    onOpenChange(false);
    setSearch('');
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => onOpenChange(false)}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-1/2 top-[20%] -translate-x-1/2 z-[101] w-[90vw] max-w-[520px]"
          >
            <Command
              className="bg-[#141416] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
              label="Navigate"
            >
              <div className="flex items-center border-b border-white/[0.06] px-4">
                <svg
                  className="w-4 h-4 text-white/30 mr-3 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <Command.Input
                  value={search}
                  onValueChange={setSearch}
                  placeholder="Navigate to..."
                  className="w-full h-12 bg-transparent text-white text-sm placeholder:text-white/25 outline-none border-none"
                />
                <kbd className="shrink-0 ml-3 px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-[10px] font-mono text-white/25">
                  ESC
                </kbd>
              </div>

              <Command.List className="max-h-[300px] overflow-y-auto p-2">
                <Command.Empty className="px-4 py-8 text-center text-sm text-white/30">
                  No results found.
                </Command.Empty>

                <Command.Group
                  heading="Sections"
                  className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/20 px-2 py-2"
                >
                  {commands.map((cmd) => {
                    const Icon = cmd.icon;
                    return (
                      <Command.Item
                        key={cmd.href}
                        value={cmd.label}
                        onSelect={() => navigateTo(cmd.href)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-white/60 hover:text-white hover:bg-white/[0.06] transition-all data-[selected=true]:bg-white/[0.06] data-[selected=true]:text-white"
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        <span className="text-sm font-medium">{cmd.label}</span>
                      </Command.Item>
                    );
                  })}
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
