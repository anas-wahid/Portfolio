import { ArrowUp } from 'lucide-react';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/anas-wahid' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammad-anas-7a846427b/' },
  { label: 'Twitter / X', href: '#' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative z-10 border-t border-white/[0.06] py-6 sm:py-8 px-5 sm:px-10 lg:px-10">
      <div className="max-w-6xl">
        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex flex-wrap gap-5 sm:gap-6">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                onClick={(e) => e.preventDefault()}
                className="text-xs font-medium text-white/25 hover:text-white/60 transition-colors duration-300"
              >
                {social.label}
              </a>
            ))}
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-4">
            <p className="text-[11px] text-white/20">
              &copy; {new Date().getFullYear()} Muhammad Anas
            </p>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center hover:bg-white/[0.08] hover:border-white/[0.1] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-white/30" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
