import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stackCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML & CSS'],
  },
  {
    id: 'backend',
    title: 'Backend',
    items: ['Node.js', 'Python', 'REST APIs', 'GraphQL', 'Express', 'WebSockets'],
  },
  {
    id: 'ai',
    title: 'AI · ML',
    items: ['LangChain', 'LangGraph', 'OpenAI & LLMs', 'RAG Pipelines', 'AI Agents'],
  },
  {
    id: 'tools-ops',
    title: 'Database & Ops',
    items: ['PostgreSQL', 'Redis', 'Docker', 'AWS', 'Git / GitHub', 'Vercel'],
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="relative z-10 py-16 sm:py-24 md:py-32 px-5 sm:px-10 lg:px-10" ref={ref}>
      <div className="max-w-6xl">
        {/* Section Number */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label block mb-4 sm:mb-6"
        >
          <span className="text-[#D4FF00]">03</span> | Tech Stack
        </motion.span>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-3">
            Stack
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/45 font-light leading-relaxed max-w-2xl">
            The tools I reach for when shipping fast, scalable products.
          </p>
        </motion.div>

        {/* 4-Quadrant Stack Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl border border-white/[0.08] bg-white/[0.015] backdrop-blur-sm overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {stackCategories.map((category, index) => {
              const isTopRow = index < 2;
              const isLeftCol = index % 2 === 0;

              const borderClasses = [
                isTopRow ? 'border-b border-white/[0.07]' : 'border-b md:border-b-0 border-white/[0.07] last:border-b-0',
                isLeftCol ? 'md:border-r border-white/[0.07]' : '',
              ].join(' ');

              return (
                <div
                  key={category.id}
                  className={`p-6 sm:p-8 lg:p-10 ${borderClasses} transition-colors duration-300 hover:bg-white/[0.01]`}
                >
                  {/* Category Title */}
                  <span className="text-xs sm:text-sm font-mono font-semibold text-[#D4FF00] tracking-wider block mb-4 sm:mb-5">
                    {category.title}
                  </span>

                  {/* Technology Items */}
                  <div className="flex flex-wrap items-center gap-x-5 sm:gap-x-6 gap-y-3">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="text-sm sm:text-base font-medium text-white/65 hover:text-white transition-colors duration-200 cursor-default select-none"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
