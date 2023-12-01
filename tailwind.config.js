/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      lineHeight: {
        loose: '3rem',
        'extra-loose': '2.3rem',
        normal: '1.5rem',
        tight: '1.2rem',
      }, // box-shadow: 0px 4px 6px 0px rgba(54, 78, 126, 0.10);
      boxShadow: {
        sm: '0px 4px 6px 0px rgba(54, 78, 126, 0.10)',
      },
    },
    screens: {
      tablet: '768px',
      desktop: '1440px',
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
      xl: '2rem',
      '2xl': '2.4rem',
    },
    letterSpacing: {
      wide: '.24rem',
    },
    colors: {
      'primary-purple': '#635FC7',
      'primary-purple-hover': '#A8A4FF',
      'secondary-purple-hover': 'rgba(99, 95, 199, 0.25)',
      'secondary-purple': 'rgba(99, 95, 199, 0.10)',
      black: '#000112',
      'lines-dark': '#3E3F4E',
      lavender: '#E4EBFA',
      'med-gray': '#828FA3',
      'lgt-gray': '#F4F7FD',
      'cool-gray': 'rgba(130, 143, 163, 0.25)',
      'dark-gray': '#2B2C37',
      'very-dark-gray': '#20212C',
      white: '#FFFFFF',
      red: '#EA5555',
      'red-hover': '#FF9898',
      'battleship-gray': '#979797',
    },
    borderRadius: {
      sm: '0.4rem',
      md: '0.8rem',
      lg: '2.4rem',
      xl: '10rem',
    },
  },
  plugins: [],
}
