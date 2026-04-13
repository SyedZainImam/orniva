import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections — Orniva",
  description: "Explore our curated collections of elegant jewellery designed for every moment.",
};

const collections = [
  {
    title: "Bangles & Bracelets",
    slug: "bangles",
    description: "Timeless pieces that wrap your style in elegance. From delicate daily-wear bangles to ornate statement pieces.",
  },
  {
    title: "Necklaces & Pendants",
    slug: "necklaces",
    description: "Delicate to statement designs for every look. Discover pieces that frame your face with elegance.",
  },
  {
    title: "Earrings",
    slug: "earrings",
    description: "From minimal studs to bold, eye-catching jhumkas and hoops. Complete your look with the perfect pair.",
  },
  {
    title: "Rings",
    slug: "rings",
    description: "Crafted to add charm and personality. Find the perfect ring for every finger and every occasion.",
  },
  {
    title: "Bracelets",
    slug: "bracelets",
    description: "Elegant chain bracelets and cuffs that add a touch of sophistication to your wrist.",
  },
  {
    title: "Bridal Collection",
    slug: "bridal",
    description: "Complete bridal sets designed to make your special day even more memorable.",
  },
];

export default function CollectionsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-emerald-brand py-12 md:py-20">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 text-center">
          <p className="text-gold-light font-heading text-xs tracking-[0.3em] uppercase mb-3">
            Discover
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-semibold text-white mb-4">
            Our Collections
          </h1>
          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto">
            A curated range of jewellery designed for every moment, every style, and every occasion.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.slug}
              href={`/collections/${collection.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gold-50 mb-4">
                {/* Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-100 via-cream to-gold-50 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center">
                    <span className="text-gold text-4xl font-heading font-light">
                      {collection.title[0]}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-emerald-brand/0 group-hover:bg-emerald-brand/60 transition-all duration-500 flex items-center justify-center">
                  <span className="text-white font-heading text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-b border-gold-light pb-1">
                    Explore Collection
                  </span>
                </div>
              </div>
              <h2 className="font-heading text-lg md:text-xl font-semibold text-text-primary group-hover:text-gold transition-colors">
                {collection.title}
              </h2>
              <p className="text-text-secondary text-sm mt-2 leading-relaxed">
                {collection.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
