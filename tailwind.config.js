/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "image-pattern": "url('pattern-bg.png')",
        "arrow-icon": "url('icon-arrow.svg')",
      },
    },
  },
  plugins: [],
};
