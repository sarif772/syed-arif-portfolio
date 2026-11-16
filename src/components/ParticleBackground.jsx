import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Responsive particle count
    const particleCount = Math.floor(Math.min(width, 1600) / 16);
    const connectionDistance = 120;
    const mouseRadius = 140;

    let mouse = {
      x: null,
      y: null,
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2 + 1;
        this.speedX = prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.6;
        this.speedY = prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.6;
        this.hue = Math.random() > 0.4 ? 190 : 270; // Cyan or violet
        this.opacity = Math.random() * 0.5 + 0.25;
      }

      update() {
        if (!prefersReducedMotion) {
          this.x += this.speedX;
          this.y += this.speedY;

          // Bounce off boundaries
          if (this.x < 0 || this.x > width) this.speedX *= -1;
          if (this.y < 0 || this.y > height) this.speedY *= -1;

          // Mouse gentle interaction
          if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouseRadius) {
              const force = (mouseRadius - dist) / mouseRadius;
              const angle = Math.atan2(dy, dx);
              this.x -= Math.cos(angle) * force * 1.5;
              this.y -= Math.sin(angle) * force * 1.5;
            }
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 90%, 65%, ${this.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `hsla(${this.hue}, 100%, 70%, 0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const particles = Array.from({ length: particleCount }, () => new Particle());

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = 1 - dist / connectionDistance;
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity * 0.16})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }

        // Mouse connection line
        if (mouse.x !== null && mouse.y !== null) {
          const dx = particles[a].x - mouse.x;
          const dy = particles[a].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseRadius) {
            const opacity = 1 - dist / mouseRadius;
            ctx.strokeStyle = `rgba(0, 240, 255, ${opacity * 0.35})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40 dark:opacity-60 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
