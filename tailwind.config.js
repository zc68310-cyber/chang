/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0C0C0C',
        silver: '#D7E2EA',
        paper: '#F5F4F0',
        violet: '#B600A8',
      },
      fontFamily: {
        display: ['Kanit', 'Noto Sans SC', 'sans-serif'],
        sans: ['Noto Sans SC', 'Kanit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
