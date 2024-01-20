import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    theme: {
    colors: {
      transparent: 'transparent',
      blue: '#004488',
      white: '#FFFFFF',
      gray: '#303030',
      lightgrey: '#777777'
    }
  },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
      themes: {
        light: {
          colors: {
            background: "#004488", // or DEFAULT
            foreground: "#FFFFFF", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#FFFFFF",
            },
            // ... rest of the colors
          },
        },}})],
}
export default config
