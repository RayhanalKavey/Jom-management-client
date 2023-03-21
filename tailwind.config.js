/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0B66C3",

          secondary: "#F5F5F5",

          accent: "#222222",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#444444",

          success: "#c9e4f5",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
