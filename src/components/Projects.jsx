import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Sparkles, Filter } from 'lucide-react';
import { featuredProjects, otherProjects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import { API_BASE_URL } from '../config/api';

const categories = ['All', 'GenAI', 'Web', 'Hardware'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [allFeaturedProjects, setAllFeaturedProjects] = useState(featuredProjects);
  const [allOtherProjects, setAllOtherProjects] = useState(otherProjects);

  // Fetch project updates from backend API
  const fetchBackendProjects = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/projects`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          const feat = json.data.filter((p) => p.featured);
          const nonFeatured = json.data.filter((p) => !p.featured);
          if (feat.length > 0) {
            setAllFeaturedProjects(feat);
          }
          if (nonFeatured.length > 0) {
            setAllOtherProjects(nonFeatured);
          }
        }
      }
    } catch (err) {
      // Fallback to local portfolioData.js seamlessly if server offline
    }
  }, []);

  useEffect(() => {
    fetchBackendProjects();

    // Listen to real-time sync event when updated via Admin Dashboard
    const handleSync = () => {
      fetchBackendProjects();
    };
    window.addEventListener('portfolio-projects-updated', handleSync);
    return () => {
      window.removeEventListener('portfolio-projects-updated', handleSync);
    };
  }, [fetchBackendProjects]);

  const filteredProjects =
    activeCategory === 'All'
      ? allOtherProjects
      : allOtherProjects.filter(
          (p) => p.category?.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Systems & Implementations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-100 dark:text-white">
            Featured <span className="text-gradient-ai">Research & AI Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            From safety-critical mental health assistants to agricultural diagnostics and production full-stack systems.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Part 1: Featured Research Projects (Large Layout) */}
        {allFeaturedProjects.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center gap-2 mb-8">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-bold font-heading text-slate-100">
                Primary Research Projects
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {allFeaturedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} isFeatured={true} />
              ))}
            </div>
          </div>
        )}

        {/* Part 2: Other Projects with Category Filter Tabs */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h3 className="text-xl font-bold font-heading text-slate-100 flex items-center gap-2">
              <Filter className="w-5 h-5 text-violet-400" />
              <span>Full-Stack & Applied Systems</span>
            </h3>

            {/* Filter Tabs */}
            <div className="inline-flex p-1 rounded-2xl bg-slate-900/80 border border-slate-700/60 backdrop-blur-md self-start sm:self-auto">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`relative px-4 py-1.5 rounded-xl text-xs sm:text-sm font-mono font-medium transition-colors ${
                      isActive
                        ? 'text-cyan-300 font-bold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeProjectFilter"
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-400/40 rounded-xl -z-10 shadow-glow-sm"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filtered Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} isFeatured={false} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
