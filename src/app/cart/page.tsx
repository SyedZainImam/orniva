import type { Metadata } from "next";
import CartPageClient from "@/components/CartPageClient";

export const metadata: Metadata = {
  title: "Cart — Orniva",
  description: "Your shopping cart",
};

export default function CartPage() {
  return <CartPageClient />;
}
