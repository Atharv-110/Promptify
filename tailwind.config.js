/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      colors: {
        "primary-black": "#212529",
        "primary-white": "#F5F7F8",
        "gray-light": "#D0D5D9",
        "gray-dark": "#6C757D",
        "gray-darker": "#495057",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

// const config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         poppins: ["Poppins", "sans-serif"],
//         opensans: ["Open Sans", "sans-serif"],
//       },
//       colors: {
//         "primary-black": "#212529",
//         "primary-white": "#F5F7F8",
//         "gray-light": "#D0D5D9",
//         "gray-dark": "#6C757D",
//         "gray-darker": "#495057",
//       },
//     },
//   },
//   darkMode: "class",
//   plugins: [nextui()],
// }

// export default config;