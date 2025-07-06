import { Request, Response } from "express";
import { type } from "arktype";

const CreateReceiptInput = type({
  name: "string",
  platform: "'android' | 'ios'",
});

export async function createReceipt(req: Request, res: Response) {
  const out = CreateReceiptInput(req.body);
  console.log({ body: req.body, out });

  if (out instanceof type.errors) {
    return res.status(400).json({
      success: false,
      error: "Invalid input data",
      details: out.summary,
    });
  }

  return res.status(201).json({
    success: true,
    details: {
      name: out.name,
      platform: out.platform,
    },
  });
}
