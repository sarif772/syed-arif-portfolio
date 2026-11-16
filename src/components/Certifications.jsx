import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Calendar, CheckCircle2, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-100 dark:text-white">
            Professional <span className="text-gradient-ai">Certifications</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Externally validated competencies in algorithmic programming, computer vision, and foundational artificial intelligence.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-7 rounded-3xl border border-cyan-500/20 relative overflow-hidden group flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{cert.badge}</span>
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{cert.issueDate}</span>
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-cyan-400/90 mb-3 font-mono">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              {/* Validity Footer */}
              <div className="pt-4 border-t border-slate-800/70 flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-400 flex items-center gap-1.5 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{cert.validity}</span>
                </span>
                <span className="text-slate-400">
                  {cert.credentialType}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
