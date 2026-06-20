import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background pt-20">
      <div className="absolute inset-0 z-0">
        <svg className="absolute top-10 left-10 w-64 h-64 text-secondary/30 blur-3xl" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            fill="currentColor"
            d="M45.7,-76.3C58.9,-69.3,69.1,-55.3,77.5,-40.8C85.9,-26.3,92.5,-11.3,90.3,2.6C88.1,16.5,77.1,29.3,66.6,40.8C56.1,52.3,46.1,62.5,33.5,69.5C20.9,76.5,5.7,80.3,-8.4,78.2C-22.5,76.1,-35.5,68.2,-48.5,59.9C-61.5,51.6,-74.5,42.9,-81.2,30.3C-87.9,17.7,-88.3,1.2,-83.4,-13.2C-78.5,-27.6,-68.3,-39.9,-56.3,-48.5C-44.3,-57.1,-30.5,-62,-16.9,-65.7C-3.3,-69.4,10,-71.9,23.1,-74.6C36.2,-77.3,49.1,-80.2,45.7,-76.3Z"
            transform="translate(100 100)"
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </svg>
        <svg className="absolute bottom-20 right-10 w-80 h-80 text-primary/20 blur-3xl" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            fill="currentColor"
            d="M54.8,-71.8C68.9,-61.2,76.7,-43.3,81.4,-25C86.1,-6.7,87.7,12.1,81.2,28.8C74.7,45.5,60.1,60.1,43.4,69.3C26.7,78.5,7.9,82.3,-9.6,79.5C-27.1,76.7,-43.3,67.3,-55.8,54.4C-68.3,41.5,-77.1,25.1,-79.8,8C-82.5,-9.1,-79.1,-27.4,-69.3,-41.8C-59.5,-56.2,-43.3,-66.7,-27,-71.9C-10.7,-77.1,5.7,-77,21.5,-74.8C37.3,-72.6,52.5,-68.3,54.8,-71.8Z"
            transform="translate(100 100)"
            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left space-y-8"
        >
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight"
            >
              Scoops & <span className="text-primary italic">Dreams</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-lg mx-auto lg:mx-0 font-light"
            >
              Artisanal, handcrafted gelato served in a pastel paradise. Taste the magic in every scoop.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="#flavors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group"
            >
              <span className="relative z-10">Order Now</span>
              <div className="absolute inset-0 bg-white/20 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </motion.a>
            <motion.a
              href="#flavors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-foreground border-2 border-primary/20 rounded-full font-bold text-lg shadow-sm hover:border-primary/50 transition-colors"
            >
              Explore Flavors
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative h-[500px] flex justify-center items-center"
        >
          {/* Decorative floating elements */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 rounded-full"
              style={{
                backgroundColor: ['#fbb6ce', '#a3b899', '#ffb74d', '#c3a6ff', '#f5f5f5'][i],
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 20 - 10, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Main Ice Cream Cone Illustration */}
          <div className="relative w-64 h-96">
            <motion.div 
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.5, delay: 0.8 }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#fbb6ce] rounded-full shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.1),_0_10px_20px_rgba(0,0,0,0.1)] z-30"
            />
            <motion.div 
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.5, delay: 0.6 }}
              className="absolute top-16 left-1/2 -translate-x-1/2 w-44 h-44 bg-[#a3b899] rounded-full shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.1),_0_10px_20px_rgba(0,0,0,0.1)] z-20"
            />
            <motion.div 
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.5, delay: 0.4 }}
              className="absolute top-32 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#ffb74d] rounded-full shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.1),_0_10px_20px_rgba(0,0,0,0.1)] z-10"
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-40 bg-[#e6c280] flex justify-center z-0 shadow-xl overflow-hidden"
              style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
            >
              <div className="w-full h-full opacity-30" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
