import Link from "next/link";

interface Product {
  _id: string;
  title: string;
  slug: { current: string };
  price: number;
  compareAtPrice?: number;
  badge?: "new" | "bestseller" | "sale" | "limited";
  images: Array<{ asset?: { _ref: string } }>;
}

const badgeStyles: Record<string, string> = {
  new: "bg-emerald-brand text-white",
  bestseller: "bg-gold text-white",
  sale: "bg-red-600 text-white",
  limited: "bg-charcoal text-white",
};

const badgeLabels: Record<string, string> = {
  new: "New",
  bestseller: "Best Seller",
  sale: "Sale",
  limited: "Limited",
};

export default function ProductCard({ product }: { product: Product }) {
  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  return (
    <Link
      href={`/products/${product.slug.current}`}
      className="group block bg-white overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-square bg-gold-50 overflow-hidden">
        {/* Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold-100 via-cream to-gold-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-2">
              <span className="text-gold text-xl font-heading">
                {product.title[0]}
              </span>
            </div>
            <span className="text-text-secondary text-[10px] tracking-wider uppercase">
              Orniva
            </span>
          </div>
        </div>

        {/* Badge */}
        {product.badge && (
          <div
            className={`absolute top-2 left-2 px-2 py-1 text-[10px] font-semibold tracking-wider uppercase ${badgeStyles[product.badge]}`}
          >
            {badgeLabels[product.badge]}
          </div>
        )}

        {/* Discount */}
        {discount > 0 && (
          <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-[10px] font-semibold">
            -{discount}%
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="bg-gold text-white text-center py-2.5 text-xs tracking-widest uppercase font-semibold">
            Quick View
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-3 md:p-4">
        <h3 className="text-xs md:text-sm font-semibold text-text-primary leading-snug line-clamp-2 group-hover:text-gold transition-colors">
          {product.title}
        </h3>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-sm md:text-base font-bold text-gold">
            Rs. {product.price.toLocaleString()}
          </span>
          {product.compareAtPrice && (
            <span className="text-xs text-text-secondary line-through">
              Rs. {product.compareAtPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
