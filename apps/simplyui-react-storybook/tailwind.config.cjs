/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../packages/simplyui-react/src/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}',
    './icons/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@simplyui/tailwind-plugin')],
};
