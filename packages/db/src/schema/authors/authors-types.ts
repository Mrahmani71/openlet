import * as v from "valibot";

import type { authorSchema, authorCardSchema } from "./authors-schemas";

export type Author = v.InferOutput<typeof authorSchema>;
export type AuthorCard = v.InferOutput<typeof authorCardSchema>;
