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
      typography: () => ({
        invert: {
          css: {
            "--tw-prose-body": "rgba(245, 242, 234, 0.68)",
            "--tw-prose-headings": "#f5f2ea",
            "--tw-prose-links": "#8be9fd",
            "--tw-prose-bold": "#f5f2ea",
            "--tw-prose-counters": "rgba(245, 242, 234, 0.5)",
            "--tw-prose-bullets": "#c8ff5d",
            "--tw-prose-hr": "rgba(245, 242, 234, 0.12)",
            "--tw-prose-quotes": "#f5f2ea",
            "--tw-prose-quote-borders": "#ff6b35",
            "--tw-prose-captions": "rgba(245, 242, 234, 0.45)",
            "--tw-prose-code": "#c8ff5d",
            "--tw-prose-pre-code": "#f5f2ea",
            "--tw-prose-pre-bg": "rgba(255, 255, 255, 0.05)",
            "--tw-prose-th-borders": "rgba(245, 242, 234, 0.16)",
            "--tw-prose-td-borders": "rgba(245, 242, 234, 0.1)",
          },
        },
      }),
    },
  },
  plugins: [typography],
};
