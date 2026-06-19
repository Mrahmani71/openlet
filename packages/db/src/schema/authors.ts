import { createId } from "@paralleldrive/cuid2";
import { jsonb, pgTable, text, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "../lib/common-schemas";

import type { AppImage } from "@openlet/shared/custom-types";

export const authors = pgTable("authors", {
  id: text("id").$defaultFn(createId).primaryKey(),

  name: varchar("name", { length: 120 }).notNull(),
  slug: varchar("slug", { length: 120 }).notNull().unique(),

  avatarImage: jsonb("cover_image").$type<AppImage | null>().default(null),
  bio: text("bio"),
  proffession: varchar("profession", { length: 120 }),

  websiteUrl: text("website_url"),
  websiteLabel: varchar("website_label", { length: 120 }),

  ...timestamps,
});
