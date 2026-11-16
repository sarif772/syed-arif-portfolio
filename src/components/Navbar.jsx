import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown, Sparkles, Terminal } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolioData';
import { useScrollSpy } from '../hooks/useScrollSpy';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionIds = navLinks.map((link) => link.href.replace('#', ''));
  const activeSection = useScrollSpy(sectionIds, 140);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on click or resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          >
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm sm:text-base text-slate-100 dark:text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                Syed Arif Hussain
              </span>
              <span className="font-mono text-[10px] text-cyan-400/80 dark:text-cyan-400 tracking-wider uppercase flex items-center gap-1">
                <Terminal className="w-2.5 h-2.5 inline" /> AI Researcher
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center space-x-0.5 2xl:space-x-1.5 bg-slate-900/60 dark:bg-[#070e24]/80 border border-slate-700/40 dark:border-cyan-500/15 rounded-full px-3 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-2.5 2xl:px-3 py-1 rounded-full text-xs 2xl:text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-cyan-300 font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-400/40 rounded-full -z-10 shadow-glow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-3">
            <a
              href={personalInfo.cvUrl}
              download="Syed_Arif_Hussain_CV.pdf"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold font-mono tracking-wide bg-gradient-to-r from-cyan-500/15 to-violet-500/15 text-cyan-300 border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-500/25 transition-all shadow-glow-sm hover:shadow-glow-md"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-slate-800/60 dark:bg-slate-900/80 border border-slate-700/60 text-slate-200 hover:text-cyan-300"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-[#070b1a]/95 dark:bg-[#050714]/95 border-b border-cyan-500/20 backdrop-blur-2xl overflow-hidden px-6 py-6"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-2 text-base font-medium rounded-lg px-3 transition-colors ${
                      isActive
                        ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-cyan-400" />}
                  </a>
                );
              })}

              <div className="pt-4 border-t border-slate-800">
                <a
                  href={personalInfo.cvUrl}
                  download="Syed_Arif_Hussain_CV.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-sm shadow-glow-sm"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
