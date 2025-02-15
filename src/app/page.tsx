import Navbar  from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
