import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
    },
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
