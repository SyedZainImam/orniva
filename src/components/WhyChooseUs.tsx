import { HiOutlineSparkles, HiOutlineHeart, HiOutlineStar, HiOutlineGift } from "react-icons/hi";

const features = [
  {
    icon: HiOutlineSparkles,
    title: "Premium Craftsmanship",
    description: "Every piece is meticulously crafted with refined detailing and superior quality materials.",
  },
  {
    icon: HiOutlineHeart,
    title: "For Every Generation",
    description: "Jewellery designed to complement every style, every occasion, and every age.",
  },
  {
    icon: HiOutlineStar,
    title: "Timeless Designs",
    description: "A perfect balance of modern aesthetics and traditional elegance in every creation.",
  },
  {
    icon: HiOutlineGift,
    title: "Versatile Collection",
    description: "Pieces that transition effortlessly from everyday wear to special occasions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold font-heading text-xs md:text-sm tracking-[0.3em] uppercase mb-3">
            The Orniva Promise
          </p>
          <h2 className="font-heading text-2xl md:text-4xl font-semibold text-text-primary">
            Why Choose Orniva
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {features.map((feature, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gold-50 flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all duration-300">
                <feature.icon
                  size={28}
                  className="text-gold group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-heading text-base md:text-lg font-semibold text-text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
