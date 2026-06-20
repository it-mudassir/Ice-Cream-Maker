import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10 rounded-t-[3rem] mt-[-3rem] relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-3xl font-serif font-bold flex items-center gap-2 text-white">
              Scoops & <span className="italic font-light text-primary">Dreams</span>
            </h3>
            <p className="text-white/60 max-w-md">
              Bringing joy to every cone. Handcrafted artisanal gelato made with love, premium ingredients, and a touch of magic.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold font-serif mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#flavors" className="text-white/60 hover:text-primary transition-colors">Our Menu</a></li>
              <li><a href="#about" className="text-white/60 hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#locations" className="text-white/60 hover:text-primary transition-colors">Locations</a></li>
              <li><a href="#gallery" className="text-white/60 hover:text-primary transition-colors">Gallery</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold font-serif mb-6 text-white">Newsletter</h4>
            <p className="text-white/60 mb-4 text-sm">Join the club for sweet updates and exclusive flavors.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/10 border border-white/20 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:border-primary text-white"
              />
              <button className="bg-primary px-4 py-2 rounded-r-lg font-bold hover:bg-primary/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Scoops & Dreams. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
