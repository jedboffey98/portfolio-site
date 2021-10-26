module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        beach: "url('/src/assets/Beach.jpg')",
      },
      height: {
        800: "800px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
