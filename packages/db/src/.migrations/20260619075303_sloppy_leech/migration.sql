ALTER TYPE "featured_type" RENAME TO "article_position";--> statement-breakpoint
ALTER TABLE "articles" RENAME COLUMN "featured_type" TO "position";--> statement-breakpoint
ALTER TABLE "authors" ADD COLUMN "cover_image" jsonb DEFAULT 'null';--> statement-breakpoint
ALTER TABLE "authors" ADD COLUMN "profession" varchar(120);