# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> `CLAUDE.md` is a symlink to `AGENTS.md`. Edit this file to update guidance for both.

## Commands

- **Dev server (preferred):** `astro dev --background` — then manage with `astro dev stop`, `astro dev status`, `astro dev logs`. Serves at `localhost:4321`.
- **Build:** `npm run build` (runs `astro build`, output to `./dist/`). This also type-checks via `@astrojs/check`.
- **Preview a build:** `npm run preview`
- **Type-check only:** `npx astro check`

There is no test runner or linter configured. Requires Node >= 22.12.

## Architecture

Astro 7 static site with React 19 islands. UI copy and content are in Russian (`<html lang="ru">`). This is an order-only bakery storefront ("готовится под заказ") — products have production lead times, not stock.

### Data flow (important — two access patterns coexist)

Product/category data lives in `src/data/products.json` and `src/data/category.json`. There are **two ways the code reads them, and both are in use**:

1. **Content collections** — `src/content.config.ts` defines `products` and `categories` collections via the `file()` loader with Zod schemas. Accessed with `await getCollection('products')`, which returns entries wrapped as `{ id, data: {...} }`. Used in `src/pages/index.astro` and `src/lib/category.ts`.
2. **Direct JSON import** — `import products from '../data/products.json'`, giving the raw objects (no `.data` wrapper). Used in `src/pages/catalog/index.astro` and `src/lib/price.ts`.

When passing products to `ProductCard`, always pass the **unwrapped** shape: `.astro` collection callers pass `product.data`, direct-import callers pass `product` as-is. Keep this in mind — mixing the two shapes is the most likely source of bugs. Note also the `categories` Zod schema omits the `description` field that exists in the JSON.

### Pricing model

Products have a `variants` array; pricing is per-variant and comes in two mutually exclusive forms: `price` (per-unit) or `price_per_100g` (by weight, with `min_grams`/`max_grams`/`step_grams`). `src/lib/price.ts` centralizes this:
- `priceType(product)` returns the price of `variants[0]`, preferring `price_per_100g` then `price`, else `null`.
- `getPriceRange(items)` derives catalog min/max for the price filter.
Always go through these helpers rather than reading `variants` prices directly.

### Rendering & interactivity

- Pages are `.astro` files under `src/pages/`. Static, content-heavy sections (home, hero, category grids) are plain Astro.
- Interactive pieces are React `.jsx` components hydrated as islands. The catalog uses `<Catalog client:only ... />` because it reads `window.location` on mount.
- `src/pages/catalog/Catalog.jsx` holds the filter state (selected categories, price range, sort flags) and **mirrors it into the URL query string** via `history.pushState`; `readUrl()` reconstructs state from the URL on load. Query keys: `category` (repeated), `min`, `max`, and sort flags.
- `ProductCard` renders its own `<li>` — render it directly inside a `<ul>`, do **not** wrap it in another `<li>`.
- Links to `/category/<path>` and `/category/<path>/<product>` exist in the markup, but those routes are **not yet implemented** under `src/pages/` (only `index` and `catalog` exist).

### Styling & design system

- `DESIGN.md` is the source-of-truth design spec (colors, typography, spacing). `src/styles/tokens.css` mirrors it as CSS custom properties (`--color-*`, `--spacing-*`). **Use the tokens**, e.g. `var(--color-action)` for the green action accent — the green is reserved for actions only.
- No Tailwind (ignore the README's boilerplate mention). Styling is: `<style>` blocks scoped inside `.astro` files, and sibling `.css` files imported by React components (e.g. `ProductCard.jsx` imports `ProductCard.css`).
- Global resets and base rules are in `src/styles/global.css`; both global stylesheets are imported once in `src/layouts/Base.astro`.
- Font is "Golos Text" loaded via Astro's Google font provider (`astro.config.mjs`), exposed as `--font-golos`.

### Layout

`src/layouts/Base.astro` is the single page shell (`<head>` with SEO meta from `title`/`description`/`keywords` props, `Header`, `<main>`, `Footer`). All pages wrap content in `<Layout>`.
