/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}", "./src/assets/**/*.{css,js}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "custom-primary": "#FFCE00",
        "custom-secondary": "#094152",
        "custom-bg": "#FDFDFD",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xsm: "520px",

      sm: "730px",
      // => @media (min-width: 730px) { ... }

      md: "1024px",
      // => @media (min-width: 1024px) { ... }

      lg: "1204px",
      // => @media (min-width: 1204px) { ... }

      xl: "1440px",
      // => @media (min-width: 1440pxpx) { ... }

      xxl: "1636px",
      // => @media (min-width: 1636px) { ... }
    },
  },
  plugins: [],
};

