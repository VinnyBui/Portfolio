import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsDemoSection from "@/components/sections/ProjectsDemoSection";
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
