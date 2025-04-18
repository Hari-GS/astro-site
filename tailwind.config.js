/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        glowYellow: {
          '0%, 100%': { boxShadow: '0 0 10px 4px rgba(255, 255, 0, 0.4)' },
          '50%': { boxShadow: '0 0 20px 8px rgba(255, 255, 0, 0.8)' },
        },
        glowBlue: {
          '0%, 100%': { boxShadow: '0 0 10px 4px rgba(79, 195, 247, 0.4)' },
          '50%': { boxShadow: '0 0 20px 8px rgba(79, 195, 247, 0.8)' },
        },
      },
      animation: {
        'glow-yellow': 'glowYellow 2s ease-in-out infinite',
        'glow-blue': 'glowBlue 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
