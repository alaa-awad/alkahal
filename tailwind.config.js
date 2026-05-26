/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0f172a',
          lighter: '#1e293b',
          card: '#1e293b',
        },
        gold: {
          DEFAULT: '#eab308',
          hover: '#ca8a04',
          light: '#fef08a'
        },
        primary: '#eab308',
      },
      fontFamily: {
        arabic: ['Cairo', 'sans-serif'],
        english: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
