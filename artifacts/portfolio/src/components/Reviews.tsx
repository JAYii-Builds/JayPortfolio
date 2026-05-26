import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Client",
    photo: "/reviewer-photo-1.png",
    screenshot: "/review-screenshot-1.png",
    rating: 5,
    text: "Maganda ang assessment nyo..at basta anytime mag tanong ako guide nyo ako. Number 5 kau sa akin.",
    project: "NewLife Worldwide Health & Wellness",
    source: "Facebook",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">03.</span> Client Reviews
            <div className="h-[1px] bg-border flex-1 max-w-xs" />
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card className="bg-card border-card-border hover:border-primary/50 transition-colors duration-300 neon-glow-hover h-full">
                  <CardContent className="p-6 flex flex-col gap-5">
                    <Quote className="w-8 h-8 text-primary/40" />

                    <p className="text-muted-foreground leading-relaxed text-base italic">
                      "{review.text}"
                    </p>

                    <div className="flex gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>

                    <div className="flex items-center gap-3 pt-2 border-t border-border/50">
                      <div className="relative w-12 h-12 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-30 blur-sm" />
                        <img
                          src={review.photo}
                          alt={review.name}
                          className="relative w-12 h-12 rounded-full object-cover border-2 border-primary/50"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-foreground">{review.name}</p>
                        <p className="text-xs text-muted-foreground font-mono">{review.project}</p>
                        <p className="text-xs text-primary/70 font-mono">via {review.source}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative group">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src="/review-screenshot-1.png"
                  alt="Client review screenshot"
                  className="relative rounded-xl border border-primary/30 shadow-lg w-full max-w-xs object-contain"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
