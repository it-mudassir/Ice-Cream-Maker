import { CartProvider } from "@/lib/cart-context";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Flavors from "@/components/Flavors";
import FeaturedSpecials from "@/components/FeaturedSpecials";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Locations from "@/components/Locations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Flavors />
          <FeaturedSpecials />
          <About />
          <Testimonials />
          <Gallery />
          <Locations />
          <Contact />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
