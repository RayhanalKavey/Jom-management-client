/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6C63FF",
          // primary: "#0B66C3",

          secondary: "#F5F5F5",

          accent: "#222222",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#555555",

          success: "#ccc9fb",

          warning: "#2a78a5",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
