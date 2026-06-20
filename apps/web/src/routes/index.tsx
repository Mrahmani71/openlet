import { Badge } from "@openlet/ui/src/components/ui/badge";
import { CpuIcon, ChartLineUpIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  businessSection,
  editorPicks,
  heroArticle,
  latestStories,
  secondaryHero,
  techSection,
  trendingArticles,
} from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  component: Home,
});

// --- Components ---

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto max-w-8xl px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-12">
            {/* Main Hero Card */}
            <ScrollReveal className="lg:col-span-7">
              <Link
                to="/article/$slug"
                params={{ slug: heroArticle.id }}
                className="group relative block min-h-[480px] overflow-hidden rounded-2xl"
              >
                <img
                  src={heroArticle.imageUrl}
                  alt={heroArticle.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[0.6s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 p-6 md:p-10">
                  <Badge
                    variant="default"
                    className="mb-4 px-3 text-xs font-bold tracking-wider uppercase"
                  >
                    {heroArticle.category}
                  </Badge>
                  <h1 className="mb-4 max-w-2xl font-heading text-3xl leading-[1.1] font-bold text-white transition-colors md:text-4xl lg:text-5xl">
                    {heroArticle.title}
                  </h1>
                  <p className="mb-5 hidden max-w-xl text-base leading-relaxed text-white/70 sm:block md:text-lg">
                    {heroArticle.subtitle}
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={heroArticle.authorImg}
                      alt={heroArticle.author}
                      className="h-9 w-9 rounded-full border-2 border-white/20 object-cover"
                    />
                    <div>
                      <span className="text-sm font-medium text-white">{heroArticle.author}</span>
                      <span className="mx-2 text-white/40">·</span>
                      <span className="text-sm text-white/50">{heroArticle.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* Secondary Hero Cards */}
            <div className="flex flex-col gap-6 lg:col-span-5">
              {secondaryHero.map((article, i) => (
                <ScrollReveal
                  key={article.id}
                  delay={(i + 1) as 1 | 2}
                  className="relative min-h-[220px] flex-1"
                >
                  <Link
                    to="/article/$slug"
                    params={{ slug: article.id }}
                    className="group relative block h-full overflow-hidden rounded-2xl"
                  >
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[0.6s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />
                    <div className="absolute right-0 bottom-0 left-0 p-5 md:p-7">
                      <Badge
                        variant="secondary"
                        className="mb-3 px-2.5 py-0.5 text-[11px] font-bold tracking-wider uppercase"
                      >
                        {article.category}
                      </Badge>
                      <h2 className="font-heading text-xl leading-tight font-bold text-white transition-colors md:text-2xl">
                        {article.title}
                      </h2>
                      <div className="mt-3 flex items-center gap-3">
                        <span className="text-sm text-white/60">{article.author}</span>
                        <span className="text-white/30">·</span>
                        <span className="text-sm text-white/40">{article.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trending News */}
      <section className="border-t border-b bg-muted/30">
        <div className="container mx-auto max-w-8xl px-6 py-10 md:py-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-3">
              <div className="mb-2 flex items-center gap-3">
                <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                  Trending Now
                </span>
              </div>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">Most Read</h2>
            </ScrollReveal>

            <div className="lg:col-span-9">
              <div className="divide-y">
                {trendingArticles.map((article, i) => (
                  <ScrollReveal key={article.id} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                    <Link
                      to="/article/$slug"
                      params={{ slug: article.id }}
                      className="group flex items-start gap-5 py-2"
                    >
                      <span className="mt-0.5 w-14 shrink-0 font-heading text-4xl leading-none font-bold text-muted-foreground/80 md:text-5xl">
                        {article.rank}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="mb-1.5 flex items-center gap-2">
                          <span className="text-[11px] font-bold tracking-wider text-primary uppercase">
                            {article.category}
                          </span>
                          <span className="text-xs text-muted-foreground">·</span>
                          <span className="text-xs text-muted-foreground">{article.time}</span>
                        </div>
                        <h3 className="font-heading text-lg leading-snug font-bold transition-colors group-hover:text-muted-foreground md:text-xl">
                          {article.title}
                        </h3>
                      </div>
                      <div className="hidden h-16 w-24 shrink-0 overflow-hidden rounded-lg md:block">
                        <img
                          src={article.img}
                          alt=""
                          className="h-full w-full object-cover transition-transform duration-[0.6s] ease-out group-hover:scale-105"
                        />
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editor's Picks */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-8xl px-6">
          <ScrollReveal>
            <SectionHeading
              label="Curated"
              title="Editor's Picks"
              viewAllLabel="View all"
              viewAllHref="/articles"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {editorPicks.map((article, i) => (
              <ScrollReveal key={article.id} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <Link
                  to="/article/$slug"
                  params={{ slug: article.id }}
                  className="group card-lift block overflow-hidden rounded-2xl border bg-card transition-[transform,box-shadow] duration-400 ease-out hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="aspect-16/10 overflow-hidden">
                    <img
                      src={article.imageUrl}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-[0.6s] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="text-[11px] font-bold tracking-wider text-primary uppercase">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">·</span>
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                    </div>
                    <h3 className="mb-3 font-heading text-xl leading-snug font-bold transition-colors group-hover:text-primary">
                      {article.title}
                    </h3>
                    <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {article.description}
                    </p>
                    <div className="mt-5 flex items-center gap-3 border-t pt-5">
                      <img
                        src={article.authorImg}
                        alt=""
                        className="h-8 w-8 rounded-full object-cover"
                      />
                      <span className="text-sm font-medium text-muted-foreground">
                        {article.author}
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Stories */}
      <section className="border-t py-14 md:py-20">
        <div className="container mx-auto max-w-8xl px-6">
          <ScrollReveal>
            <SectionHeading label="Just In" title="Latest Stories" viewAllHref="/articles" />
          </ScrollReveal>
          <div className="divide-y">
            {latestStories.map((article, i) => (
              <ScrollReveal key={article.id} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <Link
                  to="/article/$slug"
                  params={{ slug: article.id }}
                  className="group flex flex-col gap-5 py-4 md:flex-row md:gap-8"
                >
                  <div className="aspect-16/10 shrink-0 overflow-hidden rounded-xl md:aspect-3/2 md:w-72 lg:w-80">
                    <img
                      src={article.imageUrl}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-[0.6s] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center">
                    <div className="mb-2.5 flex items-center gap-2">
                      <span className="text-[11px] font-bold tracking-wider text-primary uppercase">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">·</span>
                      <span className="text-xs text-muted-foreground">{article.timeAgo}</span>
                    </div>
                    <h3 className="mb-2.5 font-heading text-xl leading-snug font-bold transition-colors group-hover:text-primary md:text-2xl">
                      {article.title}
                    </h3>
                    <p className="mb-4 line-clamp-2 hidden text-sm leading-relaxed text-muted-foreground sm:block">
                      {article.description}
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={article.authorImg}
                        alt=""
                        className="h-7 w-7 rounded-full object-cover"
                      />
                      <span className="text-sm text-muted-foreground">{article.author}</span>
                      <span className="text-xs text-muted-foreground">·</span>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="border-t bg-muted/10 py-14 md:py-20">
        <div className="container mx-auto max-w-8xl px-6">
          <ScrollReveal>
            <SectionHeading
              label=""
              title="Technology"
              viewAllLabel="All tech stories"
              viewAllHref="/c/technology"
              icon={<CpuIcon />}
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-7">
              <Link
                to="/article/$slug"
                params={{ slug: techSection.feature.id }}
                className="group card-lift block overflow-hidden rounded-2xl border bg-card"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={techSection.feature.imageUrl}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-[0.6s] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-[11px] font-bold tracking-wider text-primary uppercase">
                      {techSection.feature.category}
                    </span>
                    <span className="text-xs text-muted-foreground">·</span>
                    <span className="text-xs text-muted-foreground">
                      {techSection.feature.date}
                    </span>
                  </div>
                  <h3 className="mb-3 font-heading text-2xl leading-snug font-bold transition-colors group-hover:text-primary md:text-3xl">
                    {techSection.feature.title}
                  </h3>
                  <p className="mb-5 leading-relaxed text-muted-foreground">
                    {techSection.feature.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={techSection.feature.authorImg}
                      alt=""
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium text-muted-foreground">
                      {techSection.feature.author}
                    </span>
                    <span className="text-xs text-muted-foreground">·</span>
                    <span className="text-xs text-muted-foreground">
                      {techSection.feature.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
            <div className="divide-y lg:col-span-5">
              {techSection.sideItems.map((item, i) => (
                <ScrollReveal key={item.id} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                  <Link
                    to="/article/$slug"
                    params={{ slug: item.id }}
                    className="group flex gap-4 py-4"
                  >
                    <div className="h-20 w-24 shrink-0 overflow-hidden rounded-lg">
                      <img
                        src={item.img}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-[0.6s] ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-bold tracking-wider text-primary uppercase">
                        {item.category}
                      </span>
                      <h4 className="mt-1 line-clamp-2 font-heading text-base leading-snug font-bold transition-colors group-hover:text-primary">
                        {item.title}
                      </h4>
                      <span className="mt-1.5 block text-xs text-muted-foreground">
                        {item.time}
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="border-t py-14 md:py-20">
        <div className="container mx-auto max-w-8xl px-6">
          <ScrollReveal>
            <SectionHeading
              label=""
              title="Business"
              viewAllLabel="All business stories"
              viewAllHref="/c/business"
              icon={<ChartLineUpIcon />}
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal className="lg:row-span-2">
              <Link
                to="/article/$slug"
                params={{ slug: businessSection.feature.id }}
                className="group card-lift relative block overflow-hidden rounded-2xl border bg-card"
              >
                <div className="aspect-4/5 lg:aspect-auto lg:h-full">
                  <img
                    src={businessSection.feature.imageUrl}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-[0.6s] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute right-0 bottom-0 left-0 bg-linear-to-t from-black/90 via-black/50 to-transparent p-6">
                  <span className="mb-3 inline-block rounded bg-primary px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-white uppercase">
                    {businessSection.feature.category}
                  </span>
                  <h3 className="font-heading text-2xl leading-snug font-bold text-white transition-colors group-hover:text-primary/90">
                    {businessSection.feature.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-3">
                    <img
                      src={businessSection.feature.authorImg}
                      alt=""
                      className="h-7 w-7 rounded-full object-cover"
                    />
                    <span className="text-sm text-white/70">{businessSection.feature.author}</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
            {businessSection.cards.map((card, i) => (
              <ScrollReveal key={card.id} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <Link
                  to="/article/$slug"
                  params={{ slug: card.id }}
                  className="group card-lift block h-full overflow-hidden rounded-2xl border bg-card"
                >
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="text-[11px] font-bold tracking-wider text-primary uppercase">
                        {card.category}
                      </span>
                      <span className="text-xs text-muted-foreground">·</span>
                      <span className="text-xs text-muted-foreground">Today</span>
                    </div>
                    <h3 className="mb-2 font-heading text-lg leading-snug font-bold transition-colors group-hover:text-primary">
                      {card.title}
                    </h3>
                    <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="border-t">
        <div className="container mx-auto max-w-8xl px-6 py-20 md:py-28">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-linear-to-br from-muted via-muted/50 to-muted" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              }}
            />
            <div className="absolute top-0 right-0 h-96 w-96 translate-x-1/3 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 translate-y-1/2 rounded-full bg-primary/3 blur-3xl" />

            <ScrollReveal className="relative z-10 mx-auto max-w-2xl px-8 py-14 text-center md:px-16 md:py-20">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="size-3 text-primary"
                  fill="currentColor"
                >
                  <path d="M224 48H32a8 8 0 00-8 8v136a16 16 0 0016 16h176a16 16 0 0016-16V56a8 8 0 00-8-8zm-20.57 16L128 133.15 52.57 64zM216 192H40V74.19l82.59 75.71a8 8 0 0010.82 0L216 74.19z" />
                </svg>
                <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                  Newsletter
                </span>
              </div>
              <h2 className="mb-4 font-heading text-3xl leading-tight font-bold md:text-5xl">
                Stay Ahead of
                <br />
                the Curve
              </h2>
              <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                Join 2 million readers who start their morning with{" "}
                {import.meta.env.APP_NAME ?? "Openlet"}'s essential briefing on the stories that
                matter.
              </p>
              <form
                className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  const input = e.currentTarget.querySelector("input") as HTMLInputElement;
                  if (input?.value.includes("@")) {
                    alert("Welcome! Check your inbox.");
                    input.value = "";
                  } else {
                    alert("Please enter a valid email address");
                  }
                }}
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 rounded-full border bg-muted px-5 py-3.5 text-sm transition-colors outline-none focus:border-primary/50"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/80 hover:shadow-lg hover:shadow-primary/25"
                >
                  Subscribe Free
                </button>
              </form>
              <p className="mt-4 text-xs text-muted-foreground">
                No spam. Unsubscribe anytime. Read by leaders at Apple, Google, and the White House.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
