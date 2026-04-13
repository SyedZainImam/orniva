import Link from "next/link";

const collections = [
  { title: "Bangles & Bracelets", slug: "bangles", description: "Timeless pieces that wrap your style in elegance" },
  { title: "Necklaces & Pendants", slug: "necklaces", description: "Delicate to statement designs for every look" },
  { title: "Earrings", slug: "earrings", description: "From minimal studs to bold, eye-catching styles" },
  { title: "Rings", slug: "rings", description: "Crafted to add charm and personality" },
];

export default function CollectionGrid() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-gold font-heading text-[11px] tracking-[0.3em] uppercase mb-3">Curated For You</p>
        <h2 className="font-heading text-2xl md:text-4xl font-semibold text-text">Our Collections</h2>
        <div className="w-12 h-px bg-gold mx-auto mt-5" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        {collections.map((c) => (
          <Link key={c.slug} href={`/collections/${c.slug}`} className="group relative overflow-hidden aspect-[3/4] bg-bg-card border border-border hover:border-gold/30 transition-all duration-500">
            {/* Icon placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-border group-hover:border-gold/40 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                <span className="text-gold text-2xl md:text-3xl font-heading font-light">{c.title[0]}</span>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-all duration-500" />

            {/* Bottom info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-bg-card via-bg-card/80 to-transparent">
              <h3 className="font-heading text-xs md:text-sm font-semibold text-text tracking-wide">{c.title}</h3>
              <p className="text-text-faint text-[11px] mt-1 hidden md:block">{c.description}</p>
              <span className="inline-block text-gold text-[10px] tracking-[0.15em] uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Shop Now &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
