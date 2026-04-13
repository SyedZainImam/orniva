"use client";

import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function AddToCartButton() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center gap-3 flex-1">
      <div className="flex items-center border border-border-light">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="w-10 h-12 text-lg text-text-secondary hover:text-text-primary transition-colors"
        >
          -
        </button>
        <span className="w-10 h-12 flex items-center justify-center text-sm font-semibold border-x border-border-light">
          {quantity}
        </span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="w-10 h-12 text-lg text-text-secondary hover:text-text-primary transition-colors"
        >
          +
        </button>
      </div>
      <button className="flex-1 bg-gold hover:bg-gold-dark text-white font-heading text-sm tracking-widest uppercase px-6 py-4 transition-all duration-300 flex items-center justify-center gap-2">
        <HiOutlineShoppingBag size={18} />
        Add to Cart
      </button>
    </div>
  );
}
