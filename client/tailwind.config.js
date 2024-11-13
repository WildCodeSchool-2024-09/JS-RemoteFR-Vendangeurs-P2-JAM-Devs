/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      title: ["Jockey One", "sans-serif"],
      text: ["Roboto", "sans-serif"],
    },
    colors: {
      background: "#18161D",
      primary: "#F0E7E5",
      secondary: {
        100: "#7D2CDD",
        200: "#5913C8",
      },
      accent: "#FFB16D",
    },
    screens: {
      laptop: "1024px",
      desktop: "1440px",
    },
  },
  extend: {},
  plugins: [],
};
