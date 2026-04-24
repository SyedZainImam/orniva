import Link from "next/link";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { productBySlugQuery } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import ProductCard from "@/components/ProductCard";
import ProductActions from "@/components/ProductActions";
import ProductImageGallery from "@/components/ProductImageGallery";

export const revalidate = 60;

interface Product {
  _id: string;
  title: string;
  slug: { current: string };
  price: number;
  compareAtPrice?: number;
  description?: Array<{ _type: string; [key: string]: unknown }>;
  details?: string;
  images?: Array<{ asset?: { _ref: string } }>;
  badge?: "new" | "bestseller" | "sale" | "limited";
  sku?: string;
  collection?: { title: string; slug: { current: string } };
  relatedProducts?: Array<{
    _id: string;
    title: string;
    slug: { current: string };
    price: number;
    compareAtPrice?: number;
    badge?: "new" | "bestseller" | "sale" | "limited";
    images: Array<{ asset?: { _ref: string } }>;
  }>;
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  let product: Product | null = null;
  try { product = await client.fetch(productBySlugQuery, { slug }); } catch {}
  return {
    title: product ? `${product.title} — Orniva` : "Product — Orniva",
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  let product: Product | null = null;
  try { product = await client.fetch(productBySlugQuery, { slug }); } catch {}

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

  const productData = {
    _id: product._id,
    title: product.title,
    slug: product.slug.current,
    price: product.price,
    compareAtPrice: product.compareAtPrice,
  };

  const collectionTitle = product.collection?.title || "";
  const collectionSlug = product.collection?.slug?.current || "";
  const relatedProducts = product.relatedProducts || [];

  const badgeLabel = product.badge === "new" ? "New Arrival" : product.badge === "bestseller" ? "Best Seller" : product.badge === "sale" ? "On Sale" : product.badge === "limited" ? "Limited Edition" : "";
  const badgeClass = product.badge === "sale" ? "bg-red-sale text-white" : product.badge === "new" ? "bg-gold text-bg" : product.badge === "bestseller" ? "bg-white/90 text-bg" : "bg-bg-elevated text-gold border border-gold/30";

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-bg-card border-b border-border py-3 px-4 md:px-8">
        <nav className="max-w-[1400px] mx-auto text-text-faint text-[11px] tracking-wider">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          {collectionSlug && (
            <>
              <span className="mx-2 text-border">/</span>
              <Link href={`/collections/${collectionSlug}`} className="hover:text-gold transition-colors">{collectionTitle}</Link>
            </>
          )}
          <span className="mx-2 text-border">/</span>
          <span className="text-text-muted">{product.title}</span>
        </nav>
      </div>

      {/* Product */}
      <section className="py-8 md:py-14 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14">
          {/* Image */}
          <div>
            <ProductImageGallery images={product.images} title={product.title} badge={product.badge} badgeLabel={badgeLabel} badgeClass={badgeClass} />
          </div>

          {/* Info */}
          <div>
            <p className="text-text-faint text-[11px] tracking-[0.15em] uppercase mb-2">
              {collectionTitle}{product.sku ? ` | SKU: ${product.sku}` : ""}
            </p>
            <h1 className="font-heading text-2xl md:text-3xl font-semibold text-text mb-5">{product.title}</h1>

            <ProductActions product={productData} discount={discount} />

            {product.description && (
              <div className="text-text-muted text-sm leading-relaxed mb-6 prose-orniva">
                <PortableText value={product.description} />
              </div>
            )}

            {product.details && (
              <>
                <div className="border-t border-border my-6" />
                <div className="border-t border-border pt-6">
                  <h3 className="font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-text mb-3">Product Details</h3>
                  <p className="text-text-faint text-sm leading-relaxed">{product.details}</p>
                </div>
              </>
            )}

            <div className="border-t border-border mt-6 pt-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { t: "Free Shipping", d: "On qualifying orders" },
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
      {relatedProducts.length > 0 && (
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
      )}
    </>
  );
}
