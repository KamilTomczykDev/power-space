/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
// prettier-ignore
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        'main' : "800px",

      },
      borderWidth: {
        '1': '1px',
      },
      screens: {
        'xs':'400px',
      },
      fontFamily: {
        'stats': 'Bungee, sans-serif',
      },
      boxShadow: {
        'in' : 'inset 0px -10px 30px 0px rgba(0, 0, 0, 0.1)',
        'middle': '0 0 60px -15px rgba(0, 0, 0, 0.3)',
      },
      gridTemplateRows: {
        'headerMobile': '1fr 2fr',
        'navMobile': '1fr 70px',
        'mobile-app' : '1fr 80px',
        'stats' : '100px 1fr',
        'mobile-etiquette' : '1fr 1fr'
      },
      gridTemplateColumns: {
        'headerDesktop' : '40% 1fr',
        'desktop-app' : '15% 1fr',
        'form-cols' : '30% 1fr',
        'mobile-chart' : '350px 1fr 1fr',
        'ranking-table' : '0.5fr 1.8fr 1fr 1fr 0.5fr 1fr',
      }
    },
  },
  plugins: [],
};
