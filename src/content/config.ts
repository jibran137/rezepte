import { defineCollection, z } from 'astro:content';

const recipes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    title_en: z.string().optional(),
    author: z.string(),
    city: z.string().optional(),
    date: z.coerce.date(),
    servings: z.number().int().positive().optional(),
    time_minutes: z.number().int().positive().optional(),
    tags: z.array(z.string()).default([]),
    ingredients: z.array(
      z.object({
        item: z.string(),
        item_en: z.string().optional(),
        amount: z.string().optional(),
      })
    ),
    summary: z.string().optional(),
    summary_en: z.string().optional(),
  }),
});

export const collections = { recipes };
