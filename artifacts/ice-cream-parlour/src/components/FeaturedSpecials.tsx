import { motion } from "framer-motion";
import { useCart } from "@/lib/cart-context";
import { useState } from "react";

const specials = [
  {
    id: "s1",
    name: "Sundae Supreme",
    emoji: "🏆",
    price: 12.5,
    desc: "Triple scoop of your choice, hot fudge, housemade whipped cream, toasted almonds, rainbow sprinkles & a cherry on top.",
    tag: "Fan Favourite",
    gradient: "from-amber-200 via-orange-100 to-pink-100",
  },
  {
    id: "s2",
    name: "Waffle Stack",
    emoji: "🧇",
    price: 14.0,
    desc: "Two Belgian waffles stacked with ice cream, fresh berries, maple glaze & cloud cream.",
    tag: "Weekend Only",
    gradient: "from-yellow-100 via-amber-100 to-orange-100",
  },
  {
    id: "s3",
    name: "Banana Split",
    emoji: "🍌",
    price: 13.5,
    desc: "Classic split with three scoops, strawberry, hot fudge, pineapple, and housemade butterscotch sauce.",
    tag: "Classic",
    gradient: "from-green-100 via-yellow-100 to-pink-100",
  },
];

export default function FeaturedSpecials() {
  const { addItem } = useCart();
  const [added, setAdded] = useState<string | null>(null);

  const handleAdd = (s: typeof specials[0]) => {
    addItem({ id: s.id, name: s.name, price: s.price, emoji: s.emoji });
    setAdded(s.id);
    setTimeout(() => setAdded(null), 1200);
  };

  return (
    <section id="specials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-purple-50 to-amber-50" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Indulge More</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Featured Specials</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Our curated showstoppers — for when a single scoop just won't do.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {specials.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative rounded-3xl bg-gradient-to-br ${s.gradient} p-8 border border-white/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
            >
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-xs font-bold text-primary px-3 py-1 rounded-full border border-primary/20">
                {s.tag}
              </div>
              <div className="text-6xl mb-5">{s.emoji}</div>
              <h3 className="font-serif text-2xl font-bold mb-3">{s.name}</h3>
              <p className="text-foreground/65 text-sm leading-relaxed mb-6">{s.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-bold text-xl">${s.price.toFixed(2)}</span>
                <motion.button
                  whileTap={{ scale: 0.92 }}
                  onClick={() => handleAdd(s)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    added === s.id
                      ? "bg-green-500 text-white"
                      : "bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/25"
                  }`}
                >
                  {added === s.id ? "Added ✓" : "Order Now"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
