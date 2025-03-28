/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF3B3B',
          dark: '#CC2F2F',
        },
        secondary: {
          DEFAULT: '#1A1A1A',
          light: '#2A2A2A',
        }
      }
    },
  },
  plugins: [],
};