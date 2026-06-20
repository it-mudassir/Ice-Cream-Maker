import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const REVIEWS = [
  { id: 1, name: "Sarah Jenkins", role: "Local Guide", text: "The Lavender Honey flavor literally changed my life. It's like eating a soft, sweet cloud.", color: "bg-primary/20" },
  { id: 2, name: "Marcus Thorne", role: "Food Critic", text: "Best pistachio gelato outside of Italy. The texture is impossibly smooth.", color: "bg-secondary/20" },
  { id: 3, name: "Elena Rostova", role: "Regular Customer", text: "My weekly treat! The staff is so friendly and the seasonal specials are always incredibly creative.", color: "bg-accent/20" },
  { id: 4, name: "David Chen", role: "Dessert Lover", text: "Midnight Chocolate is so rich and deep. Perfect balance of sweetness and cocoa.", color: "bg-[#ffb74d]/20" },
  { id: 5, name: "Chloe Adams", role: "Tourist", text: "Stumbled upon this place and wow. The pastel aesthetic is gorgeous and the ice cream matches the vibe perfectly.", color: "bg-primary/20" },
];

export function Testimonials() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4"
          >
            Sweet Words
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="flex overflow-hidden pb-12 pt-4 px-4 -mx-4 gap-6">
            <motion.div
              className="flex gap-6 items-center"
              animate={{ x: `calc(-${position * 100}% - ${position * 24}px)` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {REVIEWS.map((review) => (
                <div
                  key={review.id}
                  className="min-w-full sm:min-w-[400px] bg-background p-8 rounded-3xl border border-border shadow-sm flex flex-col items-center text-center"
                >
                  <div className="flex gap-1 mb-6 text-[#ffb300]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl font-serif font-medium text-foreground mb-8 leading-snug">
                    "{review.text}"
                  </p>
                  <div className="mt-auto flex flex-col items-center">
                    <div className={`w-14 h-14 rounded-full ${review.color} mb-3 flex items-center justify-center font-bold text-lg`}>
                      {review.name.charAt(0)}
                    </div>
                    <span className="font-bold text-foreground">{review.name}</span>
                    <span className="text-sm text-muted-foreground">{review.role}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          <div className="flex justify-center gap-2 mt-4">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setPosition(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === position ? 'bg-primary w-8' : 'bg-muted-foreground/30'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
