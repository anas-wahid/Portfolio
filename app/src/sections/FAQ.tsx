import { useState, useRef, useCallback, memo } from 'react';
import { motion, useInView } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useBooking } from '@/providers/BookingProvider';

type FAQType = { question: string; answer: string };

const faqs: FAQType[] = [
  {
    question: "What makes working with you different from other developers?",
    answer: "I offer full-stack web development, UI/UX design, and strategic technical consulting to help bring your vision to life. My expertise spans from React and Next.js to complex backend architectures, with a focus on premium quality and attention to detail."
  },
  // {
  //   question: "What's your design process like?",
  //   answer: "My process is iterative and collaborative. I start with discovery and wireframes, move to high-fidelity designs, and finally implementation — with continuous feedback loops at every stage."
  // },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity. A typical website takes 4-6 weeks, while a complex web application could take 3-6 months. I ensure transparent communication throughout the process."
  },
  {
    question: "Do you offer maintenance after launch?",
    answer: "Yes, I offer ongoing support and maintenance packages to ensure your website remains secure, up-to-date, and fully functional after launch."
  },
  {
    question: "How much does a typical project cost?",
    answer: "I offer both project-based pricing and retainer models depending on your needs. Let's hop on a call to discuss your specific requirements and find a structure that works best."
  },
  {
    question: "Do you work with agencies, or only direct clients?",
    answer: "I work with both! I frequently partner with creative agencies as an extension of their technical team, as well as direct clients and founders."
  }
  // {
  //   question: "What is GSAP, and why do you specialize in it?",
  //   answer: "GSAP is a robust JavaScript animation library. I use it to create complex, high-performance web animations that feel fluid and premium — the kind that wins awards and impresses users."
  // }
];

/* ------------------------------------------------------------------ */
/* Single FAQ row (memoized: only the toggled rows re-render on click) */
/* ------------------------------------------------------------------ */
const FAQItem = memo(function FAQItem({
  faq,
  index,
  isOpen,
  isInView,
  onToggle,
}: {
  faq: FAQType;
  index: number;
  isOpen: boolean;
  isInView: boolean;
  onToggle: (i: number) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: 0.2 + index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="border-b border-white/[0.06] [contain:layout_style]"
    >
      <button
        type="button"
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
        className="group w-full flex items-center justify-between py-4 sm:py-6 text-left cursor-pointer touch-manipulation"
      >
        <span
          className={`text-sm sm:text-lg font-medium pr-4 sm:pr-6 transition-colors duration-300 ${isOpen
              ? 'text-[#D4FF00]'
              : 'text-white/70 [@media(hover:hover)]:group-hover:text-white'
            }`}
        >
          {faq.question}
        </span>

        <Plus
          className={`w-5 h-5 stroke-[1.5] flex-shrink-0 transition-[transform,color] duration-300 will-change-transform ${isOpen
              ? 'rotate-45 text-[#D4FF00]/60'
              : 'text-white/20 [@media(hover:hover)]:group-hover:text-white/40'
            }`}
        />
      </button>

      {/* CSS grid trick: animates height (0fr -> 1fr) without JS layout work */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
      >
        <div className="overflow-hidden">
          <p
            className={`pb-4 sm:pb-6 text-white/35 text-xs sm:text-sm leading-relaxed max-w-2xl pr-4 sm:pr-8 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'
              }`}
          >
            {faq.answer}
          </p>
        </div>
      </div>
    </motion.div>
  );
});

/* ------------------------------------------------------------------ */
/* CTA box (no React state: mouse position goes into CSS variables)    */
/* ------------------------------------------------------------------ */
const FAQCta = memo(function FAQCta() {
  const { openBooking } = useBooking();
  const revealRef = useRef<HTMLDivElement>(null);

  const updatePointer = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const el = revealRef.current;
    if (!el) return;
    el.style.setProperty('--x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div
        onClick={openBooking}
        onMouseEnter={updatePointer}
        onMouseMove={updatePointer}
        className="group mt-10 sm:mt-16 rounded-2xl sm:rounded-3xl relative overflow-hidden cursor-pointer border border-white/[0.08]
                   touch-manipulation active:scale-[0.98] transition-transform duration-200
                   [@media(hover:hover)]:transition-[border-color,box-shadow,transform]
                   [@media(hover:hover)]:duration-500
                   [@media(hover:hover)]:hover:border-[#D4FF00]
                   [@media(hover:hover)]:hover:shadow-[0_10px_30px_-10px_rgba(212,255,0,0.3)]"
      >
        {/* LAYER 1: Default dark state */}
        <div className="p-6 sm:p-12 bg-white/[0.02] relative z-10">
          <h4 className="text-xl sm:text-3xl font-black mb-2 sm:mb-3 tracking-tight text-white">
            Have more questions?
          </h4>
          <p className="text-xs sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-lg text-white/40 font-light">
            Book a short call to discuss the possibilities of working together.
          </p>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              openBooking();
            }}
            className="group/btn inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 font-bold text-xs sm:text-sm rounded-full bg-[#D4FF00] text-black shadow-[0_4px_20px_rgba(212,255,0,0.25)] transition-transform duration-300 cursor-pointer touch-manipulation [@media(hover:hover)]:hover:brightness-110 [@media(hover:hover)]:hover:scale-105"
          >
            Book a call
            <svg
              className="w-4 h-4 text-black transition-transform duration-300 group-hover/btn:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* LAYER 2: Color reveal. Only rendered on devices that truly hover (desktop),
            so phones never pay the clip-path + big-gradient repaint cost. */}
        <div
          ref={revealRef}
          aria-hidden="true"
          className="hidden [@media(hover:hover)]:flex flex-col justify-start absolute inset-0 z-20 pointer-events-none p-6 sm:p-12
                     [clip-path:circle(0%_at_100%_0%)]
                     group-hover:[clip-path:circle(160%_at_100%_0%)]
                     transition-[clip-path] duration-[850ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{
            background:
              'radial-gradient(900px circle at var(--x, 100%) var(--y, 0%), #EEFF66 0%, #D4FF00 45%, #BFE600 100%)',
          }}
        >
          <h4 className="text-xl sm:text-3xl font-black mb-2 sm:mb-3 tracking-tight text-black">
            Have more questions?
          </h4>
          <p className="text-xs sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-lg text-black/85 font-medium">
            Book a short call to discuss the possibilities of working together.
          </p>
          <div>
            <span className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 font-bold text-xs sm:text-sm rounded-full bg-black text-[#D4FF00] shadow-xl">
              Book a call
              <svg
                className="w-4 h-4 text-[#D4FF00]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const toggle = useCallback(
    (i: number) => setOpenIndex((prev) => (prev === i ? null : i)),
    []
  );

  return (
    <section
      id="faq"
      className="py-20 md:py-32 px-5 sm:px-10 lg:px-10 relative z-10"
      ref={ref}
    >
      <div className="max-w-6xl">
        {/* Section Number */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label block mb-8"
        >
          <span className="text-[#D4FF00]">05</span> | FAQ
        </motion.span>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-14"
        >
          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-[1.1]">
            Frequently Asked Questions
          </h3>
        </motion.div>

        {/* FAQ List */}
        <div className="flex flex-col border-t border-white/[0.06]">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              isInView={isInView}
              onToggle={toggle}
            />
          ))}
        </div>

        {/* CTA Box */}
        <FAQCta />
      </div>
    </section>
  );
}