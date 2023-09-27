import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },

      screens: {
        xl: { max: "1590px" },
      },
      colors: {
        blackLight: "#2b2b2b",
        black: "#1f1f1f",
        accent: "#5554D6",
        accentHover: "#1E1DA3",
        green: "#6BE697",
        greenDark: "#3AAF5D",
        red: "#CE141F",
        gray: "#A1A1A1",
        yellow: "#FAC20E",
        textGray: "#5E6166",
        border: "#dfdfdf",
        grayLight: "#f3f3f3",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "1590px",
        },
      });
    },
  ],
};
export default config;
