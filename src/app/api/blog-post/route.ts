import { handleError } from "@/db/helper";
import { postBlogPost } from "@/db/models/blogPost";
import { Response, BlogPost, ZodBlogPostInput } from "@/types";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  // no auth? not admin? 401
  try {
    // body
    const body = await req.json();
    // valid?
    const zRes = ZodBlogPostInput.safeParse(body);
    if (!zRes.success) throw zRes.error;
    // POST
    const data = await postBlogPost(zRes.data);
    // res
    return NextResponse.json<Response<BlogPost>>(
      {
        status: 201,
        message: "POST blog post OK",
        data,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    const errorResponse = handleError(error);
    return NextResponse.json(errorResponse, {
      status: errorResponse.status,
    });
  }
};
