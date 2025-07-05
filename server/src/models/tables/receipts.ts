import {
  pgTable,
  serial,
  text,
  timestamp,
  json,
  integer,
} from "drizzle-orm/pg-core";
import { users } from "@/models/tables/users.js";

export const receipts = pgTable("receipts", {
  id: serial("id").primaryKey(),
  ownerId: integer("owner_id")
    .notNull()
    .references(() => users.id),
  name: text("name").notNull(),
  receiptData: json("receipt_data").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
