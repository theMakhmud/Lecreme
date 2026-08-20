
import { getCollection } from 'astro:content';

const categories  = await getCollection('categories')
const products  = await getCollection('products')

export function category(product: (typeof products)[number]) {
    return (categories.find((c) => c.data.id == product.data.category_id))
}