"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { useSettings } from "@/context/SettingsContext";
import { useCurrency } from "@/context/CurrencyContext";

export default function Footer() {
  const settings = useSettings();
  const { currency, setCurrency, currencies } = useCurrency();

  const socialLinks = [
    { icon: FaFacebookF, label: "Facebook", url: settings.facebookUrl },
    { icon: FaInstagram, label: "Instagram", url: settings.instagramUrl },
    { icon: FaTiktok, label: "TikTok", url: settings.tiktokUrl },
    { icon: FaWhatsapp, label: "WhatsApp", url: settings.whatsappNumber ? `https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, "")}` : undefined },
  ].filter((s) => s.url);

  return (
    <footer className="bg-bg-card border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <Image
                src="/images/logo-transparent.png"
                alt="Orniva"
                width={40}
                height={40}
                className="h-[48px] w-[48px] object-cover rounded-full"
              />
              <span className="font-heading text-[24px] font-bold text-white tracking-wide">ORNIVA</span>
            </div>
            <p className="text-text-faint text-sm leading-relaxed">
              {settings.tagline || "Where Elegance Adorns You"}. Timeless jewellery designed for every generation.
            </p>
            {socialLinks.length > 0 && (
              <div className="flex gap-3 mt-6">
                {socialLinks.map(({ icon: Icon, label, url }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-faint hover:border-gold hover:text-gold transition-all"
                    aria-label={label}
                  >
                    <Icon size={13} />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h3 className="text-gold font-heading text-[11px] font-semibold tracking-[0.2em] uppercase mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/collections", label: "All Collections" },
                { href: "/collections/bangles", label: "Bangles & Bracelets" },
                { href: "/collections/necklaces", label: "Necklaces & Pendants" },
                { href: "/collections/earrings", label: "Earrings" },
                { href: "/collections/rings", label: "Rings" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-text-faint text-sm hover:text-gold transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gold font-heading text-[11px] font-semibold tracking-[0.2em] uppercase mb-6">Company</h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact Us" },
                { href: "/policy/shipping-and-return-policy", label: "Shipping & Return Policy" },
                { href: "/policy/privacy-policy", label: "Privacy Policy" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-text-faint text-sm hover:text-gold transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gold font-heading text-[11px] font-semibold tracking-[0.2em] uppercase mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              {settings.contactEmail && (
                <li className="flex items-start gap-3">
                  <HiOutlineMail className="text-gold mt-0.5 flex-shrink-0" size={16} />
                  <a href={`mailto:${settings.contactEmail}`} className="text-text-faint text-sm hover:text-gold transition-colors">
                    {settings.contactEmail}
                  </a>
                </li>
              )}
              {settings.contactPhone && (
                <li className="flex items-start gap-3">
                  <HiOutlinePhone className="text-gold mt-0.5 flex-shrink-0" size={16} />
                  <a href={`tel:${settings.contactPhone}`} className="text-text-faint text-sm hover:text-gold transition-colors">
                    {settings.contactPhone}
                  </a>
                </li>
              )}
              {settings.address && (
                <li className="flex items-start gap-3">
                  <HiOutlineLocationMarker className="text-gold mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-text-faint text-sm">{settings.address}</span>
                </li>
              )}
              {!settings.contactEmail && !settings.contactPhone && !settings.address && (
                <>
                  <li className="flex items-start gap-3">
                    <HiOutlineMail className="text-gold mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-text-faint text-sm">info@orniva.com</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiOutlinePhone className="text-gold mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-text-faint text-sm">+92 300 0000000</span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-text-faint text-xs">&copy; {new Date().getFullYear()} Orniva. All rights reserved.</p>

          {/* Currency Selector */}
          <div className="flex items-center gap-2">
            <span className="text-text-faint text-[10px] tracking-wider uppercase">Currency:</span>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-bg-elevated border border-border text-text-muted text-[11px] tracking-wider px-2 py-1 focus:outline-none focus:border-gold cursor-pointer"
            >
              {currencies.map((c) => (
                <option key={c.code} value={c.code}>{c.code} ({c.symbol})</option>
              ))}
            </select>
          </div>

          <p className="text-text-faint text-xs tracking-wider">{settings.tagline || "Where Elegance Adorns You"}</p>
        </div>
      </div>
    </footer>
  );
}
