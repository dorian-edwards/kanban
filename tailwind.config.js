/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      lineHeight: {
        loose: '3rem',
        'extra-loose': '2.3rem',
        normal: '1.5rem',
        tight: '1.2rem',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'sans-serif'],
    },
    fontWeight: {
      bold: 700,
      medium: 500,
    },
    fontSize: {
      xs: '1.2rem',
      sm: '1.3rem',
      med: '1.5rem',
      lg: '1.8rem',
      xl: '2.4rem',
    },
    letterSpacing: {
      wide: '.24rem',
    },
    colors: {
      'main-purple': '#635FC7',
      'main-purple-hover': '#A8A4FF',
      black: '#000112',
      'very-dark-gray': '#20212C',
      'dark-gray': '#2B2C37',
      'lines-dark': '#3E3F4E',
      'med-gray': '#828FA3',
      lavendar: '#E4EBFA',
      'lgt-gray': '#F4F7FD',
      white: '#FFFFFF',
      red: '#EA5555',
      'red-hover': '#FF9898',
      'battleship-gray': '#979797',
    },
    borderRadius: {
      sm: '0.4rem',
      lg: '2.4rem',
    },
  },
  plugins: [],
}
