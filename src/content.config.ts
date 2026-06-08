import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['平台诊断', '美团点评', '小红书本地运营', '医疗健康内容', '教培招生', '案例复盘', '老板经营认知']),
    publishDate: z.coerce.date(),
    readingTime: z.string(),
    industry: z.string(),
    summary: z.string()
  })
});

export const collections = { blog };
