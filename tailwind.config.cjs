/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'Corsa-Grotesk': 'Corsa Grotesk'
      },
      colors: {
        brand: {
          primary: '#3A56CD'
        }
      },
      screens: {
        ss: '300px',
        sm: '375px',
        md: '768px',
        lg: '976px',
        xl: '1024px'
      }
    }
  },
  plugins: []
};
