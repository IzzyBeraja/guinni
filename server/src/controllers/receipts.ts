import type { AsyncHandler, CreateHandler } from "@/types/handlers";
import { type } from "arktype";

export const PostInput = type({
  name: "string",
  platform: "'android' | 'ios'",
});

export type PostResponseBody = {
  success: boolean;
  details: typeof PostInput.infer;
};

export type PostHandler = CreateHandler<{
  Request: typeof PostInput.infer;
  Response: PostResponseBody;
}>;

export const Post: AsyncHandler<PostHandler> = async (req, res) => {
  const { name, platform } = req.body;

  res.status(201).json({
    success: true,
    details: { name, platform },
  });
};
