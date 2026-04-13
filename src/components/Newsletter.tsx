"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-16 md:py-20 bg-gold-50">
      <div className="max-w-2xl mx-auto text-center px-4">
        <p className="text-gold font-heading text-xs md:text-sm tracking-[0.3em] uppercase mb-3">
          Stay Connected
        </p>
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-text-primary mb-4">
          Join the Orniva Family
        </h2>
        <p className="text-text-secondary text-sm md:text-base mb-8">
          Subscribe to receive updates on new collections, exclusive offers, and styling
          inspiration delivered straight to your inbox.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setEmail("");
          }}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-5 py-3.5 border border-border-light text-sm focus:outline-none focus:border-gold font-body"
            required
          />
          <button
            type="submit"
            className="bg-gold hover:bg-gold-dark text-white font-heading text-xs tracking-widest uppercase px-8 py-3.5 transition-colors duration-300 whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
