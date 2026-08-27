"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ImageReveal } from "./ImageReveal";
import { ProjectMeta } from "./ProjectMeta";
import type { Project } from "@/data/projects";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-end">
      <div className="absolute inset-0">
        <ImageReveal
          src={project.heroImage.src}
          alt={project.heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0"
          imageClassName="brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent" />
      </div>

      <div className="relative container-editorial pb-16 md:pb-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProjectMeta
            location={project.location}
            category={project.category}
            year={project.year}
            variant="overlay"
            className="mb-6"
          />
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-ivory leading-[0.95]">
            {project.title}
          </h1>
        </motion.div>
      </div>
    </section>
  );
}

interface ProjectFeatureProps {
  label: string;
  title: string;
  children: React.ReactNode;
}

export function ProjectFeature({ label, title, children }: ProjectFeatureProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
      <div className="md:col-span-3">
        <p className="text-xs tracking-[0.2em] uppercase text-stone">{label}</p>
        <h2 className="font-display text-2xl md:text-3xl text-charcoal mt-2">{title}</h2>
      </div>
      <div className="md:col-span-8 md:col-start-5">
        <div className="text-charcoal/90 leading-relaxed space-y-4">{children}</div>
      </div>
    </div>
  );
}

interface ProjectNavigationProps {
  prev: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
}

export function ProjectNavigation({ prev, next }: ProjectNavigationProps) {
  return (
    <nav className="border-t border-warm-grey/40" aria-label="Project navigation">
      <div className="container-editorial py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {prev ? (
          <Link href={`/work/${prev.slug}`} className="group">
            <p className="text-xs tracking-[0.2em] uppercase text-stone mb-2">Previous</p>
            <p className="font-display text-2xl md:text-3xl text-charcoal group-hover:text-clay transition-colors flex items-center gap-3">
              <span aria-hidden="true">&larr;</span>
              {prev.title}
            </p>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link href={`/work/${next.slug}`} className="group md:text-right">
            <p className="text-xs tracking-[0.2em] uppercase text-stone mb-2">Next</p>
            <p className="font-display text-2xl md:text-3xl text-charcoal group-hover:text-clay transition-colors flex items-center gap-3 md:justify-end">
              {next.title}
              <span aria-hidden="true">&rarr;</span>
            </p>
          </Link>
        ) : null}
      </div>
    </nav>
  );
}
