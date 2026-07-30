import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://caporici-labs.vercel.app",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
