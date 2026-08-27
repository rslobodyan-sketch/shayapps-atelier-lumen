"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ImageReveal } from "./ImageReveal";
import { ProjectMeta } from "./ProjectMeta";
import type { Project } from "@/data/projects";

interface SelectedWorkProps {
  projects: Project[];
}

export function SelectedWork({ projects }: SelectedWorkProps) {
  const layouts = [
    {
      wrapper: "col-span-12 md:col-span-7",
      aspect: "aspect-[16/10] md:aspect-[16/11]",
      titleSize: "text-4xl md:text-6xl",
      overlap: false,
    },
    {
      wrapper: "col-span-12 md:col-span-5 md:col-start-8 md:-mt-32",
      aspect: "aspect-[3/4]",
      titleSize: "text-3xl md:text-5xl",
      overlap: true,
    },
    {
      wrapper: "col-span-12",
      aspect: "aspect-[21/9] md:aspect-[21/8]",
      titleSize: "text-4xl md:text-7xl",
      overlap: false,
      fullWidth: true,
    },
    {
      wrapper: "col-span-12 md:col-span-6 md:col-start-4",
      aspect: "aspect-[4/5]",
      titleSize: "text-3xl md:text-5xl",
      overlap: false,
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-6 md:gap-8">
      {projects.map((project, i) => {
        const layout = layouts[i % layouts.length];
        return (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className={`group relative ${layout.wrapper}`}
          >
            <Link href={`/work/${project.slug}`} className="block">
              <div className={`relative overflow-hidden ${layout.aspect} mb-6`}>
                <ImageReveal
                  src={project.thumbnailImage.src}
                  alt={project.thumbnailImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="absolute inset-0"
                />
              </div>
              <div className={layout.overlap ? "md:-mt-16 relative z-10 md:pl-8" : ""}>
                <span className="text-xs tracking-[0.2em] text-stone mb-2 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={`font-display ${layout.titleSize} text-charcoal group-hover:text-clay transition-colors leading-tight`}>
                  {project.title}
                </h3>
                <ProjectMeta
                  location={project.location}
                  category={project.category}
                  year={project.year}
                  className="mt-3"
                />
              </div>
            </Link>
          </motion.article>
        );
      })}
    </div>
  );
}
