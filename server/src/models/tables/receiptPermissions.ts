import { pgTable, integer, timestamp, primaryKey } from "drizzle-orm/pg-core";
import { users } from "@/models/tables/users";
import { receipts } from "@/models/tables/receipts";

export const receiptPermissions = pgTable(
  "receipt_permissions",
  {
    receiptId: integer("receipt_id")
      .notNull()
      .references(() => receipts.id),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id),
    createdAt: timestamp("created_at").defaultNow(),
  },
  table => {
    return {
      pk: primaryKey({ columns: [table.receiptId, table.userId] }),
    };
  }
);
