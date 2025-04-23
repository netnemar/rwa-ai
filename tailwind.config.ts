import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Marcellus", "serif"],
      },
      colors: {
        primary: {
          50: "#eaf9ff",
          100: "#d4f3ff",
          200: "#a8e6ff",
          300: "#7cd9ff",
          400: "#50ccff",
          500: "#24c0ff",
          600: "#1b99cc",
          700: "#137199",
          800: "#0a4a66",
          900: "#022233",
        },
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(ellipse at center, rgba(36,192,255,0.35) 0%, rgba(5,15,25,0) 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
