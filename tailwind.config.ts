// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Blue
        secondary: "#F59E0B", // Yellow
        accent: "#10B981", // Green
        background: "#F3F4F6", // Light Gray
        text: "#111827", // Dark Gray
      },


    },
  },
  plugins: [],
};

export default config;