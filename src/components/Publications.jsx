import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BookCheck, Clock, ExternalLink, Bookmark } from 'lucide-react';
import { publications } from '../data/portfolioData';

const Publications = () => {
  return (
    <section id="publications" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono uppercase tracking-wider mb-3">
            <BookCheck className="w-3.5 h-3.5" />
            <span>Scholarly Output</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-100 dark:text-white">
            Research <span className="text-gradient-ai">Publications</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Peer-reviewed investigations into neuro-symbolic reasoning, LLM calibration, and safety-critical artificial intelligence.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Publications List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {publications.map((paper) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 sm:p-10 rounded-3xl border border-violet-500/25 relative overflow-hidden group shadow-glow-sm hover:shadow-glow-violet transition-all"
            >
              {/* Top Venue & Status row */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-mono font-semibold">
                  <Clock className="w-3.5 h-3.5 animate-spin-slow" />
                  <span>{paper.status} – {paper.venue}</span>
                </div>

                <div className="text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-800">
                  {paper.type} &bull; {paper.year}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-heading text-white group-hover:text-cyan-300 transition-colors leading-snug mb-4">
                "{paper.title}"
              </h3>

              {/* Authors List with Syed Arif Hussain in Bold */}
              <div className="mb-6 p-4 rounded-2xl bg-slate-900/70 border border-slate-800">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Authors:
                </p>
                <div className="text-sm sm:text-base text-slate-300 leading-relaxed flex flex-wrap gap-x-1.5">
                  {paper.authors.map((author, i) => (
                    <span key={author.name}>
                      {author.isPrimary ? (
                        <strong className="text-cyan-300 font-extrabold underline decoration-cyan-400 underline-offset-4">
                          {author.name}
                        </strong>
                      ) : (
                        <span>{author.name}</span>
                      )}
                      {i < paper.authors.length - 1 && <span>,</span>}
                    </span>
                  ))}
                </div>
              </div>

              {/* Abstract */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <Bookmark className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Abstract</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800/80">
                  {paper.abstract}
                </p>
              </div>

              {/* Keywords */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800/80">
                <span className="text-xs font-mono text-slate-400 mr-1">Index Terms:</span>
                {paper.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-violet-950/30 border border-violet-500/20 text-violet-300"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
