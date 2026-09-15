import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import CommandPalette from '@/components/CommandPalette';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import FAQ from '@/sections/FAQ';
import Contact from '@/sections/Contact';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';

export default function Home() {
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0B0C0E] overflow-x-hidden">
      <CursorGlow />
      <Sidebar onOpenCommandPalette={() => setCmdPaletteOpen(true)} />
      <CommandPalette open={cmdPaletteOpen} onOpenChange={setCmdPaletteOpen} />

      <main className="main-content relative z-10">
        {/* Mobile top padding for fixed header */}
        <div className="lg:hidden h-14" />

        <Hero />
        <About />
        <Skills />
        <Projects />
        <FAQ />
        <Contact />
        <Footer />
      </main>

    </div>
  );
}
