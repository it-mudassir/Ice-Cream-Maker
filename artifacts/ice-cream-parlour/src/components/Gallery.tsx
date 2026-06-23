import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const gallery = [
  { id: 1, emoji: "🍓", label: "Strawberry Dream", color: "from-pink-200 to-rose-300", accent: "#fda4af" },
  { id: 2, emoji: "🌿", label: "Mint Chip Bliss", color: "from-green-200 to-emerald-300", accent: "#6ee7b7" },
  { id: 3, emoji: "🏆", label: "Sundae Supreme", color: "from-amber-200 to-yellow-300", accent: "#fde68a" },
  { id: 4, emoji: "💜", label: "Lavender Honey", color: "from-purple-200 to-violet-300", accent: "#c4b5fd" },
  { id: 5, emoji: "🥭", label: "Mango Tango", color: "from-yellow-200 to-orange-300", accent: "#fcd34d" },
  { id: 6, emoji: "🍵", label: "Matcha Ceremony", color: "from-lime-200 to-green-300", accent: "#86efac" },
  { id: 7, emoji: "🌹", label: "Pistachio Rose", color: "from-green-100 to-rose-200", accent: "#fda4af" },
  { id: 8, emoji: "🖤", label: "Black Sesame", color: "from-gray-200 to-slate-300", accent: "#94a3b8" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<typeof gallery[0] | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Visual Menu</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">The Scoop Gallery</h2>
          <p className="text-muted-foreground text-lg">Click any flavour to savour it closer.</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelected(item)}
              className={`aspect-square rounded-3xl bg-gradient-to-br ${item.color} flex flex-col items-center justify-center gap-3 cursor-pointer border border-white/60 shadow-md hover:shadow-xl transition-shadow duration-300`}
            >
              <span className="text-5xl sm:text-6xl">{item.emoji}</span>
              <span className="text-sm font-semibold text-foreground/70">{item.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
            >
              <div className={`pointer-events-auto w-full max-w-sm rounded-3xl bg-gradient-to-br ${selected.color} p-12 flex flex-col items-center gap-5 shadow-2xl border border-white/60 relative`}>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-white/50 hover:bg-white/80 transition-colors"
                >
                  <X size={18} />
                </button>
                <span className="text-8xl">{selected.emoji}</span>
                <h3 className="font-serif text-3xl font-bold text-center">{selected.label}</h3>
                <p className="text-foreground/60 text-center text-sm">
                  One of our signature handcrafted flavors, made fresh every morning.
                </p>
                <div className="w-16 h-1.5 rounded-full" style={{ background: selected.accent }} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
