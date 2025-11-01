/** @type {import('tailwindcss').Config} */
export default {
  // Indique à Tailwind de scanner tous les fichiers .html, .js, .jsx, etc., dans le dossier src
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}