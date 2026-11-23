import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    technologies: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    period: z.string().optional(),
    metrics: z.array(z.object({ label: z.string(), value: z.string(), note: z.string().optional() })).default([]),
    repository: z.string().url().optional(),
    confidential: z.boolean().default(false),
  }),
});

const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    category: z.string(),
    summary: z.string(),
    type: z.enum(['external', 'native']),
    externalUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }).refine(
    (entry) => entry.type !== 'external' || Boolean(entry.externalUrl),
    { message: 'External writing entries must include externalUrl.' },
  ),
});

export const collections = { work, writing };
