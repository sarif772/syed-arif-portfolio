import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing Neural Network Weights...');

  useEffect(() => {
    const statuses = [
      { at: 20, text: 'Mapping Agentic Knowledge Graph...' },
      { at: 50, text: 'Synthesizing Multimodal Embedding Spaces...' },
      { at: 80, text: 'Calibrating Neuro-Symbolic Decision Rails...' },
      { at: 96, text: 'Ready.' },
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }

        const next = prev + 2;
        const currentStatus = statuses.find((s) => s.at <= next);
        if (currentStatus) {
          setStatusText(currentStatus.text);
        }
        return next;
      });
    }, 28);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050714] text-white px-4 select-none"
      >
        {/* Animated Neural Node Centerpiece */}
        <div className="relative w-36 h-36 mb-8 flex items-center justify-center">
          {/* Outer rotating dashed ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border border-dashed border-cyan-400/40"
          />

          {/* Middle pulsing glow ring */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-2 rounded-full border border-violet-500/50 shadow-glow-violet"
          />

          {/* Synaptic nodes */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <motion.div
                key={deg}
                animate={{
                  scale: [0.8, 1.3, 0.8],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="absolute w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff]"
                style={{
                  transform: `rotate(${deg}deg) translate(52px) rotate(-${deg}deg)`,
                }}
              />
            ))}
          </div>

          {/* Central AI Nucleus */}
          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px rgba(0, 240, 255, 0.4)',
                '0 0 45px rgba(139, 92, 246, 0.8)',
                '0 0 20px rgba(0, 240, 255, 0.4)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-600 flex items-center justify-center font-mono font-bold text-lg text-white"
          >
            AI
          </motion.div>
        </div>

        {/* Identity & Subtitle */}
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-violet-400 font-heading mb-1">
          Syed Arif Hussain
        </h2>
        <p className="text-xs md:text-sm text-cyan-400/80 font-mono tracking-wider uppercase mb-6">
          AI Research & Agentic Systems
        </p>

        {/* Dynamic Progress Bar */}
        <div className="w-64 max-w-full">
          <div className="h-1.5 w-full bg-slate-800/80 rounded-full overflow-hidden p-[1px] border border-cyan-500/20">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 rounded-full shadow-[0_0_12px_#00f0ff]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center mt-2 font-mono text-[11px] text-slate-400">
            <span className="truncate pr-2 text-slate-300">{statusText}</span>
            <span className="text-cyan-400 font-semibold">{progress}%</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
