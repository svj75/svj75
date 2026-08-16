import React from 'react';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'Scale', href: '#impact' },
    { name: 'What I Do', href: '#services' },
    { name: 'Approach', href: '#philosophy' },
    { name: 'AI & Digital', href: '#ai-transformation' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#1A1A1A] text-white/70 py-16 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-artistic-dots-dark pointer-events-none opacity-25"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div>
            <div className="text-2xl font-serif font-bold text-white tracking-tight">
              Sachin Jadhav
            </div>
            <div className="text-[10px] font-bold text-blue-300 uppercase tracking-[0.2em] mt-1">
              Transformation • Solutioning • AI • GCC
            </div>
            <p className="mt-3 text-xs text-white/60 max-w-sm font-normal leading-relaxed">
              27+ years turning complex business challenges into scalable operating models, global transitions, and AI-enabled business transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-y-2.5 gap-x-6 text-xs font-semibold uppercase tracking-wider text-white/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Connect Links */}
          <div className="flex items-center gap-4">
            <a
              id="footer-linkedin"
              href="https://www.linkedin.com/in/sachinjadhav"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-none sm:rounded-xs bg-[#003366] hover:bg-[#002244] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              id="footer-email"
              href="mailto:sachinvj@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-none sm:rounded-xs bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © 2026 Sachin Jadhav. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="uppercase tracking-widest text-[10px]">Executive Portfolio</span>
            <button
              id="footer-back-to-top"
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white/60 hover:text-white transition-colors cursor-pointer text-xs font-semibold"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
