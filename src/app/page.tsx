import Navbar  from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Experience />
    </div>
  );
}
