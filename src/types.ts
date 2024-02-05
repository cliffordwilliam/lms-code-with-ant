import { ObjectId } from "mongodb";
import { z } from "zod";

// REST STYLE
export type Response<T> = {
  status: number;
  message?: string;
  data?: T;
  error?: string;
};

// BLOG POST
export type BlogPost = {
  _id: ObjectId;
  title: string;
  content: string;
  img?: string;
};
export const ZodBlogPostInput = z.object({
  title: z.string(),
  content: z.string(),
  img: z.string().optional(),
});
export type BlogPostInput = Omit<BlogPost, "_id">;
