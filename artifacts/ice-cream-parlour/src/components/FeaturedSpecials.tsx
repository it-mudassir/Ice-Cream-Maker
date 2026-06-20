import { motion } from "framer-motion";
import { FLAVORS } from "@/lib/data";
import { useCart } from "@/lib/cart-context";

export function FeaturedSpecials() {
  const featured = FLAVORS.filter(f => f.category === "Special").slice(0, 4);
  const { addToCart } = useCart();

  return (
    <section className="py-24 bg-foreground text-background overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] [background-size:24px_24px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            Seasonal Specials
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-background/80 text-lg max-w-2xl mx-auto"
          >
            Limited time flavors crafted with extraordinary ingredients.
          </motion.p>
        </div>

        <div className="flex overflow-x-auto pb-12 pt-4 px-4 -mx-4 gap-8 snap-x snap-mandatory hide-scrollbar">
          {featured.map((flavor, i) => (
            <motion.div
              key={flavor.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="min-w-[280px] md:min-w-[320px] snap-center bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center relative group"
            >
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                style={{ backgroundColor: flavor.hex }}
              />
              
              <motion.div 
                className="w-32 h-32 rounded-full shadow-2xl mb-6 relative"
                style={{ backgroundColor: flavor.hex }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
              >
                <div className="absolute inset-0 rounded-full shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.2),_inset_5px_5px_10px_rgba(255,255,255,0.2)]" />
              </motion.div>
              
              <h3 className="text-2xl font-bold font-serif mb-2">{flavor.name}</h3>
              <p className="text-background/60 mb-6">${flavor.price.toFixed(2)}</p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => addToCart(flavor)}
                className="mt-auto px-6 py-2 bg-white text-foreground rounded-full font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-shadow"
              >
                Add to Cart
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
