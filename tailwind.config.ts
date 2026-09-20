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
        background: "#09090b", // Negro muy profundo
        surface: "#18181b", // Gris oscuro para paneles/tarjetas
        surfaceHover: "#27272a",
        primary: "#7c3aed", // Morado oscuro (gaming/esports accent)
        primaryHover: "#6d28d9",
        ledGreen: "#22c55e",
        ledRed: "#ef4444",
      },
      boxShadow: {
        // Efectos LED para las cartas
        'glow-green': '0 0 15px 2px rgba(34, 197, 94, 0.4), 0 0 30px 2px rgba(34, 197, 94, 0.2)',
        'glow-red': '0 0 15px 2px rgba(239, 68, 68, 0.4), 0 0 30px 2px rgba(239, 68, 68, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;