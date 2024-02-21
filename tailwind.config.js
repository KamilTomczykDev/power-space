/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
// prettier-ignore
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
          'primary-950' : '#0C0A09',
          'primary-900' : '#171717',
          'primary-800' : '#292524',
          'primary-700' : '#44403C',
          'primary-600' : '#57534E',
          'primary-500' : '#78716C',
          'primary-400' : '#A8A29E',
          'primary-300' : '#D6D3D1',
          'primary-200' : '#E7E5E4',
          'primary-100' : '#F5F5F4',
          'secondary-950': '#052E16',
          'secondary-900': '#14532D',
          'secondary-800': '#166534',
          'secondary-700': '#15803D',
          'secondary-600': '#16A34A',
          'secondary-500': '#22C55E',
          'secondary-400': '#4ADE80',
          'secondary-300': '#86EFAC',
          'secondary-200': '#BBF7D0',
          'secondary-100': '#DCFCE7',
          /// borders
          'main': '#44403C',
          'secondary': '#22C55E',
        },
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
