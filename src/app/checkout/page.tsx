import type { Metadata } from "next";
import CheckoutPageClient from "@/components/CheckoutPageClient";

export const metadata: Metadata = {
  title: "Checkout — Orniva",
  description: "Complete your order",
};

export default function CheckoutPage() {
  return <CheckoutPageClient />;
}
