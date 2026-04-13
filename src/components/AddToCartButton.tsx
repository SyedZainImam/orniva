"use client";

import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function AddToCartButton() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center gap-3 flex-1">
      <div className="flex items-center border border-border">
        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-12 text-lg text-text-faint hover:text-gold transition-colors">-</button>
        <span className="w-10 h-12 flex items-center justify-center text-sm font-semibold text-text border-x border-border">{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-12 text-lg text-text-faint hover:text-gold transition-colors">+</button>
      </div>
      <button className="flex-1 bg-gold hover:bg-gold-dark text-bg font-heading text-[11px] tracking-[0.2em] uppercase px-6 py-4 transition-all duration-300 flex items-center justify-center gap-2">
        <HiOutlineShoppingBag size={16} />
        Add to Cart
      </button>
    </div>
  );
}
