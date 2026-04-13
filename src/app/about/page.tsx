import Image from "next/image";
import type { Metadata } from "next";
import { HiOutlineSparkles, HiOutlineHeart, HiOutlineStar, HiOutlineGlobe } from "react-icons/hi";

export const metadata: Metadata = {
  title: "About Us — Orniva",
  description: "Orniva is a premium jewellery brand dedicated to crafting elegant pieces for every generation.",
};

const values = [
  { icon: HiOutlineSparkles, title: "Elegance Has No Limits", description: "We believe beauty and elegance are boundless. Our designs push creative boundaries while maintaining timeless appeal." },
  { icon: HiOutlineHeart, title: "Style Has No Age", description: "From young trendsetters to graceful matriarchs, our collections celebrate style at every stage of life." },
  { icon: HiOutlineStar, title: "Quality First", description: "Every piece undergoes meticulous quality checks to ensure it meets our premium standards of craftsmanship." },
  { icon: HiOutlineGlobe, title: "Cultural Inspiration", description: "We blend rich cultural heritage with contemporary design to create jewellery that feels both meaningful and modern." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-bg-card border-b border-border py-16 md:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 border border-gold/10 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 border border-gold/10 rounded-full -translate-x-1/2 translate-y-1/2" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
          <p className="text-gold font-heading text-[11px] tracking-[0.3em] uppercase mb-4">Our Story</p>
          <h1 className="font-heading text-3xl md:text-5xl font-semibold text-text mb-6">About Orniva</h1>
          <p className="text-text-faint text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            A premium jewellery brand dedicated to crafting elegant pieces for every generation.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] relative bg-bg-card border border-border overflow-hidden">
            <Image src="/images/logo-green.png" alt="Orniva Brand" fill className="object-contain p-8" />
          </div>
          <div>
            <p className="text-gold font-heading text-[11px] tracking-[0.3em] uppercase mb-3">Who We Are</p>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-text mb-6">Where Elegance Adorns You</h2>
            <div className="space-y-4 text-text-muted text-sm leading-relaxed">
              <p>At Orniva, we celebrate beauty in every form. Our collections are thoughtfully designed to bring together timeless elegance and modern sophistication, creating jewellery that complements every style, every occasion, and every age.</p>
              <p>From delicate everyday pieces to statement designs, Orniva offers a world of adornment where each creation enhances your natural grace and tells your unique story.</p>
              <p>From beautifully designed bangles to necklaces, earrings, and more, our collections are created with a focus on quality, detail, and timeless appeal. We blend cultural inspiration with contemporary design to offer jewellery that feels both meaningful and modern.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-bg-card border-t border-b border-border py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <p className="text-gold font-heading text-[11px] tracking-[0.3em] uppercase mb-5">Our Philosophy</p>
          <h2 className="font-heading text-2xl md:text-4xl font-semibold text-text leading-relaxed mb-8">
            &ldquo;Elegance has no limits.<br />Style has no age.<br /><span className="text-gold">Jewellery is a reflection of who you are.</span>&rdquo;
          </h2>
          <p className="text-text-faint text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Every piece we create is designed to inspire confidence, celebrate individuality, and add a touch of luxury to everyday life.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-gold font-heading text-[11px] tracking-[0.3em] uppercase mb-3">What We Believe</p>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-text">Our Values</h2>
            <div className="w-12 h-px bg-gold mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            {values.map((v, i) => (
              <div key={i} className="flex gap-5">
                <div className="w-14 h-14 flex-shrink-0 rounded-full border border-border flex items-center justify-center">
                  <v.icon size={22} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-text mb-2">{v.title}</h3>
                  <p className="text-text-faint text-sm leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-bg-card border-t border-border">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-text mb-4">Discover Jewellery For Every Moment</h2>
          <p className="text-text-faint text-sm mb-8 max-w-xl mx-auto">
            Bangles, Necklaces, Earrings, Rings — each collection transitions effortlessly from everyday wear to special occasions.
          </p>
          <a href="/collections" className="inline-block bg-gold hover:bg-gold-dark text-bg font-heading text-[11px] tracking-[0.2em] uppercase px-10 py-4 transition-all duration-300">
            Explore All Collections
          </a>
        </div>
      </section>
    </>
  );
}
