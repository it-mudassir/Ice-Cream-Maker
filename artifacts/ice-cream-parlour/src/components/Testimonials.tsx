import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "The Lavender Honey is transcendent. I've had ice cream on four continents and nothing compares to the depth of flavour here. A true artisanal masterpiece.",
    name: "Sophia Laurent",
    role: "Food Critic, The Pastel Post",
    emoji: "👩‍💼",
    stars: 5,
  },
  {
    id: 2,
    text: "We bring our kids here every Saturday. The Cookie Monster is their absolute favourite — and I secretly love the Black Sesame. It's become our family ritual.",
    name: "James & Priya Okafor",
    role: "Local family",
    emoji: "👨‍👩‍👧",
    stars: 5,
  },
  {
    id: 3,
    text: "As a chef, I'm obsessive about ingredient quality. Scoops & Dreams is the only ice cream parlour I'd recommend without hesitation. The Pistachio Rose is genius.",
    name: "Chef Marco Renzetti",
    role: "Executive Chef, Stella",
    emoji: "👨‍🍳",
    stars: 5,
  },
  {
    id: 4,
    text: "I tried the Matcha Ceremony on a whim and now I drive 45 minutes every weekend. Worth every mile. The texture is impossibly silky.",
    name: "Aya Nakamura",
    role: "Matcha enthusiast",
    emoji: "🧑‍🎨",
    stars: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, hsl(340 70% 96%) 0%, hsl(270 50% 96%) 100%)" }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pink-200/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-purple-200/30 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Love Stories</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold">What Our Guests Say</h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-3xl p-10 sm:p-14 text-center border border-white/60 shadow-xl"
            >
              <div className="text-5xl mb-6">{t.emoji}</div>
              <div className="flex justify-center mb-5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <blockquote className="font-serif text-xl sm:text-2xl italic text-foreground/80 leading-relaxed mb-8">
                "{t.text}"
              </blockquote>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
              className="w-12 h-12 rounded-full glass border border-white/60 flex items-center justify-center hover:bg-primary/10 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-primary/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
              className="w-12 h-12 rounded-full glass border border-white/60 flex items-center justify-center hover:bg-primary/10 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
