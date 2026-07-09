const typography = require("@tailwindcss/typography");

module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,md,mdx}",
    "./src/components/**/*.{js,jsx}",
    "./src/content/**/*.{md,mdx}",
    "./src/data/**/*.{js,jsx}",
    "./src/lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        porcelain: "#f5f2ea",
        ember: "#ff6b35",
        cyan: "#8be9fd",
        violet: "#a78bfa",
        acid: "#c8ff5d",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"],
        display: [
          "var(--font-space-grotesk)",
          "Space Grotesk",
          "ui-sans-serif",
          "system-ui",
        ],
      },
      boxShadow: {
        glow: "0 0 80px rgba(139, 233, 253, 0.16)",
        ember: "0 0 70px rgba(255, 107, 53, 0.18)",
      },
      backdropBlur: {
        glass: "24px",
      },
    },
  },
  plugins: [typography],
};
