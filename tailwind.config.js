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
          bg: '#080A0F', // Profond noir OLED obsidienne
          'bg-light': '#FFFFFF', // Blanc éclatant
          surface: '#11141B',
          'surface-light': '#FFFFFF',
          'surface-elevated': '#181C25',
          'surface-elevated-light': '#F8FAFC',
          border: '#232936',
          'border-light': '#E2E8F0',
          muted: '#94A3B8',
          'muted-light': '#64748B',
          primary: '#2563EB', // Touche de bleu pour le mode clair
          'primary-hover': '#1D4ED8',
          promo: '#EF4444', // Touche de rouge pour le mode sombre
          'promo-hover': '#DC2626',
          success: '#10B981',
          'text-main': '#F8FAFC',
          'text-main-light': '#0F172A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
