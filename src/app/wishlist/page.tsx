import type { Metadata } from "next";
import WishlistPageClient from "@/components/WishlistPageClient";

export const metadata: Metadata = {
  title: "Wishlist — Orniva",
  description: "Your saved items",
};

export default function WishlistPage() {
  return <WishlistPageClient />;
}
