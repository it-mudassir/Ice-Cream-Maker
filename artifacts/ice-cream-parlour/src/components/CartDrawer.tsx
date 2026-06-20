import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, X, Plus, Minus } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-background/95 backdrop-blur-md shadow-2xl z-50 flex flex-col border-l border-white/20"
          >
            <div className="p-6 flex items-center justify-between border-b border-white/10">
              <h2 className="text-2xl font-serif font-bold flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-primary" /> Your Cart
              </h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-white/50 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <AnimatePresence initial={false}>
                {items.length === 0 ? (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="h-full flex flex-col items-center justify-center text-muted-foreground space-y-4"
                  >
                    <ShoppingBag className="w-16 h-16 opacity-20" />
                    <p className="text-lg">Your cart is empty.</p>
                  </motion.div>
                ) : (
                  items.map((item) => (
                    <motion.div
                      key={item.flavor.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                      className="flex gap-4 bg-white/50 p-4 rounded-2xl shadow-sm border border-white/40"
                    >
                      <div 
                        className="w-16 h-16 rounded-full shadow-inner flex-shrink-0"
                        style={{ backgroundColor: item.flavor.hex }}
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <h3 className="font-bold text-lg leading-tight">{item.flavor.name}</h3>
                          <p className="font-medium">${(item.flavor.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-3 bg-white rounded-full px-2 py-1 shadow-sm">
                            <button 
                              onClick={() => updateQuantity(item.flavor.id, item.quantity - 1)}
                              className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-4 text-center font-medium text-sm">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.flavor.id, item.quantity + 1)}
                              className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.flavor.id)}
                            className="text-sm text-muted-foreground hover:text-destructive transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {items.length > 0 && (
              <div className="p-6 bg-white/80 border-t border-white/40 space-y-4">
                <div className="flex justify-between text-lg font-serif">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-bold">${cartTotal.toFixed(2)}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-foreground text-background rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Checkout
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
