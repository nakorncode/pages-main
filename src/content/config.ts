import { z, defineCollection } from 'astro:content'

const courses = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // tags: z.array(z.string()),
    // image: z.string()
  })
})

export const collections = {
  'courses': courses,
}
