import type { JournalCategory } from "./site";

export interface JournalArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: JournalCategory;
  author: string;
  date: string;
  readTime: string;
  heroImage: {
    src: string;
    alt: string;
  };
  content: JournalBlock[];
}

export type JournalBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export const journalArticles: JournalArticle[] = [
  {
    slug: "quiet-power-natural-stone",
    title: "The quiet power of natural stone",
    excerpt:
      "Stone is not neutral. It carries geology, labour, and time. In our work, we treat it as a protagonist — not a backdrop.",
    category: "Materials",
    author: "Elena Marlow",
    date: "2024-11-12",
    readTime: "6 min",
    heroImage: {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=85",
      alt: "Natural stone wall with soft morning light",
    },
    content: [
      {
        type: "paragraph",
        text: "There is a moment in every project when stone arrives on site — pallets of limestone, slabs of marble, blocks of granite — and the building changes character. What was abstract becomes tangible. What was drawn becomes weight.",
      },
      {
        type: "paragraph",
        text: "We specify stone not for spectacle but for permanence. A limestone floor will patina. A granite threshold will polish under foot traffic. These are not defects; they are the material speaking back to its use.",
      },
      {
        type: "quote",
        text: "Stone does not decorate a space. It defines how a space feels under hand and under light.",
        attribution: "Elena Marlow",
      },
      {
        type: "heading",
        text: "Selecting with intention",
      },
      {
        type: "paragraph",
        text: "Our selection process begins with place. For Casa Vela, we sourced limestone from a quarry forty minutes from the site — the same geological formation as the cliff below the house. The colour shift between interior and landscape is barely perceptible, and that continuity matters.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=85",
        alt: "Stone kitchen counter with natural edge",
        caption: "Hand-finished limestone in Casa Vela",
      },
      {
        type: "paragraph",
        text: "We avoid treating stone as a uniform surface. Veining, fossil traces, and colour variation are features to celebrate. The craftspeople who cut and lay our stone are collaborators, not subcontractors.",
      },
    ],
  },
  {
    slug: "designing-for-morning-light",
    title: "Designing for morning light",
    excerpt:
      "East-facing rooms receive a quality of light that is brief, angled, and deeply human. We orient our most intimate spaces toward it.",
    category: "Architecture",
    author: "Jonas Reed",
    date: "2024-10-03",
    readTime: "5 min",
    heroImage: {
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=85",
      alt: "Interior flooded with morning sunlight",
    },
    content: [
      {
        type: "paragraph",
        text: "Morning light is different from afternoon light. It arrives low, warm, and brief — a daily event rather than a constant condition. In residential work, we treat the east elevation with particular care.",
      },
      {
        type: "paragraph",
        text: "Bedrooms, breakfast rooms, and studios benefit from eastern orientation. The light wakes you gently. It reveals texture on walls and floors. It makes the first hour of the day feel considered.",
      },
      {
        type: "quote",
        text: "We draw the sun before we draw the walls.",
      },
      {
        type: "heading",
        text: "Modulating intensity",
      },
      {
        type: "paragraph",
        text: "Unfiltered east light can be harsh in summer. We use deep reveals, linen curtains, and planted screens to soften it without blocking it. The goal is filtration, not elimination.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=85",
        alt: "Window with morning light casting shadows",
        caption: "North House — east-facing dining room",
      },
    ],
  },
  {
    slug: "what-makes-a-room-memorable",
    title: "What makes a room memorable?",
    excerpt:
      "Memorable rooms are rarely the largest. They are the ones where proportion, material, and light align in a way that stays with you.",
    category: "Studio Notes",
    author: "Maya Laurent",
    date: "2024-09-18",
    readTime: "4 min",
    heroImage: {
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=85",
      alt: "Intimate interior with warm materials",
    },
    content: [
      {
        type: "paragraph",
        text: "People remember rooms for reasons they struggle to articulate. It is rarely a single object or colour. More often, it is a feeling — of scale, of warmth, of being held by a space without knowing why.",
      },
      {
        type: "paragraph",
        text: "We believe memorable rooms share three qualities: proportion that respects the human body, materials that reward touch, and light that changes through the day.",
      },
      {
        type: "quote",
        text: "A memorable room does not demand attention. It earns recall.",
      },
      {
        type: "paragraph",
        text: "In hospitality projects, we design lobby and lounge spaces with this principle in mind. Guests should leave with a spatial memory — not a photograph, but a sensation.",
      },
    ],
  },
  {
    slug: "inside-casa-vela",
    title: "Inside Casa Vela",
    excerpt:
      "A behind-the-scenes look at the material decisions, local craftspeople, and light studies that shaped our Mallorca residence.",
    category: "Places",
    author: "Daniel Hart",
    date: "2024-08-22",
    readTime: "8 min",
    heroImage: {
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=85",
      alt: "Casa Vela exterior at golden hour",
    },
    content: [
      {
        type: "paragraph",
        text: "Casa Vela began with a site visit in January, when the Mediterranean light is thin and the landscape feels stripped to essentials. We walked the cliff edge at dusk and understood immediately: the house had to defer to the horizon.",
      },
      {
        type: "heading",
        text: "The courtyard as lung",
      },
      {
        type: "paragraph",
        text: "The central courtyard was not in the initial brief. It emerged from climate analysis — a way to draw cool air through the house during summer months while providing a sheltered outdoor room in winter.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85",
        alt: "Courtyard with pool at Casa Vela",
        caption: "The courtyard from the master bedroom terrace",
      },
      {
        type: "paragraph",
        text: "Local masons hand-cut every piece of exterior limestone. The process took eleven weeks. We would not have done it differently.",
      },
    ],
  },
  {
    slug: "material-as-architecture",
    title: "Material as architecture",
    excerpt:
      "When material choice drives form rather than following it, buildings acquire an honesty that clients and occupants feel immediately.",
    category: "Materials",
    author: "Jonas Reed",
    date: "2024-07-08",
    readTime: "5 min",
    heroImage: {
      src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600&q=85",
      alt: "Timber and concrete architectural detail",
    },
    content: [
      {
        type: "paragraph",
        text: "Too often, material is specified late — a finish applied to a form already resolved. We reverse this sequence wherever possible. The properties of timber, concrete, or stone inform the architecture from the first sketch.",
      },
      {
        type: "quote",
        text: "Form should emerge from what materials want to do.",
      },
      {
        type: "paragraph",
        text: "At North House, Douglas fir determined ceiling heights, span lengths, and joint details. The structure and the surface are the same material — an economy of means that reads as calm rather than austere.",
      },
    ],
  },
  {
    slug: "building-spaces-that-age-well",
    title: "Building spaces that age well",
    excerpt:
      "We design for patina, not preservation. Spaces that improve with use are the ones people keep.",
    category: "Architecture",
    author: "Elena Marlow",
    date: "2024-06-14",
    readTime: "6 min",
    heroImage: {
      src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1600&q=85",
      alt: "Aged timber interior with character",
    },
    content: [
      {
        type: "paragraph",
        text: "New buildings can feel sterile. Old buildings feel lived-in. The difference is not age itself — it is whether the design anticipated change, wear, and the accumulation of daily life.",
      },
      {
        type: "paragraph",
        text: "We specify materials that improve with use: oiled wood that darkens, brass that tarnishes, plaster that accepts repair. We avoid surfaces that show every mark as damage.",
      },
      {
        type: "heading",
        text: "Designing for repair",
      },
      {
        type: "paragraph",
        text: "A floor that can be sanded and re-oiled will last a century. A wall that can be patched with matching plaster will never need replacing. These are design decisions with generational consequences.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1600573472592-401b089a0cc0?w=1200&q=85",
        alt: "Timber staircase showing natural wear",
        caption: "Douglas fir stair at North House — designed to patina",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): JournalArticle | undefined {
  return journalArticles.find((a) => a.slug === slug);
}

export function getFeaturedArticles(count = 3): JournalArticle[] {
  return journalArticles.slice(0, count);
}

export function getRelatedArticles(
  slug: string,
  count = 2
): JournalArticle[] {
  const current = getArticleBySlug(slug);
  if (!current) return journalArticles.slice(0, count);
  return journalArticles
    .filter((a) => a.slug !== slug && a.category === current.category)
    .slice(0, count);
}

export const journalCategories: (JournalCategory | "All")[] = [
  "All",
  "Architecture",
  "Materials",
  "Places",
  "Studio Notes",
];
