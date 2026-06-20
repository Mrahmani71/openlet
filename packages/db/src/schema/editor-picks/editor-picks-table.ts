import { createId } from "@paralleldrive/cuid2";
import { pgTable, text, timestamp, integer, index } from "drizzle-orm/pg-core";
import { articles } from "../articles/articles-table";
import { timestamps } from "@/lib/common-schemas";

export const editorPicks = pgTable(
  "editor_picks",
  {
    id: text("id").$defaultFn(createId).primaryKey(),
    articleId: text("article_id")
      .notNull()
      .references(() => articles.id, { onDelete: "cascade" }),
    rank: integer("rank").notNull(),
    startsAt: timestamp("starts_at", { mode: "date", withTimezone: true }).notNull(),
    endsAt: timestamp("ends_at", { mode: "date", withTimezone: true }),
    ...timestamps,
  },
  (table) => [
    index("editor_picks_article_idx").on(table.articleId),
    index("editor_picks_active_idx").on(table.startsAt, table.endsAt),
    index("editor_picks_rank_idx").on(table.rank),
  ],
);
