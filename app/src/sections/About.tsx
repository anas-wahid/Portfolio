import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bot, Braces, Cpu, Layers } from 'lucide-react';

/* ── Data ── */
const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'PostgreSQL',
  'LangChain',
  'OpenAI',
  'Tailwind',
  'Docker',
  'AWS',
  'Redis',
];

const services = [
  {
    icon: Braces,
    title: 'Full-Stack Dev',
    desc: 'End-to-end web apps with modern frameworks & clean architecture',
  },
  {
    icon: Bot,
    title: 'AI Agents',
    desc: 'Autonomous agents & intelligent workflows for complex tasks',
  },
  {
    icon: Cpu,
    title: 'AI Applications',
    desc: 'Smart products integrating LLMs, RAG pipelines & ML models',
  },
  {
    icon: Layers,
    title: 'Scalable Systems',
    desc: 'Architecture designed to grow — from MVP to millions of users',
  },
];

/* ── Component ── */
export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      className="relative z-10 py-24 md:py-32 px-6 sm:px-10 lg:px-10 overflow-hidden"
      ref={ref}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4FF00]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl">
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label block mb-12"
        >
          02 | About Me
        </motion.span>

        {/* Name & Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-3">
            Muhammad Anas
          </h2>
          <p className="text-base sm:text-lg font-medium text-[#D4FF00]/80">
            Full-Stack &amp; AI Engineer
          </p>
        </motion.div>

        {/* Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-2xl bg-white/[0.02] border border-white/[0.06] p-8 relative overflow-hidden mb-5"
        >
          {/* Top gradient line */}
          <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#D4FF00]/20 to-transparent" />

          <p className="text-base sm:text-lg text-white/55 font-light leading-[1.8] relative">
            <span className="text-4xl text-[#D4FF00]/20 font-serif leading-none absolute -top-2 -left-1">
              &ldquo;
            </span>
            <span className="pl-5">
              I&apos;m a Full-Stack Developer with{' '}
              <span className="text-white font-medium">2+ years</span> of
              hands-on experience building modern web applications and{' '}
              <span className="text-[#D4FF00]/80 font-medium">
                AI-powered solutions
              </span>
              . I specialize in crafting intelligent AI agents, autonomous
              workflows, and scalable full-stack platforms — turning complex
              ideas into{' '}
              <span className="text-white font-medium">
                polished, production-ready products
              </span>
              .
            </span>
          </p>
        </motion.div>

        {/* What I Do Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5"
        >
          {services.map((service, i) => (
            <div
              key={i}
              className="group/card rounded-xl bg-white/[0.02] border border-white/[0.05] p-5 hover:bg-white/[0.04] hover:border-[#D4FF00]/15 transition-all duration-500 relative overflow-hidden cursor-default"
            >
              {/* Hover gradient fill */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4FF00]/[0.03] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="w-9 h-9 rounded-lg bg-[#D4FF00]/[0.08] border border-[#D4FF00]/[0.12] flex items-center justify-center mb-4 group-hover/card:bg-[#D4FF00]/[0.12] transition-colors duration-500">
                  <service.icon
                    className="w-4 h-4 text-[#D4FF00]/70"
                    strokeWidth={1.5}
                  />
                </div>
                <h4 className="text-sm font-semibold text-white tracking-tight mb-1.5">
                  {service.title}
                </h4>
                <p className="text-xs text-white/30 font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Tech Stack Marquee ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="rounded-2xl bg-white/[0.015] border border-white/[0.04] py-4 overflow-hidden relative"
        >
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0B0C0E] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0B0C0E] to-transparent z-10" />

          <div className="flex about-marquee gap-8 whitespace-nowrap">
            {[...techStack, ...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                className="text-xs font-medium text-white/25 tracking-wide uppercase flex items-center gap-2 shrink-0"
              >
                <span className="w-1 h-1 rounded-full bg-[#D4FF00]/30" />
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
