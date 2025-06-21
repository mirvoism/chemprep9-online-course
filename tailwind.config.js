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
        // 2025 Modern Palette - 60-30-10 Rule
        // Primary 60% - Navy for backgrounds, headings, main content
        primary: {
          50: '#f0f4f8',
          100: '#d6e3f0',
          200: '#a6c1dc',
          300: '#7ca1c7',
          400: '#5282b3',
          500: '#2563a0', // Base navy
          600: '#1e4d7a',
          700: '#183858',
          800: '#122a42',
          900: '#0E2A47', // Deep navy
          950: '#0a1f35',
        },
        // Secondary 30% - Teal for cards, sidebars, supporting elements
        secondary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#1B8A8F', // Base teal
          950: '#042f2e',
        },
        // Accent 10% - Coral for buttons, links, call-to-actions
        accent: {
          50: '#fef7f0',
          100: '#feebe0',
          200: '#fcd4c1',
          300: '#fab597',
          400: '#f8906b',
          500: '#F76C5E', // Base coral
          600: '#ea4c3d',
          700: '#d73527',
          800: '#b12f23',
          900: '#962724',
          950: '#511210',
        },
        // Dark mode variants
        dark: {
          bg: '#0f172a',
          surface: '#1e293b',
          text: '#f1f5f9',
          secondary: '#0d9488',
          accent: '#f97316',
        },
        // Semantic colors for states
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
          600: '#16a34a',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          600: '#d97706',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          600: '#dc2626',
        },
        // Chemistry theme colors (subtle versions of old colors)
        chemistry: {
          blue: '#e0f2fe',
          sage: '#f0f4f0',
          lavender: '#f3f1ff',
          peach: '#fff8f5',
          mint: '#f0fdf4',
          rose: '#fff1f2',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      fontSize: {
        // Typography scale: 32/24/16/14px
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        'base': ['1rem', { lineHeight: '1.75rem' }], // 16px body
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px headings
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2rem', { lineHeight: '2.5rem' }], // 32px main headings
      },
      spacing: {
        // 8pt grid system
        '2': '0.5rem', // 8px
        '4': '1rem', // 16px
        '6': '1.5rem', // 24px
        '8': '2rem', // 32px
        '10': '2.5rem', // 40px
        '12': '3rem', // 48px
        '16': '4rem', // 64px
        '20': '5rem', // 80px
        '24': '6rem', // 96px
      },
      borderRadius: {
        'sm': '0.5rem', // 8px for buttons
        'md': '0.75rem', // 12px 
        'lg': '1rem', // 16px for cards
        'xl': '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
