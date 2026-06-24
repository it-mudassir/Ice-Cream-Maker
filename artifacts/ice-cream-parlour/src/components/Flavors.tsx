import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Check } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import FlavorIcon from "./FlavorIcon";

const flavors = [
  { id: "1", name: "Strawberry Dream", price: 4.5, category: "fruity", color: "from-pink-100 to-pink-200", desc: "Fresh strawberries, cream, vanilla" },
  { id: "2", name: "Mint Chip Bliss", price: 4.5, category: "classic", color: "from-green-100 to-emerald-200", desc: "Peppermint, dark chocolate chips" },
  { id: "3", name: "Mango Tango", price: 5.0, category: "fruity", color: "from-yellow-100 to-amber-200", desc: "Alphonso mango, passion fruit" },
  { id: "4", name: "Lavender Honey", price: 5.5, category: "floral", color: "from-purple-100 to-violet-200", desc: "Dried lavender, wildflower honey" },
  { id: "5", name: "Cookie Monster", price: 5.0, category: "classic", color: "from-blue-100 to-indigo-200", desc: "Cookies & cream, blueberry swirl" },
  { id: "6", name: "Salted Caramel", price: 5.0, category: "classic", color: "from-amber-100 to-orange-200", desc: "Sea salt, housemade caramel" },
  { id: "7", name: "Pistachio Rose", price: 6.0, category: "floral", color: "from-green-100 to-rose-100", desc: "Sicilian pistachios, rosewater" },
  { id: "8", name: "Black Sesame", price: 5.5, category: "unique", color: "from-gray-100 to-gray-200", desc: "Toasted black sesame, brown sugar" },
  { id: "9", name: "Matcha Ceremony", price: 5.5, category: "unique", color: "from-green-100 to-lime-200", desc: "Ceremonial matcha, sweet cream" },
  { id: "10", name: "Blueberry Cheesecake", price: 5.0, category: "fruity", color: "from-blue-100 to-purple-200", desc: "Wild blueberries, cream cheese" },
  { id: "11", name: "Bourbon Pecan", price: 6.0, category: "unique", color: "from-orange-100 to-amber-200", desc: "Bourbon, candied pecans, maple" },
  { id: "12", name: "Lychee Sorbet", price: 4.0, category: "fruity", color: "from-pink-100 to-rose-200", desc: "Fresh lychee, lime zest — dairy free" },
];

const categories = ["all", "fruity", "classic", "floral", "unique"];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const card = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Flavors() {
  const [active, setActive] = useState("all");
  const [added, setAdded] = useState<string | null>(null);
  const { addItem } = useCart();

  const filtered = active === "all" ? flavors : flavors.filter((f) => f.category === active);

  const handleAdd = (flavor: typeof flavors[0]) => {
    addItem({ id: flavor.id, name: flavor.name, price: flavor.price, emoji: "🍦" });
    setAdded(flavor.id);
    setTimeout(() => setAdded(null), 1200);
  };

  return (
    <section id="flavors" className="py-24 relative">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, hsl(340 60% 98%) 0%, hsl(270 40% 97%) 100%)" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">The Collection</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Our Signature Flavors</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Forty rotating flavors, crafted from scratch with seasonal local ingredients.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold capitalize transition-all duration-200 ${
                active === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "glass border border-white/60 text-foreground/70 hover:text-primary"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={active}
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((flavor) => (
              <motion.div
                key={flavor.id}
                variants={card}
                layout
                className={`scoop-card group rounded-3xl bg-gradient-to-br ${flavor.color} p-6 relative overflow-hidden cursor-pointer border border-white/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/25 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="mb-4">
                    <FlavorIcon flavorId={flavor.id} className="w-16 h-16" />
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-1">{flavor.name}</h3>
                  <p className="text-sm text-foreground/60 mb-4">{flavor.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">${flavor.price.toFixed(2)}</span>
                    <motion.button
                      whileTap={{ scale: 0.88 }}
                      onClick={() => handleAdd(flavor)}
                      className={`flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 ${
                        added === flavor.id
                          ? "bg-green-500 text-white"
                          : "bg-white/70 hover:bg-primary hover:text-white"
                      }`}
                    >
                      {added === flavor.id ? (
                        <><Check size={13} />Added</>
                      ) : (
                        <><ShoppingBag size={14} />Add</>
                      )}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
