"use client";

import Link from "next/link";
import { HiOutlineHeart, HiOutlineTrash, HiOutlineShoppingBag } from "react-icons/hi";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";

export default function WishlistPageClient() {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { format } = useCurrency();

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <HiOutlineHeart size={48} className="text-text-faint mx-auto mb-4" />
          <h1 className="font-heading text-2xl font-semibold text-text mb-3">Your Wishlist is Empty</h1>
          <p className="text-text-faint text-sm mb-6">Save your favourite pieces for later.</p>
          <Link
            href="/collections"
            className="inline-block bg-gold hover:bg-gold-dark text-bg font-heading text-[11px] tracking-[0.2em] uppercase px-8 py-3 transition-colors"
          >
            Browse Collections
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-bg-card border-b border-border py-10 md:py-14">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-text mb-2">My Wishlist</h1>
          <p className="text-text-faint text-sm">{items.length} item{items.length !== 1 ? "s" : ""}</p>
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 md:px-8 max-w-[1200px] mx-auto">
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item._id} className="flex items-center gap-4 md:gap-6 border border-border bg-bg-card p-4 md:p-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-bg-elevated border border-border flex-shrink-0 flex items-center justify-center">
                <span className="text-gold text-lg font-heading">{item.title[0]}</span>
              </div>

              <div className="flex-1 min-w-0">
                <Link href={`/products/${item.slug}`} className="text-text text-sm font-medium hover:text-gold transition-colors line-clamp-1">
                  {item.title}
                </Link>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-gold text-sm font-semibold">{format(item.price)}</span>
                  {item.compareAtPrice && (
                    <span className="text-text-faint text-xs line-through">{format(item.compareAtPrice)}</span>
                  )}
                </div>
              </div>

              <button
                onClick={() => {
                  addToCart({ _id: item._id, title: item.title, slug: item.slug, price: item.price });
                  removeFromWishlist(item._id);
                }}
                className="hidden sm:flex items-center gap-2 bg-gold hover:bg-gold-dark text-bg font-heading text-[10px] tracking-[0.15em] uppercase px-4 py-2.5 transition-colors"
              >
                <HiOutlineShoppingBag size={14} />
                Add to Cart
              </button>

              <button onClick={() => removeFromWishlist(item._id)} className="text-text-faint hover:text-red-sale transition-colors" aria-label="Remove">
                <HiOutlineTrash size={18} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
