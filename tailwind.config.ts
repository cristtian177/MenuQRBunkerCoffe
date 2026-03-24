import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          /** Fondo principal — blanco puro */
          bg: "#FFFFFF",
          /** Superficie sutil para header/footer */
          surface: "#0F0A07",
          /** Borde sutil */
          border: "#E8E8E8",
          /** Texto principal */
          text: "#1C1C1C",
          /** Texto secundario — descripciones */
          muted: "#777777",
          /** Texto muy tenue — metadatos */
          light: "#BBBBBB",
          /** Espresso oscuro — acento, nav activo */
          espresso: "#0F0A07",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        /** Mínimo 16px en body para evitar zoom automático en iOS */
        base: ["1rem", { lineHeight: "1.6" }],
      },
      letterSpacing: {
        section: "0.12em",
      },
    },
  },
  plugins: [],
} satisfies Config;
