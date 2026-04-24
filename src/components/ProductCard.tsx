"use client";

import Link from "next/link";
import Image from "next/image";
import { useCurrency } from "@/context/CurrencyContext";
import { urlFor } from "@/sanity/lib/image";

interface Product {
  _id: string;
  title: string;
  slug: { current: string };
  price: number;
  compareAtPrice?: number;
  badge?: "new" | "bestseller" | "sale" | "limited";
  images: Array<{ asset?: { _ref: string } }>;
}

const badgeConfig: Record<string, { bg: string; label: string }> = {
  new: { bg: "bg-gold text-black", label: "New" },
  bestseller: { bg: "bg-white text-black", label: "Best Seller" },
  sale: { bg: "bg-red-sale text-white", label: "Sale" },
  limited: { bg: "bg-bg-elevated text-gold border border-gold/30", label: "Limited" },
};

export default function ProductCard({ product }: { product: Product }) {
  const { format } = useCurrency();
  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;
  const badge = product.badge ? badgeConfig[product.badge] : null;
  const hasImage = product.images && product.images.length > 0 && product.images[0]?.asset;

  return (
    <Link
      href={`/products/${product.slug.current}`}
      className="group block border border-border hover:border-gold/30 overflow-hidden transition-all duration-300"
      style={{ background: "#141414" }}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "1/1", background: "#1a1a1a" }}>
        {hasImage ? (
          <Image
            src={urlFor(product.images[0]).width(500).height(500).url()}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-11 h-11 md:w-14 md:h-14 rounded-full border border-border group-hover:border-gold/40 flex items-center justify-center mx-auto mb-1.5 transition-all duration-300 group-hover:scale-110">
                <span className="text-gold text-[16px] md:text-[20px] font-heading font-light">{product.title[0]}</span>
              </div>
              <span className="text-text-faint text-[8px] md:text-[9px] tracking-[0.2em] uppercase font-medium">Orniva</span>
            </div>
          </div>
        )}

        {badge && (
          <div className={`absolute top-2 left-2 px-2 py-[3px] text-[8px] md:text-[9px] font-bold tracking-wider uppercase z-10 ${badge.bg}`}>
            {badge.label}
          </div>
        )}

        {discount > 0 && (
          <div className="absolute top-2 right-2 bg-red-sale text-white px-1.5 py-[3px] text-[8px] md:text-[9px] font-bold z-10">
            -{discount}%
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gold text-black text-center py-2.5 text-[9px] md:text-[10px] tracking-[0.15em] uppercase font-bold z-10">
          Quick View
        </div>
      </div>

      <div className="p-3 md:p-4">
        <h3 className="text-[11px] md:text-[12px] font-medium text-text-muted leading-snug line-clamp-2 group-hover:text-gold transition-colors min-h-[32px]">
          {product.title}
        </h3>
        <div className="mt-2 flex items-baseline gap-2 flex-wrap">
          <span className="text-[13px] md:text-[14px] font-bold text-gold">{format(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-[10px] md:text-[11px] text-text-faint line-through">{format(product.compareAtPrice)}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
