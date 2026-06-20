import { createId } from "@paralleldrive/cuid2";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "@/lib/common-schemas";

export const categories = pgTable("categories", {
  id: text("id").$defaultFn(createId).primaryKey(),

  title: varchar("title", { length: 60 }).notNull(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),

  description: varchar("description", { length: 160 }),

  color: varchar("color", { length: 20 }),

  ...timestamps,
});
