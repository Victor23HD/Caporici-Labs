import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://caporici-labs.vercel.app",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
