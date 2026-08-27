import type { ProjectCategory } from "./site";

export interface ProjectImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  year: string;
  featured: boolean;
  heroImage: ProjectImage;
  thumbnailImage: ProjectImage;
  introduction: string;
  challenge: string;
  approach: string;
  statement: string;
  materials: string[];
  facts: { label: string; value: string }[];
  gallery: ProjectImage[];
  layout?: "editorial" | "cinematic" | "grid-forward";
}

export const projects: Project[] = [
  {
    slug: "casa-vela",
    title: "Casa Vela",
    location: "Mallorca",
    category: "Residential",
    year: "2024",
    featured: true,
    heroImage: {
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85",
      alt: "Casa Vela — limestone villa overlooking the Mediterranean",
      width: 1920,
      height: 1280,
    },
    thumbnailImage: {
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      alt: "Casa Vela exterior at dusk",
      width: 1200,
      height: 1500,
    },
    introduction:
      "Casa Vela sits above a cove on Mallorca's north coast, where wind-sculpted limestone meets the sea. The brief asked for a home that could hold the intensity of summer light while remaining quiet through winter months.",
    challenge:
      "The site offered dramatic views but relentless afternoon sun. Our clients wanted openness without sacrificing shade, and a material palette that would weather gracefully in a coastal climate.",
    approach:
      "We shaped the plan around a central courtyard that draws air through the house. Deep overhangs modulate light; local stone and lime plaster anchor the building to its terrain. Interior volumes are kept low and horizontal, framing horizon rather than competing with it.",
    statement: "Light enters slowly here — filtered, measured, remembered.",
    materials: [
      "Local limestone",
      "Lime plaster",
      "Oiled oak",
      "Hand-trowelled terrazzo",
      "Linen upholstery",
    ],
    facts: [
      { label: "Area", value: "420 sqm" },
      { label: "Duration", value: "22 months" },
      { label: "Team", value: "6 specialists" },
      { label: "Photography", value: "Salva López" },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=85",
        alt: "Living room with stone walls and ocean view",
        width: 1400,
        height: 933,
      },
      {
        src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=85",
        alt: "Minimal kitchen with timber cabinetry",
        width: 900,
        height: 1200,
      },
      {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85",
        alt: "Bedroom with linen textures and soft light",
        width: 900,
        height: 1200,
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=85",
        alt: "Courtyard with pool and stone paving",
        width: 1400,
        height: 933,
      },
    ],
    layout: "editorial",
  },
  {
    slug: "north-house",
    title: "North House",
    location: "Copenhagen",
    category: "Residential",
    year: "2023",
    featured: true,
    heroImage: {
      src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1920&q=85",
      alt: "North House — Scandinavian timber residence",
      width: 1920,
      height: 1280,
    },
    thumbnailImage: {
      src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
      alt: "North House facade in winter light",
      width: 1200,
      height: 900,
    },
    introduction:
      "North House is a family residence in Copenhagen's Østerbro district — a restrained timber-and-brick building that responds to long Nordic winters with warmth, depth, and careful daylighting.",
    challenge:
      "A narrow urban plot required vertical organisation without losing the sense of calm our clients associated with countryside retreats. Acoustic privacy between floors was essential.",
    approach:
      "We stacked private rooms above a single open ground floor, using a double-height dining space as the home's social heart. Douglas fir lines every surface you touch; brick and concrete remain visible where structure meets light.",
    statement: "Warmth here is architectural — not decorative.",
    materials: [
      "Douglas fir",
      "Danish brick",
      "Polished concrete",
      "Wool textiles",
      "Brass hardware",
    ],
    facts: [
      { label: "Area", value: "280 sqm" },
      { label: "Duration", value: "18 months" },
      { label: "Floors", value: "3" },
      { label: "Photography", value: "Hannah Lehmann" },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1400&q=85",
        alt: "Double-height dining space with timber ceiling",
        width: 1400,
        height: 933,
      },
      {
        src: "https://images.unsplash.com/photo-1600573472592-401b089a0cc0?w=900&q=85",
        alt: "Staircase detail in Douglas fir",
        width: 900,
        height: 1200,
      },
      {
        src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&q=85",
        alt: "Study with built-in shelving",
        width: 900,
        height: 1200,
      },
      {
        src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=85",
        alt: "Exterior courtyard at twilight",
        width: 1400,
        height: 933,
      },
    ],
    layout: "cinematic",
  },
  {
    slug: "foundry-hotel",
    title: "The Foundry Hotel",
    location: "London",
    category: "Hospitality",
    year: "2024",
    featured: true,
    heroImage: {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=85",
      alt: "The Foundry Hotel lobby with industrial heritage details",
      width: 1920,
      height: 1280,
    },
    thumbnailImage: {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
      alt: "Foundry Hotel entrance hall",
      width: 1200,
      height: 1500,
    },
    introduction:
      "The Foundry Hotel occupies a Victorian ironworks in Shoreditch. We converted the building into a 42-room boutique hotel that honours industrial heritage while offering the quiet luxury of a private residence.",
    challenge:
      "Listed brick and cast-iron structure imposed strict conservation limits. Guest rooms had to feel intimate despite irregular floorplates and low ceiling heights in parts of the building.",
    approach:
      "We treated each floor as a distinct atmosphere — ground floor public rooms remain raw and voluminous; upper floors soften into plaster, velvet, and warm lighting. Original iron columns are left exposed as spatial anchors.",
    statement: "History stays visible. Comfort arrives quietly.",
    materials: [
      "Cast iron (restored)",
      "Reclaimed brick",
      "Plaster limewash",
      "Velvet upholstery",
      "Aged brass",
    ],
    facts: [
      { label: "Rooms", value: "42" },
      { label: "Duration", value: "28 months" },
      { label: "Heritage grade", value: "II*" },
      { label: "Photography", value: "Rory Gardiner" },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1400&q=85",
        alt: "Hotel bar with exposed brick and warm lighting",
        width: 1400,
        height: 933,
      },
      {
        src: "https://images.unsplash.com/photo-1611892440504-42a784e6838d?w=900&q=85",
        alt: "Guest suite with velvet headboard",
        width: 900,
        height: 1200,
      },
      {
        src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900&q=85",
        alt: "Restaurant with industrial windows",
        width: 900,
        height: 1200,
      },
      {
        src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1400&q=85",
        alt: "Lobby seating area",
        width: 1400,
        height: 933,
      },
    ],
    layout: "grid-forward",
  },
  {
    slug: "museum-no-7",
    title: "Museum No. 7",
    location: "Berlin",
    category: "Cultural",
    year: "2022",
    featured: true,
    heroImage: {
      src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1920&q=85",
      alt: "Museum No. 7 — contemporary gallery interior",
      width: 1920,
      height: 1280,
    },
    thumbnailImage: {
      src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&q=80",
      alt: "Gallery space with concrete walls",
      width: 1200,
      height: 900,
    },
    introduction:
      "Museum No. 7 is a contemporary art space in Berlin-Kreuzberg — a converted warehouse reimagined as a sequence of calm, light-calibrated galleries for rotating exhibitions.",
    challenge:
      "The client needed flexible wall systems, precise climate control, and a public identity that felt institutional without being cold. The budget required strategic intervention rather than full reconstruction.",
    approach:
      "We inserted a new timber mezzanine for offices and storage, freeing the ground floor entirely for exhibition. Perimeter skylights were added to bring north light deep into the building. Concrete floors and white walls recede; art dominates.",
    statement: "The architecture steps back so the work can speak.",
    materials: [
      "Board-formed concrete",
      "White oak flooring",
      "Steel glazing",
      "Acoustic plaster",
      "Gallery track lighting",
    ],
    facts: [
      { label: "Exhibition area", value: "1,200 sqm" },
      { label: "Duration", value: "24 months" },
      { label: "Capacity", value: "350 visitors" },
      { label: "Photography", value: "Simon Menges" },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1518998053901-5318d613d317?w=1400&q=85",
        alt: "Main gallery hall with natural light",
        width: 1400,
        height: 933,
      },
      {
        src: "https://images.unsplash.com/photo-1499787200372-70726185592e?w=900&q=85",
        alt: "Artwork on white gallery wall",
        width: 900,
        height: 1200,
      },
      {
        src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=900&q=85",
        alt: "Gallery corridor with concrete floor",
        width: 900,
        height: 1200,
      },
      {
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85",
        alt: "Exterior of converted warehouse",
        width: 1400,
        height: 933,
      },
    ],
    layout: "editorial",
  },
  {
    slug: "atelier-meridian",
    title: "Atelier Meridian",
    location: "Lisbon",
    category: "Commercial",
    year: "2023",
    featured: false,
    heroImage: {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85",
      alt: "Atelier Meridian workspace interior",
      width: 1920,
      height: 1280,
    },
    thumbnailImage: {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      alt: "Open workspace with natural light",
      width: 1200,
      height: 900,
    },
    introduction:
      "Atelier Meridian is a creative agency headquarters in Lisbon's Marvila district — a workspace designed for focus, collaboration, and the kind of unhurried thinking that good work requires.",
    challenge:
      "The client needed open plan flexibility, acoustic separation for client meetings, and a spatial identity distinct from conventional tech offices.",
    approach:
      "We divided the floorplate with timber volumes rather than walls — each pod houses a different function while maintaining visual connection across the space. Terracotta tiles and cork reference Portuguese craft traditions.",
    statement: "Workspaces should feel considered, not corporate.",
    materials: ["Cork flooring", "Terracotta tile", "Oak joinery", "Linen curtains"],
    facts: [
      { label: "Area", value: "680 sqm" },
      { label: "Duration", value: "14 months" },
      { label: "Desks", value: "48" },
      { label: "Photography", value: "Francisco Nogueira" },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1400&q=85",
        alt: "Meeting room with cork walls",
        width: 1400,
        height: 933,
      },
      {
        src: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=900&q=85",
        alt: "Desk area with natural materials",
        width: 900,
        height: 1200,
      },
    ],
    layout: "grid-forward",
  },
  {
    slug: "stone-court",
    title: "Stone Court",
    location: "Tuscany",
    category: "Residential",
    year: "2022",
    featured: false,
    heroImage: {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85",
      alt: "Stone Court villa in Tuscan landscape",
      width: 1920,
      height: 1280,
    },
    thumbnailImage: {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      alt: "Stone villa exterior",
      width: 1200,
      height: 1500,
    },
    introduction:
      "Stone Court is a rural retreat in the hills above Siena — a careful restoration of an 18th-century farmhouse extended with contemporary volumes in local travertine.",
    challenge:
      "Heritage regulations required preserving the original footprint while adding modern amenities. The clients wanted a house that felt rooted, not renovated.",
    approach:
      "New construction is set back from the original facade, connected by a glass link that reads as a threshold rather than a seam. Interiors pair original chestnut beams with contemporary plaster and stone.",
    statement: "Old and new share the same silence.",
    materials: ["Travertine", "Chestnut timber", "Terracotta", "Linen", "Ironstone"],
    facts: [
      { label: "Area", value: "510 sqm" },
      { label: "Duration", value: "26 months" },
      { label: "Land", value: "4.2 hectares" },
      { label: "Photography", value: "Paolo Abate" },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1600607687920-4e3a09aebb82?w=1400&q=85",
        alt: "Farmhouse interior with exposed beams",
        width: 1400,
        height: 933,
      },
    ],
    layout: "cinematic",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: ProjectCategory | "All"): Project[] {
  if (category === "All") return projects;
  return projects.filter((p) => p.category === category);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}

export const projectCategories: (ProjectCategory | "All")[] = [
  "All",
  "Residential",
  "Hospitality",
  "Cultural",
  "Commercial",
];
