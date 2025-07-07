import type { AsyncHandler } from "@/types/handlers";
import { type } from "arktype";

export const CreateReceiptInput = type({
  name: "string",
  platform: "'android' | 'ios'",
});

export type CreateReceiptResponseBody = {
  success: boolean;
  details: typeof CreateReceiptInput.infer;
};

export type CreateReceiptHandler = {
  Request: typeof CreateReceiptInput.infer;
  Response: CreateReceiptResponseBody;
  Error?: unknown;
};

export const createReceipt: AsyncHandler<CreateReceiptHandler> = async (
  req,
  res
) => {
  console.log({ body: req.body });
  const { name, platform } = req.body;

  res.status(201).json({
    success: true,
    details: { name, platform },
  });
};
