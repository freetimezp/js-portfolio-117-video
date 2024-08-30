/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5b56eb",
        "primary-accent": "#601993",
        background: "#0f1011",
        secondary: "#161718",
        accent: "#1d1e1f",
        muted: "#959ca7",
      }
    },
  },
  plugins: [],
}

