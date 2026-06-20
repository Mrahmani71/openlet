import { eq, inArray } from "drizzle-orm";
import { authors } from "../authors/authors-table";
import { categories } from "../categories/categories-table";
import { tags } from "../tags/tags-table";
import { articlesAuthors, articlesCategories, articlesTags } from "./articles-table";
import { db } from "@/index";

import type { Article } from "./articles-types";

export const attachArticleRelations = async (rows: Article[]) => {
  if (rows.length === 0) return [];

  const articlesIds = rows.map((r) => r.id);

  const [authorsRows, categoriesRows, articlesTagsRows] = await Promise.all([
    db
      .select({
        articleId: articlesAuthors.articleId,
        id: authors.id,
        slug: authors.slug,
        name: authors.name,
        bio: authors.bio,
        createdAt: authors.createdAt,
        updatedAt: authors.updatedAt,
      })
      .from(authors)
      .innerJoin(articlesAuthors, eq(authors.id, articlesAuthors.authorId))
      .where(inArray(articlesAuthors.articleId, articlesIds)),
    db
      .select({
        articleId: articlesCategories.articleId,
        id: categories.id,
        slug: categories.slug,
        title: categories.title,
        description: categories.description,
        createdAt: categories.createdAt,
        updatedAt: categories.updatedAt,
      })
      .from(categories)
      .innerJoin(articlesCategories, eq(categories.id, articlesCategories.categoryId))
      .where(inArray(articlesCategories.articleId, articlesIds)),
    db
      .select({
        articleId: articlesTags.articleId,
        id: tags.id,
        slug: tags.slug,
        title: tags.title,
        description: tags.description,
        createdAt: tags.createdAt,
        updatedAt: tags.updatedAt,
      })
      .from(tags)
      .innerJoin(articlesTags, eq(tags.id, articlesTags.tagId))
      .where(inArray(articlesTags.articleId, articlesIds)),
  ]);

  const authorsByArticle = new Map<string, typeof authorsRows>();
  for (const row of authorsRows) {
    const list = authorsByArticle.get(row.articleId) ?? [];
    list.push(row);
    authorsByArticle.set(row.articleId, list);
  }

  const categoriesByArticle = new Map<string, typeof categoriesRows>();
  for (const row of categoriesRows) {
    const list = categoriesByArticle.get(row.articleId) ?? [];
    list.push(row);
    categoriesByArticle.set(row.articleId, list);
  }

  const tagsByArticle = new Map<string, typeof articlesTagsRows>();
  for (const row of articlesTagsRows) {
    const list = tagsByArticle.get(row.articleId) ?? [];
    list.push(row);
    tagsByArticle.set(row.articleId, list);
  }

  return rows.map((row) => ({
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    status: row.status,
    position: row.position,
    metaTitle: row.metaTitle,
    metaDescription: row.metaDescription,
    coverImage: row.coverImage,
    publishedAt: row.publishedAt,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
    authors: (authorsByArticle.get(row.id) ?? []).map((a) => ({
      id: a.id,
      slug: a.slug,
      name: a.name,
      bio: a.bio,
      createdAt: a.createdAt,
      updatedAt: a.updatedAt,
    })),
    categories: (categoriesByArticle.get(row.id) ?? []).map((t) => ({
      id: t.id,
      slug: t.slug,
      title: t.title,
      description: t.description,
      createdAt: t.createdAt,
      updatedAt: t.updatedAt,
    })),
    tags: (tagsByArticle.get(row.id) ?? []).map((t) => ({
      id: t.id,
      slug: t.slug,
      title: t.title,
      description: t.description,
      createdAt: t.createdAt,
      updatedAt: t.updatedAt,
    })),
  }));
};
