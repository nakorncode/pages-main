import { z, defineCollection } from 'astro:content'

export const collections = {
  courses: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      tags: z.array(z.string()),
      image: z.string(),
      previewImages: z.array(z.string())
    })
  }),
  playlist: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      tags: z.array(z.string()),
      image: z.string(),
      description: z.string(),
      url: z.object({
        youtube: z.string().url(),
        docs: z.string().url().optional()
      })
    })
  })
}
