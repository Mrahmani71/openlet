import { createId } from "@paralleldrive/cuid2";
import {
  index,
  jsonb,
  pgEnum,
  pgTable,
  primaryKey,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { authors } from "../authors/authors-table";
import { categories } from "../categories/categories-table";
import { tags } from "../tags/tags-table";
import { timestamps } from "@/lib/common-schemas";

import type { AppImage } from "@openlet/shared/custom-types";

export const articleStatus = pgEnum("article_status", ["draft", "published", "archived"]);

export const articlePosition = pgEnum("article_position", ["none", "featured", "hero", "breaking"]);

export const articles = pgTable(
  "articles",
  {
    id: text("id").$defaultFn(createId).primaryKey(),

    title: text("title").notNull(),
    slug: text("slug").notNull().unique(),

    excerpt: varchar("excerpt", { length: 160 }),

    content: text("content").notNull(),

    status: articleStatus("status").default("draft").notNull(),

    position: articlePosition("position").default("none").notNull(),

    coverImage: jsonb("cover_image").$type<AppImage | null>().default(null),

    metaTitle: varchar("meta_title", { length: 60 }),
    metaDescription: varchar("meta_description", { length: 160 }),

    publishedAt: timestamp("published_at", { mode: "date" }),
    ...timestamps,
  },
  (table) => [
    index("articles_slug_idx").on(table.slug),
    index("articles_status_idx").on(table.status),
    index("articles_status_published_at_idx").on(table.status, table.publishedAt),
  ],
);

// Articles Relationships tables
export const articlesAuthors = pgTable(
  "articles_authors",
  {
    articleId: text("article_id")
      .notNull()
      .references(() => articles.id, { onDelete: "cascade" }),
    authorId: text("author_id")
      .notNull()
      .references(() => authors.id, { onDelete: "cascade" }),
  },
  (table) => [
    primaryKey({
      columns: [table.articleId, table.authorId],
    }),
    // 🔍 fast: find authors of an article
    index("articles_authors_article_idx").on(table.articleId),
    // 🔍 fast: find articles by author
    index("articles_authors_author_idx").on(table.authorId),
  ],
);

export const articlesCategories = pgTable(
  "articles_categories",
  {
    articleId: text("article_id")
      .notNull()
      .references(() => articles.id, { onDelete: "cascade" }),
    categoryId: text("category_id")
      .notNull()
      .references(() => categories.id, { onDelete: "cascade" }),
  },
  (table) => [
    primaryKey({
      columns: [table.articleId, table.categoryId],
    }),
    // 🔍 fast: articles of category
    index("articles_categories_category_idx").on(table.categoryId),
    // 🔍 fast: categories of article
    index("articles_categories_article_idx").on(table.articleId),
  ],
);

export const articlesTags = pgTable(
  "articles_tags",
  {
    articleId: text("article_id")
      .notNull()
      .references(() => articles.id, { onDelete: "cascade" }),
    tagId: text("tag_id")
      .notNull()
      .references(() => tags.id, { onDelete: "cascade" }),
  },
  (table) => [
    primaryKey({
      columns: [table.articleId, table.tagId],
    }),
    // 🔍 fast: tags of article
    index("articles_tags_article_idx").on(table.articleId),
    // 🔍 fast: articles by tag
    index("articles_tags_tag_idx").on(table.tagId),
  ],
);
