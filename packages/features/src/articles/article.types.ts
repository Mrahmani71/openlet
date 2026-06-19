import * as v from "valibot";

import type { articleSchema, articleFullSchema, articleCardSchema } from "./article.schemas";

export type Article = v.InferOutput<typeof articleSchema>;
export type ArticleFull = v.InferOutput<typeof articleFullSchema>;
export type ArticleCard = v.InferOutput<typeof articleCardSchema>;
