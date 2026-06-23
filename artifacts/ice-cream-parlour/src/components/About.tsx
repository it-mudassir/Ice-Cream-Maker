import { motion } from "framer-motion";

const stats = [
  { value: "2012", label: "Founded" },
  { value: "40+", label: "Rotating Flavors" },
  { value: "100%", label: "Local Ingredients" },
  { value: "5★", label: "Average Rating" },
];

const values = [
  { emoji: "🌾", title: "Locally Sourced", desc: "Every ingredient is sourced from farms within 100 miles of our kitchen." },
  { emoji: "🥛", title: "Small-Batch Made", desc: "We churn fresh every morning in small batches for peak creaminess." },
  { emoji: "🌱", title: "Always Seasonal", desc: "Our menu rotates with the seasons, celebrating the best flavors nature offers." },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-white" />
      <div className="absolute -left-32 top-1/3 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">Our Story</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Born from a love of<br />
              <span className="text-gradient italic">pure imagination</span>
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              Scoops & Dreams was born on a warm summer afternoon in 2012, when founder Maya Chen
              decided the world needed ice cream that told a story with every bite. Starting with a
              single vintage churner and recipes borrowed from her grandmother, she began selling
              scoops from a tiny cart in the farmer's market.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Today, we have three beloved parlours — but our philosophy hasn't changed. We believe
              ice cream is more than dessert; it's a moment of pure joy, crafted with intention.
            </p>
            <div className="space-y-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl flex-shrink-0">
                    {v.emoji}
                  </div>
                  <div>
                    <p className="font-semibold mb-1">{v.title}</p>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="glass rounded-3xl p-10 text-center border border-white/60 mb-6">
              <div className="text-9xl mb-4 block">👩‍🍳</div>
              <p className="font-serif italic text-xl text-foreground/70">
                "Every scoop should make you close your eyes."
              </p>
              <p className="text-sm text-primary font-semibold mt-2">— Maya Chen, Founder</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="glass rounded-2xl p-5 text-center border border-white/60"
                >
                  <p className="font-serif text-3xl font-bold text-primary">{s.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
