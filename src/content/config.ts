import { z, defineCollection } from 'astro:content'

export const collections = {
  episodes: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      tags: z.array(z.string()),
      image: z.string(),
      previewImages: z.array(z.string())
    })
  }),
  courses: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      tags: z.array(z.string()),
      image: z.string(),
      description: z.string(),
      url: z.object({
        youtube: z.string().url(),
        docs: z.string().url().optional(),
        other: z.array(z.object({
          label: z.string(),
          url: z.string()
        })).optional()
      })
    })
  })
}
