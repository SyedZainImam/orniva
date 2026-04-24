import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { collectionsQuery } from "@/sanity/lib/queries";

interface Collection {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
}

export default async function CollectionGrid() {
  let collections: Collection[] = [];
  try {
    collections = await client.fetch(collectionsQuery) || [];
  } catch {}

  // Show first 4 collections on homepage
  const displayCollections = collections.slice(0, 4);

  if (displayCollections.length === 0) return null;

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
        {displayCollections.map((c) => (
          <Link
            key={c._id}
            href={`/collections/${c.slug.current}`}
            className="group relative block overflow-hidden border border-border hover:border-gold/40 transition-all duration-500"
            style={{ aspectRatio: "3/4", background: "#141414" }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-border group-hover:border-gold/50 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                <span className="text-gold text-[22px] md:text-[28px] font-heading font-light">{c.title[0]}</span>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5"
              style={{ background: "linear-gradient(to top, #141414 0%, #14141490 60%, transparent 100%)" }}>
              <h3 className="font-heading text-[11px] md:text-[13px] font-semibold text-white tracking-wide">{c.title}</h3>
              {c.description && <p className="text-text-faint text-[10px] md:text-[11px] mt-1 leading-relaxed hidden md:block">{c.description}</p>}
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
