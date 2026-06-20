import { imageSchema } from "@openlet/shared/custom-schemas";
import { createSelectSchema } from "drizzle-orm/valibot";
import * as v from "valibot";
import { authors } from "./authors-table";

export const authorSchema = createSelectSchema(authors, {
  avatarImage: imageSchema,
});

export const authorCardSchema = v.object({
  ...v.pick(authorSchema, ["id", "name", "slug", "avatarImage", "proffession"]).entries,
});
