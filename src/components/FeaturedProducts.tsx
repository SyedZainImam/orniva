import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { featuredProductsQuery } from "@/sanity/lib/queries";
import ProductCard from "./ProductCard";

interface Product {
  _id: string;
  title: string;
  slug: { current: string };
  price: number;
  compareAtPrice?: number;
  badge?: "new" | "bestseller" | "sale" | "limited";
  images: Array<{ asset?: { _ref: string } }>;
}

export default async function FeaturedProducts() {
  let products: Product[] = [];
  try {
    products = await client.fetch(featuredProductsQuery) || [];
  } catch {}

  if (products.length === 0) return null;

  return (
    <section className="py-16 md:py-24" style={{ background: "#0e0e0e" }}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold font-heading text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-3 font-medium">Handpicked For You</p>
          <h2 className="font-heading text-[22px] md:text-[34px] font-bold text-white">Best Selling Jewellery</h2>
          <div className="w-10 h-[1px] bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12 md:mt-14">
          <Link
            href="/collections"
            className="inline-block bg-gold hover:bg-gold-dark text-black font-heading text-[11px] font-semibold tracking-[0.2em] uppercase px-10 py-[14px] transition-all duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
