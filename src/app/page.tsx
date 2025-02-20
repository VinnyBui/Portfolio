import Navbar  from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import ProjectsDemo from "@/components/projectsDemo";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <ProjectsDemo />
      <Footer />
    </div>
  );
}
