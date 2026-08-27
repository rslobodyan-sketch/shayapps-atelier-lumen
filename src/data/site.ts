export const siteConfig = {
  name: "Atelier Lumen",
  tagline: "Spaces with presence.",
  description:
    "An independent architecture and interior design studio creating considered spaces for hospitality, residential and cultural environments.",
  email: "studio@atelierlumen.com",
  phone: "+44 20 7946 0958",
  address: {
    line1: "14 Clerkenwell Close",
    line2: "London EC1R 0AA",
    country: "United Kingdom",
  },
  social: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  stats: {
    projects: 18,
    cities: 9,
    years: 14,
    approach: 1,
  },
};

export const navigation = [
  { label: "Work", href: "/work" },
  { label: "Studio", href: "/studio" },
  { label: "Services", href: "/services" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export type ProjectCategory =
  | "Residential"
  | "Hospitality"
  | "Cultural"
  | "Commercial";

export type JournalCategory =
  | "Architecture"
  | "Materials"
  | "Places"
  | "Studio Notes";
