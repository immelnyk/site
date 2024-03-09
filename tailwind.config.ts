import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      gridTemplateColumns: {
        "auto-fill-400": "repeat(auto-fill, minmax(400px, 1fr))",
        "auto-fit-400": "repeat(auto-fit, minmax(400px, 1fr))",
        "auto-fill-200": "repeat(auto-fill, minmax(200px, 1fr))",
        "auto-fit-200": "repeat(auto-fit, minmax(min(50vw,250px), 1fr))",
      },
      colors: {
        primary: "#7c3aed",
        "primary-content": "#ffffff",
        "primary-dark": "#5f14e0",
        "primary-light": "#9b69f1",

        secondary: "#ed3a51",
        "secondary-content": "#ffffff",
        "secondary-dark": "#e0142f",
        "secondary-light": "#f1697a",

        background: "#efeff1",
        foreground: "#fbfbfb",
        border: "#dedde2",

        copy: "#252329",
        "copy-light": "#645e6e",
        "copy-lighter": "#8a8495",

        success: "#3aed3a",
        warning: "#eded3a",
        error: "#ed3a3a",

        "success-content": "#032503",
        "warning-content": "#252503",
        "error-content": "#ffffff",
      },
    },
  },
  plugins: [],
} satisfies Config;
