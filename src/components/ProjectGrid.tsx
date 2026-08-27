"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageReveal } from "./ImageReveal";
import { ProjectMeta } from "./ProjectMeta";
import type { Project } from "@/data/projects";
import type { ProjectCategory } from "@/data/site";
import { projectCategories } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectGridProps {
  projects: Project[];
  showFilter?: boolean;
}

export function ProjectGrid({ projects, showFilter = true }: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {showFilter && (
        <div className="container-editorial mb-12 md:mb-16">
          <div className="flex flex-wrap gap-x-6 gap-y-2" role="tablist" aria-label="Filter projects">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "filter-tab",
                  activeCategory === cat ? "filter-tab-active" : "filter-tab-inactive"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="container-editorial"
        >
          {filtered.length === 0 ? (
            <div className="empty-state">
              <p className="font-display text-2xl md:text-3xl text-charcoal mb-3">
                No projects in this category
              </p>
              <p className="text-stone text-sm max-w-md mx-auto leading-relaxed">
                Try another filter to explore our residential, hospitality, cultural and commercial work.
              </p>
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-y-24 gap-x-6">
            {filtered.map((project, index) => (
              <ProjectGridItem key={project.slug} project={project} index={index} />
            ))}
          </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function ProjectGridItem({ project, index }: { project: Project; index: number }) {
  const layouts = [
    "md:col-span-7",
    "md:col-span-5 md:col-start-8 md:mt-24",
    "md:col-span-8 md:col-start-3",
    "md:col-span-6",
    "md:col-span-6 md:col-start-7 md:mt-16",
    "md:col-span-7 md:col-start-2",
  ];
  const layoutClass = layouts[index % layouts.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
      className={cn("group", layoutClass)}
    >
      <Link href={`/work/${project.slug}`} className="block">
        <div className="relative overflow-hidden aspect-[4/5] md:aspect-[3/4] mb-5">
          <ImageReveal
            src={project.thumbnailImage.src}
            alt={project.thumbnailImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500" />
          <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full border border-ivory/60 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 translate-y-0 md:translate-y-2 md:group-hover:translate-y-0">
            <span className="text-ivory text-sm" aria-hidden="true">&rarr;</span>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="font-display text-2xl md:text-3xl text-charcoal group-hover:text-clay transition-colors">
            {project.title}
          </h2>
          <ProjectMeta
            location={project.location}
            category={project.category}
            year={project.year}
          />
        </div>
      </Link>
    </motion.article>
  );
}
