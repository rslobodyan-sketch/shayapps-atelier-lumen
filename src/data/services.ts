export interface Service {
  number: string;
  title: string;
  description: string;
  scope: string[];
  process: string[];
}

export const services: Service[] = [
  {
    number: "01",
    title: "Architecture",
    description:
      "Complete architectural design from concept through planning approval and construction documentation. We work across residential, hospitality, and cultural typologies.",
    scope: [
      "Site analysis and feasibility",
      "Planning and heritage consultation",
      "Full architectural documentation",
      "Construction administration",
    ],
    process: [
      "Brief development and site study",
      "Concept design and spatial planning",
      "Planning submission and approvals",
      "Technical design and tender",
      "Site supervision to completion",
    ],
  },
  {
    number: "02",
    title: "Interior Architecture",
    description:
      "Spatial interiors that integrate structure, joinery, lighting, and material into a coherent whole. We design rooms, not rooms filled with furniture.",
    scope: [
      "Spatial planning and flow",
      "Custom joinery design",
      "Material and finish specification",
      "Lighting design coordination",
    ],
    process: [
      "Interior concept and mood development",
      "Detail design and sampling",
      "FF&E specification",
      "Installation oversight",
    ],
  },
  {
    number: "03",
    title: "Hospitality",
    description:
      "Boutique hotels, restaurants, and destination venues that create lasting impressions for guests while functioning efficiently for operators.",
    scope: [
      "Guest experience mapping",
      "Public and private realm design",
      "Operational flow planning",
      "Brand environment integration",
    ],
    process: [
      "Brand and experience workshop",
      "Concept and test-fit planning",
      "Full design development",
      "Opening support and styling",
    ],
  },
  {
    number: "04",
    title: "Residential",
    description:
      "Private homes designed for how people actually live — with attention to light, privacy, material warmth, and the daily rituals of domestic life.",
    scope: [
      "New-build and renovation",
      "Landscape integration",
      "Interior architecture",
      "Art and object placement",
    ],
    process: [
      "Client immersion and brief",
      "Concept and planning",
      "Detail design",
      "Construction and handover",
    ],
  },
  {
    number: "05",
    title: "Cultural",
    description:
      "Museums, galleries, and cultural institutions where architecture serves the work — creating calm, light-calibrated environments for art and gathering.",
    scope: [
      "Gallery and exhibition design",
      "Climate and conservation coordination",
      "Public realm and accessibility",
      "Flexible wall and lighting systems",
    ],
    process: [
      "Institutional brief and stakeholder engagement",
      "Spatial concept and feasibility",
      "Technical coordination with curators",
      "Phased construction management",
    ],
  },
  {
    number: "06",
    title: "Brand Environments",
    description:
      "Physical spaces that express brand identity through material, proportion, and atmosphere — not signage and graphics alone.",
    scope: [
      "Retail and showroom design",
      "Workspace and headquarters",
      "Pop-up and temporary installations",
      "Material and spatial brand guidelines",
    ],
    process: [
      "Brand immersion workshop",
      "Spatial concept development",
      "Prototype and sampling",
      "Roll-out documentation",
    ],
  },
];

export const homeServices = [
  "Architecture",
  "Interior Architecture",
  "Hospitality",
  "Residential",
  "Cultural Spaces",
  "Brand Environments",
];
