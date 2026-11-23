import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { crema: "#F1E2C8", papel: "#F8EFDD", bordo: "#6E1423", cafe: "#2E1A12", ocre: "#B9791F", salvia: "#7C8A63" },
    fontFamily: { display: ["var(--f-display)", "Georgia", "serif"], sans: ["var(--f-sans)", "system-ui", "sans-serif"] },
  } },
} satisfies Config;
