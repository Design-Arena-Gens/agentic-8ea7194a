import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#b3d7ff',
          200: '#80bdff',
          300: '#4da3ff',
          400: '#1a89ff',
          500: '#0070f3',
          600: '#0059c0',
          700: '#00428d',
          800: '#002b5a',
          900: '#001427',
        },
        accent: {
          50: '#e6fff9',
          100: '#b3ffed',
          200: '#80ffe1',
          300: '#4dffd5',
          400: '#1affc9',
          500: '#00e6b3',
          600: '#00b38a',
          700: '#008061',
          800: '#004d38',
          900: '#001a0f',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
