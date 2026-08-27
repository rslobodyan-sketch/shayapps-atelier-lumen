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
          <p className="text-xs tracking-[0.2em] uppercase text-stone mb-4">Portfolio</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-charcoal leading-[0.95]">
            Work
          </h1>
          <p className="mt-6 text-stone text-base md:text-lg max-w-xl leading-relaxed">
            Selected architecture and interior projects across residential, hospitality,
            cultural and commercial environments.
          </p>
        </div>
        <ProjectGrid projects={projects} />
      </section>
    </PageTransition>
  );
}
