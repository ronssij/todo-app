const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  prefix: "tw-",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Montserrat", "sans-serif"],
        display: ["Montserrat"],
        body: ["Montserrat"],
      },
      letterSpacing: {
        sm: "0.0015rem",
        base: "0.005rem",
      },
      colors: {
        error: {
          dark: "#EF5350",
          light: "#FFE9E9",
        },
        primary: "#FEBF10",
        success: {
          dark: "#1EAA78",
          light: "#D6F5E2",
        },
        gray: {
          base: "#333333",
          "003": "#828282",
          "005": "#E0E0E0",
          "006": "#F2F2F2",
          "007": "#FBFBFB",
          "008": "#F6F6F6",
          "009": "#BDBDBD",
          "010": "#FAFAFA",
        },
        home: {
          light: "#F7EEFF",
          DEFAULT: "#F7EEFF",
          dark: "#8B42C5",
        },
        office: {
          light: "#E4F4FF",
          DEFAULT: "#E4F4FF",
          dark: "#4286C5",
        },
      },
      spacing: {
        1: "0.5rem",
        13: "3.375rem",
        15: "3.75rem",
      },
      borderRadius: {
        DEFAULT: "0.3rem",
        06: "0.6rem",
      },

      fontSize: {
        xss: "0.625rem", //10px
      },
    },
  },
  corePlugins: {
    container: false,
  },
  variants: {
    extend: {},
  },
};
