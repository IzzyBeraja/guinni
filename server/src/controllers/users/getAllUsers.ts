import { Request, Response } from "express";

export async function getAllUsers(req: Request, res: Response) {
  try {
    // TODO: Implement user fetching logic with database
    res.json({
      success: true,
      data: [],
      message: "Users retrieved successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to fetch users",
    });
  }
}
