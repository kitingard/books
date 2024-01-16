module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/index.html",
    "./node_modules/tailwindcss",
  ],
  theme: {
    extend: {
      colors: {
        semitransparent: "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
