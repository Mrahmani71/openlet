import * as v from "valibot";

import type { authorSchema, authorCardSchema } from "./author.schemas";

export type Author = v.InferOutput<typeof authorSchema>;
export type AuthorCard = v.InferOutput<typeof authorCardSchema>;
