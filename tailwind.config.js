/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px", // 추가된 커스텀 반응형 사이즈 (예: 모바일 세로 모드)
        sm: "580px", // 기본 Tailwind 반응형 사이즈
        md: "700px", // 기본 Tailwind 반응형 사이즈
        lg: "850px", // 기본 Tailwind 반응형 사이즈
        xl: "1024px", // 기본 Tailwind 반응형 사이즈
      },
      colors: {
        brand1: "#f95c58",
        brand2: "#ffcdc3",
        brand3: "#f2f2f2",
        brand4: "#1e1e1e",
        brand5: "#fff0f0",
        brand6: "#ffeddf",
        brand7: "#ffa48a",
        brand8: "#a8e3f6",
      },
    },
  },
  plugins: [],
};
