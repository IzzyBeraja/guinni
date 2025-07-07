import type { AsyncHandler, CreateHandler } from "@/types/handlers";
import { type } from "arktype";

export const CreateReceiptInput = type({
  name: "string",
  platform: "'android' | 'ios'",
});

export type CreateReceiptResponseBody = {
  success: boolean;
  details: typeof CreateReceiptInput.infer;
};

export type CreateReceiptHandler = CreateHandler<{
  Request: typeof CreateReceiptInput.infer;
  Response: CreateReceiptResponseBody;
  Error: { success: false; error: string };
}>;

export const createReceipt: AsyncHandler<CreateReceiptHandler> = async (
  req,
  res
) => {
  console.log({ body: req.body }, req.params);
  const { name, platform } = req.body;

  if (name.length < 3) {
    res.status(400).json({
      success: false,
      error: "Receipt name must be at least 3 characters long",
    });
    return;
  }

  res.status(201).json({
    success: true,
    details: { name, platform },
  });
};
