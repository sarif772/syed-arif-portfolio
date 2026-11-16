import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Cpu,
  Bot,
  Database,
  TrendingUp,
  Network,
  MessageSquare,
  Eye,
  Terminal,
  Code2,
  FileCode,
  Layout,
  Palette,
  Atom,
  Server,
  Layers,
  Activity,
  Crosshair,
  Globe,
  GitBranch,
  Cloud,
  Box,
  Lightbulb,
  Compass,
  Radio,
  Award,
  Clock,
  Rocket,
  Users,
  Wrench,
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const skillIcons = {
  Sparkles,
  Cpu,
  Bot,
  Database,
  TrendingUp,
  Network,
  MessageSquare,
  Eye,
  Terminal,
  Code2,
  FileCode,
  Layout,
  Palette,
  Atom,
  Server,
  Layers,
  Activity,
  Crosshair,
  Globe,
  GitBranch,
  Cloud,
  Box,
  Lightbulb,
  Compass,
  Radio,
  Award,
  Clock,
  Rocket,
  Users,
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-100 dark:text-white">
            Skills & <span className="text-gradient-ai">Competencies</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Grounded in core mathematical modeling, autonomous agentic loops, and modern full-stack web engineering.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mt-4" />
        </div>

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* AI / ML */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="glass-card p-7 rounded-3xl border border-cyan-500/20 shadow-glow-sm"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading text-slate-100">
                  {skillsData.aiMl.category}
                </h3>
                <span className="text-xs font-mono text-cyan-400/80">
                  Primary Research & Engineering Specialization
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {skillsData.aiMl.skills.map((skill, i) => {
                const Icon = skillIcons[skill.icon] || Sparkles;
                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-cyan-500/20 hover:border-cyan-400/60 text-slate-200 hover:text-cyan-300 text-xs sm:text-sm font-medium transition-all group shadow-sm"
                  >
                    <Icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span>{skill.name}</span>
                    {skill.level && (
                      <span className="text-[10px] font-mono text-cyan-300/70 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-500/20">
                        {skill.level}
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-7 rounded-3xl border border-violet-500/20 shadow-glow-sm"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-violet-500/15 text-violet-400">
                <FileCode className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading text-slate-100">
                  {skillsData.programming.category}
                </h3>
                <span className="text-xs font-mono text-violet-400/80">
                  Algorithms & Systems Programming
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {skillsData.programming.skills.map((skill, i) => {
                const Icon = skillIcons[skill.icon] || Code2;
                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-violet-500/20 hover:border-violet-400/60 text-slate-200 hover:text-violet-300 text-xs sm:text-sm font-medium transition-all group shadow-sm"
                  >
                    <Icon className="w-4 h-4 text-violet-400 group-hover:scale-110 transition-transform" />
                    <span>{skill.name}</span>
                    {skill.level && (
                      <span className="text-[10px] font-mono text-violet-300/70 bg-violet-950/60 px-1.5 py-0.5 rounded border border-violet-500/20">
                        {skill.level}
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Web & Developer Tools */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-7 rounded-3xl border border-sky-500/20 shadow-glow-sm"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-sky-500/15 text-sky-400">
                <Atom className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading text-slate-100">
                  {skillsData.webTools.category}
                </h3>
                <span className="text-xs font-mono text-sky-400/80">
                  Tooling, Web Frameworks & ML Infrastructure
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {skillsData.webTools.skills.map((skill, i) => {
                const Icon = skillIcons[skill.icon] || Layers;
                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-sky-500/20 hover:border-sky-400/60 text-slate-200 hover:text-sky-300 text-xs sm:text-sm font-medium transition-all group shadow-sm"
                  >
                    <Icon className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                    <span>{skill.name}</span>
                    {skill.level && (
                      <span className="text-[10px] font-mono text-sky-300/70 bg-sky-950/60 px-1.5 py-0.5 rounded border border-sky-500/20">
                        {skill.level}
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-7 rounded-3xl border border-emerald-500/20 shadow-glow-sm"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading text-slate-100">
                  {skillsData.softSkills.category}
                </h3>
                <span className="text-xs font-mono text-emerald-400/80">
                  Research Collaboration, Critical Analysis & Delivery
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {skillsData.softSkills.skills.map((skill, i) => {
                const Icon = skillIcons[skill.icon] || Sparkles;
                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-emerald-500/20 hover:border-emerald-400/60 text-slate-200 hover:text-emerald-300 text-xs sm:text-sm font-medium transition-all group shadow-sm"
                  >
                    <Icon className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <span>{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
