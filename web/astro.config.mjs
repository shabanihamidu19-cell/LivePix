import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { fileURLToPath } from "node:url";

// GitHub Pages project site: https://shabanihamidu19-cell.github.io/LivePix/
const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  site: "https://shabanihamidu19-cell.github.io",
  base: isProd ? "/LivePix" : "/",
  integrations: [tailwind({
    applyBaseStyles: false,
  })],
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
