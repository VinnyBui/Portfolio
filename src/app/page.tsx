import HeroSection from "@/components/sections/heroSection";
import AboutSection from "@/components/sections/aboutSection";
import ExperienceSection from "@/components/sections/experienceSection";
import ProjectsDemoSection from "@/components/sections/projectsDemoSection";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsDemoSection />
    </div>
  );
}
