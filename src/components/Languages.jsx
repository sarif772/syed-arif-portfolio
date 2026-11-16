import React from 'react';
import { motion } from 'framer-motion';
import { Languages as LanguagesIcon, CheckCircle2, Globe2 } from 'lucide-react';
import { languages } from '../data/portfolioData';

const Languages = () => {
  return (
    <section id="languages" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono uppercase tracking-wider mb-3">
            <LanguagesIcon className="w-3.5 h-3.5" />
            <span>Linguistic Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-100 dark:text-white">
            Languages & <span className="text-gradient-ai">Communication</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Powering low-resource multilingual NLP modeling, cross-cultural collaboration, and global academic communication.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Languages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 rounded-2xl border border-cyan-500/15 relative overflow-hidden group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-400">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-slate-900/80 border border-slate-700/60 text-cyan-300">
                    {lang.proficiency}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {lang.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {lang.note}
                </p>
              </div>

              {/* Fluency Visual Bar */}
              <div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full"
                  />
                </div>
                <div className="flex justify-between items-center mt-2 text-[11px] font-mono text-slate-500">
                  <span>Proficiency</span>
                  <span className="text-cyan-400 font-semibold">{lang.percent}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
