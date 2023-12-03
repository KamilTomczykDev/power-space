/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
// prettier-ignore
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        'headerMobile': '1fr 2fr'
      }
    },
  },
  plugins: [],
};
