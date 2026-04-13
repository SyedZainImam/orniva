import Link from "next/link";

export default function PhilosophyBanner() {
  return (
    <section className="relative py-20 md:py-28 bg-emerald-brand overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border border-gold/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 border border-gold/20 rounded-full translate-x-1/4 translate-y-1/4" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/5 rounded-full" />

      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <p className="text-gold-light font-heading text-xs md:text-sm tracking-[0.3em] uppercase mb-4">
          Our Philosophy
        </p>
        <h2 className="font-heading text-2xl md:text-4xl font-semibold text-white leading-relaxed mb-8">
          &ldquo;Elegance has no limits.
          <br />
          Style has no age.
          <br />
          Jewellery is a reflection of who you are.&rdquo;
        </h2>
        <p className="text-white/60 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">
          Every piece we create is designed to inspire confidence, celebrate individuality,
          and add a touch of luxury to everyday life.
        </p>
        <Link
          href="/about"
          className="inline-block border border-gold-light text-gold-light hover:bg-gold-light hover:text-emerald-brand font-heading text-sm tracking-widest uppercase px-10 py-4 transition-all duration-300"
        >
          Learn More About Us
        </Link>
      </div>
    </section>
  );
}
