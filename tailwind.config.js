module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        beach: "url('/src/assets/Beach.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
