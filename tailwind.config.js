/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Menangkap semua file di folder pages
    "./components/**/*.{js,ts,jsx,tsx}", // Menangkap semua file di folder components
    "./app/**/*.{js,ts,jsx,tsx}", // Jika kamu menggunakan App directory (Next.js 13)
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Arial", "Helvetica", "sans-serif"],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-1.5deg)" },
          "50%": { transform: "rotate(1.5deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
