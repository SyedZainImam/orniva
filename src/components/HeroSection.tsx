import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[520px] md:min-h-[620px] lg:min-h-[700px] flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #141414 40%, #0f0f0f 100%)" }}>
      {/* Subtle gold radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #c9a84c 0%, transparent 70%)" }} />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="mb-8 md:mb-10">
          <Image
            src="/images/logo-transparent.png"
            alt="Orniva"
            width={240}
            height={240}
            className="w-[140px] md:w-[180px] lg:w-[220px] h-auto mx-auto"
            priority
          />
        </div>

        <p className="text-gold font-heading text-[10px] md:text-[11px] tracking-[0.4em] uppercase mb-4 md:mb-6 font-medium">
          Where Elegance Adorns You
        </p>

        <h1 className="font-heading text-[28px] md:text-[44px] lg:text-[52px] font-bold leading-[1.15] mb-5 md:mb-7 text-white">
          Discover Timeless
          <br />
          <span className="text-gold">Jewellery Collections</span>
        </h1>

        <p className="text-text-muted text-[13px] md:text-[15px] max-w-lg mx-auto leading-[1.7] mb-8 md:mb-12">
          From delicate everyday pieces to statement designs, each creation enhances your natural grace and tells your unique story.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/collections"
            className="w-full sm:w-auto text-center bg-gold hover:bg-gold-dark text-black font-heading text-[11px] font-semibold tracking-[0.2em] uppercase px-10 py-[14px] transition-all duration-300"
          >
            Explore Collections
          </Link>
          <Link
            href="/about"
            className="w-full sm:w-auto text-center border border-border-light text-text-muted hover:border-gold hover:text-gold font-heading text-[11px] font-semibold tracking-[0.2em] uppercase px-10 py-[14px] transition-all duration-300"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)" }} />
    </section>
  );
}
