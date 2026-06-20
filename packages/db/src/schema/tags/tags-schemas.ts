import { createSelectSchema } from "drizzle-orm/valibot";
import * as v from "valibot";
import { tags } from "./tags-table";
export const tagSchema = createSelectSchema(tags);

export const tagCardSchema = v.object({
  ...v.pick(tagSchema, ["id", "title", "slug"]).entries,
});
