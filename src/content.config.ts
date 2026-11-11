import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const teknik = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/teknik' }),
  schema: z.object({
    title: z.string(),
    chapter: z.enum(['00-prinsip', '01-jauh', '02-berdiri', '03-clinch', '04-tanah']),
    order: z.number(),
    range: z.enum(['jauh', 'berdiri', 'clinch', 'tanah']),
    origin: z.enum(['umum', 'krav-maga', 'judo', 'gulat', 'bjj']),
    goal: z.enum(['menjauh', 'melepas', 'menjatuhkan', 'mengontrol', 'berdiri']),
    level: z.enum(['dasar', 'menengah']),
    risk: z.enum(['rendah', 'sedang', 'tinggi']),
    partner: z.boolean(),
    mat: z.boolean(),
    summary: z.string(),
    principle: z.string(),
    steps: z.array(z.object({ cue: z.string(), detail: z.string() })),
    figures: z
      .array(
        z.object({
          id: z.string(),
          alt: z.string(),
          caption: z.string(),
          type: z.enum(['posisi', 'langkah', 'peta']),
        }),
      )
      .default([]),
    failure: z.string(),
    mistakes: z.array(z.string()).default([]),
    drill: z.string(),
    safety: z.string(),
    sources: z.array(
      z.object({
        title: z.string(),
        author: z.string().optional(),
        note: z.string().optional(),
      }),
    ),
    related: z.array(z.string()).default([]),
    updated: z.string(),
  }),
});

const artikel = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artikel' }),
  schema: z.object({
    type: z.enum(['prinsip', 'jarak', 'aliran', 'catatan']),
    title: z.string(),
    slug: z.string(),
    order: z.number().optional(),
    dek: z.string(),
    lead: z.string(),
    discipline: z.enum(['krav-maga', 'judo', 'gulat', 'bjj']).optional(),
    sources: z.array(
      z.object({
        title: z.string(),
        author: z.string().optional(),
      }),
    ),
    updated: z.string(),
    related: z.array(z.string()).default([]),
  }),
});

export const collections = { teknik, artikel };
