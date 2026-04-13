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
      <div className="bg-emerald-brand text-white text-center py-2 px-4 text-xs tracking-widest font-body">
        FREE SHIPPING ON ORDERS ABOVE RS. 3,000 | WHERE ELEGANCE ADORNS YOU
      </div>

      {/* Main Header */}
      <div className="bg-gold text-white">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-white p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <HiOutlineX size={26} /> : <HiOutlineMenu size={26} />}
            </button>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo-transparent.png"
                alt="Orniva"
                width={140}
                height={50}
                className="h-[45px] md:h-[55px] w-auto object-contain brightness-0 invert"
                priority
              />
            </Link>

            {/* Right Icons */}
            <div className="flex items-center gap-3 md:gap-5">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-white hover:text-gold-100 transition-colors"
                aria-label="Search"
              >
                <HiOutlineSearch size={22} />
              </button>
              <Link
                href="#"
                className="text-white hover:text-gold-100 transition-colors relative"
                aria-label="Cart"
              >
                <HiOutlineShoppingBag size={22} />
                <span className="absolute -top-2 -right-2 bg-emerald-brand text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block border-t border-gold-light/30">
          <div className="max-w-[1600px] mx-auto px-8">
            <ul className="flex items-center justify-center gap-1 py-2 flex-wrap">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-[13px] font-semibold tracking-wider text-white hover:text-gold-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 p-4 md:p-6">
          <div className="max-w-2xl mx-auto flex items-center gap-3">
            <HiOutlineSearch size={20} className="text-text-secondary" />
            <input
              type="text"
              placeholder="Search for jewellery..."
              className="flex-1 py-2 text-base outline-none border-b-2 border-gold font-body text-text-primary placeholder:text-text-secondary"
              autoFocus
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="text-text-secondary hover:text-text-primary"
            >
              <HiOutlineX size={22} />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-0 z-[100]">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute top-0 left-0 h-full w-[280px] bg-white shadow-2xl overflow-y-auto">
            <div className="bg-gold p-4 flex items-center justify-between">
              <Image
                src="/images/logo-transparent.png"
                alt="Orniva"
                width={100}
                height={36}
                className="h-[36px] w-auto object-contain brightness-0 invert"
              />
              <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                <HiOutlineX size={24} />
              </button>
            </div>
            <nav className="py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-6 py-3 text-sm font-semibold tracking-wider text-text-primary hover:bg-gold-50 hover:text-gold border-b border-border-light transition-colors"
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
