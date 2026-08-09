import HeroSection from "@/components/home/HeroSection";
import ImpactStats from "@/components/home/ImpactStats";
import ProgramPillars from "@/components/home/ProgramPillars";
import FeaturedStory from "@/components/home/FeaturedStory";
import CtaBanner from "@/components/shared/CtaBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImpactStats />
      <ProgramPillars />
      <FeaturedStory />
      <CtaBanner />
    </>
  );
}
