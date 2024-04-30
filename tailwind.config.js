/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        blue: {
          50: "#0A0A0A", // Darkest
          100: "#121212",
          200: "#1A1A1A",
          300: "#222222",
          400: "#2A2A2A",
          500: "#333333", // Pitch Black
          600: "#3B3B3B",
          700: "#434343",
          800: "#4B4B4B",
          900: "#535353", // Lightest
        },
      },
      typography: {
        DEFAULT: {
          css: {
            pre: false,
            code: false,
            "pre code": false,
            "code::before": false,
            "code::after": false,
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

