"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { HiOutlineSearch, HiOutlineShoppingBag, HiOutlineHeart, HiOutlineMenu, HiOutlineX, HiOutlineUser } from "react-icons/hi";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

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
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { data: session } = useSession();
  const { totalItems } = useCart();
  const { totalItems: wishlistCount } = useWishlist();

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-bg-card border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="relative flex items-center justify-between py-3 md:py-5">
            <button
              className="lg:hidden text-text p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
            </button>

            <Link href="/" className="absolute left-1/2 -translate-x-1/2">
              <Image
                src="/images/logo-transparent.png"
                alt="Orniva"
                width={80}
                height={80}
                className="h-[60px] w-[60px] md:h-[75px] md:w-[75px] object-cover rounded-full"
                priority
              />
            </Link>

            <div className="flex items-center gap-3 md:gap-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-text-muted hover:text-gold transition-colors"
                aria-label="Search"
              >
                <HiOutlineSearch size={20} />
              </button>

              <Link href="/wishlist" className="text-text-muted hover:text-gold transition-colors relative" aria-label="Wishlist">
                <HiOutlineHeart size={20} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-gold text-bg text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <Link href="/cart" className="text-text-muted hover:text-gold transition-colors relative" aria-label="Cart">
                <HiOutlineShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-gold text-bg text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </Link>

              {/* User Menu */}
              <div className="relative flex items-center">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="text-text-muted hover:text-gold transition-colors flex items-center justify-center"
                  aria-label="Account"
                >
                  {session?.user?.image ? (
                    <Image src={session.user.image} alt="" width={20} height={20} className="rounded-full" />
                  ) : (
                    <HiOutlineUser size={20} />
                  )}
                </button>
                {userMenuOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setUserMenuOpen(false)} />
                    <div className="absolute right-0 top-full mt-2 w-48 bg-bg-card border border-border z-50 shadow-lg">
                      {session ? (
                        <>
                          <div className="px-4 py-3 border-b border-border">
                            <p className="text-text text-xs font-semibold truncate">{session.user?.name}</p>
                            <p className="text-text-faint text-[10px] truncate">{session.user?.email}</p>
                          </div>
                          <button
                            onClick={() => { signOut(); setUserMenuOpen(false); }}
                            className="w-full text-left px-4 py-3 text-text-muted text-xs hover:text-gold hover:bg-bg-hover transition-colors"
                          >
                            Sign Out
                          </button>
                        </>
                      ) : (
                        <Link
                          href="/login"
                          onClick={() => setUserMenuOpen(false)}
                          className="block px-4 py-3 text-text-muted text-xs hover:text-gold hover:bg-bg-hover transition-colors"
                        >
                          Sign In
                        </Link>
                      )}
                    </div>
                  </>
                )}
              </div>
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
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logo-transparent.png"
                  alt="Orniva"
                  width={32}
                  height={32}
                  className="h-[38px] w-[38px] object-cover rounded-full"
                />
                <span className="font-heading text-[18px] font-bold text-white tracking-wide">ORNIVA</span>
              </div>
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
