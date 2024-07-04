/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'lotus-primary': {
          '50': '#eef0ff',
          '100': '#dfe3ff',
          '200': '#c6caff',
          '300': '#a3a7fe',
          '400': '#827efb',
          '500': '#7060f4',
          '600': '#6142e9',
          '700': '#5435cd',
          '800': '#452da6',
          '900': '#3a2c83',
          '950': '#231a4c',
        }
      },
    },
  },
  plugins: [],
};

