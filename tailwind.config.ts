import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {},
    fontFamily: {},
    extend: {},
    screens: {
      sms: { max: "640px" },
      mds: { max: "768px" },
      lgs: { max: "1024px" },
      xls: { max: "1280px" },
      "2xls": { max: "1536px" },
    },
  },
  plugins: [],
};
export default config;
