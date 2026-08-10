import type { Config } from "tailwindcss";

// "Lotus" palette — deep forest + teal, hot-pink accent.
// Named tokens map 1:1 to the hex values used in the approved design (turn 4a).
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#12332c", // page / hero background
          dark: "#0b241f", // header, quest log & contact section background
          darker: "#071a16", // footer background
          panel: "#0f4d43", // card / tile background
          panelAlt: "#14544a", // secondary button / archive tile background
          panelHover: "#175f55", // secondary button hover
          border: "#1d7568", // subtle borders / unfilled skill bars
        },
        cream: {
          DEFAULT: "#f4efec", // headings, primary text, borders
          soft: "#d8e8e2", // body copy on dark backgrounds
          muted: "#a9cfc6", // secondary / meta text
        },
        pink: {
          DEFAULT: "#f2799f", // primary accent
          hover: "#ff9dba", // primary accent hover
        },
        teal: {
          accent: "#7fe3d6", // focus rings, [OK] audit marks, SHIPPED badge
        },
      },
      fontFamily: {
        pixel: ["'Pixelify Sans'", "monospace"],
        mono: ["'Silkscreen'", "monospace"],
        body: ["'Atkinson Hyperlegible'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
