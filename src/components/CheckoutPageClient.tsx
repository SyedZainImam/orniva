"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { useSettings } from "@/context/SettingsContext";
import { HiOutlineClipboardCopy, HiCheck, HiOutlineShoppingBag } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

export default function CheckoutPageClient() {
  const { items, totalPrice, clearCart } = useCart();
  const { format, currency } = useCurrency();
  const settings = useSettings();
  const [selectedPayment, setSelectedPayment] = useState("");
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const paymentMethods = settings.paymentMethods && settings.paymentMethods.length > 0
    ? settings.paymentMethods
    : [
        { name: "Bank Transfer", details: "Please update payment methods in CMS" },
        { name: "JazzCash", details: "Please update payment methods in CMS" },
        { name: "EasyPaisa", details: "Please update payment methods in CMS" },
      ];

  const whatsappNumber = settings.whatsappNumber?.replace(/[^0-9]/g, "") || "";

  const orderText = useMemo(() => {
    const lines = [
      "--- ORNIVA ORDER ---",
      "",
      `Customer: ${name || "(Your Name)"}`,
      `Phone: ${phone || "(Your Phone)"}`,
      `Address: ${address || "(Your Address)"}`,
      "",
      "Items:",
      ...items.map((item, i) =>
        `${i + 1}. ${item.title} x${item.quantity} — ${format(item.price * item.quantity)}`
      ),
      "",
      `Total Items: ${items.reduce((s, i) => s + i.quantity, 0)}`,
      `Total Price: ${format(totalPrice)}`,
      `Currency: ${currency}`,
      "",
      `Payment Method: ${selectedPayment || "(Select a method)"}`,
      "",
      settings.checkoutMessage || "Please send payment proof via WhatsApp after completing the payment.",
      "",
      "---",
    ];
    return lines.join("\n");
  }, [items, totalPrice, format, currency, selectedPayment, name, phone, address, settings.checkoutMessage]);

  const handleCopy = () => {
    navigator.clipboard.writeText(orderText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderText)}`;
    window.open(url, "_blank");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <HiOutlineShoppingBag size={48} className="text-text-faint mx-auto mb-4" />
          <h1 className="font-heading text-2xl font-semibold text-text mb-3">No Items to Checkout</h1>
          <p className="text-text-faint text-sm mb-6">Add some items to your cart first.</p>
          <Link href="/collections" className="inline-block bg-gold hover:bg-gold-dark text-bg font-heading text-[11px] tracking-[0.2em] uppercase px-8 py-3 transition-colors">
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
          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-text">Checkout</h1>
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 md:px-8 max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Customer Info + Payment */}
          <div className="space-y-6">
            <div className="border border-border bg-bg-card p-6">
              <h2 className="font-heading text-sm font-semibold text-text mb-4 tracking-wider uppercase">Your Details</h2>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-bg-elevated border border-border px-4 py-3 text-sm text-text placeholder:text-text-faint focus:outline-none focus:border-gold"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-bg-elevated border border-border px-4 py-3 text-sm text-text placeholder:text-text-faint focus:outline-none focus:border-gold"
                />
                <textarea
                  placeholder="Delivery Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows={3}
                  className="w-full bg-bg-elevated border border-border px-4 py-3 text-sm text-text placeholder:text-text-faint focus:outline-none focus:border-gold resize-none"
                />
              </div>
            </div>

            <div className="border border-border bg-bg-card p-6">
              <h2 className="font-heading text-sm font-semibold text-text mb-4 tracking-wider uppercase">Payment Method</h2>
              <div className="space-y-2">
                {paymentMethods.map((method) => (
                  <label
                    key={method.name}
                    className={`flex items-start gap-3 p-3 border cursor-pointer transition-colors ${
                      selectedPayment === method.name ? "border-gold bg-gold/5" : "border-border hover:border-border-light"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.name}
                      checked={selectedPayment === method.name}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="mt-1 accent-[#c9a84c]"
                    />
                    <div>
                      <p className="text-text text-sm font-medium">{method.name}</p>
                      <p className="text-text-faint text-xs mt-0.5">{method.details}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="space-y-6">
            <div className="border border-border bg-bg-card p-6">
              <h2 className="font-heading text-sm font-semibold text-text mb-4 tracking-wider uppercase">Order Summary</h2>
              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={item._id} className="flex justify-between text-sm">
                    <span className="text-text-muted">{item.title} <span className="text-text-faint">x{item.quantity}</span></span>
                    <span className="text-text font-medium">{format(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-3 flex justify-between">
                <span className="text-text font-heading font-semibold">Total</span>
                <span className="text-gold text-lg font-bold">{format(totalPrice)}</span>
              </div>
            </div>

            {/* Generated Order Text */}
            <div className="border border-border bg-bg-card p-6">
              <h2 className="font-heading text-sm font-semibold text-text mb-3 tracking-wider uppercase">Order Message</h2>
              <p className="text-text-faint text-xs mb-3">
                Copy this message and send it to us on WhatsApp along with payment proof.
              </p>
              <pre className="bg-bg-elevated border border-border p-4 text-text-muted text-xs whitespace-pre-wrap font-body max-h-60 overflow-y-auto">
                {orderText}
              </pre>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={handleCopy}
                  className={`flex-1 flex items-center justify-center gap-2 font-heading text-[11px] tracking-[0.15em] uppercase px-4 py-3 transition-all border ${
                    copied ? "border-green-600 text-green-500" : "border-gold text-gold hover:bg-gold hover:text-bg"
                  }`}
                >
                  {copied ? <HiCheck size={16} /> : <HiOutlineClipboardCopy size={16} />}
                  {copied ? "Copied!" : "Copy Text"}
                </button>

                {whatsappNumber && (
                  <button
                    onClick={handleWhatsApp}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-heading text-[11px] tracking-[0.15em] uppercase px-4 py-3 transition-colors"
                  >
                    <FaWhatsapp size={16} />
                    Send on WhatsApp
                  </button>
                )}
              </div>
            </div>

            <button
              onClick={() => clearCart()}
              className="w-full border border-border text-text-faint hover:text-red-sale hover:border-red-sale font-heading text-[10px] tracking-[0.15em] uppercase px-4 py-3 transition-colors"
            >
              Clear Cart After Sending
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
