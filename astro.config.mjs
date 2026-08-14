import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  fonts: [{
    provider: fontProviders.google(),
    name: "Golos Text",
    cssVariable: "--font-golos",
    weights: [400, 500, 600],
    subsets: ["latin", "cyrillic"],
  }],
});