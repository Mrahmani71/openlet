const heroArticle = {
  id: "quantum-leap",
  category: "Technology",
  title:
    "The Quantum Leap: Inside the Race to Build the World's First Fault-Tolerant Quantum Computer",
  subtitle:
    "Three rival labs are on the brink of a breakthrough that could reshape cryptography, drug discovery, and artificial intelligence forever.",
  author: "Sarah Chen",
  readTime: "12 min read",
  authorImg: "https://picsum.photos/seed/author-sarah/80/80",
  imageUrl: "https://picsum.photos/seed/hero-quantum-lab/1200/800",
};

const secondaryHero = [
  {
    id: "global-markets",
    category: "Business",
    title: "Global Markets Surge as Central Banks Signal Coordinated Rate Cuts",
    author: "Marcus Williams",
    readTime: "8 min",
    imageUrl: "https://picsum.photos/seed/hero-markets-stock/800/500",
  },
  {
    id: "urban-ism",
    category: "Science",
    title: "The New Urbanism: How Cities Are Being Redesigned for a Post-Car Future",
    author: "Elena Rodriguez",
    readTime: "10 min",
    imageUrl: "https://picsum.photos/seed/hero-city-future/800/500",
  },
];

const trendingArticles = [
  {
    id: "ai-boardrooms",
    rank: "01",
    category: "Technology",
    title: "AI Agents Are Now Running Fortune 500 Companies — Here's How Boardrooms Are Adapting",
    time: "2h ago",
    img: "https://picsum.photos/seed/trend-ai-board/200/140",
  },
  {
    id: "climate-deadline",
    rank: "02",
    category: "Politics",
    title: "The Climate Deadline: What the Latest IPCC Data Means for Every Nation on Earth",
    time: "4h ago",
    img: "https://picsum.photos/seed/trend-climate/200/140",
  },
  {
    id: "apple-secret-lab",
    rank: "03",
    category: "Culture",
    title: "Inside Apple's Secret Lab: The Next Generation of Spatial Computing Unveiled",
    time: "5h ago",
    img: "https://picsum.photos/seed/trend-apple-vr/200/140",
  },
  {
    id: "space-tourism",
    rank: "04",
    category: "Sports",
    title: "Space Tourism Goes Mainstream: First Commercial Orbital Hotel Opens Its Doors",
    time: "6h ago",
    img: "https://picsum.photos/seed/trend-space-hotel/200/140",
  },
];

const editorPicks = [
  {
    id: "neural-networks-dream",
    category: "Technology",
    title: "The Neural Networks That Dream: Inside Google's Latest Consciousness Research",
    description:
      "A groundbreaking paper reveals that advanced language models may be developing internal representations that mirror human subjective experience.",
    author: "James Okafor",
    authorImg: "https://picsum.photos/seed/author-james/60/60",
    date: "Jan 15, 2026",
    imageUrl: "https://picsum.photos/seed/edit-neural-net/800/500",
  },
  {
    id: "eu-digital-sovereignty",
    category: "Politics",
    title: "Europe's Digital Sovereignty Act: A New Era for Tech Regulation",
    description:
      "The EU passes sweeping legislation that could fundamentally alter how Big Tech operates across the continent.",
    author: "Priya Sharma",
    authorImg: "https://picsum.photos/seed/author-priya/60/60",
    date: "Jan 14, 2026",
    imageUrl: "https://picsum.photos/seed/edit-eu-summit/800/500",
  },
  {
    id: "reinvented-cinema",
    category: "Culture",
    title: "The Director Who Reinvented Cinema: An Exclusive Interview",
    description:
      "After a decade of silence, the visionary filmmaker returns with a project that blends AI-generated visuals with live performance.",
    author: "Elena Rodriguez",
    authorImg: "https://picsum.photos/seed/author-elena/60/60",
    date: "Jan 13, 2026",
    imageUrl: "https://picsum.photos/seed/edit-film-set/800/500",
  },
];

const latestStories = [
  {
    id: "crispr-3",
    category: "Science",
    title: "CRISPR 3.0: The Gene Editing Tool That Can Now Rewrite Entire Chromosomes",
    description:
      "Third-generation CRISPR technology makes chromosomal-scale editing possible, opening doors to curing previously untreatable genetic diseases.",
    author: "Sarah Chen",
    authorImg: "https://picsum.photos/seed/author-sarah/60/60",
    readTime: "7 min read",
    timeAgo: "3h ago",
    imageUrl: "https://picsum.photos/seed/latest-biotech/600/400",
  },
  {
    id: "f1-electric",
    category: "Sports",
    title: "The Fully Electric F1 Season: How Zero-Emission Racing Changed the Sport Forever",
    description:
      "The 2026 Formula 1 season marks the complete transition to electric power units, drawing record viewership and new sponsors.",
    author: "Marcus Williams",
    authorImg: "https://picsum.photos/seed/author-marcus/60/60",
    readTime: "5 min read",
    timeAgo: "5h ago",
    imageUrl: "https://picsum.photos/seed/latest-f1-race/600/400",
  },
  {
    id: "defense-startup",
    category: "Business",
    title:
      "The $500 Billion Startup No One Saw Coming: How a 22-Year-Old Disrupted Defense Contracting",
    description:
      "A university dropout's autonomous drone defense system has attracted the largest Series A in history and rattled legacy contractors.",
    author: "Priya Sharma",
    authorImg: "https://picsum.photos/seed/author-priya/60/60",
    readTime: "9 min read",
    timeAgo: "7h ago",
    imageUrl: "https://picsum.photos/seed/latest-startup-office/600/400",
  },
];

const techSection = {
  feature: {
    id: "ai-scientists-publish",
    category: "Artificial Intelligence",
    title: "Autonomous AI Scientists Publish First Independently Generated Research Paper",
    description:
      "In a landmark moment for artificial intelligence, an AI system at DeepMind has authored and published a peer-reviewed paper on protein folding without any human intervention in the research process.",
    author: "James Okafor",
    authorImg: "https://picsum.photos/seed/author-james/60/60",
    readTime: "14 min read",
    date: "Yesterday",
    imageUrl: "https://picsum.photos/seed/tech-robot-lab/1000/560",
  },
  sideItems: [
    {
      id: "tsmc-1nm",
      category: "Hardware",
      title: "TSMC's 1nm Chip Enters Mass Production Two Years Ahead of Schedule",
      time: "6h ago",
      img: "https://picsum.photos/seed/tech-chip-mini/200/160",
    },
    {
      id: "meta-neural",
      category: "AR/VR",
      title: "Meta's Neural Interface Lets You Type With Your Thoughts at 120 WPM",
      time: "8h ago",
      img: "https://picsum.photos/seed/tech-vr-headset/200/160",
    },
    {
      id: "solid-state-battery",
      category: "Energy",
      title: "Solid-State Batteries Achieve 1000-Mile Range in Real-World Tests",
      time: "10h ago",
      img: "https://picsum.photos/seed/tech-ev-battery/200/160",
    },
    {
      id: "starlink-v3",
      category: "Space",
      title: "Starlink V3 Delivers 1Gbps Speeds to Every Corner of the Planet",
      time: "12h ago",
      img: "https://picsum.photos/seed/tech-satellite/200/160",
    },
  ],
};

const businessSection = {
  feature: {
    id: "death-of-cash",
    category: "Finance",
    title: "The Death of Cash: How Central Bank Digital Currencies Reshaped Global Finance",
    author: "Marcus Williams",
    authorImg: "https://picsum.photos/seed/author-marcus/60/60",
    imageUrl: "https://picsum.photos/seed/biz-tower-skyline/600/750",
  },
  cards: [
    {
      id: "bitcoin-350k",
      category: "Markets",
      title: "Bitcoin Surges Past $350K as Institutional Adoption Reaches Critical Mass",
      description:
        "Sovereign wealth funds from Norway, UAE, and Singapore now hold combined Bitcoin reserves exceeding $2 trillion.",
    },
    {
      id: "four-day-week",
      category: "Startups",
      title: "The Four-Day Work Week Is Now Standard Across Fortune 500 Companies",
      description:
        "Productivity data from a three-year pilot confirms what skeptics doubted: less time, more output.",
    },
    {
      id: "3d-printed-homes",
      category: "Real Estate",
      title: "3D-Printed Neighborhoods Sell Out in 48 Hours as Housing Crisis Deepens",
      description:
        "A Texas developer's printed homes cost 60% less than traditional construction while cutting build time to weeks.",
    },
    {
      id: "africa-tech-exports",
      category: "Trade",
      title: "Africa's Tech Exports Triple in Two Years, Reshaping Global Supply Chains",
      description:
        "Nigeria, Kenya, and Rwanda emerge as the world's fastest-growing software export economies.",
    },
  ],
};

export {
  heroArticle,
  secondaryHero,
  trendingArticles,
  editorPicks,
  latestStories,
  techSection,
  businessSection,
};
