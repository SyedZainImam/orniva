import Link from "next/link";

const collections = [
  { title: "Bangles & Bracelets", slug: "bangles", desc: "Timeless pieces that wrap your style in elegance", icon: "B" },
  { title: "Necklaces & Pendants", slug: "necklaces", desc: "Delicate to statement designs for every look", icon: "N" },
  { title: "Earrings", slug: "earrings", desc: "From minimal studs to bold, eye-catching styles", icon: "E" },
  { title: "Rings", slug: "rings", desc: "Crafted to add charm and personality", icon: "R" },
];

export default function CollectionGrid() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-gold font-heading text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-3 font-medium">
          Curated For You
        </p>
        <h2 className="font-heading text-[22px] md:text-[34px] font-bold text-white">Our Collections</h2>
        <div className="w-10 h-[1px] bg-gold mx-auto mt-5" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        {collections.map((c) => (
          <Link
            key={c.slug}
            href={`/collections/${c.slug}`}
            className="group relative block overflow-hidden border border-border hover:border-gold/40 transition-all duration-500"
            style={{ aspectRatio: "3/4", background: "#141414" }}
          >
            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-border group-hover:border-gold/50 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                <span className="text-gold text-[22px] md:text-[28px] font-heading font-light">{c.icon}</span>
              </div>
            </div>

            {/* Bottom gradient + text */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5"
              style={{ background: "linear-gradient(to top, #141414 0%, #14141490 60%, transparent 100%)" }}>
              <h3 className="font-heading text-[11px] md:text-[13px] font-semibold text-white tracking-wide">{c.title}</h3>
              <p className="text-text-faint text-[10px] md:text-[11px] mt-1 leading-relaxed hidden md:block">{c.desc}</p>
              <span className="inline-block text-gold text-[9px] md:text-[10px] tracking-[0.15em] uppercase mt-2 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Shop Now &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
