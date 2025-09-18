import * as z from "zod";

export const CreatePost = z.object({
    title: z.string(),
    description: z.string(),
    detailedDescription: z.string()
})

export type CreatePostType = z.infer<typeof CreatePost>