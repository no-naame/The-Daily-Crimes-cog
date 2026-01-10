/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Cognivue Intelligence Theme
        cognivue: {
          blue: "#1E40AF",
          "blue-light": "#3B82F6",
          teal: "#0D9488",
          "teal-light": "#14B8A6",
          gold: "#FCD34D",
          "gold-dark": "#F59E0B",
        },
        // Dark mode specific
        dark: {
          bg: "#0f172a",
          surface: "#1e293b",
          border: "#334155",
          text: "#e2e8f0",
          muted: "#94a3b8",
        },
        // Light mode (keeping newspaper feel)
        light: {
          bg: "#faf9f6",
          surface: "#ffffff",
          border: "#1f1f1f",
          text: "#1f1f1f",
          muted: "#4b5563",
        },
        // Legacy support
        themeOrange: "#B93C12",
      },
      fontFamily: {
        OldLondon: ["OldLondon", "serif"],
        TimesNewRoman: ["TimesNewRoman", "serif"],
        Impact: ["Impact", "sans-serif"],
        Canopee: ["Canopee", "sans-serif"],
        EditorialNew: ["EditorialNew", "sans-serif"],
        Helvetica: ["Helvetica", "sans-serif"],
        Arial: ["Arial", "sans-serif"],
      },
      backgroundImage: {
        "texture-light": "url('/bg/texture.jpg')",
        "texture-dark": "url('/bg/texture-dark.jpg')",
      },
    },
  },
  plugins: [],
}
