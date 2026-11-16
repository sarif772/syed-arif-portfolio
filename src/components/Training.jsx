import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Clock, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { training } from '../data/portfolioData';

const Training = () => {
  return (
    <section id="training" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Specialized Fellowships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-100 dark:text-white">
            Intensive <span className="text-gradient-ai">Training & Bootcamps</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Rigorous hands-on programs focusing on multi-agent autonomy, AI workflows, and advanced Python architectures.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Training Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {training.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-3xl border border-violet-500/20 relative overflow-hidden group shadow-glow-sm"
            >
              {/* Organization & Duration */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-300 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-500/30">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{item.organization}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-900/60 px-3 py-1 rounded-full border border-slate-800">
                  <Clock className="w-3.5 h-3.5 text-violet-400" />
                  <span>{item.duration}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors mb-2">
                {item.title}
              </h3>

              {/* Period */}
              <p className="text-xs font-mono text-violet-400 mb-4 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{item.period}</span>
              </p>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Competencies */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Key Competencies & Focus Areas:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.competencies.map((c, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
