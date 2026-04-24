"use client";

import Link from "next/link";
import { HiOutlineTrash, HiOutlineShoppingBag } from "react-icons/hi";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";

export default function CartPageClient() {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  const { format } = useCurrency();

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <HiOutlineShoppingBag size={48} className="text-text-faint mx-auto mb-4" />
          <h1 className="font-heading text-2xl font-semibold text-text mb-3">Your Cart is Empty</h1>
          <p className="text-text-faint text-sm mb-6">Looks like you haven&apos;t added anything yet.</p>
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
          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-text mb-2">Shopping Cart</h1>
          <p className="text-text-faint text-sm">{totalItems} item{totalItems !== 1 ? "s" : ""}</p>
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 md:px-8 max-w-[1200px] mx-auto">
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item._id} className="flex items-center gap-4 md:gap-6 border border-border bg-bg-card p-4 md:p-6">
              {/* Placeholder image */}
              <div className="w-16 h-16 md:w-20 md:h-20 bg-bg-elevated border border-border flex-shrink-0 flex items-center justify-center">
                <span className="text-gold text-lg font-heading">{item.title[0]}</span>
              </div>

              <div className="flex-1 min-w-0">
                <Link href={`/products/${item.slug}`} className="text-text text-sm font-medium hover:text-gold transition-colors line-clamp-1">
                  {item.title}
                </Link>
                <p className="text-gold text-sm font-semibold mt-1">{format(item.price)}</p>
              </div>

              <div className="flex items-center border border-border">
                <button onClick={() => updateQuantity(item._id, item.quantity - 1)} className="w-8 h-8 text-text-faint hover:text-gold transition-colors text-sm">-</button>
                <span className="w-8 h-8 flex items-center justify-center text-xs font-semibold text-text border-x border-border">{item.quantity}</span>
                <button onClick={() => updateQuantity(item._id, item.quantity + 1)} className="w-8 h-8 text-text-faint hover:text-gold transition-colors text-sm">+</button>
              </div>

              <p className="text-text font-semibold text-sm w-24 text-right hidden md:block">{format(item.price * item.quantity)}</p>

              <button onClick={() => removeFromCart(item._id)} className="text-text-faint hover:text-red-sale transition-colors" aria-label="Remove">
                <HiOutlineTrash size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 border border-border bg-bg-card p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <span className="text-text-muted font-heading text-sm">Subtotal</span>
            <span className="text-gold text-xl font-bold">{format(totalPrice)}</span>
          </div>
          <Link
            href="/checkout"
            className="block w-full bg-gold hover:bg-gold-dark text-bg font-heading text-[12px] tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 text-center"
          >
            Proceed to Checkout
          </Link>
          <Link href="/collections" className="block text-center text-text-faint text-xs mt-4 hover:text-gold transition-colors">
            Continue Shopping
          </Link>
        </div>
      </section>
    </>
  );
}
