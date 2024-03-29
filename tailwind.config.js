/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  safelist: [
    "p-[1rem]",
    "px-[5%]",
    "px-[12.5%]",
    "gap-[5rem]",
    "gap-[7.5rem]",
    "text-[2.25rem]",
    "text-[3rem]",
    "font-[600]",
    "font-[700]",
    "pt-[0.5]",
    "pt-[1.5]",
    "pb-[0rem]",
    "pb-[2rem]",
    "text-[3.5rem]",
    "text-[1rem]",
    "text-[0.875rem]",

    // Добавь сюда любые другие классы с произвольными значениями, которые ты хочешь гарантированно включить
  ],
  plugins: [],
};
