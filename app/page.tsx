import HeroSection from "@/components/sections/home/HeroSection";
import AtelierStandard from "@/components/sections/home/AtelierStandard";
import SignatureCuration from "@/components/sections/home/SignatureCuration";
import Reviews from "@/components/sections/home/Reviews";
import HomeCTA from "@/components/sections/home/HomeCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AtelierStandard />
      <SignatureCuration />
      <Reviews />
      <HomeCTA />
    </>
  );
}
