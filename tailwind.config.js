/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Roboto', ...fontFamily.sans],
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
        },
        secondary: {
          50: 'rgb(var(--tw-color-secondary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-secondary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-secondary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-secondary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-secondary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-secondary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-secondary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-secondary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-secondary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-secondary-900) / <alpha-value>)',
        },
        maroon: {
          50: '#fdf2f9',
          100: '#fbe8f5',
          200: '#f9d1ec',
          300: '#f6abdb',
          400: '#ee78c1',
          500: '#e54fa7',
          600: '#d32f87',
          700: '#b01e68', // main
          800: '#971d59',
          900: '#7e1d4d',
        },
        punch: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fdcbcb',
          300: '#fba6a6',
          400: '#f67373',
          500: '#ed4646',
          600: '#dc3535', // main
          700: '#b71e1e',
          800: '#971d1d',
          900: '#7e1e1e',
        },
        buttercup: {
          50: '#fffaeb',
          100: '#fef1c7',
          200: '#fce38b',
          300: '#fbcd4e',
          400: '#f9b826',
          500: '#f49d1a', // main
          600: '#d87107',
          700: '#b34e0a',
          800: '#913c0f',
          900: '#773210',
        },
        mustard: {
          50: '#fefbe8',
          100: '#fff8c2',
          200: '#ffee89',
          300: '#ffe15d', // main
          400: '#fdc812',
          500: '#ecae06',
          600: '#cc8602',
          700: '#a35e05',
          800: '#864a0d',
          900: '#723c11',
        },
        dark: '#222222',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
