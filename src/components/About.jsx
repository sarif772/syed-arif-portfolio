import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Bot,
  Network,
  Sparkles,
  Compass,
  GraduationCap,
  ArrowUpRight,
  ShieldCheck,
  BrainCircuit,
} from 'lucide-react';
import { personalInfo, aboutHighlights } from '../data/portfolioData';

const highlightIcons = {
  Bot: Bot,
  Network: Network,
  BrainCircuit: BrainCircuit,
  Sparkles: Sparkles,
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-100 dark:text-white">
            Pioneering Practical <span className="text-gradient-ai">Agentic Intelligence</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 glass-card p-8 rounded-3xl relative overflow-hidden"
          >
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-slate-300 text-xs font-mono mb-6 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-rose-400 animate-bounce" />
              <span>{personalInfo.location}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-4">
              Building autonomous AI systems that reason, plan, and create tangible real-world impact.
            </h3>

            <p className="text-slate-300 dark:text-slate-300 text-base leading-relaxed mb-6">
              {personalInfo.bio}
            </p>

            <div className="pt-6 border-t border-slate-700/40 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-1">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase">Degree</h4>
                  <p className="text-sm font-semibold text-slate-200">BS Artificial Intelligence</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 mt-1">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase">Focus</h4>
                  <p className="text-sm font-semibold text-slate-200">Generative & Agentic AI</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Highlights Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutHighlights.map((item, index) => {
              const IconComponent = highlightIcons[item.icon] || Sparkles;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4, borderColor: 'rgba(0, 240, 255, 0.4)' }}
                  className="glass-card p-6 rounded-2xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/15 to-violet-600/15 border border-cyan-400/20 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition-all mb-4">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-slate-100 group-hover:text-cyan-300 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/40 flex items-center justify-between text-xs font-mono text-cyan-400/70 group-hover:text-cyan-300">
                    <span>Research Vector</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
