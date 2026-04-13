import Image from "next/image";
import type { Metadata } from "next";
import { HiOutlineSparkles, HiOutlineHeart, HiOutlineStar, HiOutlineGlobe } from "react-icons/hi";

export const metadata: Metadata = {
  title: "About Us — Orniva",
  description: "Orniva is a premium jewellery brand dedicated to crafting elegant pieces for every generation.",
};

const values = [
  {
    icon: HiOutlineSparkles,
    title: "Elegance Has No Limits",
    description:
      "We believe beauty and elegance are boundless. Our designs push creative boundaries while maintaining timeless appeal.",
  },
  {
    icon: HiOutlineHeart,
    title: "Style Has No Age",
    description:
      "From young trendsetters to graceful matriarchs, our collections celebrate style at every stage of life.",
  },
  {
    icon: HiOutlineStar,
    title: "Quality First",
    description:
      "Every piece undergoes meticulous quality checks to ensure it meets our premium standards of craftsmanship.",
  },
  {
    icon: HiOutlineGlobe,
    title: "Cultural Inspiration",
    description:
      "We blend rich cultural heritage with contemporary design to create jewellery that feels both meaningful and modern.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-emerald-brand py-16 md:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 border border-gold/10 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 border border-gold/10 rounded-full -translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
          <p className="text-gold-light font-heading text-xs tracking-[0.3em] uppercase mb-4">
            Our Story
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-semibold text-white mb-6">
            About Orniva
          </h1>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            A premium jewellery brand dedicated to crafting elegant pieces for every
            generation. Where tradition meets contemporary design.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-[4/5] relative bg-gold-50 overflow-hidden">
              <Image
                src="/images/logo-green.png"
                alt="Orniva Brand"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>
          <div>
            <p className="text-gold font-heading text-xs tracking-[0.3em] uppercase mb-3">
              Who We Are
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-text-primary mb-6">
              Where Elegance Adorns You
            </h2>
            <div className="space-y-4 text-text-secondary text-sm leading-relaxed">
              <p>
                At Orniva, we celebrate beauty in every form. Our collections are
                thoughtfully designed to bring together timeless elegance and modern
                sophistication, creating jewellery that complements every style, every
                occasion, and every age.
              </p>
              <p>
                From delicate everyday pieces to statement designs, Orniva offers a world
                of adornment where each creation enhances your natural grace and tells your
                unique story.
              </p>
              <p>
                From beautifully designed bangles to necklaces, earrings, and more, our
                collections are created with a focus on quality, detail, and timeless appeal.
                We blend cultural inspiration with contemporary design to offer jewellery
                that feels both meaningful and modern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-emerald-brand py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <p className="text-gold-light font-heading text-xs tracking-[0.3em] uppercase mb-4">
            Our Philosophy
          </p>
          <h2 className="font-heading text-2xl md:text-4xl font-semibold text-white mb-8 leading-relaxed">
            &ldquo;Elegance has no limits.
            <br />
            Style has no age.
            <br />
            Jewellery is a reflection of who you are.&rdquo;
          </h2>
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Every piece we create is designed to inspire confidence, celebrate
            individuality, and add a touch of luxury to everyday life. Whether it&apos;s a
            subtle touch of sparkle or a bold statement piece, Orniva is designed to be
            worn, loved, and cherished.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-gold font-heading text-xs tracking-[0.3em] uppercase mb-3">
              What We Believe
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-text-primary">
              Our Values
            </h2>
            <div className="w-16 h-[2px] bg-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            {values.map((value, i) => (
              <div key={i} className="flex gap-5">
                <div className="w-14 h-14 flex-shrink-0 rounded-full bg-gold-50 flex items-center justify-center">
                  <value.icon size={24} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-base md:text-lg font-semibold text-text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections CTA */}
      <section className="py-16 md:py-20 bg-gold-50">
        <div className="max-w-3xl mx-auto text-center px-4">
          <p className="text-gold font-heading text-xs tracking-[0.3em] uppercase mb-3">
            Our Collections
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-text-primary mb-4">
            Discover Jewellery For Every Moment
          </h2>
          <p className="text-text-secondary text-sm md:text-base mb-8 max-w-xl mx-auto">
            Bangles & Bracelets, Necklaces & Pendants, Earrings, Rings — each collection
            is designed to transition effortlessly from everyday wear to special occasions.
          </p>
          <a
            href="/collections"
            className="inline-block bg-gold hover:bg-gold-dark text-white font-heading text-sm tracking-widest uppercase px-10 py-4 transition-all duration-300 hover:shadow-lg"
          >
            Explore All Collections
          </a>
        </div>
      </section>
    </>
  );
}
