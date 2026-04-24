"use client";

import { useState } from "react";
import { HiOutlineShoppingBag, HiCheck } from "react-icons/hi";
import { useCart } from "@/context/CartContext";

interface AddToCartButtonProps {
  product: {
    _id: string;
    title: string;
    slug: string;
    price: number;
    compareAtPrice?: number;
    image?: string;
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex items-center gap-3 flex-1">
      <div className="flex items-center border border-border">
        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-12 text-lg text-text-faint hover:text-gold transition-colors">-</button>
        <span className="w-10 h-12 flex items-center justify-center text-sm font-semibold text-text border-x border-border">{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-12 text-lg text-text-faint hover:text-gold transition-colors">+</button>
      </div>
      <button
        onClick={handleAdd}
        className={`flex-1 font-heading text-[11px] tracking-[0.2em] uppercase px-6 py-4 transition-all duration-300 flex items-center justify-center gap-2 ${
          added
            ? "bg-green-600 text-white"
            : "bg-gold hover:bg-gold-dark text-bg"
        }`}
      >
        {added ? (
          <>
            <HiCheck size={16} />
            Added!
          </>
        ) : (
          <>
            <HiOutlineShoppingBag size={16} />
            Add to Cart
          </>
        )}
      </button>
    </div>
  );
}
