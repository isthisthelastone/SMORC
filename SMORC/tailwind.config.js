/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  safelist: [
    "p-[1rem]",
    // Добавь сюда любые другие классы с произвольными значениями, которые ты хочешь гарантированно включить
  ],
  plugins: [],
};
