/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      primary: "#050816",
      secondary: "#aaa6c3",
      tertiary: "#151030",
      "black-100": "#100d25",
      "black-200": "#090325",
      "white-100": "#f3f3f3",
    },
    boxShadow: {
      card: "0px 35px 120px -15px #211e35",
      "blue-500": "0 4px 6px -1px rgba(59, 130, 246, 0.5)",
      "yellow-500": "0 4px 6px -1px rgba(234, 179, 8, 0.5)",
      "orange-500": "0 4px 6px -1px rgba(249, 115, 22, 0.5)",
      "blue-300": "0 4px 6px -1px rgba(147, 197, 253, 0.5)",
      "cyan-500": "0 4px 6px -1px rgba(6, 182, 212, 0.5)",
      "green-500": "0 4px 6px -1px rgba(34, 197, 94, 0.5)",
      "gray-400": "0 4px 6px -1px rgba(156, 163, 175, 0.5)",
    },
    screens: {
      xs: "450px",
    },
    backgroundImage: {
      "hero-pattern": "url('/src/assets/herobg.webp')",
    },
  },
};
export const plugins = [];
