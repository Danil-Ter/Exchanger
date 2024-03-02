import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-white': '#F6F7FF',
        'custom-gray': '#707C87',
        'custom-gray1': '#E0E1EA',
        'custom-gray2': '#C1C2CA',
        'custom-blue': '#2C36F2',
        'custom-black': '#1F1E25',

      }
    },
  },
  plugins: [],
};
export default config;
