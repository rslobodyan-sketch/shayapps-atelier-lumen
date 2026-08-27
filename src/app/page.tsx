"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { EditorialSection } from "@/components/EditorialSection";
import { SectionHeading } from "@/components/SectionHeading";
import { SelectedWork } from "@/components/SelectedWork";
import { ImageReveal } from "@/components/ImageReveal";
import { JournalCard } from "@/components/JournalCard";
import { getFeaturedProjects } from "@/data/projects";
import { getFeaturedArticles } from "@/data/journal";
import { homeServices } from "@/data/services";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const featuredArticles = getFeaturedArticles(3);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col">
        <div className="absolute inset-0">
          <ImageReveal
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85"
            alt="Modern architectural residence with dramatic concrete and glass"
            fill
            priority
            sizes="100vw"
            className="absolute inset-0"
            imageClassName="brightness-[0.75]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-ivory" />
        </div>

        <div className="relative flex-1 flex flex-col justify-end container-editorial pb-24 md:pb-32 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display text-[clamp(3rem,10vw,8rem)] leading-[0.9] text-ivory tracking-tight">
              Spaces
              <br />
              <span className="italic font-light">with presence.</span>
            </h1>
            <p className="mt-8 text-ivory/80 text-base md:text-lg max-w-md leading-relaxed">
              Architecture and interiors shaped by material, light and place.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
            aria-hidden="true"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-ivory/60">Scroll</span>
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="block w-px h-8 bg-ivory/40"
            />
          </motion.div>
        </div>
      </section>

      {/* Selected Work */}
      <EditorialSection>
        <div className="container-editorial">
          <SectionHeading
            title="Selected work"
            subtitle="A curated selection of recent architecture and interior projects."
            className="mb-16 md:mb-24"
          />
          <SelectedWork projects={featuredProjects} />
          <div className="mt-16 md:mt-24 text-center">
            <Link
              href="/work"
              className="btn-text link-underline"
            >
              View all projects
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </EditorialSection>

      {/* Studio Statement */}
      <EditorialSection className="bg-limestone/40">
        <div className="container-editorial max-w-5xl">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-[clamp(1.75rem,4vw,3.5rem)] leading-[1.15] text-charcoal text-balance"
          >
            We design spaces that become part of how people remember a place.
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-10 text-stone text-base md:text-lg max-w-2xl leading-relaxed"
          >
            Atelier Lumen is an independent studio working across architecture and interior
            design. We partner with clients who value restraint, material integrity, and
            the quiet confidence of well-considered space.
          </motion.p>
          <Link
            href="/studio"
            className="inline-block mt-10 text-xs tracking-[0.2em] uppercase text-clay link-underline"
          >
            About the studio
          </Link>
        </div>
      </EditorialSection>

      {/* Services */}
      <EditorialSection>
        <div className="container-editorial">
          <SectionHeading title="Services" className="mb-16 md:mb-20" />
          <div className="border-t border-warm-grey/40">
            {homeServices.map((service, i) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6 py-6 md:py-8 border-b border-warm-grey/40"
              >
                <Link href="/services" className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 md:gap-10 flex-1 min-w-0">
                  <span className="text-xs tracking-[0.15em] text-stone shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-2xl md:text-4xl text-charcoal group-hover:text-clay transition-colors leading-tight">
                    {service}
                  </span>
                </Link>
                <span className="text-stone opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" aria-hidden="true">
                  &rarr;
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </EditorialSection>

      {/* Featured Project Cinematic */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-end">
        <div className="absolute inset-0">
          <ImageReveal
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=85"
            alt="The Foundry Hotel — boutique hospitality interior"
            fill
            sizes="100vw"
            className="absolute inset-0"
            imageClassName="brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
        </div>
        <div className="relative container-editorial pb-16 md:pb-24 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.2em] uppercase text-ivory/70 mb-4">Featured project</p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-ivory leading-tight">
              The Foundry Hotel
            </h2>
            <p className="mt-4 text-ivory/70 text-sm tracking-[0.1em] uppercase">
              Hospitality / London / 2024
            </p>
            <Link
              href="/work/foundry-hotel"
              className="btn-primary-light mt-8"
            >
              View project
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Numbers */}
      <EditorialSection className="py-16 md:py-24">
        <div className="container-editorial">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: siteConfig.stats.projects, label: "Projects" },
              { value: siteConfig.stats.cities, label: "Cities" },
              { value: siteConfig.stats.years, label: "Years" },
              { value: siteConfig.stats.approach, label: "Approach" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center md:text-left"
              >
                <p className="font-display text-5xl md:text-7xl text-charcoal leading-none">
                  {String(stat.value).padStart(2, "0")}
                </p>
                <p className="mt-2 text-xs tracking-[0.2em] uppercase text-stone">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </EditorialSection>

      {/* Journal */}
      <EditorialSection className="bg-limestone/30">
        <div className="container-editorial">
          <SectionHeading
            title="Journal"
            subtitle="Essays on architecture, materials, and the making of place."
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {featuredArticles.map((article, i) => (
              <JournalCard key={article.slug} article={article} variant="featured" index={i} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/journal"
              className="btn-text link-underline"
            >
              Read the journal
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </EditorialSection>

      {/* Final CTA */}
      <EditorialSection>
        <div className="container-editorial text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-charcoal leading-tight">
              Have a space in mind?
            </h2>
            <p className="mt-6 font-display text-2xl md:text-3xl text-stone italic">
              Tell us about it.
            </p>
            <Link
              href="/contact"
              className="btn-primary mt-12 px-10"
            >
              Start a conversation
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </EditorialSection>
    </PageTransition>
  );
}
