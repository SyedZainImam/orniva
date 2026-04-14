"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-16 md:py-20 bg-bg">
      <div className="max-w-lg mx-auto text-center px-6">
        <p className="text-gold font-heading text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-3 font-medium">Stay Connected</p>
        <h2 className="font-heading text-[22px] md:text-[28px] font-bold text-white mb-3">Join the Orniva Family</h2>
        <p className="text-text-faint text-[13px] leading-[1.6] mb-8">
          Subscribe to receive updates on new collections, exclusive offers, and styling inspiration.
        </p>
        <form
          onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
          className="flex flex-col sm:flex-row gap-2.5"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 border border-border text-[13px] text-white focus:outline-none focus:border-gold font-body placeholder:text-text-faint transition-colors"
            style={{ background: "#141414" }}
            required
          />
          <button
            type="submit"
            className="bg-gold hover:bg-gold-dark text-black font-heading text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase px-7 py-3 transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
