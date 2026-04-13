import Link from "next/link";

const collections = [
  {
    title: "Bangles & Bracelets",
    slug: "bangles",
    description: "Timeless pieces that wrap your style in elegance",
    image: "/images/placeholder-bangles.jpg",
  },
  {
    title: "Necklaces & Pendants",
    slug: "necklaces",
    description: "Delicate to statement designs for every look",
    image: "/images/placeholder-necklaces.jpg",
  },
  {
    title: "Earrings",
    slug: "earrings",
    description: "From minimal studs to bold, eye-catching styles",
    image: "/images/placeholder-earrings.jpg",
  },
  {
    title: "Rings",
    slug: "rings",
    description: "Crafted to add charm and personality",
    image: "/images/placeholder-rings.jpg",
  },
];

export default function CollectionGrid() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-[1600px] mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-gold font-heading text-xs md:text-sm tracking-[0.3em] uppercase mb-3">
          Curated For You
        </p>
        <h2 className="font-heading text-2xl md:text-4xl font-semibold text-text-primary">
          Our Collections
        </h2>
        <div className="w-16 h-[2px] bg-gold mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {collections.map((collection) => (
          <Link
            key={collection.slug}
            href={`/collections/${collection.slug}`}
            className="group relative overflow-hidden bg-gold-50 aspect-[3/4]"
          >
            {/* Placeholder gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gold-100 via-gold-50 to-cream" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center">
                <span className="text-gold text-3xl font-heading font-light">
                  {collection.title[0]}
                </span>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-emerald-brand/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="text-center px-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-heading text-lg md:text-xl font-semibold text-white mb-2">
                  {collection.title}
                </h3>
                <p className="text-white/70 text-sm mb-4">{collection.description}</p>
                <span className="inline-block text-gold-light text-xs tracking-widest uppercase border-b border-gold-light pb-1">
                  Shop Now
                </span>
              </div>
            </div>

            {/* Title always visible */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-brand/90 to-transparent p-4 group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="font-heading text-sm md:text-base font-semibold text-white tracking-wide">
                {collection.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
