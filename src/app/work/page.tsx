import type { Metadata } from "next";
import { PageTransition } from "@/components/PageTransition";
import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "An editorial archive of architecture and interior design projects by Atelier Lumen — residential, hospitality, cultural and commercial.",
};

export default function WorkPage() {
  return (
    <PageTransition>
      <section className="pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="container-editorial mb-16 md:mb-24">
          <p className="page-eyebrow">Portfolio</p>
          <h1 className="page-title">Work</h1>
          <p className="page-intro">
            Selected architecture and interior projects across residential, hospitality,
            cultural and commercial environments.
          </p>
        </div>
        <ProjectGrid projects={projects} />
      </section>
    </PageTransition>
  );
}
