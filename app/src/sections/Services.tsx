import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Website Design',
    description:
      'Crafting beautiful, high-converting websites tailored to your brand with modern interfaces and seamless interactions.',
    tags: ['UI/UX Design', 'Wireframing', 'Prototyping', 'Design System'],
  },
  {
    title: 'Web Development',
    description:
      'Building fast, secure, and scalable web applications using cutting-edge technologies for maximum performance.',
    tags: ['Frontend Dev', 'Backend API', 'Performance Opt', 'Headless CMS'],
  },
  {
    title: '3D Animation',
    description:
      'Bringing your products and concepts to life with stunning 3D visuals, immersive WebGL environments, and motion graphics.',
    tags: ['Three.js / WebGL', 'Motion Design', '3D Modeling', 'Custom Shaders'],
  },
  {
    title: 'E-commerce',
    description:
      'Designing and developing robust online stores that drive sales with secure payments and seamless checkouts.',
    tags: ['Stripe Integration', 'Shopify Custom', 'Cart Optimization', 'Analytics Setup'],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="services"
      className="relative z-10 py-20 md:py-32 px-5 sm:px-10 lg:px-16 overflow-hidden"
      ref={ref}
    >
      <div className="max-w-4xl">
        {/* Section Number */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label block mb-8"
        >
          <span className="text-[#D4FF00]">05</span> | Services
        </motion.span>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-14"
        >
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-[1.1] mb-3">
            Comprehensive Digital Solutions
          </h3>
          <p className="text-base text-white/35 font-light leading-relaxed max-w-xl">
            Strategy, design, and development combined to create experiences that help your brand stand out and scale.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="group rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.03] transition-all duration-500 p-5 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono font-bold text-white/15 group-hover:text-[#D4FF00]/60 transition-colors">
                    0{index + 1}
                  </span>
                  <h4 className="text-xl font-bold text-white tracking-tight">{service.title}</h4>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/15 group-hover:text-[#D4FF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
              </div>

              <p className="text-sm text-white/35 font-light leading-relaxed mb-5 max-w-2xl pl-0 sm:pl-9">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 pl-0 sm:pl-9">
                {service.tags.map((tag, ti) => (
                  <span
                    key={ti}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] text-white/30 group-hover:text-white/45 group-hover:border-white/[0.08] transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
