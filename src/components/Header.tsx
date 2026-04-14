"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineSearch, HiOutlineShoppingBag, HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/collections", label: "COLLECTIONS" },
  { href: "/collections/bangles", label: "BANGLES" },
  { href: "/collections/necklaces", label: "NECKLACES" },
  { href: "/collections/earrings", label: "EARRINGS" },
  { href: "/collections/rings", label: "RINGS" },
  { href: "/collections/bracelets", label: "BRACELETS" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement Bar */}
      <div className="bg-gold text-bg text-center py-2 px-4 text-[11px] tracking-[0.2em] font-semibold font-heading">
        FREE SHIPPING ON ORDERS ABOVE RS. 3,000 &nbsp;|&nbsp; WHERE ELEGANCE ADORNS YOU
      </div>

      {/* Main Header */}
      <div className="bg-bg-card border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between py-3 md:py-4">
            <button
              className="lg:hidden text-text p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
            </button>

            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo-transparent.png"
                alt="Orniva"
                width={140}
                height={50}
                className="h-[42px] md:h-[52px] w-auto object-contain"
                priority
              />
            </Link>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-text-muted hover:text-gold transition-colors"
                aria-label="Search"
              >
                <HiOutlineSearch size={20} />
              </button>
              <Link href="#" className="text-text-muted hover:text-gold transition-colors relative" aria-label="Cart">
                <HiOutlineShoppingBag size={20} />
                <span className="absolute -top-1.5 -right-1.5 bg-gold text-bg text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:block border-t border-border">
          <div className="max-w-[1400px] mx-auto px-8">
            <ul className="flex items-center justify-center flex-wrap">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-5 py-3 text-[11px] font-semibold tracking-[0.15em] text-text-muted hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* Search */}
      {searchOpen && (
        <div className="absolute top-full left-0 right-0 bg-bg-card border-b border-border z-50 p-4 md:p-6">
          <div className="max-w-2xl mx-auto flex items-center gap-3">
            <HiOutlineSearch size={18} className="text-text-faint" />
            <input
              type="text"
              placeholder="Search for jewellery..."
              className="flex-1 bg-transparent py-2 text-sm outline-none border-b border-gold text-text placeholder:text-text-faint font-body"
              autoFocus
            />
            <button onClick={() => setSearchOpen(false)} className="text-text-faint hover:text-text">
              <HiOutlineX size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100]">
          <div className="absolute inset-0 bg-black/70" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute top-0 left-0 h-full w-[280px] bg-bg-card border-r border-border overflow-y-auto">
            <div className="p-4 flex items-center justify-between border-b border-border">
              <Image
                src="/images/logo-transparent.png"
                alt="Orniva"
                width={100}
                height={36}
                className="h-[32px] w-auto object-contain"
              />
              <button onClick={() => setMobileMenuOpen(false)} className="text-text-muted">
                <HiOutlineX size={22} />
              </button>
            </div>
            <nav className="py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-6 py-3.5 text-[12px] font-semibold tracking-[0.15em] text-text-muted hover:text-gold hover:bg-bg-hover border-b border-border/50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
