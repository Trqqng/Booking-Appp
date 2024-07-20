/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        4: "1rem", // 16px
        6: "1.5rem", // 24px
        8: "2rem", // 32px
        10: "2.5rem", // 40px
        12: "3rem", // 48px
        16: "4rem", // 64px
      },
      fontSize: {
        "0.5rem": "0.5rem", // 0.5rem
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
