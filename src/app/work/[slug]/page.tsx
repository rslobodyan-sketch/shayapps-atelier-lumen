import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageTransition } from "@/components/PageTransition";
import {
  ProjectHero,
  ProjectFeature,
  ProjectNavigation,
} from "@/components/ProjectHero";
import { ImageReveal } from "@/components/ImageReveal";
import { EditorialSection } from "@/components/EditorialSection";
import { projects, getProjectBySlug, getAdjacentProjects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.introduction,
    openGraph: {
      title: `${project.title} — Atelier Lumen`,
      description: project.introduction,
      images: [{ url: project.heroImage.src }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <PageTransition>
      <ProjectHero project={project} />

      <EditorialSection className="pt-16 md:pt-24 pb-8">
        <div className="container-editorial max-w-4xl">
          <p className="text-lg md:text-xl text-charcoal/90 leading-relaxed">
            {project.introduction}
          </p>
        </div>
      </EditorialSection>

      <EditorialSection className="py-12 md:py-16">
        <div className="container-editorial space-y-20 md:space-y-28">
          <ProjectFeature label="Brief" title="The challenge">
            <p>{project.challenge}</p>
          </ProjectFeature>
          <ProjectFeature label="Approach" title="Design response">
            <p>{project.approach}</p>
          </ProjectFeature>
        </div>
      </EditorialSection>

      {project.gallery[0] && (
        <section className="container-editorial mb-16 md:mb-24">
          <ImageReveal
            src={project.gallery[0].src}
            alt={project.gallery[0].alt}
            width={project.gallery[0].width}
            height={project.gallery[0].height}
            sizes="(max-width: 768px) 100vw, 90vw"
          />
        </section>
      )}

      {project.gallery.length > 1 && (
        <section className="container-editorial mb-16 md:mb-24">
          <div
            className={`grid gap-4 md:gap-6 ${
              project.layout === "grid-forward"
                ? "grid-cols-2 md:grid-cols-3"
                : "grid-cols-1 md:grid-cols-2"
            }`}
          >
            {project.gallery.slice(1).map((image) => (
              <div
                key={image.src}
                className={
                  project.layout === "cinematic" && project.gallery.indexOf(image) === 1
                    ? "md:col-span-2 aspect-[21/9] overflow-hidden"
                    : "aspect-[4/5] overflow-hidden"
                }
              >
                <ImageReveal
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="relative w-full h-full"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <EditorialSection className="bg-limestone/40">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <p className="text-xs tracking-[0.2em] uppercase text-stone mb-4">Materials</p>
              <ul className="space-y-3">
                {project.materials.map((material) => (
                  <li key={material} className="font-display text-xl md:text-2xl text-charcoal">
                    {material}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-6 md:col-start-7 flex items-center">
              <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal leading-snug italic">
                &ldquo;{project.statement}&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </EditorialSection>

      <EditorialSection>
        <div className="container-editorial">
          <p className="text-xs tracking-[0.2em] uppercase text-stone mb-8">Project facts</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-warm-grey/40 pt-8">
            {project.facts.map((fact) => (
              <div key={fact.label}>
                <p className="text-xs tracking-[0.15em] uppercase text-stone mb-2">{fact.label}</p>
                <p className="text-charcoal">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </EditorialSection>

      <ProjectNavigation
        prev={prev ? { slug: prev.slug, title: prev.title } : null}
        next={next ? { slug: next.slug, title: next.title } : null}
      />
    </PageTransition>
  );
}
