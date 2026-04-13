import Link from "next/link";
import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import AddToCartButton from "@/components/AddToCartButton";

const allProducts: Record<
  string,
  {
    title: string;
    price: number;
    compareAtPrice?: number;
    sku: string;
    description: string;
    details: string;
    badge?: "new" | "bestseller" | "sale" | "limited";
    collection: { title: string; slug: string };
  }
> = {
  "gold-plated-elegant-bangle-set": {
    title: "Gold Plated Elegant Bangle Set",
    price: 2499,
    compareAtPrice: 3499,
    sku: "ORN-BNG-001",
    description:
      "A stunning set of gold-plated bangles featuring intricate detailing and a lustrous finish. Perfect for both everyday elegance and special occasions. Each bangle is carefully crafted to ensure lasting beauty and comfort.",
    details:
      "Material: Alloy with Gold Plating | Set of 4 bangles | Available sizes: 2.4, 2.6, 2.8 | Care: Avoid contact with water and perfume | Comes in Orniva signature packaging",
    badge: "bestseller",
    collection: { title: "Bangles & Bracelets", slug: "bangles" },
  },
  "crystal-drop-necklace": {
    title: "Crystal Drop Necklace",
    price: 3999,
    sku: "ORN-NCK-001",
    description:
      "An exquisite crystal drop necklace that catches the light beautifully. Designed to be the centrepiece of any outfit, this necklace features a delicate chain with a statement crystal pendant.",
    details:
      "Material: Alloy with Silver/Gold finish | Chain length: 18 inches with 2 inch extender | Crystal pendant | Lobster clasp closure | Comes in Orniva signature packaging",
    badge: "new",
    collection: { title: "Necklaces & Pendants", slug: "necklaces" },
  },
  "pearl-stud-earrings": {
    title: "Pearl Stud Earrings",
    price: 1299,
    compareAtPrice: 1799,
    sku: "ORN-EAR-001",
    description:
      "Classic pearl stud earrings that add a touch of timeless elegance to any look. These versatile studs are perfect for daily wear and can seamlessly transition to evening occasions.",
    details:
      "Material: Alloy with Gold Plating | Faux pearl | Push-back closure | Hypoallergenic | Comes in Orniva signature packaging",
    badge: "sale",
    collection: { title: "Earrings", slug: "earrings" },
  },
};

const relatedProducts = [
  { _id: "rp1", title: "Crystal Studded Bangles", slug: { current: "crystal-studded-bangles-6" }, price: 1899, badge: "new" as const, images: [] },
  { _id: "rp2", title: "Pearl Accent Gold Bangles", slug: { current: "pearl-accent-gold-bangles" }, price: 2799, images: [] },
  { _id: "rp3", title: "Layered Gold Chain", slug: { current: "layered-gold-chain" }, price: 2999, badge: "bestseller" as const, images: [] },
  { _id: "rp4", title: "Gold Hoop Earrings", slug: { current: "gold-hoop-earrings" }, price: 1499, images: [] },
];

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = allProducts[slug];
  return {
    title: product ? `${product.title} — Orniva` : "Product — Orniva",
    description: product?.description?.slice(0, 160) || "Premium jewellery from Orniva",
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = allProducts[slug];

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-semibold text-text-primary mb-4">
            Product Not Found
          </h1>
          <p className="text-text-secondary mb-6">
            This product doesn&apos;t exist or has been removed.
          </p>
          <Link
            href="/collections"
            className="inline-block bg-gold hover:bg-gold-dark text-white font-heading text-sm tracking-widest uppercase px-8 py-3 transition-colors"
          >
            Browse Collections
          </Link>
        </div>
      </div>
    );
  }

  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gold-50 py-3 px-4 md:px-8">
        <nav className="max-w-[1600px] mx-auto text-text-secondary text-xs tracking-wider">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/collections" className="hover:text-gold transition-colors">Collections</Link>
          <span className="mx-2">/</span>
          <Link href={`/collections/${product.collection.slug}`} className="hover:text-gold transition-colors">
            {product.collection.title}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-text-primary">{product.title}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <section className="py-8 md:py-14 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-gold-50 relative overflow-hidden mb-3">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-100 via-cream to-gold-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-gold text-4xl font-heading">{product.title[0]}</span>
                  </div>
                  <span className="text-text-secondary text-xs tracking-wider uppercase">Product Image</span>
                </div>
              </div>
              {product.badge && (
                <div
                  className={`absolute top-4 left-4 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase ${
                    product.badge === "new"
                      ? "bg-emerald-brand text-white"
                      : product.badge === "bestseller"
                      ? "bg-gold text-white"
                      : product.badge === "sale"
                      ? "bg-red-600 text-white"
                      : "bg-charcoal text-white"
                  }`}
                >
                  {product.badge === "new"
                    ? "New Arrival"
                    : product.badge === "bestseller"
                    ? "Best Seller"
                    : product.badge === "sale"
                    ? "On Sale"
                    : "Limited Edition"}
                </div>
              )}
            </div>
            {/* Thumbnail strip */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gold-50 cursor-pointer border-2 border-transparent hover:border-gold transition-colors">
                  <div className="w-full h-full bg-gradient-to-br from-gold-100 to-cream" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <p className="text-text-secondary text-xs tracking-wider uppercase mb-2">
              {product.collection.title} | SKU: {product.sku}
            </p>
            <h1 className="font-heading text-2xl md:text-3xl font-semibold text-text-primary mb-4">
              {product.title}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl md:text-3xl font-bold text-gold">
                Rs. {product.price.toLocaleString()}
              </span>
              {product.compareAtPrice && (
                <>
                  <span className="text-lg text-text-secondary line-through">
                    Rs. {product.compareAtPrice.toLocaleString()}
                  </span>
                  <span className="bg-red-600 text-white px-2 py-0.5 text-xs font-semibold">
                    -{discount}% OFF
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Divider */}
            <div className="border-t border-border-light my-6" />

            {/* Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <AddToCartButton />
              <button className="flex-1 sm:flex-none border border-gold text-gold hover:bg-gold hover:text-white font-heading text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300">
                Add to Wishlist
              </button>
            </div>

            {/* Details */}
            <div className="border-t border-border-light pt-6">
              <h3 className="font-heading text-sm font-semibold tracking-wider uppercase text-text-primary mb-3">
                Product Details
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {product.details}
              </p>
            </div>

            {/* Shipping info */}
            <div className="border-t border-border-light mt-6 pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-gold font-heading text-xs font-semibold tracking-wider uppercase">Free Shipping</p>
                  <p className="text-text-secondary text-xs mt-1">On orders above Rs. 3,000</p>
                </div>
                <div>
                  <p className="text-gold font-heading text-xs font-semibold tracking-wider uppercase">Easy Returns</p>
                  <p className="text-text-secondary text-xs mt-1">7-day return policy</p>
                </div>
                <div>
                  <p className="text-gold font-heading text-xs font-semibold tracking-wider uppercase">Secure Checkout</p>
                  <p className="text-text-secondary text-xs mt-1">100% secure payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading text-xl md:text-2xl font-semibold text-text-primary">
              You May Also Like
            </h2>
            <div className="w-12 h-[2px] bg-gold mx-auto mt-3" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {relatedProducts.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
