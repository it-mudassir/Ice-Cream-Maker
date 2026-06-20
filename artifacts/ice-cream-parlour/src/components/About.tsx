import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Counter({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // easeOutExpo
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeOut * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-30 z-0">
        <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#fbb6ce" d="M47.7,-64.5C59.2,-55.1,64.2,-37.8,69.5,-20.9C74.8,-4,80.4,12.5,76.6,27.1C72.8,41.7,59.6,54.4,44.5,63.1C29.4,71.8,12.3,76.5,-3.6,79.5C-19.5,82.5,-36.8,83.8,-50.7,75.4C-64.6,67,-75.1,48.9,-79.8,30.3C-84.5,11.7,-83.4,-7.4,-76.3,-24C-69.2,-40.6,-56.1,-54.7,-41.8,-63.3C-27.5,-71.9,-11.9,-74.8,3.3,-79.3C18.5,-83.8,36.2,-73.9,47.7,-64.5Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              The Dream <br />
              <span className="text-primary italic">Started Small</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In 2018, we started with a simple belief: dessert should be an experience, not just a treat. We source the finest vanilla from Madagascar, the richest chocolate from Ecuador, and local dairy from farms just a few miles away.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every flavor at Scoops & Dreams is a labor of love. No artificial colors, no shortcuts—just pure, unadulterated joy in a cone. Welcome to our pastel paradise.
            </p>
            
            <div className="pt-8 flex flex-wrap gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-4xl font-bold text-primary font-serif mb-2">
                  <Counter end={6} suffix="+" />
                </h4>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Years Open</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <h4 className="text-4xl font-bold text-secondary font-serif mb-2">
                  <Counter end={48} />
                </h4>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Flavors Created</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <h4 className="text-4xl font-bold text-accent font-serif mb-2">
                  <Counter end={100} suffix="k+" />
                </h4>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Happy Scoops</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-[#fff5f8]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* CSS Art representation of the shop */}
              <div className="relative w-full max-w-sm h-96">
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-0 w-full h-64 bg-white rounded-t-full shadow-lg border-4 border-primary/20 flex flex-col items-center justify-end pb-8"
                >
                  <div className="w-3/4 h-32 border-4 border-primary/20 rounded-t-full relative overflow-hidden bg-pink-50">
                    <div className="absolute inset-0 bg-striped opacity-10"></div>
                  </div>
                  <div className="w-40 h-8 bg-primary rounded-md mt-4 shadow-sm"></div>
                </motion.div>
                
                <motion.div 
                  initial={{ rotate: -10 }}
                  animate={{ rotate: 10 }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="absolute top-10 left-10 w-24 h-24 bg-[#ffb74d] rounded-full shadow-lg"
                >
                  <div className="absolute -bottom-4 right-4 w-4 h-4 bg-white rounded-full"></div>
                </motion.div>
                
                <motion.div 
                  initial={{ rotate: 10 }}
                  animate={{ rotate: -10 }}
                  transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="absolute top-20 right-10 w-20 h-20 bg-[#a3b899] rounded-full shadow-lg"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
