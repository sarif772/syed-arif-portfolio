import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const computedCursor = window.getComputedStyle(target).cursor;
      setIsPointer(
        computedCursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      );
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ambient glow */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '48px' : '32px',
          height: isPointer ? '48px' : '32px',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.25) 0%, rgba(139, 92, 246, 0.1) 70%, transparent 100%)',
          border: '1px solid rgba(0, 240, 255, 0.35)',
          boxShadow: '0 0 15px rgba(0, 240, 255, 0.3)',
        }}
      />
      {/* Central crisp node */}
      <div
        className="fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '6px',
          height: '6px',
          boxShadow: '0 0 8px #00f0ff',
        }}
      />
    </>
  );
};

export default CustomCursor;
