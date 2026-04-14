import { HiOutlineSparkles, HiOutlineHeart, HiOutlineStar, HiOutlineGift } from "react-icons/hi";

const features = [
  { icon: HiOutlineSparkles, title: "Premium Craftsmanship", desc: "Every piece is meticulously crafted with refined detailing and superior quality." },
  { icon: HiOutlineHeart, title: "For Every Generation", desc: "Jewellery designed to complement every style, every occasion, and every age." },
  { icon: HiOutlineStar, title: "Timeless Designs", desc: "A perfect balance of modern aesthetics and traditional elegance." },
  { icon: HiOutlineGift, title: "Versatile Collection", desc: "Pieces that transition effortlessly from everyday wear to special occasions." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 border-t border-b border-border" style={{ background: "#111111" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold font-heading text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-3 font-medium">The Orniva Promise</p>
          <h2 className="font-heading text-[22px] md:text-[34px] font-bold text-white">Why Choose Orniva</h2>
          <div className="w-10 h-[1px] bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {features.map((f, i) => (
            <div key={i} className="text-center px-2 group">
              <div className="w-[56px] h-[56px] mx-auto mb-5 rounded-full border border-border group-hover:border-gold flex items-center justify-center transition-all duration-300">
                <f.icon size={22} className="text-gold" />
              </div>
              <h3 className="font-heading text-[13px] md:text-[14px] font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-text-faint text-[12px] md:text-[13px] leading-[1.6]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
