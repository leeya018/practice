import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Assuming you have specific hex codes from the design
        primary: "#2e42ff", // Replace with the actual color code
        secondary: "##2efff5", // Replace with the actual color code
      },
      backgroundImage: (theme) => ({
        "header-pattern": "url('/path-to-header-background-image')",
        hero: "url('https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        // More background images as needed
      }),
      boxShadow: {
        "text-shadow": "2px 2px 2px rgba(0, 0, 0, 0.25)",
      },
      // Any other customizations go here
    },
  },
  plugins: [],
};
export default config;
