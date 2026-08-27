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
          <p className="page-eyebrow">Writing</p>
          <h1 className="page-title">Journal</h1>
          <p className="page-intro">
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
                  "filter-tab",
                  activeCategory === cat ? "filter-tab-active" : "filter-tab-inactive"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="container-editorial space-y-16 md:space-y-24">
          {filtered.length === 0 ? (
            <div className="empty-state">
              <p className="font-display text-2xl md:text-3xl text-charcoal mb-3">
                No articles in this category
              </p>
              <p className="text-stone text-sm max-w-md mx-auto leading-relaxed">
                Browse all categories for essays on architecture, materials, places and studio practice.
              </p>
            </div>
          ) : (
            filtered.map((article, i) => (
              <JournalCard key={article.slug} article={article} variant="horizontal" index={i} />
            ))
          )}
        </div>
      </section>
    </PageTransition>
  );
}
