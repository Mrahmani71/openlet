import { o } from "./procedures/public";
import { adminRouter } from "./routers/admin/admin";
import { aiRouter } from "./routers/admin/ai";
import { articlesProtectRouter } from "./routers/articles/articles-protect";
import { articlesPublicRouter } from "./routers/articles/articles-public";
import { authorsProtectRouter } from "./routers/authors/authors-protect";
import { authorsPublicRouter } from "./routers/authors/authors-public";
import { categoriesProtectRouter } from "./routers/categories/categories-protect";
import { categoriesPublicRouter } from "./routers/categories/categories-public";
import { tagsProtectRouter } from "./routers/tags/tags-protect";
import { tagsPublicRouter } from "./routers/tags/tags-public";

export const appProtectedRouter = o.router({
  admin: adminRouter,
  ai: aiRouter,
  articles: {
    ...articlesPublicRouter,
    ...articlesProtectRouter,
  },
  authors: {
    ...authorsPublicRouter,
    ...authorsProtectRouter,
  },
  categories: {
    ...categoriesPublicRouter,
    ...categoriesProtectRouter,
  },
  tags: {
    ...tagsPublicRouter,
    ...tagsProtectRouter,
  },
});

export type AppProtectedRouter = typeof appProtectedRouter;
