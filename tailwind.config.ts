import type { Config } from 'tailwindcss'

export default {
  darkMode: "class",
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        "ibm-thai": ["IBM Plex Sans Thai Looped", "sans-serif"],
        "noto-thai": ["Noto Sans Thai Looped", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config

