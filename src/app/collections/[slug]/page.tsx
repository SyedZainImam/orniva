import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { collectionBySlugQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

interface Product {
  _id: string;
  title: string;
  slug: { current: string };
  price: number;
  compareAtPrice?: number;
  badge?: "new" | "bestseller" | "sale" | "limited";
  images: Array<{ asset?: { _ref: string } }>;
}

interface Collection {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  products: Product[];
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  let collection: Collection | null = null;
  try { collection = await client.fetch(collectionBySlugQuery, { slug }); } catch {}
  return {
    title: collection ? `${collection.title} — Orniva` : "Collection — Orniva",
    description: collection?.description,
  };
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;

  let collection: Collection | null = null;
  try { collection = await client.fetch(collectionBySlugQuery, { slug }); } catch {}

  if (!collection) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-semibold text-text mb-4">Collection Not Found</h1>
          <p className="text-text-faint mb-6">This collection doesn&apos;t exist yet.</p>
          <Link href="/collections" className="inline-block bg-gold hover:bg-gold-dark text-bg font-heading text-[11px] tracking-[0.2em] uppercase px-8 py-3 transition-colors">
            View All Collections
          </Link>
        </div>
      </div>
    );
  }

  const products = collection.products || [];

  return (
    <>
      <section className="bg-bg-card border-b border-border py-10 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <nav className="text-text-faint text-[11px] tracking-wider mb-4">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span className="mx-2 text-border">/</span>
            <Link href="/collections" className="hover:text-gold transition-colors">Collections</Link>
            <span className="mx-2 text-border">/</span>
            <span className="text-gold">{collection.title}</span>
          </nav>
          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-text mb-3">{collection.title}</h1>
          {collection.description && <p className="text-text-faint text-sm">{collection.description}</p>}
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 md:px-8 max-w-[1400px] mx-auto">
        {products.length === 0 ? (
          <p className="text-text-faint text-sm text-center py-12">No products in this collection yet.</p>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <p className="text-text-faint text-sm">{products.length} product{products.length !== 1 ? "s" : ""}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
              {products.map((p) => (
                <ProductCard key={p._id} product={p} />
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}
