/** @type {import('tailwindcss').Config} */
export default {
 content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
 theme: {
  extend: {
   fontFamily: {
    poppins: ['poppins'],
   },
   colors: {
    main: {
     100: 'rgba(97, 219, 207,0.2)',
     200: 'rgba(97, 219, 207,0.3)',
     300: 'rgba(97, 219, 207,0.4)',
     400: 'rgba(97, 219, 207,0.5)',
     500: 'rgba(97, 219, 207,0.6)',
     600: 'rgba(97, 219, 207,0.7)',
     700: 'rgba(97, 219, 207,0.8)',
     800: 'rgba(97, 219, 207,0.9)',
     900: 'rgba(97, 219, 207,1)',
    },
   },
  },
 },
 plugins: [],
}

