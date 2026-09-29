/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#080A0F',
          'bg-light': '#F8FAFC',
          surface: '#11141B',
          'surface-light': '#FFFFFF',
          'surface-elevated': '#181C25',
          'surface-elevated-light': '#F1F5F9',
          border: '#232936',
          'border-light': '#E2E8F0',
          muted: '#9CA3AF',
          'muted-light': '#64748B',
          primary: '#2563EB',
          'primary-hover': '#3B82F6',
          promo: '#EF4444',
          'promo-hover': '#DC2626',
          success: '#22C55E',
          'text-main': '#F5F7FA',
          'text-main-light': '#0F172A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'marquee': 'marquee 28s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
