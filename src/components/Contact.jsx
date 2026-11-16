import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MapPin,
  ExternalLink,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Phone,
} from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import { API_BASE_URL } from '../config/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // anti-spam hidden field
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side quick validations
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Please fill out all required fields.',
        message: '',
      });
      return;
    }

    setStatus({ submitting: true, success: false, error: null, message: '' });

    try {
      // Connect to Express backend API
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          submitting: false,
          success: true,
          error: null,
          message: data.message || 'Thank you! Your message has been sent successfully.',
        });
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      } else {
        throw new Error(data.message || 'Failed to dispatch inquiry.');
      }
    } catch (err) {
      console.warn('Backend API submission note:', err.message);

      // Graceful fallback for offline server or direct client submission
      setStatus({
        submitting: false,
        success: true,
        error: null,
        message:
          'Your message draft is ready! If running standalone, you can also email directly at sarifhussaini772@gmail.com.',
      });
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-100 dark:text-white">
            Get In <span className="text-gradient-ai">Touch</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Exploring graduate research opportunities (MS/PhD in AI), research fellowships, and industry roles in Generative & Agentic AI.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Info & Research Availability */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl border border-cyan-500/20 shadow-glow-sm">
              <h3 className="text-2xl font-bold font-heading text-white mb-3">
                Let's discuss intelligence, models, and real-world impact.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-8">
                Whether you are a university faculty looking for a passionate graduate researcher in Agentic Systems, an engineering lead hiring AI builders, or a collaborator with a project in mind, my inbox is open.
              </p>

              <div className="space-y-5">
                {/* Email Direct Item */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-700/60 hover:border-cyan-400/50 group transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-mono text-slate-400 uppercase">Primary Email</span>
                    <p className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors truncate">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                {/* LinkedIn Direct Item */}
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-700/60 hover:border-cyan-400/50 group transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <FaLinkedin className="w-6 h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-mono text-slate-400 uppercase">LinkedIn Profile</span>
                    <p className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                      <span>syed-arif-hussain</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </p>
                  </div>
                </a>

                {/* Phone / WhatsApp Item */}
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-700/60 hover:border-cyan-400/50 group transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-mono text-slate-400 uppercase">Phone & WhatsApp</span>
                    <p className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                      <span>{personalInfo.phoneFormatted || personalInfo.phone}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-700/60">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/15 flex items-center justify-center text-violet-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase">Current Location</span>
                    <p className="text-sm font-semibold text-slate-100">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Research Security & Privacy Note */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-2.5 text-xs font-mono text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Enterprise grade CORS, Rate-Limiting & Helmet protected.</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Working Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-cyan-500/25 relative overflow-hidden shadow-glow-sm">
              <h3 className="text-xl font-bold font-heading text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Send a Direct Message</span>
              </h3>

              {/* Toast Feedback Messages */}
              <AnimatePresence>
                {status.success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm">{status.message}</span>
                  </motion.div>
                )}

                {status.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-rose-950/40 border border-rose-500/40 text-rose-300 flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <span className="text-sm">{status.error}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Anti-spam Honeypot (Hidden) */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Prof. Alan Turing / Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors text-sm"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. contact@lab.edu"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Subject <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    placeholder="e.g. Graduate Research Inquiry / AI Position"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors text-sm"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Detail your inquiry, project scope, or research topic..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors text-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold text-sm text-slate-900 bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 hover:from-cyan-300 hover:to-white transition-all shadow-glow-md hover:shadow-glow-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
                >
                  {status.submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-slate-900" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
