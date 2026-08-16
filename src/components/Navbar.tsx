import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Mail, Linkedin } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F9F9F7]/95 backdrop-blur-md border-b border-black/5 py-3.5 shadow-2xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Name - Artistic Flair Typography */}
          <a
            id="brand-logo"
            href="#hero"
            onClick={(e) => handleScrollTo(e, '#hero')}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-sm bg-[#1A1A1A] text-white flex items-center justify-center font-bold text-sm tracking-tighter group-hover:bg-[#003366] transition-colors">
              SJ
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#1A1A1A] tracking-tighter text-lg leading-tight group-hover:text-[#003366] transition-colors">
                SACHIN JADHAV
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#1A1A1A]/60 font-semibold">
                Executive Transformation Leader
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`text-[11px] uppercase font-bold tracking-widest transition-all pb-0.5 ${
                    isActive
                      ? 'text-[#003366] border-b-2 border-[#003366] opacity-100'
                      : 'text-[#1A1A1A]/70 hover:text-[#003366] hover:opacity-100'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Quick Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="nav-linkedin-link"
              href="https://www.linkedin.com/in/sachinjadhav"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#1A1A1A]/70 hover:text-[#003366] hover:bg-black/5 rounded-sm transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="nav-contact-btn"
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white bg-[#1A1A1A] hover:bg-[#003366] rounded-none sm:rounded-sm transition-colors cursor-pointer"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1A1A1A] hover:bg-black/5 rounded-sm focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden fixed inset-x-0 top-[62px] bg-[#F9F9F7] border-b border-black/10 shadow-xl px-6 py-6 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`px-3 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest flex items-center justify-between transition-colors ${
                    isActive
                      ? 'text-[#003366] bg-black/5'
                      : 'text-[#1A1A1A]/80 hover:text-[#003366] hover:bg-black/5'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#003366]"></span>}
                </a>
              );
            })}
          </div>

          <div className="mt-6 pt-6 border-t border-black/10 flex flex-col gap-3">
            <a
              id="mobile-nav-email-btn"
              href="mailto:sachinvj@gmail.com"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-none border border-black/20 text-[#1A1A1A] text-xs font-bold uppercase tracking-widest hover:bg-black/5"
            >
              <Mail className="w-4 h-4 text-[#1A1A1A]/70" />
              <span>sachinvj@gmail.com</span>
            </a>
            <a
              id="mobile-nav-linkedin-btn"
              href="https://www.linkedin.com/in/sachinjadhav"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-none bg-[#1A1A1A] hover:bg-[#003366] text-white text-xs font-bold uppercase tracking-widest transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
