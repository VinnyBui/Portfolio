import HeroSection from "@/components/sections/heroSection";
import AboutSection from "@/components/sections/aboutSection";
import ExperienceSection from "@/components/sections/experienceSection";
import ProjectsDemoSection from "@/components/sections/projectsDemoSection";
import ScrollAnimations from "@/components/features/ScrollAnimations";

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <div className="max-w-screen-xl mx-auto">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsDemoSection />
      </div>
    </>
  );
}
