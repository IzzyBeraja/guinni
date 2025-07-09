import { users } from "@/models/tables/users";
import type { CreateHandler } from "@/types/handlers";
import { asyncHandler } from "@/utils/handlers";

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
  Response: GetResponseBody;
}>;

export const Get = asyncHandler<GetHandler>(async (req, res) => {
  const db = req.services.db.getDb();
  const allUsers = await db.select().from(users);

  res.json({
    success: true,
    data: allUsers as User[],
    message: "Users retrieved successfully",
  });
});
