import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Trophy, Rocket, Star } from 'lucide-react';


const trustBadges = [
  { icon: Star, label: 'Top Rated' },
  { icon: Trophy, label: 'Award Winning' },
  { icon: Rocket, label: '30+ Shipped' },
  { icon: Sparkles, label: 'Premium Quality' },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = Math.max(0, 1 - scrollY / 900);
      heroRef.current.style.opacity = String(opacity);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-5 sm:px-10 lg:px-10 py-16 sm:py-20"
    >
      <div ref={heroRef} className="relative z-10 max-w-6xl">
        {/* Top metadata row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-8 sm:mb-10"
        >
          <span className="section-label">
            <span className="text-[#D4FF00]">01</span> | Full-Stack & AI Engineer
          </span>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="text-xl sm:text-2xl font-bold text-white">3+</div>
              <div className="text-[10px] tracking-wider uppercase text-white/30 font-medium">Years</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-right">
              <div className="text-xl sm:text-2xl font-bold text-white">30+</div>
              <div className="text-[10px] tracking-wider uppercase text-white/30 font-medium">Projects</div>
            </div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] sm:leading-[1.05] text-white mb-5 sm:mb-6 select-none"
        >
          Building Digital{' '}
          <span className="text-[#D4FF00]">Experiences</span>{' '}
          That Matter.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-sm sm:text-lg text-white/45 font-light leading-relaxed max-w-2xl mb-6 sm:mb-8"
        >
          Full-stack developer crafting SaaS platforms, AI tools, interactive web experiences,
          and scalable systems — from concept to production.
        </motion.p>

        {/* Feature Bullets */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col gap-2.5 sm:gap-3 mb-8 sm:mb-10"
        >
          {[
            { title: 'Beyond the build', desc: 'I plan for scalability so your stack holds up as usage grows.' },
            { title: 'Built to engage', desc: 'Products shaped to attract users and keep them coming back.' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] mt-2 shrink-0" />
              <div>
                <span className="text-sm font-semibold text-white">{item.title}</span>
                <span className="text-sm text-white/35 ml-1">— {item.desc}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10"
        >
          {trustBadges.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white/50 text-xs font-medium"
            >
              <badge.icon className="w-3.5 h-3.5 text-[#D4FF00]" />
              {badge.label}
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D4FF00] text-black font-semibold text-sm rounded-full hover:brightness-110 transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto"
          >
            View work
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/[0.1] text-white/70 font-medium text-sm hover:text-white hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300 cursor-pointer w-full sm:w-auto"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
