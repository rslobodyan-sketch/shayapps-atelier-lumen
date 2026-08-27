import type { Metadata } from "next";
import { PageTransition } from "@/components/PageTransition";
import { EditorialSection } from "@/components/EditorialSection";
import { ContactForm, ContactInfo } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Atelier Lumen about your architecture or interior design project.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container-editorial max-w-4xl">
          <p className="text-xs tracking-[0.2em] uppercase text-stone mb-4">Enquiries</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-charcoal leading-[1.05]">
            Let&apos;s make something worth remembering.
          </h1>
          <p className="mt-8 text-stone text-base md:text-lg max-w-xl leading-relaxed">
            Whether you&apos;re planning a new home, a boutique hotel, or a cultural space —
            we&apos;d like to hear about it. Share a few details and we&apos;ll be in touch
            within two business days.
          </p>
        </div>
      </section>

      <EditorialSection className="pt-0">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <ContactInfo />
            </div>
          </div>
        </div>
      </EditorialSection>
    </PageTransition>
  );
}
