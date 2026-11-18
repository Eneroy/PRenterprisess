import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060913", // Deepest space navy
          900: "#0A1026", // Primary background navy
          850: "#0F1838", // Card navy
          800: "#14214D", // Surface navy
          700: "#1E316F",
          600: "#2B4494",
        },
        electric: {
          green: "#00FFA3",  // Neon solar green
          emerald: "#10B981",
          cyan: "#00E5FF",   // High-tech accent
          amber: "#FBBF24",
          yellow: "#FACC15",
        },
        solar: {
          green: {
            950: "#041B10",
            900: "#08331E",
            800: "#0C4B2C",
            700: "#10663B",
            600: "#168B50",
            500: "#00FFA3",
            400: "#34D399",
            300: "#6EE7B7",
            100: "#D1FAE5",
            50: "#ECFDF5",
          },
          navy: {
            950: "#060913",
            900: "#0A1026",
            850: "#0F1838",
            800: "#14214D",
          }
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(0, 255, 163, 0.15), rgba(10, 16, 38, 0))",
        "card-glass": "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      boxShadow: {
        "electric-green": "0 0 25px -3px rgba(0, 255, 163, 0.35)",
        "electric-cyan": "0 0 25px -3px rgba(0, 229, 255, 0.35)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        "energy-beam": "energyBeam 2s ease-in-out infinite",
      },
      keyframes: {
        energyBeam: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
