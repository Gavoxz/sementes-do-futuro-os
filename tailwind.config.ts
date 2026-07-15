import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6B8C66",
          50: "#F1F5EF",
          100: "#E1EADD",
          300: "#A8C1A2",
          500: "#6B8C66",
          700: "#4C6748",
          900: "#2C3D2A",
        },
        secondary: {
          DEFAULT: "#30858C",
          50: "#EAF3F4",
          100: "#D2E5E6",
          300: "#7EB3B7",
          500: "#30858C",
          700: "#215F64",
          900: "#143A3D",
        },
        accent: {
          DEFAULT: "#8C5086",
          50: "#F5EDF4",
          100: "#E7D3E4",
          300: "#B984B2",
          500: "#8C5086",
          700: "#65395F",
          900: "#3D2239",
        },
        paper: "#FBFAF7",
        mist: "#F2F4EF",
        ink: {
          DEFAULT: "#1E2620",
          soft: "#4A5347",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        soft: "0 20px 60px -25px rgba(30, 38, 32, 0.18)",
        whisper: "0 8px 30px -12px rgba(30, 38, 32, 0.12)",
      },
      borderRadius: {
        xl2: "1.75rem",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
