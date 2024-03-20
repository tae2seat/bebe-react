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
    },
  },
  plugins: [],
};
