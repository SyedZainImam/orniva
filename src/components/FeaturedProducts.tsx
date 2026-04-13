import Link from "next/link";
import ProductCard from "./ProductCard";

const placeholderProducts = [
  { _id: "1", title: "Gold Plated Elegant Bangle Set", slug: { current: "gold-plated-elegant-bangle-set" }, price: 2499, compareAtPrice: 3499, badge: "bestseller" as const, images: [] },
  { _id: "2", title: "Crystal Drop Necklace", slug: { current: "crystal-drop-necklace" }, price: 3999, badge: "new" as const, images: [] },
  { _id: "3", title: "Pearl Stud Earrings", slug: { current: "pearl-stud-earrings" }, price: 1299, compareAtPrice: 1799, badge: "sale" as const, images: [] },
  { _id: "4", title: "Rose Gold Statement Ring", slug: { current: "rose-gold-statement-ring" }, price: 1999, images: [] },
  { _id: "5", title: "Kundan Bridal Mala Set", slug: { current: "kundan-bridal-mala-set" }, price: 7499, badge: "limited" as const, images: [] },
  { _id: "6", title: "Delicate Chain Bracelet", slug: { current: "delicate-chain-bracelet" }, price: 999, badge: "new" as const, images: [] },
  { _id: "7", title: "Antique Jhumka Earrings", slug: { current: "antique-jhumka-earrings" }, price: 2199, compareAtPrice: 2999, images: [] },
  { _id: "8", title: "Diamond Cut Choker", slug: { current: "diamond-cut-choker" }, price: 4999, badge: "bestseller" as const, images: [] },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24 bg-bg-card">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold font-heading text-[11px] tracking-[0.3em] uppercase mb-3">Handpicked For You</p>
          <h2 className="font-heading text-2xl md:text-4xl font-semibold text-text">Best Selling Jewellery</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {placeholderProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/collections"
            className="inline-block bg-gold hover:bg-gold-dark text-bg font-heading text-[11px] tracking-[0.2em] uppercase px-10 py-4 transition-all duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
