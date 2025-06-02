import HeroSection from "@/components/sections/heroSection";
import AboutSection from "@/components/sections/aboutSection";
import ExperienceSection from "@/components/sections/experienceSection";
import ProjectsDemoSection from "@/components/sections/projectsDemoSection";
import BackgroundController from "@/components/features/backgroundController";

export default function Home() {
  return (
    <>
      <BackgroundController />
      <div className="max-w-screen-xl mx-auto">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsDemoSection />
      </div>
    </>
  );
}
