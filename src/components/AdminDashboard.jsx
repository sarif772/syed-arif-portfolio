import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lock,
  Unlock,
  Plus,
  Trash2,
  Edit3,
  ExternalLink,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  FolderGit2,
  Cpu,
  Globe,
  Bot,
  RefreshCw,
  LogOut,
  X,
  Eye,
  EyeOff,
  Layers,
} from 'lucide-react';
import { API_BASE_URL } from '../config/api';

const API_BASE = `${API_BASE_URL}/api/projects`;

const initialFormState = {
  title: '',
  subtitle: '',
  period: new Date().getFullYear().toString(),
  category: 'GenAI',
  featured: false,
  badge: '',
  description: '',
  longDescription: '',
  researchDirection: '',
  tags: '',
  link: '',
  highlights: '',
};

export default function AdminDashboard({ onClose }) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(initialFormState);
  const [feedback, setFeedback] = useState(null); // { type: 'success' | 'error', message: '' }

  // Check saved session
  useEffect(() => {
    const savedKey = sessionStorage.getItem('portfolio_admin_key');
    if (savedKey) {
      setPassword(savedKey);
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch projects when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      loadProjects();
    }
  }, [isAuthenticated]);

  const showToast = (message, type = 'success') => {
    setFeedback({ message, type });
    setTimeout(() => setFeedback(null), 4000);
  };

  const loadProjects = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_BASE);
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        setProjects(json.data);
      }
    } catch (err) {
      showToast('Could not connect to backend server. Make sure it is running on port 5000.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError('');
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/admin/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const json = await res.json();
      if (res.ok && json.success) {
        setIsAuthenticated(true);
        sessionStorage.setItem('portfolio_admin_key', password);
        showToast('Welcome back, Admin!');
      } else {
        setAuthError(json.message || 'Invalid Admin Password');
      }
    } catch (err) {
      setAuthError('Backend server is not responding. Run `npm run dev` in the server directory.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    sessionStorage.removeItem('portfolio_admin_key');
    showToast('Logged out of Admin Portal.');
  };

  const openAddModal = () => {
    setEditingId(null);
    setFormData(initialFormState);
    setIsFormOpen(true);
  };

  const openEditModal = (project) => {
    setEditingId(project.id);
    setFormData({
      title: project.title || '',
      subtitle: project.subtitle || '',
      period: project.period || '',
      category: project.category || 'GenAI',
      featured: Boolean(project.featured),
      badge: project.badge || '',
      description: project.description || '',
      longDescription: project.longDescription || '',
      researchDirection: project.researchDirection || '',
      tags: Array.isArray(project.tags) ? project.tags.join(', ') : project.tags || '',
      link: project.link || '',
      highlights: Array.isArray(project.highlights) ? project.highlights.join('\n') : project.highlights || '',
    });
    setIsFormOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.description.trim()) {
      showToast('Title and Description are required!', 'error');
      return;
    }

    setLoading(true);
    const method = editingId ? 'PUT' : 'POST';
    const url = editingId ? `${API_BASE}/${editingId}` : API_BASE;

    try {
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': password,
        },
        body: JSON.stringify(formData),
      });

      const json = await res.json();
      if (res.ok && json.success) {
        showToast(editingId ? 'Project updated successfully!' : 'Project added successfully!');
        setIsFormOpen(false);
        setEditingId(null);
        setFormData(initialFormState);
        await loadProjects();
        // Trigger live refresh on the main site
        window.dispatchEvent(new Event('portfolio-projects-updated'));
      } else {
        showToast(json.message || 'Action failed.', 'error');
      }
    } catch (err) {
      showToast('Network error while saving project.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"? This cannot be undone.`)) {
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/${id}`, {
        method: 'DELETE',
        headers: {
          'x-admin-password': password,
        },
      });

      const json = await res.json();
      if (res.ok && json.success) {
        showToast(`Project "${title}" deleted.`);
        await loadProjects();
        window.dispatchEvent(new Event('portfolio-projects-updated'));
      } else {
        showToast(json.message || 'Delete failed.', 'error');
      }
    } catch (err) {
      showToast('Network error deleting project.', 'error');
    } finally {
      setLoading(false);
    }
  };

  // If NOT authenticated, render stylish Login Screen
  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 bg-[#050714]/95 backdrop-blur-xl flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          className="w-full max-w-md glass-card rounded-3xl p-8 border border-cyan-500/30 relative shadow-glow-lg text-slate-100"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            title="Return to Portfolio"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 shadow-glow-sm">
              <Lock className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold font-heading text-white">Admin Portal</h2>
            <p className="text-xs text-slate-400 mt-1">
              Enter master password to manage and add portfolio projects without coding.
            </p>
          </div>

          {authError && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                Master Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-200"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:opacity-90 transition-opacity shadow-glow-sm flex items-center justify-center gap-2"
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <Unlock className="w-4 h-4" />
                  <span>Unlock Admin Dashboard</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 rounded-xl font-medium text-xs text-slate-400 hover:text-white hover:bg-slate-800/40 transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Public Portfolio</span>
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  // AUTHENTICATED: Full Admin Dashboard
  return (
    <div className="fixed inset-0 z-50 bg-[#040612]/98 backdrop-blur-2xl overflow-y-auto text-slate-100 flex flex-col">
      {/* Toast Alert */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-6 right-6 z-50 px-4 py-3 rounded-2xl border text-sm flex items-center gap-2 shadow-glow-md ${
              feedback.type === 'error'
                ? 'bg-red-950/80 border-red-500/40 text-red-200'
                : 'bg-cyan-950/80 border-cyan-500/40 text-cyan-200'
            }`}
          >
            {feedback.type === 'error' ? (
              <AlertCircle className="w-4 h-4 text-red-400" />
            ) : (
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            )}
            <span>{feedback.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-[#050714]/80 border-b border-slate-800/80 backdrop-blur-md px-4 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-glow-sm">
            <FolderGit2 className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold font-heading text-white flex items-center gap-2">
              <span>Project Manager</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                Live Sync
              </span>
            </h1>
            <p className="text-xs text-slate-400">Add, edit, or remove portfolio projects without coding</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={openAddModal}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-white transition-all shadow-glow-sm flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Project</span>
          </button>

          <button
            onClick={loadProjects}
            title="Refresh list"
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>

          <button
            onClick={onClose}
            className="px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Back to Portfolio</span>
          </button>

          <button
            onClick={handleLogout}
            title="Logout"
            className="p-2 rounded-xl bg-slate-900/80 border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-8">
        {/* Metric Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="glass-card p-4 rounded-2xl border border-slate-800">
            <span className="text-xs font-mono text-slate-400">Total Projects</span>
            <div className="text-2xl font-bold font-heading text-white mt-1">{projects.length}</div>
          </div>
          <div className="glass-card p-4 rounded-2xl border border-cyan-500/20">
            <span className="text-xs font-mono text-cyan-400">Primary Featured</span>
            <div className="text-2xl font-bold font-heading text-cyan-300 mt-1">
              {projects.filter((p) => p.featured).length}
            </div>
          </div>
          <div className="glass-card p-4 rounded-2xl border border-violet-500/20">
            <span className="text-xs font-mono text-violet-400">Applied / Other</span>
            <div className="text-2xl font-bold font-heading text-violet-300 mt-1">
              {projects.filter((p) => !p.featured).length}
            </div>
          </div>
          <div className="glass-card p-4 rounded-2xl border border-slate-800">
            <span className="text-xs font-mono text-slate-400">Backend API</span>
            <div className="text-sm font-semibold text-emerald-400 mt-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Connected (:5000)
            </div>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold font-heading text-white">All Projects ({projects.length})</h2>
            <span className="text-xs font-mono text-slate-400">
              Drag or use Edit to modify details anytime
            </span>
          </div>

          {projects.length === 0 && !loading && (
            <div className="glass-card rounded-2xl p-12 text-center border border-slate-800">
              <p className="text-slate-400 text-sm">No projects found. Click "+ Add New Project" to add your first one!</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`glass-card rounded-2xl p-5 border flex flex-col justify-between transition-all ${
                  project.featured ? 'border-cyan-500/30 bg-cyan-950/10' : 'border-slate-800/80 bg-slate-900/40'
                }`}
              >
                <div>
                  {/* Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                        project.featured
                          ? 'bg-cyan-500/20 border-cyan-400/40 text-cyan-300 font-bold'
                          : 'bg-slate-800 border-slate-700 text-slate-300'
                      }`}
                    >
                      {project.featured ? 'Featured' : project.category || 'General'}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{project.period}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-bold text-white text-base mb-1 line-clamp-1">{project.title}</h3>
                  {project.subtitle && (
                    <p className="text-xs text-cyan-400/80 font-mono mb-2 line-clamp-1">{project.subtitle}</p>
                  )}

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 4).map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400"
                        >
                          #{t}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="text-[10px] font-mono text-slate-500 self-center">
                          +{project.tags.length - 4} more
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Actions */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-300 transition-colors"
                        title="Open Link"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openEditModal(project)}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => handleDelete(project.id, project.title)}
                      className="p-1.5 rounded-lg bg-red-950/40 border border-red-500/20 hover:bg-red-900/60 text-red-400 hover:text-red-200 transition-colors"
                      title="Delete Project"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Add / Edit Project Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-3xl glass-card rounded-3xl p-6 sm:p-8 border border-cyan-500/30 my-8 shadow-glow-lg text-slate-100 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                    {editingId ? <Edit3 className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white">
                    {editingId ? 'Edit Project' : 'Add New Project'}
                  </h3>
                </div>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1: Title & Subtitle */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                      Project Title *
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="e.g. Autonomous Voice Agent"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                      Subtitle / Focus
                    </label>
                    <input
                      type="text"
                      value={formData.subtitle}
                      onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                      placeholder="e.g. Final Year Research Project"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Row 2: Category, Period, Featured */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                      Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none"
                    >
                      <option value="GenAI">GenAI (AI / LLMs / Agents)</option>
                      <option value="Web">Web (Full-Stack Applications)</option>
                      <option value="Hardware">Hardware (IoT / Sensors / Robotics)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                      Period / Year
                    </label>
                    <input
                      type="text"
                      value={formData.period}
                      onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                      placeholder="e.g. Nov 2026 – Present"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col justify-end">
                    <label className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/80 border border-slate-700 cursor-pointer hover:border-cyan-400 transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.featured}
                        onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                        className="w-4 h-4 rounded text-cyan-500 focus:ring-0 bg-slate-800 border-slate-600"
                      />
                      <span className="text-xs font-semibold text-white">
                        Primary Featured Project?
                      </span>
                    </label>
                  </div>
                </div>

                {/* Row 3: Short Description */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    Summary / Short Description *
                  </label>
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Brief 2-3 sentence summary shown on card..."
                    required
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                {/* Row 4: Long Description */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    Detailed Description (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.longDescription}
                    onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
                    placeholder="Full in-depth explanation of system architecture, results, and deployment..."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                {/* Row 5: Research Direction */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    Research Direction / Core Objective (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.researchDirection}
                    onChange={(e) => setFormData({ ...formData, researchDirection: e.target.value })}
                    placeholder="e.g. Safety-aware multimodal AI for crisis prevention"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                {/* Row 6: Tags & Link */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                      Tech Stack / Tags (Comma-separated)
                    </label>
                    <input
                      type="text"
                      value={formData.tags}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                      placeholder="e.g. Generative AI, PyTorch, React, Node.js"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                      Project Demo / GitHub Link
                    </label>
                    <input
                      type="url"
                      value={formData.link}
                      onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                      placeholder="https://..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Row 7: Highlights */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    Key Highlights / Features (One per line)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.highlights}
                    onChange={(e) => setFormData({ ...formData, highlights: e.target.value })}
                    placeholder="Multilingual conversational support&#10;Real-time emotion & crisis risk detection&#10;Low-latency voice inference"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none font-mono text-xs"
                  />
                </div>

                {/* Modal Buttons */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="px-5 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-white transition-all shadow-glow-sm flex items-center gap-2"
                  >
                    {loading ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>{editingId ? 'Update Project' : 'Save & Publish Project'}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
