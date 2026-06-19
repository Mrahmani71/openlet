import { categories } from "@openlet/db/schema/categories";
import { createSelectSchema } from "drizzle-orm/valibot";
import * as v from "valibot";
export const categorySchema = createSelectSchema(categories);

export const categoryCardSchema = v.object({
  ...v.pick(categorySchema, ["id", "title", "slug"]).entries,
});
