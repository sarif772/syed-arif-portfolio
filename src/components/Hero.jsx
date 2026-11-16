import React from 'react';
import { motion } from 'framer-motion';
import {
  FileDown,
  Mail,
  ArrowRight,
  ExternalLink,
  GraduationCap,
  Code2,
  FileText,
  Award,
  Sparkles,
} from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import { useTypewriter } from '../hooks/useTypewriter';

const Hero = () => {
  const currentRole = useTypewriter(personalInfo.typingRoles, 80, 40, 2000);

  const statIcons = {
    GraduationCap: GraduationCap,
    Code2: Code2,
    FileText: FileText,
    Award: Award,
  };

  return (
    <section
      id="hero"
      className="relative pt-20 sm:pt-24 lg:pt-24 pb-12 sm:pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background radial gradient glow spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-violet-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Academic & Researcher Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-mono tracking-wide mb-6 shadow-glow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>BS AI Researcher &bull; Graduate School Applicant</span>
            </motion.div>

            {/* Main Name Heading with Gradient */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold font-heading tracking-tight leading-[1.1] mb-4">
              <span className="block text-slate-100 dark:text-white">Hi, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 drop-shadow-sm">
                {personalInfo.name}
              </span>
            </h1>

            {/* Animated Typing Roles */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="font-mono text-lg sm:text-2xl text-slate-300 dark:text-slate-300 font-semibold">
                Specializing in{' '}
                <span className="text-cyan-400 dark:text-cyan-300 border-b-2 border-cyan-400/60 pb-0.5">
                  {currentRole}
                </span>
                <span className="typing-cursor" />
              </span>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-400 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
              {personalInfo.tagline}
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-900 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-white shadow-glow-md hover:shadow-glow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.cvUrl}
                download="Syed_Arif_Hussain_CV.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-100 bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 shadow-glow-sm hover:shadow-glow-md transform hover:-translate-y-0.5 backdrop-blur-md"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-cyan-300 hover:text-white bg-transparent hover:bg-cyan-500/10 border border-slate-700 hover:border-cyan-500/40 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons with Tooltips */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest mr-2">
                Connect:
              </span>

              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-400 text-slate-400 hover:text-cyan-300 transition-all hover:scale-110 shadow-sm"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-violet-400 text-slate-400 hover:text-violet-300 transition-all hover:scale-110 shadow-sm"
              >
                <FaGithub className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.socialLinks.email}
                aria-label="Email Syed Arif Hussain"
                className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-sky-400 text-slate-400 hover:text-sky-300 transition-all hover:scale-110 shadow-sm"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Image with Animated Gradient Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Outer Pulsing Aura */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-violet-600/30 blur-2xl animate-pulse-slow" />

              {/* Animated Rotating Gradient Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-600 to-violet-600 p-[3px] shadow-glow-lg opacity-90"
              >
                <div className="w-full h-full rounded-full bg-[#050714]" />
              </motion.div>

              {/* Reverse Rotating Secondary Glow Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 rounded-full border border-dashed border-cyan-400/25 pointer-events-none"
              />

              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden p-2">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  loading="eager"
                  className="w-full h-full object-cover object-[center_15%] rounded-full filter contrast-105 brightness-105 hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Small Stat Badges Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 sm:mt-12"
        >
          {personalInfo.stats.map((stat, i) => {
            const IconComponent = statIcons[stat.icon] || Sparkles;

            return (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4, borderColor: 'rgba(0, 240, 255, 0.4)' }}
                className="glass-card p-5 rounded-2xl relative overflow-hidden group"
              >
                <div className="flex items-center gap-3.5 mb-2">
                  <div className="p-2.5 rounded-xl bg-gradient-to-tr from-cyan-500/10 to-violet-500/15 border border-cyan-500/20 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-100 dark:text-white">
                        {stat.value}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-cyan-400 dark:text-cyan-300">
                        {stat.sub}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 font-medium">
                  {stat.label}
                </p>
                {/* Subtle highlight gradient */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/15 transition-all pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
