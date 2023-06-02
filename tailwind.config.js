/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      "clear-chill": "#209CFF",
      "shady-character": "#4C4C4C",
      "explosive-grey": "#C4C4C4",
      "doctor": "#F9F9F9",
      "white": "#fff",
      "carbon": "#333333",
      "white-smoke": "#F5F5F5",
      "elemental-grey": "#A0A0A0",
      "island-green": "#27AE60",
      "aqua-belt": "#7DC9CE",
      "pink-charge": "#DC66C2",
      "herty-hosta": " #90C483"

    }
  },
  plugins: [],
}
