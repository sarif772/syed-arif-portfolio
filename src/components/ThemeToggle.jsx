import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  const isDark = theme === 'dark';

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative p-2.5 rounded-xl bg-slate-800/60 dark:bg-slate-900/80 border border-slate-700/60 dark:border-cyan-500/20 text-slate-300 dark:text-cyan-300 hover:text-white hover:border-cyan-400/50 shadow-sm transition-colors backdrop-blur-md"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            rotate: isDark ? -90 : 0,
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.25 }}
          className="absolute"
        >
          <Sun className="w-5 h-5 text-amber-500" />
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            rotate: isDark ? 0 : 90,
            opacity: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.25 }}
          className="absolute"
        >
          <Moon className="w-5 h-5 text-cyan-400" />
        </motion.div>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
