import { defineConfig } from "astro/config";
import path from "path";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@assets": path.resolve("./src/assets"),
      },
    },
  },

  integrations: [sitemap()],
});