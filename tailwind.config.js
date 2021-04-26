module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Raleway", "Helvetica", "Arial", "Lucida", "sans-serif!important"],
      textos: ["Anonymous Pro", "monospace"],
      trabajos: "Nunito",
    },
    extend: {
      colors: {
        blue: {
          650: "#000dff",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
