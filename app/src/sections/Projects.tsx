import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, ExternalLink, ChevronRight, LayoutGrid, List } from 'lucide-react';

const filterTags = ['Featured', 'React', 'TypeScript', 'AI · ML', 'SaaS', 'Node.js', 'Next.js', 'E-Commerce', 'WebGL'];

const projects = [
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
    tags: ['React', 'TypeScript', 'AI', 'Node.js'],
    caseStudy: 'https://ai-repo-analysis.vercel.app/',
    visitSite: 'https://ai-repo-analysis.vercel.app/',
  },
  {
    title: 'AdPilot — Ad Management Dashboard',
    description:
      'A full-featured ad management SaaS that turns ad spend into real profit. Track orders, commissions, campaigns, and expenses — with AI-powered order extraction and real-time P&L reporting.',
    categories: ['SaaS', 'React'],
    duration: '3 Months',
    images: [
      // '/images/project-adpilot-campaigns.jpg',
      '/images/project-adpilot-landing.jpg',
      '/images/project-adpilot-dashboard.jpg',
      '/images/project-adpilot-orders.jpg',
      '/images/project-adpilot-commissions.jpg',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'AI'],
    caseStudy: 'https://admanagment.vercel.app/',
    visitSite: 'https://admanagment.vercel.app/',
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
    tags: ['React', 'TypeScript', 'Python', 'AI'],
    caseStudy: '#',
    visitSite: '#',
  },
  {
    title: 'Nexus Commerce',
    description:
      'A full-featured e-commerce platform with real-time analytics, inventory management, and AI-powered product recommendations.',
    categories: ['E-Commerce', 'SaaS'],
    duration: '3 Months',
    images: [
      '/images/project-ecommerce.jpg',
      '/images/project-ecommerce.jpg',
      '/images/project-ecommerce.jpg',
      '/images/project-ecommerce.jpg',
    ],
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    caseStudy: '#',
    visitSite: '#',
  },
  {
    title: 'AI Conversational Platform',
    description:
      'An intelligent chatbot framework with multi-model support, conversation memory, and custom agent builder interface.',
    categories: ['AI · ML', 'SaaS'],
    duration: '5 Months',
    images: [
      '/images/project-ai-chat.jpg',
      '/images/project-ai-chat.jpg',
      '/images/project-ai-chat.jpg',
      '/images/project-ai-chat.jpg',
    ],
    tags: ['React', 'Python', 'OpenAI', 'WebSocket'],
    caseStudy: '#',
    visitSite: '#',
  },
  {
    title: 'Immersive Portfolio Engine',
    description:
      'A 3D portfolio generator with particle effects, scroll-based animations, and WebGL-powered visual experiences.',
    categories: ['WebGL', 'React'],
    duration: '2 Months',
    images: [
      '/images/project-portfolio.jpg',
      '/images/project-portfolio.jpg',
      '/images/project-portfolio.jpg',
      '/images/project-portfolio.jpg',
    ],
    tags: ['Three.js', 'GSAP', 'React', 'WebGL'],
    caseStudy: '#',
    visitSite: '#',
  },
  {
    title: 'FitTrack Pro',
    description:
      'A comprehensive fitness tracking app with workout plans, nutrition logging, and progress visualization dashboards.',
    categories: ['SaaS', 'React'],
    duration: '4 Months',
    images: [
      '/images/project-fitness.jpg',
      '/images/project-fitness.jpg',
      '/images/project-fitness.jpg',
      '/images/project-fitness.jpg',
    ],
    tags: ['React Native', 'Firebase', 'Chart.js', 'Node.js'],
    caseStudy: '#',
    visitSite: '#',
  },
  {
    title: 'DataVision Analytics',
    description:
      'Enterprise-grade analytics dashboard with real-time data streams, customizable widgets, and collaborative features.',
    categories: ['SaaS', 'TypeScript'],
    duration: '6 Months',
    images: [
      '/images/project-analytics.jpg',
      '/images/project-analytics.jpg',
      '/images/project-analytics.jpg',
      '/images/project-analytics.jpg',
    ],
    tags: ['Vue.js', 'D3.js', 'GraphQL', 'AWS'],
    caseStudy: '#',
    visitSite: '#',
  },
  {
    title: 'SocialSync Manager',
    description:
      'A social media management tool with content scheduling, engagement analytics, and multi-platform publishing.',
    categories: ['SaaS', 'Next.js'],
    duration: '3 Months',
    images: [
      '/images/project-social.jpg',
      '/images/project-social.jpg',
      '/images/project-social.jpg',
      '/images/project-social.jpg',
    ],
    tags: ['Next.js', 'tRPC', 'Tailwind', 'Redis'],
    caseStudy: '#',
    visitSite: '#',
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
            className="flex-shrink-0 w-[300px] sm:w-[340px] lg:w-[380px] snap-start"
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

  return (
    <section id="projects" className="relative z-10 py-24 md:py-32 px-6 sm:px-10 lg:px-10" ref={ref}>
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
            Selected work
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
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
          className="mb-16 border-y border-white/[0.06] py-4 overflow-hidden"
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
        <div className="space-y-20 sm:space-y-28">
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
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
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
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-white/35 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Right: Action Buttons */}
                <div className="flex flex-wrap gap-2.5 shrink-0 lg:pt-8">
                  <a
                    href={project.caseStudy}
                    {...(project.caseStudy !== '#' ? { target: '_blank', rel: 'noreferrer' } : {})}
                    onClick={project.caseStudy === '#' ? (e) => e.preventDefault() : undefined}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-white text-sm font-medium hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-300"
                  >
                    Case study
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={project.visitSite}
                    {...(project.visitSite !== '#' ? { target: '_blank', rel: 'noreferrer' } : {})}
                    onClick={project.visitSite === '#' ? (e) => e.preventDefault() : undefined}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-white text-sm font-medium hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-300"
                  >
                    Visit site
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
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
    </section>
  );
}
