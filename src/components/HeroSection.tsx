import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-emerald-brand">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-brand/90 via-emerald-brand/70 to-emerald-brand/90" />
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23c99a45\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          />
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-6 md:mb-8">
          <Image
            src="/images/logo-transparent.png"
            alt="Orniva"
            width={220}
            height={220}
            className="w-[160px] md:w-[200px] lg:w-[240px] h-auto mx-auto brightness-0 invert drop-shadow-lg"
            priority
          />
        </div>

        <p className="text-gold-light font-heading text-sm md:text-base tracking-[0.3em] uppercase mb-4 md:mb-6">
          Where Elegance Adorns You
        </p>

        <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-5 md:mb-7">
          Discover Timeless
          <span className="block text-gold-light">Jewellery Collections</span>
        </h1>

        <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10">
          From delicate everyday pieces to statement designs, Orniva offers a world of
          adornment where each creation enhances your natural grace and tells your unique
          story.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/collections"
            className="inline-block bg-gold hover:bg-gold-dark text-white font-heading text-sm tracking-widest uppercase px-10 py-4 transition-all duration-300 hover:shadow-lg"
          >
            Explore Collections
          </Link>
          <Link
            href="/about"
            className="inline-block border border-gold-light/50 text-gold-light hover:bg-gold-light/10 font-heading text-sm tracking-widest uppercase px-10 py-4 transition-all duration-300"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
}
