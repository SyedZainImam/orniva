import HeroSection from "@/components/HeroSection";
import CollectionGrid from "@/components/CollectionGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import PhilosophyBanner from "@/components/PhilosophyBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import Newsletter from "@/components/Newsletter";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CollectionGrid />
      <FeaturedProducts />
      <PhilosophyBanner />
      <WhyChooseUs />
      <Newsletter />
    </>
  );
}
