import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, ExternalLink, ChevronRight, LayoutGrid, List } from 'lucide-react';
import CaseStudyModal, { type CaseStudyData } from '@/components/CaseStudyModal';

const filterTags = ['Featured', 'React', 'TypeScript', 'AI · ML', 'SaaS', 'Node.js', 'Next.js', 'E-Commerce', 'WebGL'];

interface Project {
  title: string;
  description: string;
  categories: string[];
  duration: string;
  images: string[];
  tags: string[];
  caseStudy: CaseStudyData | null;
  visitSite: string;
}

const projects: Project[] = [
  {
    title: 'Testo — AI Repo Analyzer',
    description:
      'An AI-powered platform that automatically analyzes GitHub repositories, generates comprehensive test suites, and runs browser-based testing — ship bug-free code with zero manual tests.',
    categories: ['AI · ML', 'SaaS'],
    duration: '2 Months',
    images: [
      '/images/project-testo-landing.jpg',
      '/images/project-testo-dashboard.jpg',
      '/images/project-testo-projects.jpg',
      '/images/project-testo-history.jpg',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'OpenAI', 'Playwright', 'PostgreSQL'],
    visitSite: 'https://ai-repo-analysis.vercel.app/',
    caseStudy: {
      title: 'Testo — AI Repo Analyzer',
      subtitle: 'AI-powered automated testing platform for GitHub repositories',
      duration: '2 Months',
      categories: ['AI · ML', 'SaaS'],
      tags: ['React', 'TypeScript', 'Node.js', 'OpenAI', 'Playwright', 'PostgreSQL'],
      overview:
        'Testo is a SaaS platform that connects to a GitHub repository, reads the codebase, and automatically generates and executes a full browser-based test suite — all powered by LLMs. It eliminates the need for manual test writing and gives developers instant confidence in every push.',
      problem:
        'Developers waste hours writing and maintaining test suites. Most projects ship with little to no test coverage because testing is tedious, time-consuming, and often deprioritized in fast-moving teams.',
      solution:
        'I built an AI pipeline that reads a repo\'s structure, infers intent from the code, generates targeted test cases using OpenAI, and runs them in a real browser via Playwright — all in one click from a clean SaaS dashboard.',
      results: [
        { label: 'Test generation time', value: '<60s' },
        { label: 'Manual effort saved', value: '~90%' },
        { label: 'Repos analyzed', value: '100+' },
        { label: 'Build time', value: '2 mo' },
      ],
      images: [
        '/images/project-testo-landing.jpg',
        '/images/project-testo-dashboard.jpg',
        '/images/project-testo-projects.jpg',
        '/images/project-testo-history.jpg',
      ],
      visitSite: 'https://ai-repo-analysis.vercel.app/',
      liveUrl: 'https://ai-repo-analysis.vercel.app/',
    },
  },
  {
    title: 'AdPilot — Ad Management Dashboard',
    description:
      'A full-featured ad management SaaS that turns ad spend into real profit. Track orders, commissions, campaigns, and expenses — with AI-powered order extraction and real-time P&L reporting.',
    categories: ['SaaS', 'React'],
    duration: '3 Months',
    images: [
      '/images/project-adpilot-landing.jpg',
      '/images/project-adpilot-dashboard.jpg',
      '/images/project-adpilot-orders.jpg',
      '/images/project-adpilot-commissions.jpg',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'OpenAI', 'PostgreSQL', 'Chart.js'],
    visitSite: 'https://admanagment.vercel.app/',
    caseStudy: {
      title: 'AdPilot — Ad Management Dashboard',
      subtitle: 'Full-featured SaaS for ad spend tracking and P&L reporting',
      duration: '3 Months',
      categories: ['SaaS', 'React'],
      tags: ['React', 'TypeScript', 'Node.js', 'OpenAI', 'PostgreSQL', 'Chart.js'],
      overview:
        'AdPilot is a comprehensive ad management SaaS that helps e-commerce sellers track ad campaigns, extract orders from invoices using AI, calculate commissions, and generate real-time profit & loss reports — all in one unified dashboard.',
      problem:
        'E-commerce sellers running ads across multiple platforms had no single source of truth for profitability. They relied on spreadsheets, manual data entry, and guesswork to understand if their ad spend was actually profitable.',
      solution:
        'I built a multi-tenant SaaS with a clean dashboard UI, AI-powered invoice parsing for automatic order extraction, a commission tracker per product/SKU, and real-time P&L visualization — making profitability instantly visible.',
      results: [
        { label: 'Data entry automated', value: '~85%' },
        { label: 'Reports generated', value: 'Real-time' },
        { label: 'Platforms integrated', value: '3+' },
        { label: 'Build time', value: '3 mo' },
      ],
      images: [
        '/images/project-adpilot-landing.jpg',
        '/images/project-adpilot-dashboard.jpg',
        '/images/project-adpilot-orders.jpg',
        '/images/project-adpilot-commissions.jpg',
      ],
      visitSite: 'https://admanagment.vercel.app/',
      liveUrl: 'https://admanagment.vercel.app/',
    },
  },
  {
    title: 'Self-Learning Agent — AI Memory Platform',
    description:
      'An intelligent AI platform that remembers you — it builds and recalls memory to enhance your daily workflow. Features context awareness, learning patterns, multi-modal support, and real-time sync across all devices.',
    categories: ['AI · ML', 'SaaS'],
    duration: '4 Months',
    images: [
      '/images/project-sla-landing.jpg',
      '/images/project-sla-features.jpg',
      '/images/project-sla-views.jpg',
      '/images/project-sla-testimonials.jpg',
    ],
    tags: ['React', 'TypeScript', 'Python', 'LangChain', 'LangGraph', 'OpenAI', 'PostgreSQL', 'Redis'],
    visitSite: '#',
    caseStudy: {
      title: 'Self-Learning Agent — AI Memory Platform',
      subtitle: 'An AI that remembers you across every interaction',
      duration: '4 Months',
      categories: ['AI · ML', 'SaaS'],
      tags: ['React', 'TypeScript', 'Python', 'LangChain', 'LangGraph', 'OpenAI', 'PostgreSQL', 'Redis'],
      overview:
        'The Self-Learning Agent is an AI-powered memory platform that continuously learns from your interactions, stores structured knowledge, and intelligently surfaces the right context when you need it most — acting as a personal second brain.',
      problem:
        'Most AI assistants start fresh every conversation with zero memory of who you are, what you\'ve discussed, or how you work. This creates friction and makes AI feel generic rather than genuinely useful for personal productivity.',
      solution:
        'I architected a multi-layer memory system using LangGraph for agent orchestration, vector embeddings for semantic recall, and a structured knowledge graph — allowing the agent to build, retrieve, and update long-term memory across sessions in real time.',
      results: [
        { label: 'Memory layers', value: '3-tier' },
        { label: 'Recall accuracy', value: '~92%' },
        { label: 'Context window', value: 'Unlimited' },
        { label: 'Build time', value: '4 mo' },
      ],
      images: [
        '/images/project-sla-landing.jpg',
        '/images/project-sla-features.jpg',
        '/images/project-sla-views.jpg',
        '/images/project-sla-testimonials.jpg',
      ],
      visitSite: '#',
    },
  },
  {
    title: 'HÉR Furniture — Client Project',
    description:
      'A bespoke, minimalist e-commerce platform built for a client. Features curated spaces, detailed product pages with variant selection, and a seamless shopping experience tailored for modern British furniture.',
    categories: ['Client Project', 'E-Commerce', 'React'],
    duration: '1 Month',
    images: [
      '/images/project-her-landing.jpg',
      '/images/project-her-product.jpg',
      '/images/project-her-curated.jpg',
      '/images/project-her-products.jpg',
      '/images/project-her-footer.jpg',
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Shopify API'],
    visitSite: '#',
    caseStudy: {
      title: 'HÉR Furniture — Client Project',
      subtitle: 'Bespoke minimalist e-commerce for a British furniture brand',
      duration: '1 Month',
      categories: ['Client Project', 'E-Commerce', 'React'],
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Shopify API'],
      overview:
        'HÉR is a premium British furniture brand that needed a bespoke digital storefront to match their editorial aesthetic. I designed and built a fully custom e-commerce experience — from curated room inspirations to product detail pages with multi-variant selection and a seamless checkout.',
      problem:
        'The client\'s existing Shopify theme felt generic and disconnected from their high-end brand identity. They needed a frontend that felt as premium as their furniture — with editorial layouts, smooth animations, and an experience that told their brand story.',
      solution:
        'I built a fully custom React frontend connected to the Shopify Storefront API. The site features parallax hero sections, curated "spaces" editorial grid, animated product carousels, and a streamlined cart and checkout — all with a refined, minimal aesthetic.',
      results: [
        { label: 'Page load time', value: '<1.2s' },
        { label: 'Mobile score', value: '97/100' },
        { label: 'Delivered in', value: '1 month' },
        { label: 'Client rating', value: '5 ★' },
      ],
      images: [
        '/images/project-her-landing.jpg',
        '/images/project-her-product.jpg',
        '/images/project-her-curated.jpg',
        '/images/project-her-products.jpg',
        '/images/project-her-footer.jpg',
      ],
      visitSite: '#',
    },
  },
];

function ImageCarousel({ images }: { images: string[]; projectIndex: number }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group/carousel">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[260px] sm:w-[340px] lg:w-[380px] snap-start"
          >
            <div className="relative rounded-xl overflow-hidden bg-[#111] border border-white/[0.06] aspect-[4/3]">
              <img
                src={img}
                alt={`Screenshot ${i + 1}`}
                className={`w-full h-full object-cover ${img.includes('landing') ? 'object-top' : ''}`}
                onError={(e) => {
                  // Show a placeholder gradient if image fails
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.classList.add('bg-gradient-to-br', 'from-white/[0.03]', 'to-white/[0.01]');
                }}
              />
              {/* Slide number */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/60 to-transparent">
                <span className="text-[11px] font-mono text-white/40">
                  <span className="text-white/60">0{i + 1}</span>{' '}
                  <span className="text-white/20">/ 0{images.length}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll right button */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/[0.1] flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-white/20 cursor-pointer z-10"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [viewMode, setViewMode] = useState<'carousel' | 'list'>('carousel');
  const [activeFilter, setActiveFilter] = useState('Featured');
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudyData | null>(null);

  return (
    <section id="projects" className="relative z-10 py-20 md:py-32 px-5 sm:px-10 lg:px-10" ref={ref}>
      <div className="max-w-5xl">
        {/* Section Number */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label block mb-4"
        >
          <span className="text-[#D4FF00]">04</span>
        </motion.span>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-4"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
            Selected work
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4 mb-8 sm:mb-10"
        >
          <p className="text-base text-white/35 font-light leading-relaxed max-w-xl">
            Production apps, client builds, and personal projects.
          </p>

          {/* Carousel / List Toggle */}
          <div className="flex items-center gap-1 bg-white/[0.04] border border-white/[0.06] rounded-lg p-1 shrink-0">
            <button
              onClick={() => setViewMode('carousel')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${viewMode === 'carousel'
                ? 'bg-white/[0.08] text-white'
                : 'text-white/30 hover:text-white/50'
                }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              Carousel
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${viewMode === 'list'
                ? 'bg-white/[0.08] text-white'
                : 'text-white/30 hover:text-white/50'
                }`}
            >
              <List className="w-3.5 h-3.5" />
              List
            </button>
          </div>
        </motion.div>

        {/* Scrolling Filter Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10 sm:mb-16 border-y border-white/[0.06] py-3 sm:py-4 overflow-hidden"
        >
          <div className="flex gap-6 sm:gap-8 overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {filterTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`text-[11px] sm:text-xs font-semibold tracking-[0.15em] uppercase whitespace-nowrap transition-colors duration-300 cursor-pointer ${activeFilter === tag
                  ? 'text-[#D4FF00]'
                  : 'text-white/20 hover:text-white/40'
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects */}
        <div className="space-y-16 sm:space-y-28">
          {projects.map((project, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="group"
            >
              {/* Project Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
                {/* Left: Meta + Title + Desc */}
                <div className="max-w-2xl">
                  {/* Metadata line */}
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="text-sm font-bold text-[#D4FF00] font-mono">
                      0{i + 1}
                    </span>
                    <span className="text-white/10">—</span>
                    <span className="text-xs text-white/30 tracking-wide">
                      {project.categories.join(' · ')}
                    </span>
                    <span className="text-white/10">·</span>
                    <span className="text-xs text-white/25">{project.duration}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2 sm:mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-white/35 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Right: Action Buttons */}
                <div className="flex flex-row gap-2 sm:gap-2.5 shrink-0 lg:pt-8">
                  {/* Case Study button — always shown, opens modal */}
                  <button
                    onClick={() => project.caseStudy && setActiveCaseStudy(project.caseStudy)}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-white text-xs sm:text-sm font-medium hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-300 cursor-pointer"
                  >
                    Case study
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  {/* Visit Site button */}
                  {project.visitSite !== '#' ? (
                    <a
                      href={project.visitSite}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-white text-xs sm:text-sm font-medium hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-300"
                    >
                      Visit site
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/[0.03] border border-white/[0.05] text-white/25 text-xs sm:text-sm font-medium cursor-default">
                      Visit site
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>
              </div>

              {/* Image Carousel or List View */}
              {viewMode === 'carousel' ? (
                <ImageCarousel images={project.images} projectIndex={i} />
              ) : (
                /* List view: single large image */
                <div className="rounded-xl overflow-hidden bg-[#111] border border-white/[0.06] aspect-[16/9]">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.classList.add('bg-gradient-to-br', 'from-white/[0.03]', 'to-white/[0.01]');
                    }}
                  />
                </div>
              )}
            </motion.article>
          ))}
        </div>

        {/* Archive Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 pt-8 border-t border-white/[0.06] flex justify-center"
        >
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-[#D4FF00] transition-colors duration-300 font-medium"
          >
            View full project archive
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        data={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />
    </section>
  );
}
