import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";
import { EditorialSection } from "@/components/EditorialSection";
import { ImageReveal } from "@/components/ImageReveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  teamMembers,
  studioLocations,
  philosophy,
  approachSteps,
} from "@/data/team";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Meet Atelier Lumen — an independent architecture and interior design studio with offices in London, Copenhagen and Lisbon.",
};

export default function StudioPage() {
  return (
    <PageTransition>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container-editorial">
          <p className="page-eyebrow">About</p>
          <h1 className="page-title max-w-4xl">
            A studio shaped by place and material
          </h1>
          <p className="page-intro">
            Founded in 2010, Atelier Lumen works at the intersection of architecture and
            interior design — creating spaces for hospitality, residential and cultural
            clients across Europe.
          </p>
        </div>
      </section>

      <section className="relative h-[50vh] md:h-[70vh] mb-16 md:mb-24">
        <ImageReveal
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85"
          alt="Atelier Lumen studio workspace"
          fill
          sizes="100vw"
          className="absolute inset-0"
        />
      </section>

      <EditorialSection>
        <div className="container-editorial">
          <SectionHeading title="Philosophy" className="mb-16 md:mb-20" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {philosophy.map((item, i) => (
              <div key={item.title} className="border-t border-warm-grey/40 pt-8">
                <span className="text-xs tracking-[0.2em] text-stone">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-charcoal mt-4 mb-4">
                  {item.title}
                </h3>
                <p className="text-stone leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </EditorialSection>

      <EditorialSection className="bg-limestone/40">
        <div className="container-editorial">
          <SectionHeading title="Approach" subtitle="How we work with clients and sites." className="mb-16" />
          <div className="space-y-0">
            {approachSteps.map((step) => (
              <div
                key={step.number}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-warm-grey/40 items-start"
              >
                <span className="md:col-span-1 font-display text-4xl md:text-5xl text-clay/60">
                  {step.number}
                </span>
                <h3 className="md:col-span-3 font-display text-2xl md:text-3xl text-charcoal">
                  {step.title}
                </h3>
                <p className="md:col-span-7 md:col-start-5 text-stone leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </EditorialSection>

      <EditorialSection>
        <div className="container-editorial">
          <SectionHeading title="Team" subtitle="The people behind the work." className="mb-16 md:mb-20" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12">
            {teamMembers.map((member, i) => (
              <article
                key={member.name}
                className={`grid grid-cols-5 gap-6 items-start ${
                  i % 2 === 1 ? "md:mt-16" : ""
                }`}
              >
                <div className="col-span-2 aspect-[3/4] overflow-hidden relative">
                  <ImageReveal
                    src={member.image.src}
                    alt={member.image.alt}
                    fill
                    sizes="200px"
                    className="absolute inset-0"
                    imageClassName="grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="col-span-3 pt-4">
                  <h3 className="font-display text-2xl md:text-3xl text-charcoal">{member.name}</h3>
                  <p className="text-xs tracking-[0.15em] uppercase text-clay mt-1 mb-4">{member.role}</p>
                  <p className="text-stone text-sm leading-relaxed">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </EditorialSection>

      <EditorialSection className="bg-charcoal text-ivory">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <SectionHeading title="Locations" className="mb-12 [&_h2]:text-ivory" />
              <div className="space-y-8">
                {studioLocations.map((loc) => (
                  <div key={loc.city} className="border-t border-ivory/20 pt-6">
                    <h3 className="font-display text-3xl text-ivory">{loc.city}</h3>
                    <p className="text-ivory/60 text-sm mt-1">{loc.country}</p>
                    <p className="text-xs tracking-[0.15em] uppercase text-clay mt-2">{loc.role}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: siteConfig.stats.projects, label: "Projects completed" },
                  { value: siteConfig.stats.cities, label: "Cities" },
                  { value: siteConfig.stats.years, label: "Years of practice" },
                  { value: "12", label: "Team members" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-5xl text-ivory">{stat.value}</p>
                    <p className="text-xs tracking-[0.15em] uppercase text-ivory/50 mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </EditorialSection>

      <EditorialSection>
        <div className="container-editorial text-center">
          <h2 className="font-display text-3xl md:text-5xl text-charcoal mb-8">
            Interested in working together?
          </h2>
          <Link
            href="/contact"
            className="btn-primary"
          >
            Get in touch
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </EditorialSection>
    </PageTransition>
  );
}
