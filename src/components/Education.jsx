import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-100 dark:text-white">
            Formal <span className="text-gradient-ai">Education</span> & Curriculum
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="relative glass-card p-8 sm:p-10 rounded-3xl border border-cyan-500/20 shadow-glow-md"
          >
            {/* Top metadata row */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-violet-600/25 border border-cyan-400/30 text-cyan-400">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    {education.degree}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-cyan-300">
                    {education.institution}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:items-end">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/60 px-3 py-1 rounded-full border border-slate-700/60 mb-1">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{education.period}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-400">
                  <Award className="w-4 h-4" />
                  <span>CGPA: {education.cgpa}</span>
                </div>
              </div>
            </div>

            {/* Academic Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Undergraduate program emphasizing rigorous theoretical foundations and applied artificial intelligence engineering. Comprehensive coursework spanning probabilistic models, deep learning architectures, neuro-symbolic reasoning, and high-performance computing pipelines.
            </p>

            {/* Major Subjects Chip Cloud */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300">
                  Core AI & Computer Science Coursework
                </h4>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {education.majorSubjects.map((subject, idx) => (
                  <motion.div
                    key={subject}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    whileHover={{ scale: 1.05, borderColor: '#00f0ff' }}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/70 border border-slate-700/60 hover:border-cyan-400/50 text-slate-200 hover:text-cyan-300 text-xs sm:text-sm font-medium transition-all shadow-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{subject}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Academic Status Callout */}
            <div className="mt-8 p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-between flex-wrap gap-3">
              <span className="text-xs font-mono text-cyan-300">
                &bull; Candidate for MS / PhD Research Fellowships (Fall 2027 Ingestion)
              </span>
              <span className="text-xs font-mono text-slate-400">
                Verified Transcript Available Upon Request
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
