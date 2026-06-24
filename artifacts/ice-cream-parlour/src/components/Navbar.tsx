import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/lib/cart-context";

const links = [
  { label: "Flavors", href: "#flavors" },
  { label: "Specials", href: "#specials" },
  { label: "About", href: "#about" },
  { label: "Locations", href: "#locations" },
  { label: "Contact", href: "#contact" },
];

function IceCreamLogo({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 48" className={className} fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="navScoop1" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#fbb6ce" />
          <stop offset="100%" stopColor="#f472b6" />
        </radialGradient>
        <radialGradient id="navScoop2" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#a7f3d0" />
          <stop offset="100%" stopColor="#34d399" />
        </radialGradient>
        <radialGradient id="navCone" cx="50%" cy="10%" r="80%">
          <stop offset="0%" stopColor="#fcd9a0" />
          <stop offset="100%" stopColor="#c27c1a" />
        </radialGradient>
      </defs>
      <polygon points="18,47 8,24 28,24" fill="url(#navCone)" />
      <line x1="18" y1="28" x2="18" y2="45" stroke="#b8690a" strokeWidth="0.8" opacity="0.4" />
      <ellipse cx="18" cy="24" rx="10" ry="8" fill="url(#navScoop2)" />
      <ellipse cx="18" cy="16" rx="9" ry="7.5" fill="url(#navScoop1)" />
      <circle cx="16" cy="7" r="2.5" fill="#ef4444" />
      <path d="M18 13.5 Q20 10 17 8" stroke="#6b7280" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export default function Navbar() {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-lg py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span className="group-hover:scale-110 transition-transform duration-300 inline-block drop-shadow-md">
              <IceCreamLogo className="w-8 h-8" />
            </span>
            <span className="font-serif text-xl font-bold text-gradient">Scoops & Dreams</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={openCart}
              className="relative p-2 rounded-xl hover:bg-primary/10 transition-colors"
              aria-label="Open cart"
            >
              <ShoppingBag size={22} className="text-foreground/80" />
              <AnimatePresence>
                {count > 0 && (
                  <motion.span
                    key={count}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    {count}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            <button
              className="md:hidden p-2 rounded-xl hover:bg-primary/10 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-4 right-4 z-40 glass rounded-2xl shadow-xl p-6"
          >
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
