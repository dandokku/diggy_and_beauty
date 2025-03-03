/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d7a31a',
        accent: '#82d47c',
        bg: '#111827',
        text: '#291115',
        lightbg: '#e4f0ff',
      },
    },
  },
  plugins: [],
};
