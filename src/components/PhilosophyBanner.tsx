import Link from "next/link";

export default function PhilosophyBanner() {
  return (
    <section className="relative py-20 md:py-28 bg-bg overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-40 h-40 border border-gold/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-56 h-56 border border-gold/10 rounded-full translate-x-1/4 translate-y-1/4" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gold/5 rounded-full" />

      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <p className="text-gold font-heading text-[11px] tracking-[0.3em] uppercase mb-5">Our Philosophy</p>
        <h2 className="font-heading text-2xl md:text-4xl font-semibold text-text leading-relaxed mb-8">
          &ldquo;Elegance has no limits.
          <br />
          Style has no age.
          <br />
          <span className="text-gold">Jewellery is a reflection of who you are.</span>&rdquo;
        </h2>
        <p className="text-text-faint text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">
          Every piece we create is designed to inspire confidence, celebrate individuality,
          and add a touch of luxury to everyday life.
        </p>
        <Link
          href="/about"
          className="inline-block border border-gold text-gold hover:bg-gold hover:text-bg font-heading text-[11px] tracking-[0.2em] uppercase px-10 py-4 transition-all duration-300"
        >
          Learn More About Us
        </Link>
      </div>
    </section>
  );
}
