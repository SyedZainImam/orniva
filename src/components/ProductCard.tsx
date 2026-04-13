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
  new: "bg-gold text-bg",
  bestseller: "bg-white/90 text-bg",
  sale: "bg-red-sale text-white",
  limited: "bg-bg-elevated text-gold border border-gold/30",
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
    <Link href={`/products/${product.slug.current}`} className="group block bg-bg-card border border-border hover:border-gold/30 overflow-hidden transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-square bg-bg-elevated overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full border border-border group-hover:border-gold/40 flex items-center justify-center mx-auto mb-2 transition-all duration-300 group-hover:scale-110">
              <span className="text-gold text-lg font-heading">{product.title[0]}</span>
            </div>
            <span className="text-text-faint text-[9px] tracking-[0.15em] uppercase">Orniva</span>
          </div>
        </div>

        {product.badge && (
          <div className={`absolute top-2 left-2 px-2 py-0.5 text-[9px] font-semibold tracking-wider uppercase ${badgeStyles[product.badge]}`}>
            {badgeLabels[product.badge]}
          </div>
        )}

        {discount > 0 && (
          <div className="absolute top-2 right-2 bg-red-sale text-white px-1.5 py-0.5 text-[9px] font-semibold">-{discount}%</div>
        )}

        {/* Quick view on hover */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="bg-gold text-bg text-center py-2 text-[10px] tracking-[0.15em] uppercase font-semibold">
            Quick View
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-3 md:p-4">
        <h3 className="text-[11px] md:text-xs font-medium text-text-muted leading-snug line-clamp-2 group-hover:text-gold transition-colors">
          {product.title}
        </h3>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-sm font-bold text-gold">Rs. {product.price.toLocaleString()}</span>
          {product.compareAtPrice && (
            <span className="text-[11px] text-text-faint line-through">Rs. {product.compareAtPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
