import { BlogPostInput } from "@/types";
import { getDb } from "../config";
const BLOG_POST_COLLECTION = "blogPost";

export const postBlogPost = async (input: BlogPostInput) => {
  const db = await getDb(process.env.MONGODB_DB_NAME);
  const res = await db.collection(BLOG_POST_COLLECTION).insertOne(input);
  return { ...input, _id: res.insertedId };
};
