/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ai: {
          bg: '#050714',
          'bg-card': 'rgba(10, 26, 63, 0.45)',
          'bg-card-light': 'rgba(255, 255, 255, 0.75)',
          navy: '#0A1A3F',
          dark: '#030712',
          blue: '#00F0FF',
          sky: '#38BDF8',
          cyan: '#06B6D4',
          violet: '#8B5CF6',
          purple: '#A855F7',
          fuchsia: '#D946EF',
          border: 'rgba(56, 189, 248, 0.15)',
          'border-hover': 'rgba(0, 240, 255, 0.4)',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', '"Sora"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(0, 240, 255, 0.15)',
        'glow-md': '0 0 25px rgba(56, 189, 248, 0.25)',
        'glow-lg': '0 0 40px rgba(139, 92, 246, 0.3)',
        'glow-violet': '0 0 30px rgba(168, 85, 247, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 8px rgba(0, 240, 255, 0.4))' },
          '100%': { opacity: '0.9', filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.7))' },
        },
      },
    },
  },
  plugins: [],
}
