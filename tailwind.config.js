/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        night:
          "url('https://media.istockphoto.com/photos/deep-space-background-picture-id178149253?b=1&k=20&m=178149253&s=170667a&w=0&h=_XDvcsDmRo_O9sV9l_Q4kNXZQq14xU9Cf-Ai7LpJOSY=')",
        day: "url('https://patcegan.files.wordpress.com/2012/02/morning-light.jpg')",
      },
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      colors: {
        // primary: {
        //   // Customize it on globals.css :root
        //   50: withOpacity('--tw-clr-primary-50'),
        //   100: withOpacity('--tw-clr-primary-100'),
        //   200: withOpacity('--tw-clr-primary-200'),
        //   300: withOpacity('--tw-clr-primary-300'),
        //   400: withOpacity('--tw-clr-primary-400'),
        //   500: withOpacity('--tw-clr-primary-500'),
        //   600: withOpacity('--tw-clr-primary-600'),
        //   700: withOpacity('--tw-clr-primary-700'),
        //   800: withOpacity('--tw-clr-primary-800'),
        //   900: withOpacity('--tw-clr-primary-900'),
        // },
        // dark: '#222222',
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
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
