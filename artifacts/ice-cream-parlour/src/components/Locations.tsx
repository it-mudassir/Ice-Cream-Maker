import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const locations = [
  {
    id: 1,
    name: "The Original",
    address: "42 Blossom Lane, Maplewood",
    hours: "Mon–Sun: 11am – 10pm",
    phone: "(555) 123-4567",
    emoji: "🏡",
    tag: "Flagship",
    color: "from-pink-100 to-rose-100",
  },
  {
    id: 2,
    name: "Midtown Parlour",
    address: "128 Fifth Avenue, Downtown",
    hours: "Mon–Sat: 12pm – 11pm · Sun: 12pm – 9pm",
    phone: "(555) 234-5678",
    emoji: "🏙️",
    tag: "Newest",
    color: "from-purple-100 to-indigo-100",
  },
  {
    id: 3,
    name: "Seaside Scoops",
    address: "7 Harbor View Rd, Bayside",
    hours: "Seasonal · May–Sep: 10am – Midnight",
    phone: "(555) 345-6789",
    emoji: "🌊",
    tag: "Seasonal",
    color: "from-sky-100 to-teal-100",
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50 to-purple-50" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Find Us</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Our Parlours</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Three locations, one dream. Find your nearest Scoops & Dreams.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className={`rounded-3xl bg-gradient-to-br ${loc.color} p-8 border border-white/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative`}
            >
              <span className="absolute top-4 right-4 bg-white/70 text-xs font-bold text-primary px-3 py-1 rounded-full">
                {loc.tag}
              </span>
              <div className="text-5xl mb-5">{loc.emoji}</div>
              <h3 className="font-serif text-xl font-bold mb-4">{loc.name}</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 text-foreground/70">
                  <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>{loc.address}</span>
                </div>
                <div className="flex items-start gap-3 text-foreground/70">
                  <Clock size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>{loc.hours}</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Phone size={16} className="text-primary flex-shrink-0" />
                  <a href={`tel:${loc.phone}`} className="hover:text-primary transition-colors">{loc.phone}</a>
                </div>
              </div>
              <motion.a
                href="#contact"
                whileTap={{ scale: 0.96 }}
                className="mt-6 inline-flex items-center gap-2 bg-white/70 hover:bg-primary hover:text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200"
              >
                Get Directions
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
