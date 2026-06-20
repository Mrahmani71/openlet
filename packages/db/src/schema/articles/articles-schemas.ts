import { imageSchema, positionSchema, statusSchema } from "@openlet/shared/custom-schemas";
import {
  vSlug,
  vMetaDescription,
  vMetaTitle,
  vCUID2,
  vCoerceDate,
} from "@openlet/shared/custom-valibots";
import { createSelectSchema } from "drizzle-orm/valibot";
import * as v from "valibot";
import { authorSchema } from "../authors/authors-schemas";
import { categorySchema } from "../categories/categories-schemas";
import { tagSchema } from "../tags/tags-schemas";
import { articles } from "./articles-table";

const authorPublicSchema = v.omit(authorSchema, [
  "createdAt",
  "updatedAt",
  "websiteLabel",
  "websiteUrl",
  "bio",
]);
const categoryPublicSchema = v.pick(categorySchema, ["id", "title", "slug"]);
const tagPublicSchema = v.pick(tagSchema, ["id", "title", "slug"]);

export const articleSchema = createSelectSchema(articles, {
  id: vCUID2(),
  title: v.pipe(v.string(), v.nonEmpty("Please provide a title.")),
  slug: vSlug(),
  excerpt: v.nullable(v.string()),
  content: v.pipe(v.string(), v.nonEmpty("Please provide content.")),
  coverImage: imageSchema,
  position: positionSchema,
  status: statusSchema,
  metaTitle: v.nullable(vMetaTitle()),
  metaDescription: v.nullable(vMetaDescription()),

  publishedAt: v.nullable(
    v.pipe(
      vCoerceDate("Published Date is invalid."),
      v.check((date) => !isNaN(date.getTime()), "Published Date is invalid."),
    ),
  ),

  updatedAt: v.pipe(
    vCoerceDate("Update Date is invalid."),
    v.check((date) => !isNaN(date.getTime()), "Update Date is invalid."),
  ),

  createdAt: v.pipe(
    vCoerceDate("Creation Date is invalid."),
    v.check((date) => !isNaN(date.getTime()), "Creation Date is invalid."),
  ),
});

export const articleFullSchema = v.object({
  ...v.pick(articleSchema, [
    "id",
    "title",
    "slug",
    "excerpt",
    "content",
    "coverImage",
    "position",
    "status",
    "metaTitle",
    "metaDescription",
    "publishedAt",
    "updatedAt",
    "createdAt",
  ]).entries,

  authors: v.array(authorPublicSchema),
  categories: v.array(categoryPublicSchema),
  tags: v.array(tagPublicSchema),
});

export const articleCardSchema = v.object({
  ...v.pick(articleSchema, [
    "id",
    "title",
    "slug",
    "excerpt",
    "coverImage",
    "position",
    "publishedAt",
  ]).entries,

  categories: v.array(categoryPublicSchema),
});
