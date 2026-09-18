import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// SVG Logo components
const JSLogo = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 rounded" fill="#F7DF1E">
    <rect width="24" height="24" rx="4" />
    <text x="18" y="19" fill="#000" fontSize="10" fontWeight="900" textAnchor="end">JS</text>
  </svg>
);

const TSLogo = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 rounded" fill="#3178C6">
    <rect width="24" height="24" rx="4" />
    <text x="18" y="19" fill="#fff" fontSize="10" fontWeight="900" textAnchor="end">TS</text>
  </svg>
);

const PythonLogo = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#3776AB">
    <circle cx="12" cy="12" r="10" fillOpacity="0.2" />
    <text x="12" y="16" fill="#3776AB" fontSize="9" fontWeight="800" textAnchor="middle">Py</text>
  </svg>
);

const ReactLogo = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-[#61DAFB]" strokeWidth="1.5">
    <ellipse cx="12" cy="12" rx="10" ry="4.5" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="2" fill="#61DAFB" />
  </svg>
);

const NextLogo = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7">
    <circle cx="12" cy="12" r="11" fill="white" />
    <path d="M16.5 17.5L8.5 7.5v9h-1.5v-12h1.5l8 10v-10h1.5v13z" fill="black" />
  </svg>
);

const SQLLogo = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-[#336791]" strokeWidth="1.5">
    <ellipse cx="12" cy="5" rx="9" ry="3" fill="#336791" fillOpacity="0.3" />
    <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
  </svg>
);

const HTMLLogo = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#E34F26]">
    <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm15.1 6.5H7.1l.3 3h9.1l-.6 6.5-3.9 1.3-3.9-1.3-.2-2.5h-3l.5 5.5 6.6 2.2 6.6-2.2.8-9h-9.9l-.3-3h11.2l-.2-2.5z" />
  </svg>
);

const TailwindLogo = () => (
  <svg viewBox="0 0 54 33" className="w-7 h-5 fill-[#38BDF8]">
    <path d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" />
  </svg>
);

const GraphQLLogo = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-[#E10098] fill-none" strokeWidth="1.5">
    <polygon points="12,2 20,7 20,17 12,22 4,17 4,7" />
    <circle cx="12" cy="12" r="2" fill="#E10098" />
  </svg>
);

const LangChainLogo = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-[#13EF95]" strokeWidth="1.5" strokeLinecap="round">
    <path d="M12 4c2.5 0 4.5 2 4.5 4.5S14.5 13 12 13s-4.5-2-4.5-4.5S9.5 4 12 4z" fill="#13EF95" fillOpacity="0.2" />
    <circle cx="12" cy="12" r="8" />
  </svg>
);

const LangGraphLogo = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-[#FF5A5F]" strokeWidth="1.5">
    <circle cx="6" cy="18" r="2.5" fill="#FF5A5F" />
    <circle cx="18" cy="6" r="2.5" fill="#FF5A5F" />
    <circle cx="12" cy="10" r="2.5" fill="#FF5A5F" />
    <line x1="6" y1="18" x2="12" y2="10" />
    <line x1="12" y1="10" x2="18" y2="6" />
  </svg>
);

const LLMLogo = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-[#A855F7]" strokeWidth="1.5">
    <circle cx="12" cy="12" r="5" fill="#A855F7" fillOpacity="0.3" />
    <path d="M12 7v10M7 12h10" />
    <circle cx="12" cy="12" r="9" strokeOpacity="0.3" />
  </svg>
);

const RestAPILogo = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7">
    <rect width="24" height="24" rx="5" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="1.2" />
    <text x="12" y="15.5" fill="#10B981" fontSize="7.5" fontWeight="800" textAnchor="middle" letterSpacing="0.5">REST</text>
  </svg>
);

const categories = ['All', 'Languages', 'Frameworks', 'Tools', 'AI / ML'] as const;

const skillsData = [
  { name: 'JavaScript', note: 'ES6+ · Async / Await', logo: JSLogo, category: 'Languages' as const },
  { name: 'TypeScript', note: 'Strict Types · Interfaces', logo: TSLogo, category: 'Languages' as const },
  { name: 'Python', note: 'Concurrency · Scripts', logo: PythonLogo, category: 'Languages' as const },
  { name: 'React', note: 'Hooks · State Management', logo: ReactLogo, category: 'Frameworks' as const },
  { name: 'Next.js', note: 'App Router · SSR / SSG', logo: NextLogo, category: 'Frameworks' as const },
  { name: 'REST APIs', note: 'CRUD · Endpoints · Webhooks', logo: RestAPILogo, category: 'Tools' as const },
  { name: 'GraphQL', note: 'Schemas · Client / Server', logo: GraphQLLogo, category: 'Tools' as const },
  { name: 'SQL & Database', note: 'PostgreSQL · Queries', logo: SQLLogo, category: 'Tools' as const },
  { name: 'HTML & CSS', note: 'Flex & Grid Layouts', logo: HTMLLogo, category: 'Languages' as const },
  { name: 'Tailwind CSS', note: 'Responsive utility styling', logo: TailwindLogo, category: 'Frameworks' as const },
  { name: 'LangChain', note: 'AI agent workflows · Chains', logo: LangChainLogo, category: 'AI / ML' as const },
  { name: 'LangGraph', note: 'Multi-agent graph systems', logo: LangGraphLogo, category: 'AI / ML' as const },
  { name: 'LLM Integration', note: 'OpenAI, Claude, Llama · RAG', logo: LLMLogo, category: 'AI / ML' as const },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('All');

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative z-10 py-20 md:py-32 px-5 sm:px-10 lg:px-10" ref={ref}>
      <div className="max-w-6xl">
        {/* Section Number */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label block mb-8"
        >
          <span className="text-[#D4FF00]">03</span> | Tech Stack
        </motion.span>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-10"
        >
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-[1.1] mb-3">
            Core Stack & Capabilities
          </h3>
          <p className="text-base text-white/35 font-light leading-relaxed max-w-xl">
            The languages, frameworks, and tools I use to build scalable, high-performance systems.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-1.5 sm:gap-2 mb-8 sm:mb-10"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="relative px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-medium cursor-pointer transition-colors duration-200 outline-none"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-[#D4FF00] rounded-full shadow-[0_0_15px_rgba(212,255,0,0.2)]"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
                {!isActive && (
                  <div className="absolute inset-0 bg-white/[0.04] border border-white/[0.06] rounded-full hover:bg-white/[0.07] transition-colors" />
                )}
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    isActive ? 'text-black font-bold' : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  {cat}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid with Smooth Layout Transitions */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const Logo = skill.logo;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative rounded-xl p-4 bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12] hover:bg-white/[0.04] transition-colors duration-200 flex items-center gap-3.5 cursor-default"
                >
                  <div className="shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <Logo />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-white">{skill.name}</h4>
                    <p className="text-[11px] text-white/30 group-hover:text-white/50 transition-colors duration-200 mt-0.5 truncate">
                      {skill.note}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
