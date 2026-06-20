import { APP_CONFIG } from "@openlet/shared/config";
import { Button } from "@openlet/ui/components/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@openlet/ui/components/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@openlet/ui/components/sheet";
import { cn } from "@openlet/ui/lib/utils";
import {
  ListIcon,
  MagnifyingGlassIcon,
  SunIcon,
  MoonIcon,
  CaretDownIcon,
  CpuIcon,
  ChartLineUpIcon,
  BuildingOfficeIcon,
  FlaskIcon,
  PaintBrushIcon,
  SoccerBallIcon,
} from "@phosphor-icons/react";
import { useState, useEffect, useRef } from "react";
import { useThemeToggle } from "@/hooks/use-theme-toggle";

const navLinks = [
  { href: "/", label: "Home", active: true },
  { href: "/c/technology", label: "Technology" },
  { href: "/c/business", label: "Business" },
  { href: "/c/politics", label: "Politics" },
  { href: "/c/science", label: "Science" },
  { href: "/c/culture", label: "Culture" },
  { href: "/c/sports", label: "Sports" },
];

const megaCategories = [
  { href: "/c/technology", label: "Technology", desc: "AI, Quantum, Space", icon: CpuIcon },
  { href: "/c/business", label: "Business", desc: "Markets, Startups", icon: ChartLineUpIcon },
  { href: "/c/politics", label: "Politics", desc: "Policy, Elections", icon: BuildingOfficeIcon },
  { href: "/c/science", label: "Science", desc: "Research, Climate", icon: FlaskIcon },
  { href: "/c/culture", label: "Culture", desc: "Film, Art, Music", icon: PaintBrushIcon },
  { href: "/c/sports", label: "Sports", desc: "Football, F1, NBA", icon: SoccerBallIcon },
];

const megaFeatures = [
  {
    href: "/article/1",
    category: "Technology",
    title: "The Quantum Leap: Inside the Race for Fault-Tolerant Computing",
    img: "https://picsum.photos/seed/mega-feat1/160/160",
  },
  {
    href: "/article/2",
    category: "Business",
    title: "Global Markets Surge as Central Banks Signal Coordinated Rate Cuts",
    img: "https://picsum.photos/seed/mega-feat2/160/160",
  },
  {
    href: "/article/3",
    category: "Culture",
    title: "The Renaissance of Long-Form Journalism in the Age of Algorithms",
    img: "https://picsum.photos/seed/mega-feat3/160/160",
  },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useThemeToggle();
  const megaTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Scroll detection for nav background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close search on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMobileMenuOpen(false);
        setMegaOpen(false);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const handleMegaEnter = () => {
    clearTimeout(megaTimer.current);
    setMegaOpen(true);
  };

  const handleMegaLeave = () => {
    megaTimer.current = setTimeout(() => setMegaOpen(false), 200);
  };

  return (
    <>
      {/* Breaking News Ticker */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex h-9 max-w-8xl items-center overflow-hidden px-6">
          <div className="z-10 flex h-full shrink-0 items-center gap-2 bg-foreground/20 px-4">
            <span className="size-2 animate-pulse rounded-full bg-current" />
            <span className="text-xs font-bold tracking-wider uppercase">Breaking</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="flex animate-[ticker-scroll_60s_linear_infinite] whitespace-nowrap hover:paused motion-reduce:animate-none">
              <TickerItems />
              <TickerItems ariaHidden />
            </div>
          </div>
        </div>
      </div>

      {/* Top Bar */}
      <div className="hidden border-b md:block">
        <div className="container mx-auto flex max-w-8xl items-center justify-between px-6 py-2 text-xs">
          <div className="flex items-center gap-4">
            <span className="font-medium text-muted-foreground" id="current-date" />
            <span className="text-muted-foreground/50">|</span>
            <span className="text-muted-foreground">Edition: Global</span>
          </div>
          <div className="flex items-center gap-4">
            {["x", "linkedin", "youtube", "instagram"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={platform}
              >
                <i className={`fa-brands fa-${platform === "x" ? "x-twitter" : platform}`} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header
        className={cn(
          "sticky top-0 z-50 border-b border-transparent transition-all duration-300",
          scrolled && "border-border bg-background/85 backdrop-blur-2xl dark:bg-background/85",
        )}
      >
        <div className="container mx-auto flex max-w-8xl items-center justify-between px-6">
          <div className="flex h-16 items-center md:h-20">
            {/* Logo */}
            <a href="/" className="group flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-sm bg-primary">
                <span className="font-heading text-sm font-bold text-primary-foreground">O</span>
              </div>
              <span className="font-heading text-xl font-bold tracking-[0.15em]">
                {APP_CONFIG.name.toUpperCase()}
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className="px-4 py-2 text-sm font-medium text-foreground/90 transition-colors hover:text-primary"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Mega Menu Trigger */}
              <NavigationMenuItem>
                <button
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
                  onMouseEnter={handleMegaEnter}
                  onMouseLeave={handleMegaLeave}
                  onClick={() => setMegaOpen(!megaOpen)}
                >
                  Categories <CaretDownIcon className="size-2.5" />
                </button>
              </NavigationMenuItem>

              {["Opinion", "Video", "Podcasts"].map((label) => (
                <NavigationMenuItem key={label}>
                  <NavigationMenuLink
                    href={`/${label.toLowerCase()}`}
                    className="px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
                  >
                    {label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <MagnifyingGlassIcon />
            </Button>

            <Button
              variant="ghost"
              size="icon-sm"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggleTheme}
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </Button>

            <a
              href="/subscribe"
              className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/80 hover:shadow-lg hover:shadow-primary/20 md:inline-flex"
            >
              Subscribe
            </a>

            {/* Mobile Menu Trigger */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} modal>
              <Button
                variant="ghost"
                size="icon-sm"
                className="lg:hidden"
                aria-label="Open navigation menu"
                onClick={() => setMobileMenuOpen(true)}
              >
                <ListIcon />
              </Button>
              <SheetContent side="right" className="w-80 max-w-[85vw] p-0">
                <SheetHeader className="border-b p-6">
                  <div className="flex items-center justify-between">
                    <SheetTitle className="font-heading text-lg font-bold tracking-widest">
                      {APP_CONFIG.name.toUpperCase()}
                    </SheetTitle>
                  </div>
                </SheetHeader>
                <nav className="flex flex-col p-4">
                  <a
                    href="/"
                    className="rounded-lg px-4 py-3 font-medium transition-colors hover:bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                  <div className="mt-6 mb-2 px-4 py-2 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                    Categories
                  </div>
                  {navLinks.slice(1).map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="rounded-lg px-4 py-3 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="mt-6 mb-2 px-4 py-2 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                    More
                  </div>
                  {["Opinion", "Video", "Podcasts"].map((label) => (
                    <a
                      key={label}
                      href={`/${label.toLowerCase()}`}
                      className="rounded-lg px-4 py-3 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-10 border-t pt-6">
                    <a
                      href="/subscribe"
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/80"
                    >
                      Subscribe Now
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Mega Menu Dropdown */}
      <div
        className={cn(
          "fixed top-16 right-0 left-0 z-40 border-b bg-background/95 shadow-2xl shadow-black/30 backdrop-blur-2xl transition-all duration-300 md:top-20",
          megaOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
        onMouseEnter={handleMegaEnter}
        onMouseLeave={handleMegaLeave}
      >
        <div className="container mx-auto max-w-8xl px-6 py-10">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
            {megaCategories.map((cat) => (
              <a
                key={cat.label}
                href={cat.href}
                className="group rounded-xl p-4 transition-colors hover:bg-muted"
                onClick={() => setMegaOpen(false)}
              >
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <cat.icon />
                </div>
                <div className="mb-1 text-sm font-semibold">{cat.label}</div>
                <div className="text-xs text-muted-foreground">{cat.desc}</div>
              </a>
            ))}
          </div>

          {/* Featured Stories */}
          <div className="mt-8 border-t pt-8">
            <div className="mb-4 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Featured in Categories
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {megaFeatures.map((feat) => (
                <a
                  key={feat.title}
                  href={feat.href}
                  className="group flex gap-4"
                  onClick={() => setMegaOpen(false)}
                >
                  <div className="img-zoom h-20 w-20 shrink-0 overflow-hidden rounded-lg">
                    <img src={feat.img} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <div className="mb-1 text-xs font-semibold text-primary">{feat.category}</div>
                    <div className="text-sm leading-snug font-semibold transition-colors group-hover:text-primary">
                      {feat.title}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-60 flex items-start justify-center bg-black/70 pt-[15vh] backdrop-blur-md"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSearchOpen(false);
          }}
        >
          <div className="mx-6 w-full max-w-2xl animate-in zoom-in-95 fade-in">
            <div className="overflow-hidden rounded-2xl border bg-background shadow-2xl shadow-black/40">
              <div className="flex items-center gap-4 border-b px-6 py-5">
                <MagnifyingGlassIcon className="text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search stories, topics, authors..."
                  className="flex-1 bg-transparent text-lg outline-none placeholder:text-muted-foreground"
                  autoFocus
                />
                <kbd className="hidden rounded-md border bg-muted px-2.5 py-1 font-mono text-xs md:inline-flex">
                  ESC
                </kbd>
              </div>
              <div className="p-6">
                <div className="mb-4 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                  Trending Searches
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Quantum Computing",
                    "AI Regulation",
                    "Space Tourism",
                    "Climate Summit 2026",
                    "F1 Season",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="cursor-pointer rounded-full bg-muted px-3.5 py-1.5 text-sm transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Mobile Overlay */}
      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .img-zoom { overflow: hidden; }
        .img-zoom img { transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
        .img-zoom:hover img { transform: scale(1.05); }
        @media (prefers-reduced-motion: reduce) {
          .img-zoom img { transition: none; }
        }
      `}</style>
    </>
  );
};

function TickerItems({ ariaHidden }: { ariaHidden?: boolean }) {
  const items = [
    "European Central Bank announces unprecedented digital currency framework for 2027 rollout",
    "Breakthrough in nuclear fusion: NET Energy gain confirmed at ITER facility",
    "Global tech stocks rally as AI agents demonstrate autonomous corporate management",
    "UN Security Council convenes emergency session on Arctic resource disputes",
    "SpaceX successfully lands first crew on Mars in historic Artemis-V mission",
  ];

  return (
    <span
      className="inline-flex items-center px-8 text-sm font-medium text-current/95"
      aria-hidden={ariaHidden}
    >
      {items.map((item, i) => (
        <span key={i}>
          {item}
          {i < items.length - 1 && <span className="mx-2 text-current/40">|</span>}
        </span>
      ))}
    </span>
  );
}

function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const articlePage = document.getElementById("article-page");
    if (!articlePage || articlePage.classList.contains("hidden")) return;

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollHeight > 0 ? Math.min((scrollTop / scrollHeight) * 100, 100) : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="reading-progress"
      className="pointer-events-none fixed top-0 left-0 z-9999 h-[3px] transition-[width] duration-100"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, oklch(0.577 0.245 27.325), oklch(0.704 0.191 22.216))",
        boxShadow: "0 0 12px rgba(255,59,48,0.5)",
      }}
    />
  );
}
