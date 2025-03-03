/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: "#1a1a1a",
        primary: "#d7a31a", 
        white: "#FFFFFF",
        accent: "#bd8cbf", 
        text: "#291115",
        lightbg: "#f6f6f6",
        whitetext: "#f6f6f1",
      },
    },
  },
  plugins: [],
};
