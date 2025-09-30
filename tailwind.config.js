/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2F80ED',
        accent: '#10B981',
        neutral: {
          DEFAULT: '#111827',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Atur Inter sebagai font default
      },
      backgroundImage: {
        'hero-pattern': "url('/bg.jpg')",
      }
    },
  },
  plugins: [],
}