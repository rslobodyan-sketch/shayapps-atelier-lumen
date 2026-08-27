import Link from "next/link";
import { navigation, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-warm-grey/40 bg-limestone/30">
      <div className="container-editorial py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="font-display text-3xl md:text-4xl text-charcoal hover:text-clay transition-colors"
            >
              Atelier Lumen
            </Link>
            <p className="mt-4 text-stone text-sm max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs tracking-[0.2em] uppercase text-stone mb-4">Navigate</p>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-charcoal hover:text-clay transition-colors link-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs tracking-[0.2em] uppercase text-stone mb-4">Studio</p>
            <address className="not-italic text-sm text-charcoal space-y-1">
              <p>{siteConfig.address.line1}</p>
              <p>{siteConfig.address.line2}</p>
              <p className="pt-3">
                <a href={`mailto:${siteConfig.email}`} className="hover:text-clay transition-colors">
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-clay transition-colors">
                  {siteConfig.phone}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-warm-grey/30 flex flex-col md:flex-row justify-between gap-4 text-xs text-stone">
          <p>&copy; {new Date().getFullYear()} Atelier Lumen. Portfolio demonstration.</p>
          <p className="tracking-wide">Fictional studio — ShayApps portfolio project</p>
        </div>
      </div>
    </footer>
  );
}
