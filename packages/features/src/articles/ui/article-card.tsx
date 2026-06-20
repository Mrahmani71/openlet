import { cn } from "@openlet/ui/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { formatDistanceToNow } from "date-fns";
import * as React from "react";

const ArticleCardContext = React.createContext<{
  variant: ArticleCardVariant;
}>({
  variant: "main",
});

type ArticleCardVariant = NonNullable<VariantProps<typeof articleCardVariants>["variant"]>;

const articleCardVariants = cva("group overflow-hidden bg-background transition-all", {
  variants: {
    variant: {
      main: ["flex flex-col"],

      sub: ["flex flex-row gap-4", "p-3", "hover:bg-muted/50"],

      wide: ["flex flex-col md:flex-row"],
    },
  },

  defaultVariants: {
    variant: "main",
  },
});

const imageVariants = cva("overflow-hidden bg-muted", {
  variants: {
    variant: {
      main: "aspect-video w-full",

      sub: "size-24 shrink-0 rounded-md",

      wide: "aspect-[4/3] w-full md:w-1/2",
    },
  },
});

const contentVariants = cva("flex flex-col", {
  variants: {
    variant: {
      main: "py-4",

      sub: "flex-1 justify-center space-y-1",

      wide: "flex-1 justify-center py-4",
    },
  },
});

const categoryVariants = cva("", {
  variants: {
    variant: {
      main: "mb-2 w-fit rounded-full bg-muted px-3 py-1 text-xs font-medium",

      sub: "text-xs font-medium text-primary",

      wide: "mb-3 text-sm font-medium text-primary",
    },
  },
});

const titleVariants = cva("font-bold tracking-tight", {
  variants: {
    variant: {
      main: "text-2xl",

      sub: "text-base leading-tight",

      wide: "text-2xl md:text-3xl",
    },
  },
});

const descriptionVariants = cva("text-muted-foreground", {
  variants: {
    variant: {
      main: "mt-2 text-base",

      sub: "hidden",

      wide: "mt-3 text-base md:text-lg",
    },
  },
});

const metaVariants = cva("text-muted-foreground", {
  variants: {
    variant: {
      main: "mt-4 flex items-center gap-2 text-xs",

      sub: "mt-2 flex items-center gap-2 text-xs",

      wide: "mt-4 flex items-center gap-2 text-sm",
    },
  },
});

interface ArticleCardProps extends React.HTMLAttributes<HTMLElement> {
  variant?: ArticleCardVariant;
}

function ArticleCard({ className, variant = "main", children, ...props }: ArticleCardProps) {
  return (
    <ArticleCardContext.Provider value={{ variant }}>
      <article className={cn(articleCardVariants({ variant }), className)} {...props}>
        {children}
      </article>
    </ArticleCardContext.Provider>
  );
}

function ArticleCardImage({ className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  const { variant } = React.useContext(ArticleCardContext);

  return (
    <div className={cn(imageVariants({ variant }))}>
      <img className={cn("h-full w-full rounded-md object-cover", className)} {...props} />
    </div>
  );
}

function ArticleCardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { variant } = React.useContext(ArticleCardContext);

  return <div className={cn(contentVariants({ variant }), className)} {...props} />;
}

function ArticleCardCategory({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { variant } = React.useContext(ArticleCardContext);

  return <div className={cn(categoryVariants({ variant }), className)} {...props} />;
}

function ArticleCardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  const { variant } = React.useContext(ArticleCardContext);

  return <h3 className={cn(titleVariants({ variant }), className)} {...props} />;
}

function ArticleCardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  const { variant } = React.useContext(ArticleCardContext);

  return <p className={cn(descriptionVariants({ variant }), className)} {...props} />;
}

interface ArticleCardMetaProps extends React.HTMLAttributes<HTMLDivElement> {
  date?: string | Date;
}

function ArticleCardMeta({ className, date, children, ...props }: ArticleCardMetaProps) {
  const { variant } = React.useContext(ArticleCardContext);
  const formattedDate = date ? formatDistanceToNow(new Date(date), { addSuffix: true }) : null;

  return (
    <div className={cn(metaVariants({ variant }), className)} {...props}>
      {formattedDate}
      {formattedDate && children && <span className="mx-1">·</span>}
      {children}
    </div>
  );
}

export {
  ArticleCard,
  ArticleCardImage,
  ArticleCardContent,
  ArticleCardCategory,
  ArticleCardTitle,
  ArticleCardDescription,
  ArticleCardMeta,
};
