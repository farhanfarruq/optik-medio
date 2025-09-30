/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. Mengganti Font Bawaan dengan Font yang Lebih Modern
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
        display: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      // 2. Palet Warna Baru yang Lebih Profesional dan Modern
      colors: {
        primary: {
          DEFAULT: '#1E40AF', // Biru yang lebih solid dan percaya diri
          hover: '#1D4ED8',
        },
        accent: {
          DEFAULT: '#F59E0B', // Kuning/Gold sebagai aksen yang menarik
          hover: '#D97706',
        },
        neutral: {
          '50': '#F9FAFB',  // Latar belakang yang sangat terang
          '100': '#F3F4F6', // Latar belakang seksi
          '200': '#E5E7EB', // Border
          '300': '#D1D5DB', // Input border
          '500': '#6B7280', // Teks muted/sekunder
          '700': '#374151', // Teks utama
          '900': '#111827', // Latar belakang gelap (misal: Footer)
        DEFAULT: '#111827', // Warna default untuk bg-neutral, diambil dari neutral-900

        },
      },
      // 3. Efek Bayangan (Shadow) yang Lebih Halus
      boxShadow: {
        'soft': '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.07)',
        'lift': '0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.08)',
      },
      // 4. Efek Transisi untuk Animasi yang Mulus
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      // 5. Pattern Hero yang Lebih Menarik
      backgroundImage: {
         'hero-pattern': "url('src/assets/hero-background.jpeg')",
         'katalog-pattern': "linear-gradient(to right, rgba(249, 250, 251, 0.50), rgba(243, 244, 246, 0.50)), url('/src/assets/frame-cewek2.jpeg')",
         'layanan-pattern': "linear-gradient(to right, rgba(249, 250, 251, 0.50), rgba(243, 244, 246, 0.50)), url('/src/assets/optik3.jpeg')",
         'tentang-pattern': "linear-gradient(to right, rgba(249, 250, 251, 0.50), rgba(243, 244, 246, 0.50)), url('/src/assets/optik2.jpeg')",
         'kontak-pattern':  "linear-gradient(to right, rgba(249, 250, 251, 0.50), rgba(243, 244, 246, 0.50)), url('/src/assets/optik.jpeg')",
         'layanan-unggulan-pattern': "linear-gradient(to right, rgba(249, 250, 251, 0.50), rgba(243, 244, 246, 0.50)), url('/src/assets/kacamatamedio.jpeg')",
         'testimoni-pattern': "linear-gradient(to right, rgba(249, 250, 251, 0.50), rgba(243, 244, 246, 0.50)), url('/src/assets/kacamata.jpeg')",

      },
    },
  },
  plugins: [],
}