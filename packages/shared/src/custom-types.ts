import * as v from "valibot";

import type { imageSchema, positionSchema, statusSchema } from "./custom-schemas";

export type AppImage = v.InferOutput<typeof imageSchema>;
export type ArticlePosition = v.InferOutput<typeof positionSchema>;
export type ArticleStatus = v.InferOutput<typeof statusSchema>;
