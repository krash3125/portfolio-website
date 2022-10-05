/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        clear: '#ffffff3c',
        'apple-green': '#28C840',
        'apple-yellow': '#FDBC2E',
        'apple-red': '#FD5E58',
      },
    },
  },
  plugins: [],
};
