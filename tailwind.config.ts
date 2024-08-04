import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",

  theme: {
    screens: {
      sms: { max: "640px" },
      mds: { max: "768px" },
      lgs: { max: "1024px" },
      xls: { max: "1280px" },
      "2xls": { max: "1536px" },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        blackish: "#0E1023",
        "blue-1": "#101548",
        whitish: "#F2F1F5",
        "blue-2": "#212783",
        greyish: "#72768E",
        "purple-1": "#4544BE",
        "purple-2": "#8E95F2",
        "blue-3": "#98C0F8",
        "green-1": "#29AB78",
        "green-2": "#51B39C",
        "green-3": "#2DD98F",
        "silver-1": "#95A1B4",
        "silver-2": "#EBF7FD",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
