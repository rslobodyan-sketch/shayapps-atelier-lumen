import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";
import { EditorialSection } from "@/components/EditorialSection";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Architecture, interior architecture, hospitality, residential, cultural and brand environment design services by Atelier Lumen.",
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container-editorial max-w-4xl">
          <p className="page-eyebrow">What we do</p>
          <h1 className="page-title">Services</h1>
          <p className="page-intro max-w-2xl">
            We offer integrated architecture and interior design services — from initial
            concept through to construction oversight. Every engagement begins with listening.
          </p>
        </div>
      </section>

      <EditorialSection className="pt-0">
        <div className="container-editorial">
          {services.map((service) => (
            <article
              key={service.title}
              id={service.title.toLowerCase().replace(/\s+/g, "-")}
              className="border-t border-warm-grey/40 py-16 md:py-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                <div className="lg:col-span-4">
                  <span className="font-display text-6xl md:text-8xl text-clay/30 leading-none">
                    {service.number}
                  </span>
                  <h2 className="font-display text-3xl md:text-5xl text-charcoal mt-4 leading-tight">
                    {service.title}
                  </h2>
                  <p className="mt-6 text-stone leading-relaxed">{service.description}</p>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="text-xs tracking-[0.2em] uppercase text-stone mb-6">Typical scope</h3>
                  <ul className="space-y-3">
                    {service.scope.map((item) => (
                      <li key={item} className="text-charcoal flex items-start gap-3">
                        <span className="text-clay mt-1.5 text-[8px]" aria-hidden="true">&#9679;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="text-xs tracking-[0.2em] uppercase text-stone mb-6">Process</h3>
                  <ol className="space-y-4">
                    {service.process.map((step, j) => (
                      <li key={step} className="flex gap-4 text-charcoal">
                        <span className="text-xs text-stone mt-0.5 w-5 shrink-0">
                          {String(j + 1).padStart(2, "0")}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </article>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection className="bg-limestone/40">
        <div className="container-editorial text-center max-w-2xl mx-auto">
          <SectionHeading
            title="Every project begins with a conversation"
            size="large"
            align="center"
          />
          <Link
            href="/contact"
            className="btn-primary mt-12"
          >
            Discuss your project
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </EditorialSection>
    </PageTransition>
  );
}
