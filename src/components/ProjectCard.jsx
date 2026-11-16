import React from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Sparkles,
  Bot,
  Globe,
  Cpu,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const categoryIcons = {
  GenAI: Bot,
  Web: Globe,
  Hardware: Cpu,
};

const ProjectCard = ({ project, isFeatured = false }) => {
  const CategoryIcon = categoryIcons[project.category] || Layers;

  if (isFeatured) {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -4 }}
        className="glass-card rounded-3xl p-6 sm:p-8 border border-cyan-500/25 relative overflow-hidden group shadow-glow-sm hover:shadow-glow-md"
      >
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 text-cyan-300">
              {project.badge || 'Featured Research'}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-900/80 border border-slate-700/60 text-slate-300 flex items-center gap-1.5">
              <CategoryIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>{project.category}</span>
            </span>
          </div>
          {project.period && (
            <span className="text-xs font-mono text-slate-400 bg-slate-900/60 px-3 py-1 rounded-full border border-slate-800">
              {project.period}
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-100 group-hover:text-cyan-300 transition-colors mb-2">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="text-sm font-mono text-cyan-400/90 mb-4 font-medium">
            {project.subtitle}
          </p>
        )}

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
          {project.longDescription || project.description}
        </p>

        {/* Research Direction Callout */}
        {project.researchDirection && (
          <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-violet-950/30 border border-cyan-500/20">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Research Direction</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 italic">
              "{project.researchDirection}"
            </p>
          </div>
        )}

        {/* Key Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
              Key Capabilities & Contributions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900/80 border border-slate-700/60 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Action Link Button */}
        {project.link && (
          <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-900 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-white transition-all shadow-glow-sm hover:shadow-glow-md"
            >
              <span>Explore Project / Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <span className="text-xs font-mono text-slate-400">
              Interactive System
            </span>
          </div>
        )}
      </motion.div>
    );
  }

  // Standard Project Card
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5 }}
      className="glass-card rounded-2xl p-6 flex flex-col justify-between group h-full"
    >
      <div>
        {/* Category & Date */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-900/80 border border-slate-700/60 text-cyan-300 flex items-center gap-1.5">
            <CategoryIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>{project.category}</span>
          </span>
          {project.period && (
            <span className="text-xs font-mono text-slate-400">
              {project.period}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-100 group-hover:text-cyan-300 transition-colors mb-1.5">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="text-xs font-mono text-cyan-400/80 mb-3">
            {project.subtitle}
          </p>
        )}

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-900/70 border border-slate-800 text-slate-300"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Live Demo or Github Link */}
      {project.link && (
        <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold font-mono text-cyan-300 hover:text-white group-hover:underline"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <span className="text-[11px] font-mono text-slate-500">
            Deployed
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
