import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-[100dvh] relative flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>
      
      <div className="container mx-auto px-6 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-primary font-mono mb-4 neon-text">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-300% animate-gradient">
              Jay Lumawa
            </span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground mb-6">
            Full Stack Developer / Discord Bot Developer
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl">
            Building digital experiences, one line at a time. I turn ideas into high-performance web applications and interactive community bots.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow"
              onClick={() => scrollTo("projects")}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => scrollTo("contact")}
            >
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
