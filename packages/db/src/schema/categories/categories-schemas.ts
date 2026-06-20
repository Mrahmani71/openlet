import { createSelectSchema } from "drizzle-orm/valibot";
import * as v from "valibot";
import { categories } from "./categories-table";

export const categorySchema = createSelectSchema(categories);

export const categoryCardSchema = v.object({
  ...v.pick(categorySchema, ["id", "title", "slug"]).entries,
});
