/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
// prettier-ignore
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'middle': '0 0 60px -15px rgba(0, 0, 0, 0.3)',
      },
      gridTemplateRows: {
        'headerMobile': '1fr 2fr',
        'navMobile': '1fr 70px'
      },
      gridTemplateColumns: {
        'headerDesktop' : '40% 1fr'
      }
    },
  },
  plugins: [],
};
