/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light Mode: "Warm Parchment"
        light: {
          bg: "#FAF9F7",
          surface: "#FFFFFF",
          text: "#1A1A1A",
          secondary: "#6B6B6B",
          muted: "#9CA3AF",
          border: "#E5E5E5",
          divider: "#1A1A1A",
        },
        // Dark Mode: "Midnight Intelligence"
        dark: {
          bg: "#0D0D0F",
          surface: "#1A1A1F",
          text: "#ECECEC",
          secondary: "#A0A0A0",
          muted: "#6B6B6B",
          border: "#2A2A2F",
          divider: "#3A3A3F",
        },
        // Accent Colors
        accent: {
          navy: "#1E3A5F",
          "navy-light": "#2E4A6F",
          teal: "#2D6A6A",
          "teal-light": "#3D7A7A",
          burgundy: "#8B2635",
          blue: "#5B8DEF",
          sage: "#4ECDC4",
          gold: "#E5B97F",
        },
        // Region Colors
        region: {
          us: "#1E3A5F",
          india: "#D97706",
          china: "#DC2626",
          russia: "#7C2D12",
        },
      },
      fontFamily: {
        // Display
        OldLondon: ["OldLondon", "serif"],
        // Headlines & Body
        serif: ["Georgia", "Times New Roman", "serif"],
        TimesNewRoman: ["TimesNewRoman", "Georgia", "serif"],
        // UI Elements
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
        Helvetica: ["Helvetica", "Arial", "sans-serif"],
        // Legacy
        Impact: ["Impact", "sans-serif"],
        Canopee: ["Canopee", "sans-serif"],
        EditorialNew: ["EditorialNew", "sans-serif"],
        Arial: ["Arial", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      maxWidth: {
        "8xl": "88rem",
        reading: "65ch",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "fade-in-up": "fadeInUp 0.5s ease-out forwards",
        "slide-up": "slideUp 0.3s ease-out forwards",
        "scale-in": "scaleIn 0.2s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(4px)", opacity: "0.8" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.98)", opacity: "0.8" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      boxShadow: {
        card: "0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)",
        "card-hover":
          "0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)",
        "card-dark":
          "0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2)",
        "card-dark-hover":
          "0 4px 12px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
}
