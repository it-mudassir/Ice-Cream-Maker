import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FLAVORS } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { Plus } from "lucide-react";

const CATEGORIES = ["All", "Chocolate", "Fruit", "Special", "Vegan"] as const;

export function Flavors() {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>("All");
  const { addToCart } = useCart();

  const filteredFlavors = FLAVORS.filter(
    (flavor) => activeCategory === "All" || flavor.category === activeCategory
  );

  return (
    <section id="flavors" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4"
          >
            Our Menu
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Discover our meticulously crafted flavors, made fresh daily with the finest ingredients.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 py-2 rounded-full text-sm font-bold transition-colors ${
                activeCategory === category ? "text-white" : "text-foreground hover:bg-black/5"
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-primary rounded-full -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Flavors Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredFlavors.map((flavor) => (
              <motion.div
                layout
                key={flavor.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.04, rotate: 1, y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-3xl p-6 shadow-sm border border-card-border hover:shadow-xl group relative overflow-hidden"
              >
                <div 
                  className="absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700 ease-out z-0"
                  style={{ backgroundColor: flavor.hex }}
                />
                
                <div className="relative z-10">
                  <div 
                    className="w-32 h-32 mx-auto rounded-full shadow-lg mb-6 relative overflow-hidden"
                    style={{ backgroundColor: flavor.hex }}
                  >
                    <div className="absolute inset-0 shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.1),_inset_5px_5px_10px_rgba(255,255,255,0.4)]" />
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/20 rounded-full blur-md" />
                  </div>
                  
                  <div className="text-center">
                    <span className="text-xs font-bold tracking-wider uppercase mb-2 block" style={{ color: flavor.hex }}>
                      {flavor.category}
                    </span>
                    <h3 className="text-xl font-bold font-serif text-foreground mb-2 leading-tight">
                      {flavor.name}
                    </h3>
                    <p className="text-lg font-medium text-muted-foreground mb-6">
                      ${flavor.price.toFixed(2)}
                    </p>
                    
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => addToCart(flavor)}
                      className="w-full py-3 rounded-full flex items-center justify-center gap-2 font-bold transition-all border-2 group-hover:bg-primary group-hover:text-white group-hover:border-primary border-transparent bg-muted text-foreground"
                    >
                      <Plus className="w-4 h-4" /> Add to Cart
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
