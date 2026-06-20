import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

export function Locations() {
  const locations = [
    {
      name: "Downtown Parlour",
      address: "123 Sweet Street, Sweet Town",
      hours: "Mon-Sun: 11am - 10pm",
      phone: "(555) 123-4567",
      color: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      name: "Beachside Kiosk",
      address: "45 Ocean Wave Blvd",
      hours: "Mon-Sun: 10am - 9pm",
      phone: "(555) 987-6543",
      color: "bg-secondary/10",
      iconColor: "text-secondary"
    },
    {
      name: "The Grand Plaza",
      address: "789 Mall Ave, Level 2",
      hours: "Mon-Sat: 10am - 8pm",
      phone: "(555) 456-7890",
      color: "bg-accent/10",
      iconColor: "text-accent"
    }
  ];

  return (
    <section id="locations" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4"
          >
            Find Your Scoop
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className={`p-8 rounded-3xl ${loc.color} border border-white transition-all hover:shadow-md cursor-pointer`}
              >
                <h3 className="text-2xl font-bold font-serif text-foreground mb-4">{loc.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className={`w-5 h-5 mt-0.5 ${loc.iconColor}`} />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className={`w-5 h-5 ${loc.iconColor}`} />
                    <span>{loc.hours}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className={`w-5 h-5 ${loc.iconColor}`} />
                    <span>{loc.phone}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-4 shadow-sm border border-border h-[500px] lg:h-auto relative overflow-hidden"
          >
            {/* Illustrated Map Placeholder */}
            <div className="absolute inset-0 bg-[#e8f4f8] m-4 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#a3b899 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
              
              {/* Map Routes */}
              <svg className="absolute inset-0 w-full h-full text-white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none">
                <path d="M0,100 C150,150 250,50 400,100" stroke="#fff" />
                <path d="M100,0 C100,150 300,250 300,400" stroke="#fff" />
                <path d="M0,300 C150,300 200,200 400,250" stroke="#fff" />
              </svg>

              {/* Location Pins */}
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute top-[20%] left-[30%]">
                <MapPin className="w-12 h-12 text-primary drop-shadow-lg" fill="currentColor" />
              </motion.div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }} className="absolute top-[50%] left-[60%]">
                <MapPin className="w-12 h-12 text-secondary drop-shadow-lg" fill="currentColor" />
              </motion.div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, delay: 1, repeat: Infinity }} className="absolute bottom-[20%] left-[40%]">
                <MapPin className="w-12 h-12 text-accent drop-shadow-lg" fill="currentColor" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
