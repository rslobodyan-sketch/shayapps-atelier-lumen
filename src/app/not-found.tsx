import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";

export default function NotFound() {
  return (
    <PageTransition>
      <section className="min-h-[70vh] flex items-center justify-center pt-32 pb-24">
        <div className="container-editorial text-center max-w-lg">
          <p className="text-xs tracking-[0.3em] uppercase text-stone mb-6">404</p>
          <h1 className="font-display text-5xl md:text-7xl text-charcoal leading-tight mb-6">
            Page not found
          </h1>
          <p className="text-stone leading-relaxed mb-10">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s find your way back.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/"
              className="text-xs tracking-[0.2em] uppercase text-charcoal border border-charcoal px-8 py-4 hover:bg-charcoal hover:text-ivory transition-colors"
            >
              Return home
            </Link>
            <Link
              href="/work"
              className="text-xs tracking-[0.2em] uppercase text-stone link-underline"
            >
              View work
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
