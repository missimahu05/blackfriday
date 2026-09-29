/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#080A0F',
          surface: '#11141B',
          'surface-elevated': '#181C25',
          border: '#232936',
          muted: '#9CA3AF',
          primary: '#2563EB',
          'primary-hover': '#3B82F6',
          promo: '#EF4444',
          'promo-hover': '#DC2626',
          success: '#22C55E',
          'text-main': '#F5F7FA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
