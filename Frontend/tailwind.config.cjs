/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'draw-line': {
          '0%': { 'stroke-dashoffset': '1200' },
          '100%': { 'stroke-dashoffset': '0' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.85)' },
        },
        'scan': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'flow-draw': {
          '0%': { 'stroke-dashoffset': '200' },
          '100%': { 'stroke-dashoffset': '0' },
        },
        'flow-pulse': {
          '0%': { opacity: '0', transform: 'translateY(-8px) scale(0.8)' },
          '40%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(8px) scale(0.8)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 1s ease forwards',
        'draw-line': 'draw-line 2.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-dot': 'pulse-dot 2.4s ease-in-out infinite',
        'scan': 'scan 4s ease-in-out infinite',
        'flow-draw': 'flow-draw 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'flow-pulse': 'flow-pulse 2.2s ease-in-out infinite',
      },
    },
  },
  safelist: [
    // Dynamic class names from AboutSection.jsx
    // Prediction areas
    'bg-accent/10',
    'bg-highlight/10',
    'bg-primary/10',
    'bg-bg/10',
    'border-accent/20',
    'border-highlight/20',
    'border-primary/20',
    'border-bg/20',
    'hover-accent/20',
    'hover-highlight/20',
    'hover-primary/20',
    'hover-bg/20',
    'bg-accent',
    'bg-highlight',
    'bg-primary',
    'bg-bg',
    'text-accent',
    'text-highlight',
    'text-primary',
    'text-bg',
    // Flow steps
    'bg-accent',
    'bg-highlight',
    'bg-primary',
    'bg-hover-bg',
    'hover-accent/80',
    'hover-highlight/80',
    'hover-primary/80',
    'hover-hover-bg/80',
    // Static classes to verify (as per user request)
    'bg-accent',
    'bg-primary',
    'text-accent',
    'bg-bg',
    'border-highlight',
    'mb-10'x,
    'p-10',
    'space-x-4',
    'py-16',
  ],
  plugins: [],
};