const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        14: "14px",
      },
      fontFamily: {
        sans: ["Russo One", ...defaultTheme.fontFamily.sans],
        barlow600Bold: ["Barlow"],
      },
      gridTemplateColumns: {
        cartProductItemContainer: "1fr 50px",
        cartProductItemTopSection: "50px 1fr 50px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          50: "#f9f9fb",
          100: "#f0f1f5",
          200: "#e4e5ec",
          300: "#cbcedc",
          400: "#adb2c7",
          500: "#8f95b3",
          600: "#6d769c",
          700: "#535a79",
          800: "#464c67",
          900: "#3c4158",
          1100: "#252836",
        },
        secondary: {
          50: "#f3f3f7",
          100: "#eeedf3",
          200: "#dcdbe6",
          300: "#c2bfd4",
          400: "#a5a1bf",
          500: "#8680a8",
          600: "#68618f",
          700: "#504a6d",
          800: "#45405e",
          900: "#39364f",
          1100: "#1f1d2b",
        },
        tertiary: {
          50: "#fdf3f2",
          100: "#fbe8e4",
          200: "#f8d4ce",
          300: "#f3b5aa",
          400: "#ed8e7e",
          450: "#ea7c69",
          500: "#e4583f",
          600: "#c0341b",
          700: "#982916",
          800: "#7d2212",
          900: "#6b1d0f",
          1100: "#3e1109",
        },
        bordersColor: "#393C49",
        inputColor: "#2D303E",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
}
