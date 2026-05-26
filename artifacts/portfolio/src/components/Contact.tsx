import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SiDiscord, SiGithub } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10 mb-20">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-4">
            <span className="text-primary font-mono text-xl">04.</span> What's Next?
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Get In Touch</h3>
          
          <p className="text-muted-foreground text-lg mb-12">
            Currently open for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>

          <Card className="bg-card border-card-border overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="p-8 flex flex-col sm:flex-row items-center justify-center gap-8 relative z-10">
              <Button asChild variant="outline" className="h-14 px-8 border-primary text-primary hover:bg-primary/10 text-lg neon-glow">
                <a href="mailto:jayii.lumawod@gmail.com">
                  <FaEnvelope className="mr-2 h-5 w-5" />
                  Say Hello
                </a>
              </Button>
              
              <div className="flex gap-4">
                <a 
                  href="https://discord.com/channels/@chillw.leoz" 
                  className="p-3 bg-muted rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label="Discord"
                >
                  <SiDiscord className="h-6 w-6" />
                </a>
                <a 
                  href="https://github.com/JAYii-Builds" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-muted rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label="GitHub"
                >
                  <SiGithub className="h-6 w-6" />
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
