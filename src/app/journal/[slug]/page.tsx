import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";
import { ImageReveal } from "@/components/ImageReveal";
import { JournalCard } from "@/components/JournalCard";
import { EditorialSection } from "@/components/EditorialSection";
import {
  journalArticles,
  getArticleBySlug,
  getRelatedArticles,
  type JournalBlock,
} from "@/data/journal";
import { formatDate } from "@/lib/utils";

interface JournalArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return journalArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: JournalArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.heroImage.src }],
    },
  };
}

function ArticleContent({ blocks }: { blocks: JournalBlock[] }) {
  return (
    <div className="space-y-8">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={i} className="text-charcoal/90 leading-[1.8] text-base md:text-lg">
                {block.text}
              </p>
            );
          case "heading":
            return (
              <h2 key={i} className="font-display text-2xl md:text-3xl text-charcoal pt-4">
                {block.text}
              </h2>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-2 border-clay pl-6 md:pl-8 my-12 py-2"
              >
                <p className="font-display text-2xl md:text-3xl text-charcoal italic leading-snug">
                  &ldquo;{block.text}&rdquo;
                </p>
                {block.attribution && (
                  <cite className="block mt-4 text-sm text-stone not-italic">
                    — {block.attribution}
                  </cite>
                )}
              </blockquote>
            );
          case "image":
            return (
              <figure key={i} className="my-12">
                <ImageReveal
                  src={block.src}
                  alt={block.alt}
                  width={1200}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
                {block.caption && (
                  <figcaption className="mt-3 text-sm text-stone">{block.caption}</figcaption>
                )}
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

export default async function JournalArticlePage({ params }: JournalArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug, 2);

  return (
    <PageTransition>
      <article>
        <header className="pt-32 md:pt-40 pb-12 md:pb-16">
          <div className="container-editorial max-w-4xl">
            <p className="text-xs tracking-[0.15em] uppercase text-stone mb-6">
              {article.category} &mdash; {formatDate(article.date)} &mdash; {article.readTime}
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-charcoal leading-[1.05]">
              {article.title}
            </h1>
            <p className="mt-6 text-stone text-lg leading-relaxed">{article.excerpt}</p>
            <p className="mt-8 text-sm text-stone">By {article.author}</p>
          </div>
        </header>

        <section className="relative h-[40vh] md:h-[60vh] mb-16 md:mb-24">
          <ImageReveal
            src={article.heroImage.src}
            alt={article.heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="absolute inset-0"
          />
        </section>

        <EditorialSection className="pt-0 pb-16">
          <div className="container-editorial max-w-2xl mx-auto">
            <ArticleContent blocks={article.content} />
          </div>
        </EditorialSection>

        {related.length > 0 && (
          <EditorialSection className="bg-limestone/30 border-t border-warm-grey/40">
            <div className="container-editorial">
              <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-12">Related stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {related.map((item, i) => (
                  <JournalCard key={item.slug} article={item} index={i} />
                ))}
              </div>
              <div className="mt-12">
                <Link
                  href="/journal"
                  className="text-xs tracking-[0.2em] uppercase text-charcoal link-underline"
                >
                  Back to journal
                </Link>
              </div>
            </div>
          </EditorialSection>
        )}
      </article>
    </PageTransition>
  );
}
