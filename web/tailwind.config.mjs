/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      // LivePix brand palette: deep black/gray base with cyan accent
      // matching KidCoder Tz logo (cyan + white + black + gray)
      colors: {
        ink: {
          900: "#020617", // near-black background
          800: "#0b1220", // panels
          700: "#111827", // hover / borders
        },
        cyan: {
          // Primary accent from KidCoder Tz logo
          DEFAULT: "#00E5FF",
          dim: "#00B8D4",
          glow: "#67E8F9",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        // Subtle cyan glow used on the generate button and active states
        glow: "0 0 0 1px rgba(0, 229, 255, 0.4), 0 0 24px -4px rgba(0, 229, 255, 0.35)",
      },
    },
  },
  plugins: [],
};
