const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#0E1116',
        white: '#FFFFFF',
        green: {
          primary: '#45E042',
          secondary: '#9CEF9A',
          transparent: '#10C638',
          bright: '#62FF84',
          gradient: '#10C638',
        },
        yellow: '#FFB800',
        purple: {
          primary: '#EF80EB',
          secondary: '#AA15A4',
          lightPrimary: '#D199FD',
        },
        blue: {
          primary: '#62C6FF',
          secondary: '#49A8FF',
          lightPrimary: '#94D0E2',
          lightSecondary: '#D1FCFF',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      ringWidth: ['hover', 'active'],
      ringColor: ['hover', 'active'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
