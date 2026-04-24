import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { collectionsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Collections — Orniva",
  description: "Explore our curated collections of elegant jewellery designed for every moment.",
};

interface Collection {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  image?: { asset?: { _ref: string } };
}

export default async function CollectionsPage() {
  let collections: Collection[] = [];
  try {
    collections = await client.fetch(collectionsQuery) || [];
  } catch {}

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
        {collections.length === 0 ? (
          <p className="text-text-faint text-sm text-center py-12">No collections yet. Add collections in the CMS.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {collections.map((c) => {
              const hasImage = c.image?.asset;
              return (
                <Link key={c._id} href={`/collections/${c.slug.current}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-bg-card border border-border hover:border-gold/30 mb-4 transition-all duration-500">
                    {hasImage ? (
                      <Image
                        src={urlFor(c.image!).width(600).height(750).url()}
                        alt={c.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full border border-border group-hover:border-gold/40 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                          <span className="text-gold text-3xl font-heading font-light">{c.title[0]}</span>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 flex items-end justify-center pb-6">
                      <span className="text-gold font-heading text-[11px] tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        Explore &rarr;
                      </span>
                    </div>
                  </div>
                  <h2 className="font-heading text-base md:text-lg font-semibold text-text group-hover:text-gold transition-colors">{c.title}</h2>
                  {c.description && <p className="text-text-faint text-sm mt-1 leading-relaxed">{c.description}</p>}
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
