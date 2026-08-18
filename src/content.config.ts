import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const categories = defineCollection({
    loader: file("./src/data/category.json"),
    schema: z.object({
        id: z.number(),
        title: z.string(),
        path: z.string()
    }),
});

const products = defineCollection({
    loader: file("./src/data/products.json"),
    schema: z.object({
        id: z.number(),
        category_id: z.number(),
        title: z.string(),
        path: z.string(),
        is_popular: z.boolean(),
        description: z.string(),
        variants: z.array(
            z.object({
                id: z.number(),
                sale_type: z.string(),
                label: z.string(),
                active_minutes: z.number(),
                chill_minutes: z.number(),

                price_per_100g: z.number().optional(),
                min_grams: z.number().optional(),
                max_grams: z.number().optional(),
                step_grams: z.number().optional(),

                diameter_cm: z.number().optional(),
                serves: z.string().optional(),

                price: z.number().optional(),
            })
        ),
    }),
});

export const collections = { categories, products };
