/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
      red: "hsl(14, 86%, 42%)",
      green: "hsl(159, 69%, 38%)",
      rose: {
        50: "hsl(20, 50%, 98%)",
        100: "hsl(13, 31%, 94%)",
        300: "hsl(14, 25%, 72%)",
        400: "hsl(7, 20%, 60%)",
        500: "hsl(12, 20%, 44%)",
        900: "hsl(14, 65%, 9%)",
      },
    },
    fontFamily: {
      sans: ["Red Hat Text", "sans-serif"],
    },
    fontSize: {
      "heading-lg": ["40px", "48px"],
      "heading-md": ["24px", "32px"],
      "heading-sm": ["16px", "24px"],
      "body-sm": ["14px", "24px"],
    },
    extend: {},
  },
  plugins: [],
};
