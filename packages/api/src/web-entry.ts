import { o } from "./procedures/public";
import { articlesPublicRouter } from "./routers/articles/articles-public";
import { authorsPublicRouter } from "./routers/authors/authors-public";
import { categoriesPublicRouter } from "./routers/categories/categories-public";
import { tagsPublicRouter } from "./routers/tags/tags-public";

export const appPublicRouter = o.router({
  articles: articlesPublicRouter,
  authors: authorsPublicRouter,
  categories: categoriesPublicRouter,
  tags: tagsPublicRouter,
});

export type AppPublicRouter = typeof appPublicRouter;
