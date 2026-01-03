export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "modern-negra": ["Modern Negra", "sans-serif"],
        serif: ["DM Serif Text", "serif"],
        sans: ["Mona Sans", "sans-serif"],
      },
      colors: {
        yellow: "var(--color-yellow)",
        "white-100": "var(--color-white-100)",
      },
       maxWidth: {
        "2xs": "16rem", // 256px (same as v4-style 2xs)
      },
      borderRadius : {
        "4xl": "2rem",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
