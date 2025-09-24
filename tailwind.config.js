/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1D1D2E',
          light: '#2D2D45',
          dark: '#15151F',
        },
        secondary: {
          DEFAULT: '#F4F4F4',
          dark: '#E0E0E0',
        },
        accent: {
          DEFAULT: '#04D361',
          light: '#0FE978',
          dark: '#03A54C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '4xl': '2.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};