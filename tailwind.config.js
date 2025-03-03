/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: "#1a1a1a", // Deep Black
        primary: "#d7a31a", // Gold
        white: "#FFFFFF",
        accent: "#bd8cbf", // Purple Pink Luxury
        text: "#291115",
        lightbg: "#f6f6f6",
      },
    },
  },
  plugins: [],
};
