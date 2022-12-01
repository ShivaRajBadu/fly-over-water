/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-main": "url('/connect.webp')",
        "bg-efoil": "url('/bg_efoil.webp')",
        "bg-propeller": "url('/propeller.webp')",
      },
    },
  },
  plugins: [],
};
