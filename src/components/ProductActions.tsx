"use client";

import { useCurrency } from "@/context/CurrencyContext";
import { useWishlist } from "@/context/WishlistContext";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import AddToCartButton from "./AddToCartButton";

interface ProductActionsProps {
  product: {
    _id: string;
    title: string;
    slug: string;
    price: number;
    compareAtPrice?: number;
    image?: string;
  };
  discount: number;
}

export default function ProductActions({ product, discount }: ProductActionsProps) {
  const { format } = useCurrency();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const wishlisted = isInWishlist(product._id);

  return (
    <>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl md:text-3xl font-bold text-gold">{format(product.price)}</span>
        {product.compareAtPrice && (
          <>
            <span className="text-lg text-text-faint line-through">{format(product.compareAtPrice)}</span>
            <span className="bg-red-sale text-white px-2 py-0.5 text-[10px] font-semibold">-{discount}% OFF</span>
          </>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <AddToCartButton product={product} />
        <button
          onClick={() => wishlisted ? removeFromWishlist(product._id) : addToWishlist(product)}
          className={`flex-1 sm:flex-none border font-heading text-[11px] tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 flex items-center justify-center gap-2 ${
            wishlisted
              ? "border-gold bg-gold text-bg"
              : "border-gold text-gold hover:bg-gold hover:text-bg"
          }`}
        >
          {wishlisted ? <HiHeart size={16} /> : <HiOutlineHeart size={16} />}
          {wishlisted ? "Wishlisted" : "Wishlist"}
        </button>
      </div>
    </>
  );
}
