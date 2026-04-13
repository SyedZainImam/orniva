import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import type { Metadata } from "next";

const collectionData: Record<
  string,
  {
    title: string;
    description: string;
    products: Array<{
      _id: string;
      title: string;
      slug: { current: string };
      price: number;
      compareAtPrice?: number;
      badge?: "new" | "bestseller" | "sale" | "limited";
      images: Array<{ asset?: { _ref: string } }>;
    }>;
  }
> = {
  bangles: {
    title: "Bangles & Bracelets",
    description: "Timeless pieces that wrap your style in elegance",
    products: [
      { _id: "b1", title: "Gold Plated Elegant Bangle Set", slug: { current: "gold-plated-elegant-bangle-set" }, price: 2499, compareAtPrice: 3499, badge: "bestseller", images: [] },
      { _id: "b2", title: "Crystal Studded Bangles Pack of 6", slug: { current: "crystal-studded-bangles-6" }, price: 1899, badge: "new", images: [] },
      { _id: "b3", title: "Traditional Kundan Bangle Pair", slug: { current: "traditional-kundan-bangle" }, price: 3299, images: [] },
      { _id: "b4", title: "Minimalist Daily Wear Bangles", slug: { current: "minimalist-daily-bangles" }, price: 999, badge: "sale", compareAtPrice: 1499, images: [] },
      { _id: "b5", title: "Pearl Accent Gold Bangles", slug: { current: "pearl-accent-gold-bangles" }, price: 2799, images: [] },
      { _id: "b6", title: "Bridal Red Stone Bangles", slug: { current: "bridal-red-stone-bangles" }, price: 4999, badge: "limited", images: [] },
    ],
  },
  necklaces: {
    title: "Necklaces & Pendants",
    description: "Delicate to statement designs for every look",
    products: [
      { _id: "n1", title: "Crystal Drop Necklace", slug: { current: "crystal-drop-necklace" }, price: 3999, badge: "new", images: [] },
      { _id: "n2", title: "Kundan Bridal Mala Set", slug: { current: "kundan-bridal-mala-set" }, price: 7499, badge: "limited", images: [] },
      { _id: "n3", title: "Layered Gold Chain Necklace", slug: { current: "layered-gold-chain" }, price: 2999, badge: "bestseller", images: [] },
      { _id: "n4", title: "Pearl Pendant with Chain", slug: { current: "pearl-pendant-chain" }, price: 1599, images: [] },
      { _id: "n5", title: "Diamond Cut Choker", slug: { current: "diamond-cut-choker" }, price: 4999, badge: "bestseller", images: [] },
      { _id: "n6", title: "Emerald Stone Necklace Set", slug: { current: "emerald-stone-necklace" }, price: 5499, badge: "new", images: [] },
    ],
  },
  earrings: {
    title: "Earrings",
    description: "From minimal studs to bold, eye-catching styles",
    products: [
      { _id: "e1", title: "Pearl Stud Earrings", slug: { current: "pearl-stud-earrings" }, price: 1299, compareAtPrice: 1799, badge: "sale", images: [] },
      { _id: "e2", title: "Antique Jhumka Earrings", slug: { current: "antique-jhumka-earrings" }, price: 2199, compareAtPrice: 2999, images: [] },
      { _id: "e3", title: "Gold Hoop Earrings", slug: { current: "gold-hoop-earrings" }, price: 1499, badge: "bestseller", images: [] },
      { _id: "e4", title: "Crystal Chandelier Earrings", slug: { current: "crystal-chandelier-earrings" }, price: 2799, badge: "new", images: [] },
      { _id: "e5", title: "Minimalist Bar Studs", slug: { current: "minimalist-bar-studs" }, price: 799, images: [] },
      { _id: "e6", title: "Kundan Drop Earrings", slug: { current: "kundan-drop-earrings" }, price: 1999, badge: "limited", images: [] },
    ],
  },
  rings: {
    title: "Rings",
    description: "Crafted to add charm and personality",
    products: [
      { _id: "r1", title: "Rose Gold Statement Ring", slug: { current: "rose-gold-statement-ring" }, price: 1999, images: [] },
      { _id: "r2", title: "Solitaire Crystal Ring", slug: { current: "solitaire-crystal-ring" }, price: 1499, badge: "new", images: [] },
      { _id: "r3", title: "Vintage Emerald Ring", slug: { current: "vintage-emerald-ring" }, price: 2499, badge: "limited", images: [] },
      { _id: "r4", title: "Stacking Ring Set (3 pcs)", slug: { current: "stacking-ring-set" }, price: 1799, badge: "bestseller", images: [] },
    ],
  },
  bracelets: {
    title: "Bracelets",
    description: "Elegant chain bracelets and cuffs for every wrist",
    products: [
      { _id: "br1", title: "Delicate Chain Bracelet", slug: { current: "delicate-chain-bracelet" }, price: 999, badge: "new", images: [] },
      { _id: "br2", title: "Gold Cuff Bracelet", slug: { current: "gold-cuff-bracelet" }, price: 2499, images: [] },
      { _id: "br3", title: "Pearl & Chain Bracelet", slug: { current: "pearl-chain-bracelet" }, price: 1599, badge: "bestseller", images: [] },
    ],
  },
  bridal: {
    title: "Bridal Collection",
    description: "Complete sets for your special day",
    products: [
      { _id: "brd1", title: "Complete Bridal Jewellery Set", slug: { current: "complete-bridal-set" }, price: 12999, badge: "limited", images: [] },
      { _id: "brd2", title: "Gold Bridal Mala with Earrings", slug: { current: "gold-bridal-mala-earrings" }, price: 8999, badge: "bestseller", images: [] },
      { _id: "brd3", title: "Kundan Bridal Choker Set", slug: { current: "kundan-bridal-choker-set" }, price: 9999, badge: "new", images: [] },
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = collectionData[slug];
  return {
    title: collection ? `${collection.title} — Orniva` : "Collection — Orniva",
    description: collection?.description || "Explore our jewellery collection",
  };
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const collection = collectionData[slug];

  if (!collection) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-semibold text-text-primary mb-4">
            Collection Not Found
          </h1>
          <p className="text-text-secondary mb-6">
            This collection doesn&apos;t exist yet. Check back soon!
          </p>
          <Link
            href="/collections"
            className="inline-block bg-gold hover:bg-gold-dark text-white font-heading text-sm tracking-widest uppercase px-8 py-3 transition-colors"
          >
            View All Collections
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="bg-emerald-brand py-10 md:py-16">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 text-center">
          <nav className="text-white/50 text-xs tracking-wider mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/collections" className="hover:text-white transition-colors">Collections</Link>
            <span className="mx-2">/</span>
            <span className="text-gold-light">{collection.title}</span>
          </nav>
          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-3">
            {collection.title}
          </h1>
          <p className="text-white/60 text-sm md:text-base">
            {collection.description}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-10 md:py-16 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <p className="text-text-secondary text-sm">
            {collection.products.length} product{collection.products.length !== 1 ? "s" : ""}
          </p>
          <select className="border border-border-light px-4 py-2 text-sm font-body text-text-primary focus:outline-none focus:border-gold">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {collection.products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
