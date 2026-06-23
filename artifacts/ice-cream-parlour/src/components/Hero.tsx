import { motion } from "framer-motion";

const floatVariants = {
  animate: {
    y: [0, -18, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const stars = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: (i * 23 + 7) % 100,
  y: (i * 17 + 13) % 100,
  size: (i % 5) + 4,
  delay: (i * 0.4) % 3,
  duration: (i % 3) + 3,
}));

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(340 80% 96%) 0%, hsl(270 60% 95%) 40%, hsl(160 50% 93%) 100%)",
        }}
      />

      {stars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            background: `hsl(${280 + s.id * 12} 70% 75% / 0.5)`,
          }}
          animate={{
            y: [0, -(s.size * 2), 0],
            opacity: [0.4, 0.9, 0.4],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="absolute top-1/4 -left-24 w-80 h-80 rounded-full bg-pink-300/30 blur-3xl" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 rounded-full bg-purple-300/30 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-pink-200 rounded-full px-4 py-2 text-sm font-medium text-primary mb-6"
          >
            <span>✨</span> Small-batch, handcrafted daily
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Every Scoop{" "}
            <span className="text-gradient italic">Tells a</span>{" "}
            Story
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-lg text-foreground/70 leading-relaxed mb-8 max-w-lg"
          >
            Premium boutique ice cream crafted from the finest local ingredients.
            Over 40 rotating flavors, made fresh every morning in our open kitchen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#flavors"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore Flavors 🍨
            </a>
            <a
              href="#specials"
              className="inline-flex items-center gap-2 glass border border-white/60 font-semibold px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Today's Specials ✨
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-10 flex items-center gap-5"
          >
            <div className="flex -space-x-3">
              {["🧑‍🦰", "👩", "🧔", "👧"].map((e, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-white border-2 border-white shadow-md flex items-center justify-center text-base"
                >
                  {e}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-yellow-500 text-sm">
                {"★★★★★"}
              </div>
              <p className="text-sm text-foreground/60">
                <span className="font-semibold text-foreground">12,000+</span> happy scoops served
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={floatVariants}
          animate="animate"
          className="flex justify-center items-center"
        >
          <svg viewBox="0 0 340 440" className="w-72 sm:w-96 lg:w-full max-w-sm drop-shadow-2xl" aria-hidden="true">
            <defs>
              <radialGradient id="scoop1" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#fbb6ce" />
                <stop offset="100%" stopColor="#f472b6" />
              </radialGradient>
              <radialGradient id="scoop2" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#a7f3d0" />
                <stop offset="100%" stopColor="#34d399" />
              </radialGradient>
              <radialGradient id="scoop3" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#fde68a" />
                <stop offset="100%" stopColor="#f59e0b" />
              </radialGradient>
              <radialGradient id="cone" cx="50%" cy="10%" r="80%">
                <stop offset="0%" stopColor="#fcd9a0" />
                <stop offset="100%" stopColor="#c27c1a" />
              </radialGradient>
            </defs>

            <polygon points="170,430 100,210 240,210" fill="url(#cone)" />
            {[220, 240, 260, 280, 300, 320, 340, 360, 380, 400].map((y, i) => {
              const spread = (y - 210) * 0.47;
              return (
                <line key={i} x1={170 - spread} y1={y} x2={170 + spread} y2={y} stroke="#b8690a" strokeWidth="1.2" opacity="0.5" />
              );
            })}

            <ellipse cx="170" cy="230" rx="70" ry="55" fill="url(#scoop3)" />
            <path d="M125 245 Q118 270 122 290 Q126 310 124 325" stroke="#fbbf24" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.85" />
            <ellipse cx="170" cy="175" rx="65" ry="52" fill="url(#scoop2)" />
            <path d="M215 190 Q223 215 220 240 Q217 260 219 278" stroke="#6ee7b7" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.8" />
            <ellipse cx="170" cy="122" rx="60" ry="50" fill="url(#scoop1)" />
            <path d="M135 110 Q127 130 130 150 Q133 165 131 178" stroke="#f9a8d4" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.85" />

            <path d="M170 72 Q180 50 165 38" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <circle cx="163" cy="33" r="10" fill="#ef4444" />
            <circle cx="160" cy="30" r="3" fill="#fca5a5" opacity="0.7" />
            <ellipse cx="177" cy="40" rx="9" ry="5" fill="#16a34a" transform="rotate(-30 177 40)" />

            {[[158,105],[183,100],[170,118],[148,120],[192,115]].map(([x,y],i)=>(
              <ellipse key={i} cx={x} cy={y} rx="5" ry="3.5" fill="#78350f" transform={`rotate(${i*20} ${x} ${y})`} />
            ))}

            {[
              [148,155,25,"#f472b6"],[192,148,-15,"#34d399"],[162,163,40,"#a78bfa"],
              [178,170,-30,"#fbbf24"],[155,175,60,"#60a5fa"],[200,175,10,"#f472b6"],
              [145,175,-20,"#34d399"],[188,185,50,"#a78bfa"]
            ].map(([x,y,r,c],i)=>(
              <rect key={i} x={Number(x)-5} y={Number(y)-2} width="10" height="4" rx="2"
                fill={c as string}
                transform={`rotate(${r} ${x} ${y})`}
                opacity="0.9"
              />
            ))}
          </svg>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/40"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-foreground/20 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-foreground/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
