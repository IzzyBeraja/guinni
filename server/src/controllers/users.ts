import type { AsyncHandler, CreateHandler } from "@/types/handlers";
import { users } from "@/models/tables/users";

export type User = {
  id: number;
  name: string;
  email: string;
  createdAt: Date | null;
  updatedAt: Date | null;
};

export type GetResponseBody = {
  success: boolean;
  data: User[];
  message: string;
};

export type GetHandler = CreateHandler<{
  Request: never;
  Response: GetResponseBody;
}>;

export const Get: AsyncHandler<GetHandler> = async (req, res) => {
  try {
    const db = req.services.db.getDb();
    const allUsers = await db.select().from(users);
    
    res.json({
      success: true,
      data: allUsers as User[],
      message: "Users retrieved successfully",
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      data: [],
      message: "Failed to fetch users",
    });
  }
};
