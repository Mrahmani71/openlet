import * as v from "valibot";

import type { categorySchema, categoryCardSchema } from "./category.schemas";

export type Category = v.InferOutput<typeof categorySchema>;
export type CategoryCard = v.InferOutput<typeof categoryCardSchema>;
