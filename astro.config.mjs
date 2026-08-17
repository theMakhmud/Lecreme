import { defineConfig, fontProviders } from "astro/config";

import react from "@astrojs/react";

export default defineConfig({
  fonts: [{
    provider: fontProviders.google(),
    name: "Golos Text",
    cssVariable: "--font-golos",
    weights: [400, 500, 600],
    subsets: ["latin", "cyrillic"],
  }],

  integrations: [react()],
});