import { CartProvider } from "@/lib/cart-context";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Flavors } from "@/components/Flavors";
import { FeaturedSpecials } from "@/components/FeaturedSpecials";
import { About } from "@/components/About";
import { Locations } from "@/components/Locations";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function AppContent() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Subtle cursor glow */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-50 hidden md:block"
        animate={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(251, 182, 206, 0.05), transparent 80%)`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />
      
      <Navbar />
      <CartDrawer />
      
      <main>
        <Hero />
        <Flavors />
        <FeaturedSpecials />
        <About />
        <Locations />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
