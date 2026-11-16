import React from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Bot,
  GitBranch,
  MessageSquare,
  HeartPulse,
  Sprout,
  Scan,
  FlaskConical,
  ArrowRight,
} from 'lucide-react';
import { researchInterests } from '../data/portfolioData';

const iconMap = {
  Cpu: Cpu,
  Bot: Bot,
  GitBranch: GitBranch,
  MessageSquare: MessageSquare,
  HeartPulse: HeartPulse,
  Sprout: Sprout,
  Scan: Scan,
};

const ResearchInterests = () => {
  return (
    <section id="research" className="py-24 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Research Directions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-100 dark:text-white">
            Core <span className="text-gradient-ai">Research Interests</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Exploring the frontiers of autonomous intelligence, neuro-symbolic reasoning, and multimodal safety-aware systems.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchInterests.map((item, index) => {
            const Icon = iconMap[item.icon] || Cpu;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card p-7 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Glow pill behind icon */}
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.gradient} p-0.5 mb-5 shadow-glow-sm group-hover:shadow-glow-md transition-shadow`}>
                    <div className="w-full h-full bg-[#070b1a] rounded-[14px] flex items-center justify-center text-white">
                      <Icon className="w-7 h-7 text-cyan-400 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-slate-100 group-hover:text-cyan-300 transition-colors mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-cyan-400/80 group-hover:text-cyan-300">
                  <span>Explore Applications</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchInterests;
