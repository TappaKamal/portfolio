/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00ff88',
        secondary: '#875A7B',
        accent: '#714B67',
        'odoo-green': '#00ff88',
        'odoo-lime': '#00ff88',
        'odoo-purple': '#875A7B',
        'odoo-teal': '#00a09d',
        'odoo-dark': '#0a0a0a',
        'odoo-gray': '#1a1a1a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'wave': 'wave 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0) translateZ(0) scaleY(1)' },
          '50%': { transform: 'translateX(-25%) translateZ(0) scaleY(0.5)' },
          '100%': { transform: 'translateX(-50%) translateZ(0) scaleY(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

