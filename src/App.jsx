import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import ResearchInterests from './components/ResearchInterests';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Training from './components/Training';
import Conferences from './components/Conferences';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [loading, setLoading] = useState(true);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    // Permanently enforce dark theme
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    localStorage.setItem('portfolio-theme', 'dark');

    // Check URL hash / path for admin
    const checkRoute = () => {
      if (
        window.location.hash === '#admin' ||
        window.location.pathname === '/admin'
      ) {
        setIsAdminOpen(true);
      }
    };
    checkRoute();

    window.addEventListener('hashchange', checkRoute);

    // Keyboard shortcut: Ctrl + Shift + A to open Admin Dashboard
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setIsAdminOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('hashchange', checkRoute);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const closeAdmin = () => {
    setIsAdminOpen(false);
    if (window.location.hash === '#admin') {
      window.history.pushState('', document.title, window.location.pathname + window.location.search);
    }
  };

  const openAdmin = () => {
    setIsAdminOpen(true);
  };

  return (
    <ErrorBoundary>
      {/* Neural Network Loader */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <div className="relative min-h-screen bg-[#050714] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
        {/* Interactive Neural Canvas Background */}
        <ParticleBackground />

        {/* Desktop Custom Cursor Glow */}
        <CustomCursor />

        {/* Top Scroll Indicator */}
        <ScrollProgress />

        {/* Sticky Glass Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Education />
          <ResearchInterests />
          <Projects />
          <Publications />
          <Skills />
          <Certifications />
          <Training />
          <Conferences />
          <Contact />
        </main>

        {/* Footer with Admin Access Link */}
        <Footer onOpenAdmin={openAdmin} />

        {/* No-Code Admin Project Dashboard */}
        {isAdminOpen && <AdminDashboard onClose={closeAdmin} />}
      </div>
    </ErrorBoundary>
  );
}

export default App;
