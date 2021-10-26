module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        400: "400px",
        800: "800px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
