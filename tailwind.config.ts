import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          deep: "#063B2B",
          dark: "#09251D",
          DEFAULT: "#0B4A36",
        },
        gold: {
          DEFAULT: "#C9952E",
          champagne: "#E7C76A",
        },
        ivory: "#F8F4EA",
        ink: "#101612",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(231,199,106,0.12), transparent 60%)",
      },
      keyframes: {
        "gold-line": {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "200% 0%" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "gold-line": "gold-line 3s linear infinite",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.8s ease forwards",
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
