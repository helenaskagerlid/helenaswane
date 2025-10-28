import { defineConfig } from "astro/config";
import path from "path";

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@assets": path.resolve("./src/assets"),
      },
    },
  },
});
