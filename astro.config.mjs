// @ts-check
import { defineConfig } from "astro/config";

// Static output: every page is plain HTML in dist/, deployable to any host or subdomain root.
// SITE_URL / BASE_PATH let the same build run at a domain root or a sub-path (e.g. GitHub Pages).
export default defineConfig({
  site: process.env.SITE_URL ?? "https://mahabbati.com",
  base: process.env.BASE_PATH ?? "/",
  trailingSlash: "always",
  build: { format: "directory" },
  devToolbar: { enabled: false },
  image: {
    responsiveStyles: false,
  },
});
