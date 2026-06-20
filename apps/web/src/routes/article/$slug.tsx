import { cn } from "@openlet/ui/lib/utils";
import {
  XLogoIcon,
  LinkedinLogoIcon,
  FacebookLogoIcon,
  LinkSimpleIcon,
  BookmarkSimpleIcon,
  CalendarIcon,
  ClockIcon,
  ChatCircleIcon,
} from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

export const Route = createFileRoute("/article/$slug")({
  component: ArticlePage,
});

// --- Mock article data ---
const articleData = {
  category: "Technology",
  title:
    "The Quantum Leap: Inside the Race to Build the World's First Fault-Tolerant Quantum Computer",
  subtitle:
    "Three rival laboratories stand on the precipice of a breakthrough that will fundamentally alter computing, cryptography, and our understanding of physics itself.",
  author: "Sarah Chen",
  authorRole: "Senior Technology Correspondent",
  authorImg: "https://picsum.photos/seed/author-sarah/80/80",
  date: "January 15, 2026",
  readTime: "12 min read",
  comments: 347,
  heroImage: "https://picsum.photos/seed/article-hero-quantum/1800/700",
  toc: [
    { id: "section-rivals", label: "The Three Rivals" },
    { id: "section-implications", label: "What This Means for You" },
    { id: "section-timeline", label: "The Road Ahead" },
  ],
  relatedStories: [
    {
      title: "Autonomous AI Scientists Publish First Research Paper",
      readTime: "4 min read",
      img: "https://picsum.photos/seed/related-ai/140/140",
    },
    {
      title: "TSMC's 1nm Chip Enters Mass Production",
      readTime: "3 min read",
      img: "https://picsum.photos/seed/related-chip/140/140",
    },
    {
      title: "Post-Quantum Cryptography: The Migration No One Notices",
      readTime: "6 min read",
      img: "https://picsum.photos/seed/related-crypto/140/140",
    },
  ],
};

function ArticlePage() {
  const { toc } = articleData;
  const [activeToc, setActiveToc] = useState<string | null>(null);

  // TOC scroll spy
  useEffect(() => {
    const handleScroll = () => {
      let current: string | null = null;
      for (const { id } of toc) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) current = id;
        }
      }
      setActiveToc(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toc]);

  return (
    <>
      {/* Reading Progress Bar */}
      <ReadingProgress />

      {/* Hero Image */}
      <div className="relative">
        <div className="aspect-[21/9] w-full overflow-hidden md:aspect-[21/8]">
          <img
            src={articleData.heroImage}
            alt={articleData.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
      </div>

      {/* Article Header */}
      <div className="relative z-10 mx-auto -mt-24 mb-12 max-w-4xl px-6">
        <ScrollReveal>
          <span className="mb-6 inline-block rounded-md bg-primary px-3.5 py-1.5 text-xs font-bold tracking-wider text-white uppercase">
            {articleData.category}
          </span>
          <h1 className="mb-6 font-heading text-4xl leading-[1.08] font-bold md:text-5xl lg:text-6xl">
            {articleData.title}
          </h1>
          <p className="mb-8 max-w-3xl text-xl leading-relaxed font-light text-muted-foreground md:text-2xl">
            {articleData.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-5 border-b pb-8">
            <div className="flex items-center gap-3">
              <img
                src={articleData.authorImg}
                alt={articleData.author}
                className="h-11 w-11 rounded-full border-2 border-primary/30 object-cover"
              />
              <div>
                <div className="text-sm font-semibold">{articleData.author}</div>
                <div className="text-xs text-muted-foreground">{articleData.authorRole}</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>
                <CalendarIcon className="mr-1.5 inline size-3.5" />
                {articleData.date}
              </span>
              <span>
                <ClockIcon className="mr-1.5 inline size-3.5" />
                {articleData.readTime}
              </span>
              <span>
                <ChatCircleIcon className="mr-1.5 inline size-3.5" />
                {articleData.comments}
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Article Body + Sidebar */}
      <div className="container mx-auto max-w-8xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Sticky Share Buttons */}
          <div className="sticky top-24 hidden flex-col items-center gap-3 self-start pt-4 lg:col-span-1 lg:flex">
            <SocialButton label="Share on X">
              <XLogoIcon />
            </SocialButton>
            <SocialButton label="Share on LinkedIn">
              <LinkedinLogoIcon />
            </SocialButton>
            <SocialButton label="Share on Facebook">
              <FacebookLogoIcon />
            </SocialButton>
            <SocialButton label="Copy link">
              <LinkSimpleIcon />
            </SocialButton>
            <div className="my-1 h-px w-6 bg-border" />
            <SocialButton label="Bookmark">
              <BookmarkSimpleIcon />
            </SocialButton>
          </div>

          {/* Article Content */}
          <article className="article-body lg:col-span-7">
            <p className="text-xl leading-relaxed text-foreground/70">
              <span className="float-left mt-1 mr-3 font-heading text-5xl leading-none font-bold text-primary">
                I
              </span>
              n a nondescript building on the outskirts of Zurich, behind three layers of biometric
              security and a wall of electromagnetic shielding, a machine is about to change the
              world. The cryostat hums at a frequency just below human hearing, maintaining a
              temperature of 15 millikelvin — colder than the vacuum of deep space. Inside, 1,200
              superconducting qubits dance in a choreography of quantum entanglement that has never
              been achieved before.
            </p>

            <p>
              This is not science fiction. This is the Quantum Computational Research Institute, and
              what is happening inside this frozen chamber represents the culmination of a
              thirty-year race that has consumed billions of dollars, thousands of careers, and the
              collective imagination of the world's brightest minds.
            </p>

            <p>
              The stakes could not be higher. A fault-tolerant quantum computer — one that can
              perform complex calculations without being derailed by the slightest environmental
              interference — would render current encryption obsolete, accelerate drug discovery by
              decades, and solve optimization problems that would take classical computers longer
              than the age of the universe.
            </p>

            <PullQuote>
              We are not building a faster computer. We are building an entirely different kind of
              machine — one that operates according to the rules of nature at its most fundamental
              level.
            </PullQuote>

            <h2 id="section-rivals">The Three Rivals</h2>

            <p>
              The race to fault tolerance has narrowed to three principal contenders, each pursuing
              a fundamentally different architectural approach. Understanding their strategies is
              essential to grasping where this technology is headed.
            </p>

            <p>
              Google's DeepMind Quantum division, housed in a purpose-built facility in Santa
              Barbara, is pursuing what they call "surface code" error correction — a method that
              uses many physical qubits to create a single reliable "logical" qubit. Their latest
              processor, Sycamore IV, demonstrated 99.9% gate fidelity across 200 qubits last
              October.
            </p>

            <div className="my-8 overflow-hidden rounded-xl">
              <img
                src="https://picsum.photos/seed/article-quantum-chip/900/500"
                alt="Quantum processor"
                className="w-full"
              />
              <p className="mt-3 text-xs text-muted-foreground italic">
                The Sycamore IV quantum processor at Google's Santa Barbara facility. Photo: Google
                Quantum AI
              </p>
            </div>

            <p>
              IBM, meanwhile, has bet heavily on their "condensed matter" approach, using a novel
              type of qubit based on topological properties that are inherently more resistant to
              decoherence. Their Eagle III processor, operational since November, uses just 400
              physical qubits but achieves logical qubit performance that rivals Google's 200-qubit
              system.
            </p>

            <p>
              And then there is the dark horse: a Swiss consortium called QCRI, backed by a
              coalition of European governments and ETH Zurich. Their approach — using trapped ions
              suspended in electromagnetic fields — has been dismissed as unscalable for years. But
              their recent results have silenced the skeptics.
            </p>

            <HighlightBlock label="Key Insight">
              Fault tolerance is not about making individual qubits more stable — it's about
              creating systems where errors can be detected and corrected faster than they
              accumulate. The threshold theorem guarantees this is possible; the engineering
              challenge is making it practical.
            </HighlightBlock>

            <h2 id="section-implications">What This Means for You</h2>

            <p>
              The implications of fault-tolerant quantum computing extend far beyond the laboratory.
              In cryptography, Shor's algorithm — which can factor large prime numbers exponentially
              faster than classical methods — would break the RSA encryption that secures everything
              from online banking to government communications.
            </p>

            <p>
              "We've been preparing for this moment," says Dr. Natasha Petrov, head of post-quantum
              cryptography at the National Institute of Standards and Technology. "The new
              lattice-based standards we finalized in 2024 are already being deployed across
              critical infrastructure. The transition won't be painless, but it's manageable."
            </p>

            <p>
              In pharmaceutical research, quantum computers could simulate molecular interactions at
              a level of detail that is literally impossible with classical machines. Current drug
              discovery, which relies on approximations and simplified models, could be replaced by
              precise quantum simulations that predict drug efficacy and side effects before a
              single compound is synthesized in the lab.
            </p>

            <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="overflow-hidden rounded-xl">
                <img
                  src="https://picsum.photos/seed/article-lab-tube/500/350"
                  alt="Lab research"
                  className="aspect-[4/3] w-full object-cover"
                />
                <p className="mt-2 text-xs text-muted-foreground italic">
                  Molecular simulation at quantum scale
                </p>
              </div>
              <div className="overflow-hidden rounded-xl">
                <img
                  src="https://picsum.photos/seed/article-data-center/500/350"
                  alt="Data center"
                  className="aspect-[4/3] w-full object-cover"
                />
                <p className="mt-2 text-xs text-muted-foreground italic">
                  Quantum-classical hybrid computing infrastructure
                </p>
              </div>
            </div>

            <h2 id="section-timeline">The Road Ahead</h2>

            <p>
              So when will we see a truly fault-tolerant quantum computer? The consensus among
              researchers I spoke with is surprisingly unified: sometime between late 2026 and
              mid-2027. QCRI's Dr. Keller was the most specific, predicting "before the end of next
              summer" for their trapped-ion system to demonstrate continuous error correction at
              scale.
            </p>

            <p>
              But "demonstrating" fault tolerance in a lab and delivering it as a commercial product
              are very different things. The first practical applications will likely be in
              specialized fields — materials science, cryptographic research, and specific
              optimization problems — rather than as general-purpose computing platforms.
            </p>

            <p>
              What is clear is that the quantum era is no longer a distant prospect. It is arriving,
              and the world's institutions, markets, and governments would do well to be ready. The
              quantum leap is not coming. It is here.
            </p>
          </article>

          {/* Sticky Sidebar */}
          <aside className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-24 space-y-8">
              {/* Table of Contents */}
              <div className="rounded-2xl border bg-card/50 p-6 backdrop-blur-xl">
                <div className="mb-4 text-xs font-bold tracking-[0.15em] text-muted-foreground uppercase">
                  Table of Contents
                </div>
                <nav className="space-y-1">
                  {articleData.toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={cn(
                        "toc-link block py-2 pl-3 text-sm transition-all",
                        activeToc === item.id
                          ? "border-l-2 border-primary pl-[11px] font-medium text-primary"
                          : "border-l-2 border-transparent text-muted-foreground hover:border-primary hover:pl-[11px] hover:text-primary",
                      )}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Author Card */}
              <div className="rounded-2xl border bg-card/50 p-6 backdrop-blur-xl">
                <div className="mb-4 text-xs font-bold tracking-[0.15em] text-muted-foreground uppercase">
                  About the Author
                </div>
                <div className="mb-4 flex items-center gap-3">
                  <img
                    src={articleData.authorImg}
                    alt={articleData.author}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{articleData.author}</div>
                    <div className="text-xs text-muted-foreground">{articleData.authorRole}</div>
                  </div>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  Award-winning journalist covering quantum computing, AI, and emerging
                  technologies. Former MIT researcher.
                </p>
                <button className="w-full rounded-full border py-2.5 text-sm font-medium transition-all hover:border-primary hover:text-primary">
                  Follow <span className="ml-1 text-xs">+</span>
                </button>
              </div>

              {/* Related Stories */}
              <div className="rounded-2xl border bg-card/50 p-6 backdrop-blur-xl">
                <div className="mb-4 text-xs font-bold tracking-[0.15em] text-muted-foreground uppercase">
                  Related Stories
                </div>
                <div className="space-y-4">
                  {articleData.relatedStories.map((story) => (
                    <a key={story.title} href="#" className="group flex gap-3">
                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                        <img
                          src={story.img}
                          alt=""
                          className="h-full w-full object-cover transition-transform duration-[0.6s] ease-out group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <h4 className="line-clamp-2 text-sm leading-snug font-semibold transition-colors group-hover:text-primary">
                          {story.title}
                        </h4>
                        <span className="mt-1 block text-xs text-muted-foreground">
                          {story.readTime}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

// --- Sub-components ---

function SocialButton({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <button
      aria-label={label}
      className="flex size-10 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
    >
      {children}
    </button>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="relative -mx-2 my-10 border-l-[3px] border-primary py-2 pl-8 font-heading text-2xl leading-relaxed font-medium italic">
      <span className="absolute top-[-0.3em] left-[0.15em] font-heading text-7xl leading-none text-primary/20 select-none">
        &ldquo;
      </span>
      {children}
    </blockquote>
  );
}

function HighlightBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="my-8 rounded-xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] to-primary/[0.02] p-6 md:p-8">
      <div className="flex items-start gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="mt-1 size-5 shrink-0 text-primary"
          fill="currentColor"
        >
          <path d="M240 128a15.79 15.79 0 01-10.5 15l-63.44 23.07L143 229.5a16 16 0 01-30 0L89.93 166.07 26.5 143a16 16 0 010-30l63.44-23.07L113 26.5a16 16 0 0130 0l23.07 63.44L229.5 113a15.79 15.79 0 0110.5 15z" />
        </svg>
        <div>
          <div className="mb-1 text-sm font-bold">{label}</div>
          <div className="text-sm leading-relaxed text-muted-foreground">{children}</div>
        </div>
      </div>
    </div>
  );
}

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
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
      className="pointer-events-none fixed top-0 left-0 z-[9999] h-[3px]"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, var(--destructive), oklch(0.704 0.191 22.216))",
        boxShadow: "0 0 12px rgba(255,59,48,0.5)",
        transition: "width 0.1s linear",
      }}
    />
  );
}
