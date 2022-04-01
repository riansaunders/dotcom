const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        fadeIn: "fadeIn 0.75s linear forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
            position: "relative",
            top: 30,
          },
          "100%": {
            opacity: 1,
            top: 0,
            position: "relative",
          },
        },
      },
    },
  },
  plugins: [],
};
