import { tags } from "@openlet/db/schema/tags";
import { createSelectSchema } from "drizzle-orm/valibot";
import * as v from "valibot";
export const tagSchema = createSelectSchema(tags);

export const tagCardSchema = v.object({
  ...v.pick(tagSchema, ["id", "title", "slug"]).entries,
});
