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
        primaryBlue: "#2F80ED",
        primaryDarkGrey: "#4F4F4F",
        primaryGrey: "#828282",
        light: "#E0E0E0",
        iRed: "#EB5757",
        iOrange: "#F8B76B",
        iYellow: "#F2C94C",
        iPurple: "#8785FF",
        cTOrange: "#E5A443",
        cOrange: "#FCEED3",
        cTPurple: "#9B51E0",
        cPurple: "#EEDCFF",
        cTGreen: "#43B78D",
        cGreen: "#D2F2EA",
      },
      dropShadow: {
        darkGrey: "-15px 0 0 #4F4F4F",
        grey: "-15px 0 0 #E0E0E0"
      },
      fontSize: {
          sm: '12px',
          md: '14px',
          lg: '16px',
      }
    },
  },
  plugins: [],
};
export default config;
