import Link from "next/link";

export default function PhilosophyBanner() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)" }}>
      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-gold/[0.06]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full border border-gold/[0.04]" />

      <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
        <p className="text-gold font-heading text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-5 font-medium">Our Philosophy</p>
        <h2 className="font-heading text-[22px] md:text-[32px] lg:text-[38px] font-bold text-white leading-[1.5] mb-8">
          &ldquo;Elegance has no limits.
          <br />
          Style has no age.
          <br />
          <span className="text-gold">Jewellery is a reflection of who you are.</span>&rdquo;
        </h2>
        <p className="text-text-faint text-[13px] md:text-[15px] leading-[1.7] mb-10 max-w-md mx-auto">
          Every piece we create is designed to inspire confidence, celebrate individuality,
          and add a touch of luxury to everyday life.
        </p>
        <Link
          href="/about"
          className="inline-block border border-gold text-gold hover:bg-gold hover:text-black font-heading text-[11px] font-semibold tracking-[0.2em] uppercase px-10 py-[14px] transition-all duration-300"
        >
          Learn More About Us
        </Link>
      </div>
    </section>
  );
}
