/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        sandybrown: "rgba(255, 199, 120, 0.75)",
        black: "#000",
        cornsilk: "#faf4d4",
        brown: "#9f2d2d",
        green: "#119663",
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(217, 217, 217, 0.25)",
          "300": "#119663",

        },
        aquamarine: "#8bf8c4",
        chocolate: "#c17011",
        gray: {
          "100": "#898989",
          "200": "rgba(0, 0, 0, 0.4)",
        },
        whitesmoke: "#efefef",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        "segoe-ui": "'Segoe UI'",
      },
      borderRadius: {
        "6xl": "25px",
        "31xl": "50px",
      },
    },
    fontSize: {
      lg: "18px",
      xl: "20px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "13xl": "32px",
      "7xl": "26px",
      "45xl": "64px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
};