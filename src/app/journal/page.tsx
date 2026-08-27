"use client";

import { useState } from "react";
import { PageTransition } from "@/components/PageTransition";
import { JournalCard } from "@/components/JournalCard";
import { journalArticles, journalCategories } from "@/data/journal";
import type { JournalCategory } from "@/data/site";
import { cn } from "@/lib/utils";

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState<JournalCategory | "All">("All");

  const filtered =
    activeCategory === "All"
      ? journalArticles
      : journalArticles.filter((a) => a.category === activeCategory);

  return (
    <PageTransition>
      <section className="pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="container-editorial mb-16 md:mb-24">
          <p className="text-xs tracking-[0.2em] uppercase text-stone mb-4">Writing</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-charcoal leading-[0.95]">
            Journal
          </h1>
          <p className="mt-6 text-stone text-base md:text-lg max-w-xl leading-relaxed">
            Essays on architecture, materials, places and the quiet work of making space.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10" role="tablist" aria-label="Filter articles">
            {journalCategories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "text-xs tracking-[0.15em] uppercase transition-colors duration-300 pb-1 border-b-2",
                  activeCategory === cat
                    ? "text-charcoal border-clay"
                    : "text-stone border-transparent hover:text-charcoal"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="container-editorial space-y-16 md:space-y-24">
          {filtered.map((article, i) => (
            <JournalCard key={article.slug} article={article} variant="horizontal" index={i} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
