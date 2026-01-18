/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0A192F',
        'navy-blue': '#1e3a5f',
        'gold': '#C5A059',
        'turquoise': '#64FFDA',
      },
    },
  },
  plugins: [],
}
