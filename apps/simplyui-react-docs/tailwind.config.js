/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    '../../packages/simplyui-react/dist/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@simplyui/tailwind-plugin')],
};
