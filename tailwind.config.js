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
    },
  },
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // ensure you include all your files here
  ],
};
