import { defineConfig, fontProviders } from "astro/config";

import react from "@astrojs/react";

export default defineConfig({
  fonts: [{
    provider: fontProviders.google(),
    name: "Golos Text",
    cssVariable: "--font-golos",
    weights: [400, 500, 600],
    subsets: ["latin", "cyrillic"],
  }, {
    provider: fontProviders.google(),
    name: "Prata",
    cssVariable: "--font-prata",
    weights: [400],
    subsets: ["latin", "cyrillic"],
  }, {
    provider: fontProviders.google(),
    name: "IBM Plex Mono",
    cssVariable: "--font-mono",
    weights: [500, 600],
    subsets: ["latin", "cyrillic"],
  }],

  integrations: [react()],
});