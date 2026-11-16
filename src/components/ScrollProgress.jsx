import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-50 pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 origin-left shadow-[0_0_10px_#00f0ff]"
        style={{ scaleX }}
      />
    </div>
  );
};

export default ScrollProgress;
