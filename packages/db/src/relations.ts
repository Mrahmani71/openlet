import { defineRelations } from "drizzle-orm";
import { articles, articlesAuthors, articlesCategories, articlesTags } from "./schema/articles";
import { authors } from "./schema/authors";
import { categories } from "./schema/categories";
import { tags } from "./schema/tags";

const schemas = {
  articles,
  authors,
  tags,
  categories,
  articlesAuthors,
  articlesCategories,
  articlesTags,
};

export const relations = defineRelations(schemas, (r) => ({
  articles: {
    authors: r.many.authors({
      from: r.articles.id.through(r.articlesAuthors.articleId),
      to: r.authors.id.through(r.articlesAuthors.authorId),
    }),
    categories: r.many.categories({
      from: r.articles.id.through(r.articlesCategories.articleId),
      to: r.categories.id.through(r.articlesCategories.categoryId),
    }),
    tags: r.many.tags({
      from: r.articles.id.through(r.articlesTags.articleId),
      to: r.tags.id.through(r.articlesTags.tagId),
    }),
  },

  authors: {
    articles: r.many.articles({
      from: r.authors.id.through(r.articlesAuthors.authorId),
      to: r.articles.id.through(r.articlesAuthors.articleId),
    }),
  },

  categories: {
    articles: r.many.articles({
      from: r.categories.id.through(r.articlesCategories.categoryId),
      to: r.articles.id.through(r.articlesCategories.articleId),
    }),
  },

  tags: {
    articles: r.many.articles({
      from: r.tags.id.through(r.articlesTags.tagId),
      to: r.articles.id.through(r.articlesTags.articleId),
    }),
  },
}));
