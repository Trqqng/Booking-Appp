module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        "p-4": "1rem", // 16px
        "p-6": "1.5rem", // 24px
        "p-8": "2rem", // 32px
        "p-10": "2.5rem", // 40px
        "p-12": "3rem", // 48px
        "p-16": "4rem", // 64px
      },
      fontSize: {
        "0.5rem": "0.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
