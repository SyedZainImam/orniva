import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections — Orniva",
  description: "Explore our curated collections of elegant jewellery designed for every moment.",
};

const collections = [
  { title: "Bangles & Bracelets", slug: "bangles", description: "Timeless pieces that wrap your style in elegance. From delicate daily-wear bangles to ornate statement pieces." },
  { title: "Necklaces & Pendants", slug: "necklaces", description: "Delicate to statement designs for every look. Discover pieces that frame your face with elegance." },
  { title: "Earrings", slug: "earrings", description: "From minimal studs to bold, eye-catching jhumkas and hoops. Complete your look with the perfect pair." },
  { title: "Rings", slug: "rings", description: "Crafted to add charm and personality. Find the perfect ring for every finger and every occasion." },
  { title: "Bracelets", slug: "bracelets", description: "Elegant chain bracelets and cuffs that add a touch of sophistication to your wrist." },
  { title: "Bridal Collection", slug: "bridal", description: "Complete bridal sets designed to make your special day even more memorable." },
];

export default function CollectionsPage() {
  return (
    <>
      <section className="bg-bg-card border-b border-border py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <p className="text-gold font-heading text-[11px] tracking-[0.3em] uppercase mb-3">Discover</p>
          <h1 className="font-heading text-3xl md:text-5xl font-semibold text-text mb-4">Our Collections</h1>
          <p className="text-text-faint text-sm md:text-base max-w-xl mx-auto">
            A curated range of jewellery designed for every moment, every style, and every occasion.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {collections.map((c) => (
            <Link key={c.slug} href={`/collections/${c.slug}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-bg-card border border-border hover:border-gold/30 mb-4 transition-all duration-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border border-border group-hover:border-gold/40 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                    <span className="text-gold text-3xl font-heading font-light">{c.title[0]}</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-all duration-500 flex items-center justify-center">
                  <span className="text-gold font-heading text-[11px] tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-28">
                    Explore &rarr;
                  </span>
                </div>
              </div>
              <h2 className="font-heading text-base md:text-lg font-semibold text-text group-hover:text-gold transition-colors">{c.title}</h2>
              <p className="text-text-faint text-sm mt-1 leading-relaxed">{c.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
