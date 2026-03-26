import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Font family with Inter as primary
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      
      // Mathematical font scaling for typography
      fontSize: {
        xs: ['12px', { lineHeight: '16px', letterSpacing: '-0.24px' }],
        sm: ['14px', { lineHeight: '20px', letterSpacing: '-0.28px' }],
        base: ['16px', { lineHeight: '24px', letterSpacing: '-0.32px' }],
        lg: ['18px', { lineHeight: '28px', letterSpacing: '-0.36px' }],
        xl: ['20px', { lineHeight: '28px', letterSpacing: '-0.4px' }],
        '2xl': ['24px', { lineHeight: '32px', letterSpacing: '-0.48px' }],
        '3xl': ['30px', { lineHeight: '36px', letterSpacing: '-0.6px' }],
        '4xl': ['36px', { lineHeight: '44px', letterSpacing: '-0.72px' }],
        '5xl': ['48px', { lineHeight: '52px', letterSpacing: '-0.96px' }],
      },
      
      // Custom color palette
      colors: {
        'brand-dark': '#0052CC',
        'brand-accent': '#0066FF',
        'hero-blue-1': '#0052CC',
        'hero-blue-2': '#0059E6',
        'hero-blue-3': '#0066FF',
      },
      
      // Multi-layered ambient shadows for depth
      boxShadow: {
        'ambient': '0 2px 4px rgba(15, 23, 42, 0.03), 0 4px 8px rgba(15, 23, 42, 0.05), 0 8px 16px rgba(15, 23, 42, 0.08)',
        'ambient-lg': '0 4px 8px rgba(15, 23, 42, 0.04), 0 8px 16px rgba(15, 23, 42, 0.08), 0 16px 32px rgba(15, 23, 42, 0.12)',
        'ambient-xl': '0 8px 16px rgba(15, 23, 42, 0.06), 0 16px 32px rgba(15, 23, 42, 0.12), 0 32px 64px rgba(15, 23, 42, 0.16)',
        'glass': '0 8px 32px rgba(15, 23, 42, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
        'hover': '0 12px 24px rgba(99, 102, 241, 0.12), 0 4px 12px rgba(99, 102, 241, 0.08)',
      },
      
      // Backdrop filter for glassmorphism
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(10px)',
      },
      
      // Border radius precision
      borderRadius: {
        'xs': '4px',
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
      },
      
      // Custom animation for pulsing effects
      animation: {
        'pulse-soft': 'pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fade-in-up 0.4s ease-out',
        'slide-up': 'slide-up 0.4s ease-out',
      },
      
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        'fade-in-up': {
          'from': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slide-up': {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      
      // Opacity utilities for premium feel
      opacity: {
        '2': '2%',
        '3': '3%',
        '5': '5%',
        '7': '7%',
      },
      
      // Custom spacing for 8px base
      spacing: {
        'gutter': '1.5rem',
      },
      
      // Transition timing for smooth interactions
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [
    // CSS for glassmorphism
    function({ addComponents, matchUtilities }) {
      addComponents({
        '.glass': {
          '@apply bg-white/70 backdrop-blur-xl border border-slate-200/50': {},
        },
        '.glass-dark': {
          '@apply bg-slate-950/40 backdrop-blur-xl border border-slate-700/50': {},
        },
        '.premium-text': {
          '@apply text-base leading-6 text-slate-900': {},
        },
        '.premium-heading': {
          '@apply font-bold tracking-tight text-slate-950': {},
        },
      });
      
      // Match utilities for fine-grained control
      matchUtilities(
        {
          glass: (value) => ({
            backgroundColor: value,
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(226, 232, 240, 0.5)',
          }),
        },
        {
          values: {
            dark: 'rgba(15, 23, 42, 0.4)',
            light: 'rgba(255, 255, 255, 0.7)',
          },
        }
      );
    },
  ],
};

export default config;
