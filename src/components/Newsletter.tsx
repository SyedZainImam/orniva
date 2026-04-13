"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-16 md:py-20 bg-bg">
      <div className="max-w-2xl mx-auto text-center px-4">
        <p className="text-gold font-heading text-[11px] tracking-[0.3em] uppercase mb-3">Stay Connected</p>
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-text mb-4">Join the Orniva Family</h2>
        <p className="text-text-faint text-sm mb-8">
          Subscribe to receive updates on new collections, exclusive offers, and styling inspiration.
        </p>
        <form
          onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-5 py-3.5 bg-bg-card border border-border text-sm text-text focus:outline-none focus:border-gold font-body placeholder:text-text-faint transition-colors"
            required
          />
          <button
            type="submit"
            className="bg-gold hover:bg-gold-dark text-bg font-heading text-[11px] tracking-[0.2em] uppercase px-8 py-3.5 transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
