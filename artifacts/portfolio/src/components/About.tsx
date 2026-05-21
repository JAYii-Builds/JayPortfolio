import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "PHP", level: 70 },
  { name: "Aoi.js", level: 85 },
  { name: "Discord.js", level: 80 },
  { name: "React", level: 65 },
  { name: "Node.js", level: 60 },
];

export function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">01.</span> About Me
            <div className="h-[1px] bg-border flex-1 max-w-xs" />
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I'm a Filipino developer passionate about building digital experiences that bring communities together. Whether it's crafting intuitive web applications or developing interactive Discord bots, I thrive on turning complex problems into elegant, functional code.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                My approach bridges the gap between clean frontend interfaces and robust backend systems. I believe in writing code that not only works but feels electric and alive.
              </p>
            </div>
            
            <Card className="bg-card border-card-border">
              <CardContent className="p-6">
                <h3 className="font-mono text-primary mb-6 text-lg">Tech Stack</h3>
                <div className="space-y-5">
                  {skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1 font-mono text-sm">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-secondary"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
