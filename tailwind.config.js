/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        midnight: '#0a0a0a',
        navy: '#1e293b',
        lavender: '#a855f7',
        royal: '#3b82f6',
      },
    },
  },
  plugins: [],
};
