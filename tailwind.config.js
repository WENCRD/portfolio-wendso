// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          from: { width: '0%' },
          to: { width: '100%' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        typewriter: 'typewriter 2s steps(40, end) 1 forwards',
        marquee: 'marquee 15s linear infinite',
      },
    },
  },
  plugins: [],
}
