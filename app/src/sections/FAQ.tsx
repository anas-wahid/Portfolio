import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useBooking } from '@/providers/BookingProvider';

const faqs = [
  {
    question: "What makes working with you different from other developers?",
    answer: "I offer full-stack web development, UI/UX design, and strategic technical consulting to help bring your vision to life. My expertise spans from React and Next.js to complex backend architectures, with a focus on premium quality and attention to detail."
  },
  {
    question: "What's your design process like?",
    answer: "My process is iterative and collaborative. I start with discovery and wireframes, move to high-fidelity designs, and finally implementation — with continuous feedback loops at every stage."
  },
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
  },
  {
    question: "What is GSAP, and why do you specialize in it?",
    answer: "GSAP is a robust JavaScript animation library. I use it to create complex, high-performance web animations that feel fluid and premium — the kind that wins awards and impresses users."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { openBooking } = useBooking();
  const [isCtaHovered, setIsCtaHovered] = useState(false);
  const [ctaMousePos, setCtaMousePos] = useState({ x: 0, y: 0 });

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="py-24 md:py-32 px-6 sm:px-10 lg:px-10 relative z-10" ref={ref}>
      <div className="max-w-6xl">
        {/* Section Number */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label block mb-8"
        >
          06 | FAQ
        </motion.span>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-14"
        >
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-[1.1]">
            Frequently Asked Questions
          </h3>
        </motion.div>

        {/* FAQ List */}
        <div className="flex flex-col border-t border-white/[0.06]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-white/[0.06] overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-medium text-white/70 group-hover:text-white transition-colors pr-6">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-shrink-0 text-white/20 group-hover:text-white/40 transition-colors"
                  >
                    <Plus className="w-5 h-5 stroke-[1.5]" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="pb-6 text-white/35 text-sm leading-relaxed max-w-2xl pr-8">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            onClick={scrollToContact}
            className={`mt-16 rounded-3xl relative overflow-hidden transition-all duration-500 cursor-pointer border ${
              isCtaHovered
                ? 'border-[#D4FF00] shadow-[0_20px_60px_-10px_rgba(212,255,0,0.35)]'
                : 'border-white/[0.08] hover:border-white/20'
            }`}
            onMouseEnter={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setCtaMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
              });
              setIsCtaHovered(true);
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setCtaMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
              });
              if (!isCtaHovered) setIsCtaHovered(true);
            }}
            onMouseLeave={() => {
              setIsCtaHovered(false);
            }}
          >
            {/* LAYER 1: Default Dark State */}
            <div className="p-8 sm:p-12 bg-white/[0.02] relative z-10">
              <h4 className="text-2xl sm:text-3xl font-black mb-3 tracking-tight text-white">
                Have more questions?
              </h4>
              <p className="text-sm sm:text-base leading-relaxed mb-8 max-w-lg text-white/40 font-light">
                Book a short call to discuss the possibilities of working together.
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToContact();
                }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 font-bold text-sm rounded-full bg-[#D4FF00] text-black shadow-[0_4px_20px_rgba(212,255,0,0.25)] hover:brightness-110 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                Book a call
                <svg
                  className="w-4 h-4 text-black transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* LAYER 2: Full Color Reveal Layer (Top right corner to full with ease-in-out) */}
            <div
              className="absolute inset-0 z-20 pointer-events-none p-8 sm:p-12 flex flex-col justify-start"
              style={{
                background: `radial-gradient(900px circle at ${ctaMousePos.x}px ${ctaMousePos.y}px, #EEFF66 0%, #D4FF00 45%, #BFE600 100%)`,
                clipPath: isCtaHovered ? 'circle(160% at 100% 0%)' : 'circle(0% at 100% 0%)',
                WebkitClipPath: isCtaHovered ? 'circle(160% at 100% 0%)' : 'circle(0% at 100% 0%)',
                transition:
                  'clip-path 0.85s cubic-bezier(0.65, 0, 0.35, 1), -webkit-clip-path 0.85s cubic-bezier(0.65, 0, 0.35, 1)',
              }}
            >
              <h4 className="text-2xl sm:text-3xl font-black mb-3 tracking-tight text-black">
                Have more questions?
              </h4>
              <p className="text-sm sm:text-base leading-relaxed mb-8 max-w-lg text-black/85 font-medium">
                Book a short call to discuss the possibilities of working together.
              </p>
              <div>
                <span className="inline-flex items-center gap-2.5 px-7 py-3.5 font-bold text-sm rounded-full bg-black text-[#D4FF00] shadow-xl">
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
      </div>
    </section>
  );
}
