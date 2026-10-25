/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        princess: {
          50: '#fff5f7',
          100: '#ffe8ee',
          200: '#ffd0dc',
          300: '#ffa8c0',
          400: '#ff709b',
          500: '#f84379',
          600: '#e5215c',
        },
        blush: {
          light: '#fff0f3',
          DEFAULT: '#ffb3c6',
          dark: '#ff8fab',
        },
        lavender: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
        },
        peach: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        handwriting: ['"Dancing Script"', '"Caveat"', 'cursive'],
        sans: ['"Quicksand"', '"Nunito"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'sparkle': 'sparkle 1.8s ease-in-out infinite',
        'gentle-spin': 'spin 20s linear infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(-3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.85', filter: 'drop-shadow(0 0 15px rgba(255, 130, 170, 0.6))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 28px rgba(255, 100, 160, 0.9))' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1.2) rotate(45deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
