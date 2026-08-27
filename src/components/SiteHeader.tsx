"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { navigation, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isDarkHero =
    pathname === "/" ||
    /^\/work\/[^/]+$/.test(pathname) ||
    /^\/journal\/[^/]+$/.test(pathname);
  const useLightHeader = isDarkHero && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-ivory/95 backdrop-blur-sm border-b border-warm-grey/40 py-4"
            : "bg-transparent py-5 md:py-8",
          useLightHeader && "md:bg-gradient-to-b md:from-charcoal/25 md:to-transparent"
        )}
      >
        <div className="container-editorial flex items-center justify-between">
          <Link
            href="/"
            className={cn(
              "font-body text-xs md:text-sm tracking-[0.25em] uppercase transition-colors duration-300",
              useLightHeader
                ? "text-ivory hover:text-ivory/75"
                : "text-charcoal hover:text-clay"
            )}
          >
            {siteConfig.name}
          </Link>

          <nav className="hidden md:flex items-center gap-8 lg:gap-12" aria-label="Main navigation">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-body text-xs tracking-[0.15em] uppercase link-underline transition-colors duration-300",
                    useLightHeader
                      ? isActive
                        ? "text-ivory"
                        : "text-ivory/75 hover:text-ivory"
                      : isActive
                        ? "text-clay"
                        : "text-charcoal hover:text-clay"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="md:hidden flex flex-col gap-1.5 p-3 -mr-3 rounded-sm"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <span className={cn("block w-6 h-px transition-colors", useLightHeader ? "bg-ivory" : "bg-charcoal")} />
            <span className={cn("block w-4 h-px ml-auto transition-colors", useLightHeader ? "bg-ivory" : "bg-charcoal")} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
