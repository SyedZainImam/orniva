import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-emerald-brand text-white">
      {/* Main Footer */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo-transparent.png"
              alt="Orniva"
              width={160}
              height={60}
              className="h-[55px] w-auto object-contain brightness-0 invert mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed mt-3">
              Where Elegance Adorns You. Celebrating beauty in every form with timeless
              jewellery designed for every generation.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok size={14} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold-light font-heading text-sm font-semibold tracking-widest uppercase mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/collections", label: "All Collections" },
                { href: "/collections/bangles", label: "Bangles & Bracelets" },
                { href: "/collections/necklaces", label: "Necklaces & Pendants" },
                { href: "/collections/earrings", label: "Earrings" },
                { href: "/collections/rings", label: "Rings" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-gold-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gold-light font-heading text-sm font-semibold tracking-widest uppercase mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact Us" },
                { href: "#", label: "Shipping Policy" },
                { href: "#", label: "Return Policy" },
                { href: "#", label: "Privacy Policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-gold-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold-light font-heading text-sm font-semibold tracking-widest uppercase mb-5">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiOutlineMail className="text-gold-light mt-0.5 flex-shrink-0" size={18} />
                <span className="text-white/70 text-sm">info@orniva.com</span>
              </li>
              <li className="flex items-start gap-3">
                <HiOutlinePhone className="text-gold-light mt-0.5 flex-shrink-0" size={18} />
                <span className="text-white/70 text-sm">+92 300 0000000</span>
              </li>
              <li className="flex items-start gap-3">
                <HiOutlineLocationMarker className="text-gold-light mt-0.5 flex-shrink-0" size={18} />
                <span className="text-white/70 text-sm">Pakistan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} Orniva. All rights reserved.
          </p>
          <p className="text-white/50 text-xs">Where Elegance Adorns You</p>
        </div>
      </div>
    </footer>
  );
}
