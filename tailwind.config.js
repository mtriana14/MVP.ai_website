/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx}',
    './src/component/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: ['var(--font-dm-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
