/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#192026",
        secondary: "#374151",
        title: "#FFFFFF",
        subtitle: "#868686",
      },
    },
  },
  plugins: [],
}