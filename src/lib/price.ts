import products from '../data/products.json';

type Product = (typeof products)[number];

function variantPrice(product: Product): number | null {
    const variant = product.variants[0];
    if ('price_per_100g' in variant) return variant.price_per_100g;
    if ('price' in variant) return variant.price;
    return null;
}

export function getPriceRange(items: Product[]) {
    const prices = items
        .map(variantPrice)
        .filter((price): price is number => price !== null);

    return {
        minPrice: Math.min(...prices),
        maxPrice: Math.max(...prices),
    };
}
