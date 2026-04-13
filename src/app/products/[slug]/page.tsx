import Link from "next/link";
import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import AddToCartButton from "@/components/AddToCartButton";

const allProducts: Record<string, { title: string; price: number; compareAtPrice?: number; sku: string; description: string; details: string; badge?: "new" | "bestseller" | "sale" | "limited"; collection: { title: string; slug: string } }> = {
  "gold-plated-elegant-bangle-set": {
    title: "Gold Plated Elegant Bangle Set", price: 2499, compareAtPrice: 3499, sku: "ORN-BNG-001",
    description: "A stunning set of gold-plated bangles featuring intricate detailing and a lustrous finish. Perfect for both everyday elegance and special occasions.",
    details: "Material: Alloy with Gold Plating | Set of 4 bangles | Available sizes: 2.4, 2.6, 2.8 | Care: Avoid contact with water and perfume",
    badge: "bestseller", collection: { title: "Bangles & Bracelets", slug: "bangles" },
  },
  "crystal-drop-necklace": {
    title: "Crystal Drop Necklace", price: 3999, sku: "ORN-NCK-001",
    description: "An exquisite crystal drop necklace that catches the light beautifully. Designed to be the centrepiece of any outfit.",
    details: "Material: Alloy with Silver/Gold finish | Chain length: 18 inches with 2 inch extender | Crystal pendant | Lobster clasp closure",
    badge: "new", collection: { title: "Necklaces & Pendants", slug: "necklaces" },
  },
  "pearl-stud-earrings": {
    title: "Pearl Stud Earrings", price: 1299, compareAtPrice: 1799, sku: "ORN-EAR-001",
    description: "Classic pearl stud earrings that add a touch of timeless elegance to any look. Perfect for daily wear.",
    details: "Material: Alloy with Gold Plating | Faux pearl | Push-back closure | Hypoallergenic",
    badge: "sale", collection: { title: "Earrings", slug: "earrings" },
  },
};

const relatedProducts = [
  { _id: "rp1", title: "Crystal Studded Bangles", slug: { current: "crystal-studded-bangles-6" }, price: 1899, badge: "new" as const, images: [] },
  { _id: "rp2", title: "Pearl Accent Gold Bangles", slug: { current: "pearl-accent-gold-bangles" }, price: 2799, images: [] },
  { _id: "rp3", title: "Layered Gold Chain", slug: { current: "layered-gold-chain" }, price: 2999, badge: "bestseller" as const, images: [] },
  { _id: "rp4", title: "Gold Hoop Earrings", slug: { current: "gold-hoop-earrings" }, price: 1499, images: [] },
];

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = allProducts[slug];
  return { title: p ? `${p.title} — Orniva` : "Product — Orniva", description: p?.description?.slice(0, 160) };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = allProducts[slug];

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-semibold text-text mb-4">Product Not Found</h1>
          <p className="text-text-faint mb-6">This product doesn&apos;t exist or has been removed.</p>
          <Link href="/collections" className="inline-block bg-gold hover:bg-gold-dark text-bg font-heading text-[11px] tracking-[0.2em] uppercase px-8 py-3 transition-colors">
            Browse Collections
          </Link>
        </div>
      </div>
    );
  }

  const discount = product.compareAtPrice ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100) : 0;

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-bg-card border-b border-border py-3 px-4 md:px-8">
        <nav className="max-w-[1400px] mx-auto text-text-faint text-[11px] tracking-wider">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2 text-border">/</span>
          <Link href={`/collections/${product.collection.slug}`} className="hover:text-gold transition-colors">{product.collection.title}</Link>
          <span className="mx-2 text-border">/</span>
          <span className="text-text-muted">{product.title}</span>
        </nav>
      </div>

      {/* Product */}
      <section className="py-8 md:py-14 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14">
          {/* Image */}
          <div>
            <div className="aspect-square bg-bg-card border border-border relative overflow-hidden mb-3">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full border border-border flex items-center justify-center mx-auto mb-3">
                    <span className="text-gold text-4xl font-heading">{product.title[0]}</span>
                  </div>
                  <span className="text-text-faint text-[10px] tracking-[0.15em] uppercase">Product Image</span>
                </div>
              </div>
              {product.badge && (
                <div className={`absolute top-4 left-4 px-3 py-1.5 text-[10px] font-semibold tracking-wider uppercase ${product.badge === "sale" ? "bg-red-sale text-white" : product.badge === "new" ? "bg-gold text-bg" : product.badge === "bestseller" ? "bg-white/90 text-bg" : "bg-bg-elevated text-gold border border-gold/30"}`}>
                  {product.badge === "new" ? "New Arrival" : product.badge === "bestseller" ? "Best Seller" : product.badge === "sale" ? "On Sale" : "Limited Edition"}
                </div>
              )}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-bg-card border border-border hover:border-gold/30 cursor-pointer transition-colors" />
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-text-faint text-[11px] tracking-[0.15em] uppercase mb-2">{product.collection.title} | SKU: {product.sku}</p>
            <h1 className="font-heading text-2xl md:text-3xl font-semibold text-text mb-5">{product.title}</h1>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl md:text-3xl font-bold text-gold">Rs. {product.price.toLocaleString()}</span>
              {product.compareAtPrice && (
                <>
                  <span className="text-lg text-text-faint line-through">Rs. {product.compareAtPrice.toLocaleString()}</span>
                  <span className="bg-red-sale text-white px-2 py-0.5 text-[10px] font-semibold">-{discount}% OFF</span>
                </>
              )}
            </div>

            <p className="text-text-muted text-sm leading-relaxed mb-6">{product.description}</p>
            <div className="border-t border-border my-6" />

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <AddToCartButton />
              <button className="flex-1 sm:flex-none border border-gold text-gold hover:bg-gold hover:text-bg font-heading text-[11px] tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300">
                Wishlist
              </button>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-text mb-3">Product Details</h3>
              <p className="text-text-faint text-sm leading-relaxed">{product.details}</p>
            </div>

            <div className="border-t border-border mt-6 pt-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { t: "Free Shipping", d: "Above Rs. 3,000" },
                  { t: "Easy Returns", d: "7-day policy" },
                  { t: "Secure Checkout", d: "100% secure" },
                ].map((item) => (
                  <div key={item.t}>
                    <p className="text-gold font-heading text-[10px] font-semibold tracking-[0.1em] uppercase">{item.t}</p>
                    <p className="text-text-faint text-[11px] mt-1">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 md:py-16 bg-bg-card border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading text-xl md:text-2xl font-semibold text-text">You May Also Like</h2>
            <div className="w-10 h-px bg-gold mx-auto mt-3" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {relatedProducts.map((p) => <ProductCard key={p._id} product={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
