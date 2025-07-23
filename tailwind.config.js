// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        mainColor: "var(--mainColor)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        btnbg: "var(--btnbg)",
        btnhover: "var(--btnhover)",
      },
      fontFamily: {
        eczar: ["var(--font-eczar)"],
      },
    },
  },
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
};
