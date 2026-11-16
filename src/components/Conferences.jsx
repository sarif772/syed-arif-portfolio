import React from 'react';
import { motion } from 'framer-motion';
import { Presentation, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { conferences } from '../data/portfolioData';

const Conferences = () => {
  return (
    <section id="conferences" className="py-20 relative overflow-hidden bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Presentation className="w-3.5 h-3.5" />
            <span>Academic Events</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-100 dark:text-white">
            Conferences & <span className="text-gradient-ai">Seminars</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Conference Card */}
        <div className="max-w-3xl mx-auto">
          {conferences.map((conf, index) => (
            <motion.div
              key={conf.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 rounded-3xl border border-cyan-500/20 shadow-glow-sm hover:border-cyan-400/40 transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950/50 border border-cyan-500/30 text-cyan-300">
                  {conf.role}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{conf.date}</span>
                </span>
              </div>

              <h3 className="text-2xl font-bold font-heading text-white mb-2">
                {conf.title}
              </h3>
              <p className="text-sm font-semibold text-slate-400 mb-6 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-violet-400" />
                <span>{conf.host}</span>
              </p>

              <div className="space-y-2.5">
                {conf.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conferences;
