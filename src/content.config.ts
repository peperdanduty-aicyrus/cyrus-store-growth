import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['美团运营', '小红书运营', '医疗获客', '教培招生', '朋友圈文案', '案例复盘']),
    publishDate: z.coerce.date()
  })
});

export const collections = { blog };
