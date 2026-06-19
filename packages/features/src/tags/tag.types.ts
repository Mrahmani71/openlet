import * as v from "valibot";

import type { tagSchema, tagCardSchema } from "./tag.schemas";

export type Tag = v.InferOutput<typeof tagSchema>;
export type TagCard = v.InferOutput<typeof tagCardSchema>;
