import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground relative selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
