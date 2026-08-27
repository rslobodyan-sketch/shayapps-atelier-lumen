import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Editorial essays on architecture, materials, places and studio practice from Atelier Lumen.",
};

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
