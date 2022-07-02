/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    screens: {
      "phone": {max: "640px"},
      "tablet": {max: "1024px"},
      "desktop": {max: "1280px"}
    },
    extend: {
      boxShadow: {
        "button": "0 2px 4px 2px rgba(75, 74, 74, 0.4)",
        "footer": "4px -4px 3px 1px rgba(0, 0, 0, 0.25)"
      }
    }
  },
  plugins: [],
}
