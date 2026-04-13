import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[520px] md:min-h-[620px] lg:min-h-[700px] flex items-center justify-center overflow-hidden bg-bg">
      {/* Subtle radial glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-[120px]" />
      </div>
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <Image
            src="/images/logo-transparent.png"
            alt="Orniva"
            width={240}
            height={240}
            className="w-[150px] md:w-[190px] lg:w-[230px] h-auto mx-auto brightness-0 invert opacity-90"
            priority
          />
        </div>

        <p className="text-gold font-heading text-[11px] md:text-xs tracking-[0.35em] uppercase mb-5">
          Where Elegance Adorns You
        </p>

        <h1 className="font-heading text-3xl md:text-5xl lg:text-[56px] font-semibold text-text leading-tight mb-6">
          Discover Timeless
          <span className="block text-gold mt-1">Jewellery Collections</span>
        </h1>

        <p className="text-text-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10">
          From delicate everyday pieces to statement designs, Orniva offers a world of
          adornment where each creation enhances your natural grace.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/collections"
            className="bg-gold hover:bg-gold-dark text-bg font-heading text-[11px] tracking-[0.2em] uppercase px-10 py-4 transition-all duration-300"
          >
            Explore Collections
          </Link>
          <Link
            href="/about"
            className="border border-border text-text-muted hover:border-gold hover:text-gold font-heading text-[11px] tracking-[0.2em] uppercase px-10 py-4 transition-all duration-300"
          >
            Our Story
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
}
