import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({ label: z.string(), url: z.string() });

const experience = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/experience' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(), // role
      org: z.string(),
      short: z.string().optional(), // label drawn on the card until a photo is added
      dates: z.string(),
      location: z.string().optional(),
      kind: z.enum(['Industry', 'Clinic', 'Leadership', 'Research']),
      summary: z.string(),
      highlights: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      order: z.number(),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      context: z.string(), // e.g. "Microprocessor Systems (E155), Fall 2024"
      summary: z.string(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverUrl: z.string().url().optional(), // remote cover when no local photo yet
      coverAlt: z.string().optional(),
      links: z.array(link).default([]),
      featured: z.boolean().default(false),
      order: z.number(),
    }),
});

export const collections = { experience, projects };
