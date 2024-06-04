/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{mjs,js,ts,jsx,tsx}',

    // include this to avoid purge
    './node_modules/@mono/starter/src/**/*.{ts,tsx,js,jsx,mjs}'
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  presets: [require('@mono/configs/tw-config')]
}
