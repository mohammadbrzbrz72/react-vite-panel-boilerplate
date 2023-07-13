/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "1rem",
          xl: "2rem",
        },
      },
      backgroundImage: {},
      colors: {
        "green-light": "#3fbfb5",
        "green-dark": "#0b7171",
      },
    },
  },
  plugins: [],
};
