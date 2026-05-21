import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "SRAP Website",
    description: "A community website for Saint Raphael the Archangel Parish in Tarlac. Built to serve the parish community.",
    tags: ["HTML/CSS", "PHP"],
    link: "https://sanrafaelparish.net/",
  },
  {
    title: "Froggy Bot [BETA]",
    description: "A fun interactive Discord Bot with economy systems, games, and company management features.",
    tags: ["Aoi.js", "Discord"],
    link: "https://discord.com/oauth2/authorize?client_id=1258246101576843288&integration_type=0&scope=applications.commands",
  },
  {
    title: "Discord Systems",
    description: "A collection of open-source Discord.js v13 systems including Addbot, Staff Status, and Testing Channel systems.",
    tags: ["JavaScript", "D.js v13"],
    link: "https://github.com/Discord-Bot-Developers1",
  },
  {
    title: "newLife Worldwide Health & Wellness",
    description: "A professional health and wellness website built for a global client. Clean, modern design focused on brand identity and user experience.",
    tags: ["HTML/CSS", "JavaScript", "React"],
    link: "https://newlifeworldwidehealthwellness.netlify.app/",
    isNew: true,
    isClientWork: true,
  },
  {
    title: "Trackify Finance",
    description: "A personal finance dashboard app for tracking income, expenses, and financial goals in a clean, intuitive interface.",
    tags: ["JavaScript", "React"],
    link: "https://trackify-finance.netlify.app/",
    isNew: true,
  },
  {
    title: "SiteNa PH",
    description: "A Filipino-first website builder SaaS platform for small businesses. ₱299/month, no coding required — built under YMRA Studios.",
    tags: ["React", "Node.js", "SaaS"],
    link: "https://sitenaph.netlify.app/",
    isNew: true,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">02.</span> Projects
            <div className="h-[1px] bg-border flex-1 max-w-xs" />
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col bg-card border-card-border hover:border-primary/50 transition-colors duration-300 group neon-glow-hover">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex flex-col gap-2">
                        {project.isNew && (
                          <div className="flex gap-2">
                            <Badge variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30 border-none font-mono text-xs">
                              NEW ⭐
                            </Badge>
                            {project.isClientWork && (
                              <Badge variant="secondary" className="bg-secondary/20 text-secondary hover:bg-secondary/30 border-none font-mono text-xs">
                                Client Work
                              </Badge>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tag => (
                        <span key={tag} className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full border-primary/50 text-primary hover:bg-primary/10 hover:border-primary group-hover:neon-glow transition-all"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
