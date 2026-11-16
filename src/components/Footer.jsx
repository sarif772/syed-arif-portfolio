import React from 'react';
import { ArrowUp, Terminal, Lock, Phone, Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { personalInfo, navLinks } from '../data/portfolioData';

const Footer = ({ onOpenAdmin }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#030612] py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-800/60">
          {/* Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-heading font-extrabold text-xl text-white tracking-tight">
              Syed Arif Hussain
            </span>
            <p className="text-xs font-mono text-cyan-400 mt-1 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>BS Artificial Intelligence &bull; Generative & Agentic AI</span>
            </p>
            {/* Quick Contact & Social Links */}
            <div className="flex items-center gap-3 mt-3">
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                title="LinkedIn Profile"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                title={`Call/WhatsApp: ${personalInfo.phone}`}
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                title={`Email: ${personalInfo.email}`}
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                title="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-cyan-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-3 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-400 hover:text-cyan-300 transition-all hover:scale-105 shadow-glow-sm"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom copyright, attribution, and discreet Admin link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 text-center">
          <div>
            &copy; {new Date().getFullYear()} Syed Arif Hussain. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Designed & Engineered for Frontier AI Research</span>
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-500 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors text-[11px]"
              title="Open Admin Dashboard to add/manage projects without code"
            >
              <Lock className="w-3 h-3 text-cyan-400" />
              <span>Admin Portal</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
