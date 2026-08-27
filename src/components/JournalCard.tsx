"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ImageReveal } from "./ImageReveal";
import type { JournalArticle } from "@/data/journal";
import { formatDate } from "@/lib/utils";

interface JournalCardProps {
  article: JournalArticle;
  variant?: "default" | "horizontal" | "featured";
  index?: number;
}

export function JournalCard({ article, variant = "default", index = 0 }: JournalCardProps) {
  if (variant === "horizontal") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center border-b border-warm-grey/30 pb-12"
      >
        <Link href={`/journal/${article.slug}`} className="md:col-span-5 block overflow-hidden aspect-[4/3]">
          <ImageReveal
            src={article.heroImage.src}
            alt={article.heroImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="relative w-full h-full min-h-[240px]"
          />
        </Link>
        <div className="md:col-span-7">
          <p className="text-xs tracking-[0.15em] uppercase text-stone mb-3">
            {article.category} &mdash; {formatDate(article.date)}
          </p>
          <Link href={`/journal/${article.slug}`}>
            <h3 className="font-display text-2xl md:text-4xl text-charcoal group-hover:text-clay transition-colors leading-tight">
              {article.title}
            </h3>
          </Link>
          <p className="mt-4 text-stone leading-relaxed max-w-lg">{article.excerpt}</p>
          <Link
            href={`/journal/${article.slug}`}
            className="inline-block mt-6 btn-text link-underline"
          >
            Read article
          </Link>
        </div>
      </motion.article>
    );
  }

  if (variant === "featured") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group"
      >
        <Link href={`/journal/${article.slug}`} className="block">
          <div className="relative overflow-hidden aspect-[3/4] mb-5">
            <ImageReveal
              src={article.heroImage.src}
              alt={article.heroImage.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="absolute inset-0"
            />
          </div>
          <p className="text-xs tracking-[0.15em] uppercase text-stone mb-2">
            {article.category}
          </p>
          <h3 className="font-display text-xl md:text-2xl text-charcoal group-hover:text-clay transition-colors leading-snug">
            {article.title}
          </h3>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/journal/${article.slug}`} className="block">
        <div className="relative overflow-hidden aspect-[4/3] mb-5">
          <ImageReveal
            src={article.heroImage.src}
            alt={article.heroImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="absolute inset-0"
          />
        </div>
        <p className="text-xs tracking-[0.15em] uppercase text-stone mb-2">
          {article.category} &mdash; {article.readTime}
        </p>
        <h3 className="font-display text-xl md:text-2xl text-charcoal group-hover:text-clay transition-colors">
          {article.title}
        </h3>
        <p className="mt-2 text-sm text-stone line-clamp-2">{article.excerpt}</p>
      </Link>
    </motion.article>
  );
}
