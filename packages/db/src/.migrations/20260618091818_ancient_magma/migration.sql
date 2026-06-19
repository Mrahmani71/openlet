CREATE TYPE "article_status" AS ENUM('draft', 'published', 'archived');--> statement-breakpoint
CREATE TYPE "featured_type" AS ENUM('none', 'featured', 'hero', 'breaking');--> statement-breakpoint
CREATE TABLE "articles" (
	"id" text PRIMARY KEY,
	"title" text NOT NULL,
	"slug" text NOT NULL UNIQUE,
	"excerpt" varchar(160),
	"content" text NOT NULL,
	"status" "article_status" DEFAULT 'draft'::"article_status" NOT NULL,
	"featured_type" "featured_type" DEFAULT 'none'::"featured_type" NOT NULL,
	"cover_image" jsonb DEFAULT 'null',
	"meta_title" varchar(60),
	"meta_description" varchar(160),
	"published_at" timestamp,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "articles_authors" (
	"article_id" text,
	"author_id" text,
	CONSTRAINT "articles_authors_pkey" PRIMARY KEY("article_id","author_id")
);
--> statement-breakpoint
CREATE TABLE "articles_categories" (
	"article_id" text,
	"category_id" text,
	CONSTRAINT "articles_categories_pkey" PRIMARY KEY("article_id","category_id")
);
--> statement-breakpoint
CREATE TABLE "articles_tags" (
	"article_id" text,
	"tag_id" text,
	CONSTRAINT "articles_tags_pkey" PRIMARY KEY("article_id","tag_id")
);
--> statement-breakpoint
CREATE TABLE "authors" (
	"id" text PRIMARY KEY,
	"name" varchar(120) NOT NULL,
	"slug" varchar(120) NOT NULL UNIQUE,
	"bio" text,
	"website_url" text,
	"website_label" varchar(120),
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "categories" (
	"id" text PRIMARY KEY,
	"title" varchar(60) NOT NULL,
	"slug" varchar(100) NOT NULL UNIQUE,
	"description" varchar(160),
	"color" varchar(20),
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "tags" (
	"id" text PRIMARY KEY,
	"title" varchar(60) NOT NULL,
	"slug" varchar(100) NOT NULL UNIQUE,
	"description" varchar(160),
	"color" varchar(20),
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "articles_slug_idx" ON "articles" ("slug");--> statement-breakpoint
CREATE INDEX "articles_status_idx" ON "articles" ("status");--> statement-breakpoint
CREATE INDEX "articles_status_published_at_idx" ON "articles" ("status","published_at");--> statement-breakpoint
CREATE INDEX "articles_authors_article_idx" ON "articles_authors" ("article_id");--> statement-breakpoint
CREATE INDEX "articles_authors_author_idx" ON "articles_authors" ("author_id");--> statement-breakpoint
CREATE INDEX "articles_categories_category_idx" ON "articles_categories" ("category_id");--> statement-breakpoint
CREATE INDEX "articles_categories_article_idx" ON "articles_categories" ("article_id");--> statement-breakpoint
CREATE INDEX "articles_tags_article_idx" ON "articles_tags" ("article_id");--> statement-breakpoint
CREATE INDEX "articles_tags_tag_idx" ON "articles_tags" ("tag_id");--> statement-breakpoint
ALTER TABLE "articles_authors" ADD CONSTRAINT "articles_authors_article_id_articles_id_fkey" FOREIGN KEY ("article_id") REFERENCES "articles"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "articles_authors" ADD CONSTRAINT "articles_authors_author_id_authors_id_fkey" FOREIGN KEY ("author_id") REFERENCES "authors"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "articles_categories" ADD CONSTRAINT "articles_categories_article_id_articles_id_fkey" FOREIGN KEY ("article_id") REFERENCES "articles"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "articles_categories" ADD CONSTRAINT "articles_categories_category_id_categories_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "articles_tags" ADD CONSTRAINT "articles_tags_article_id_articles_id_fkey" FOREIGN KEY ("article_id") REFERENCES "articles"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "articles_tags" ADD CONSTRAINT "articles_tags_tag_id_tags_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE CASCADE;