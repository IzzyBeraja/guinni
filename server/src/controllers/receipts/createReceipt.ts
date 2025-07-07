import { Request, Response } from "express";
import { type } from "arktype";

export const CreateReceiptInput = type({
  name: "string",
  platform: "'android' | 'ios'",
});

export async function createReceipt(req: Request, res: Response) {
  console.log({ body: req.body });
  const { name, platform } = req.body;

  return res.status(201).json({
    success: true,
    details: { name, platform },
  });
}
