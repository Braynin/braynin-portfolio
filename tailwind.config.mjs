/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      celular: { max: "768px" },
    },
    extend: {
      keyframes: {
        typeWriter: {
          to: { width: "27ch" },
        },
        blink: {
          "0%": {
            "border-right-color": "transparent",
          },
          "50%": {
            "border-right-color": "#c2c6ce",
          },
          "100%": {
            "border-right-color": "transparent",
          },
        },
      },
      animation: {
        typeWriterBlink:
          "typeWriter 2s steps(30, end) 1s 1 normal both, blink 1s step-start infinite",
      },
      colors: {
        gris: "#c2c6ce",
        cielo: "#c0d0ef",
        celeste: "#668dc0",
        acero: "#304a6e",
        azul: "#0f1c30",
      },
    },
  },

  plugins: [],
};
