/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,}'],
  theme: {
    extend: {
      colors: {
        clear: '#ffffff3c',
        'apple-grey': '#DFDEDF',
        'apple-grey-text': '#8E8E92',
        'apple-green': '#28C840',
        'apple-yellow': '#FDBC2E',
        'apple-red': '#FD5E58',
        'apple-blue': '#007AFF',
      },
      fontFamily: {
        code: ['Menlo', 'monospace', 'Lucida Console'],
      },
    },
  },
  plugins: [],
};
