export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: {
    src: string;
    alt: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    name: "Elena Marlow",
    role: "Creative Director",
    bio: "Elena founded Atelier Lumen after twelve years with leading European practices. Her work centres on the relationship between landscape, material, and memory.",
    image: {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
      alt: "Elena Marlow, Creative Director",
    },
  },
  {
    name: "Jonas Reed",
    role: "Architect",
    bio: "Jonas leads our architectural team with a focus on residential and cultural projects. He trained in Copenhagen and London.",
    image: {
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
      alt: "Jonas Reed, Architect",
    },
  },
  {
    name: "Maya Laurent",
    role: "Interior Architect",
    bio: "Maya brings a material-led approach to interior architecture. Her background in textile design informs every surface specification.",
    image: {
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
      alt: "Maya Laurent, Interior Architect",
    },
  },
  {
    name: "Daniel Hart",
    role: "Project Director",
    bio: "Daniel ensures our projects move from concept to completion with clarity. He manages client relationships and site coordination across all studios.",
    image: {
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
      alt: "Daniel Hart, Project Director",
    },
  },
];

export const studioLocations = [
  { city: "London", country: "United Kingdom", role: "Headquarters" },
  { city: "Copenhagen", country: "Denmark", role: "Nordic studio" },
  { city: "Lisbon", country: "Portugal", role: "Southern Europe" },
];

export const philosophy = [
  {
    title: "Place before precedent",
    text: "We begin every project by understanding its site — climate, light, history, and the way people already move through it. Style follows context.",
  },
  {
    title: "Material honesty",
    text: "We specify materials for how they behave over decades, not how they photograph on opening day. Patina is part of the design.",
  },
  {
    title: "Quiet confidence",
    text: "Our best work does not announce itself. It creates the conditions for life, work, and memory to unfold without interruption.",
  },
];

export const approachSteps = [
  {
    number: "01",
    title: "Listen",
    text: "We spend time understanding how you live, work, or welcome guests. Briefs emerge from conversation, not questionnaires.",
  },
  {
    number: "02",
    title: "Study",
    text: "Site analysis, light studies, and material research inform a spatial concept before any detail is drawn.",
  },
  {
    number: "03",
    title: "Shape",
    text: "Architecture and interiors develop together — not as separate disciplines, but as a single spatial proposition.",
  },
  {
    number: "04",
    title: "Deliver",
    text: "We remain involved through construction, working closely with craftspeople to ensure intent survives the build process.",
  },
];
