import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const sprinkleColors = ["#fbb6ce", "#a3e4c1", "#a3b8e0", "#ffd580", "#c3a6ff", "#ff8fab", "#80e8d3"];

const SPRINKLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  x: 10 + Math.random() * 80,
  y: 8 + Math.random() * 84,
  rot: Math.random() * 360,
  color: sprinkleColors[i % sprinkleColors.length],
  size: 6 + Math.random() * 8,
  dur: 3 + Math.random() * 3,
  delay: Math.random() * 2,
  floatY: 12 + Math.random() * 18,
}));

const STARS = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  x: 5 + Math.random() * 90,
  y: 5 + Math.random() * 90,
  size: 8 + Math.random() * 12,
  dur: 2 + Math.random() * 2,
  delay: Math.random() * 3,
  color: sprinkleColors[i % sprinkleColors.length],
}));

function IceCreamSVG() {
  return (
    <svg
      viewBox="0 0 320 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-2xl"
      style={{ filter: "drop-shadow(0 32px 48px rgba(251,182,206,0.4))" }}
    >
      <defs>
        {/* Scoop 1 - Strawberry pink */}
        <radialGradient id="scoop1" cx="42%" cy="38%" r="60%">
          <stop offset="0%" stopColor="#ffd6e7" />
          <stop offset="45%" stopColor="#ff9dbf" />
          <stop offset="100%" stopColor="#e86fa1" />
        </radialGradient>
        {/* Scoop 2 - Mint green */}
        <radialGradient id="scoop2" cx="42%" cy="38%" r="60%">
          <stop offset="0%" stopColor="#d4f5e9" />
          <stop offset="45%" stopColor="#7ddbb8" />
          <stop offset="100%" stopColor="#3db88a" />
        </radialGradient>
        {/* Scoop 3 - Mango/vanilla */}
        <radialGradient id="scoop3" cx="42%" cy="38%" r="60%">
          <stop offset="0%" stopColor="#fff3cc" />
          <stop offset="45%" stopColor="#ffd980" />
          <stop offset="100%" stopColor="#f5a623" />
        </radialGradient>
        {/* Cone gradient */}
        <linearGradient id="coneGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f7e0b0" />
          <stop offset="50%" stopColor="#e6c07a" />
          <stop offset="100%" stopColor="#c8901a" />
        </linearGradient>
        {/* Cone shadow */}
        <linearGradient id="coneShadow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(0,0,0,0.15)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </linearGradient>
        {/* Drip gradient pink */}
        <linearGradient id="dripPink" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff9dbf" />
          <stop offset="100%" stopColor="#f06292" />
        </linearGradient>
        {/* Drip gradient mint */}
        <linearGradient id="dripMint" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7ddbb8" />
          <stop offset="100%" stopColor="#3db88a" />
        </linearGradient>
        {/* Highlight */}
        <radialGradient id="highlight" cx="30%" cy="25%" r="45%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.75)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        {/* Glow behind */}
        <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffd6e7" stopOpacity="0.5" />
          <stop offset="60%" stopColor="#c3e6f5" stopOpacity="0.2" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
        {/* Cherry gradient */}
        <radialGradient id="cherryGrad" cx="35%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#ff6b6b" />
          <stop offset="100%" stopColor="#c0392b" />
        </radialGradient>
        <filter id="softBlur">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* Background glow halo */}
      <ellipse cx="160" cy="240" rx="140" ry="200" fill="url(#bgGlow)" />

      {/* === CONE === */}
      {/* Cone body */}
      <motion.path
        d="M104 310 L216 310 L168 468 L152 468 Z"
        fill="url(#coneGrad)"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        style={{ transformOrigin: "160px 310px" }}
      />
      {/* Cone shadow side */}
      <motion.path
        d="M160 310 L168 468 L216 310 Z"
        fill="url(#coneShadow)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
      {/* Waffle grid lines - horizontal */}
      {[0, 1, 2, 3, 4, 5].map((row) => {
        const y = 316 + row * 26;
        const spread = 4 + row * 10;
        return (
          <motion.line
            key={`h${row}`}
            x1={160 - spread} y1={y}
            x2={160 + spread} y2={y}
            stroke="rgba(160,110,30,0.35)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 + row * 0.04 }}
          />
        );
      })}
      {/* Waffle grid lines - diagonal left */}
      {[-3, -2, -1, 0, 1, 2, 3].map((col) => (
        <motion.line
          key={`dl${col}`}
          x1={160 + col * 9 - 6} y1={313}
          x2={160 + col * 5 - 2} y2={468}
          stroke="rgba(160,110,30,0.25)"
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        />
      ))}
      {/* Cone rim */}
      <motion.ellipse
        cx="160" cy="310" rx="56" ry="10"
        fill="#f5d090"
        stroke="#e6c07a"
        strokeWidth="2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
      />

      {/* === SCOOP 3 — Bottom / Mango (largest) === */}
      <motion.ellipse
        cx="160" cy="290" rx="68" ry="66"
        fill="url(#scoop3)"
        initial={{ y: -140, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 140, damping: 14, delay: 0.4 }}
      />
      <ellipse cx="160" cy="290" rx="68" ry="66" fill="url(#highlight)" />
      {/* Scoop 3 shadow under */}
      <ellipse cx="160" cy="350" rx="60" ry="10" fill="rgba(200,140,20,0.18)" filter="url(#softBlur)" />

      {/* === DRIP — Mango onto cone === */}
      <motion.path
        d="M128 310 Q124 326 126 340 Q128 348 132 346 Q136 344 134 334 Q132 322 134 310 Z"
        fill="url(#dripMint)"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.7, ease: "easeOut" }}
        style={{ transformOrigin: "131px 310px" }}
      />
      <motion.path
        d="M190 310 Q194 320 193 332 Q192 340 188 338 Q184 336 185 326 Q186 318 184 310 Z"
        fill="#e6c07a"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ delay: 1.15, duration: 0.6, ease: "easeOut" }}
        style={{ transformOrigin: "189px 310px" }}
      />

      {/* === SCOOP 2 — Middle / Mint === */}
      <motion.ellipse
        cx="162" cy="222" rx="60" ry="58"
        fill="url(#scoop2)"
        initial={{ y: -160, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 130, damping: 13, delay: 0.6 }}
      />
      <ellipse cx="162" cy="222" rx="60" ry="58" fill="url(#highlight)" />

      {/* Drip mint */}
      <motion.path
        d="M108 260 Q104 275 107 288 Q109 296 113 293 Q117 290 115 280 Q113 270 116 260 Z"
        fill="url(#dripMint)"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.7, ease: "easeOut" }}
        style={{ transformOrigin: "112px 260px" }}
      />
      <motion.path
        d="M210 255 Q215 265 214 278 Q213 286 209 284 Q205 282 206 272 Q207 263 205 255 Z"
        fill="url(#dripMint)"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ delay: 1.45, duration: 0.6 }}
        style={{ transformOrigin: "210px 255px" }}
      />

      {/* === CHOCOLATE CHIPS on mint === */}
      {[[148, 215], [170, 225], [158, 238], [182, 210], [140, 232]].map(([cx, cy], i) => (
        <motion.ellipse
          key={`chip${i}`}
          cx={cx} cy={cy} rx="5" ry="4"
          fill="#5c3317"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.0 + i * 0.08, type: "spring" }}
        />
      ))}

      {/* === SCOOP 1 — Top / Strawberry (smallest) === */}
      <motion.ellipse
        cx="158" cy="162" rx="52" ry="50"
        fill="url(#scoop1)"
        initial={{ y: -180, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.85 }}
      />
      <ellipse cx="158" cy="162" rx="52" ry="50" fill="url(#highlight)" />

      {/* Strawberry seed dots */}
      {[[152, 155], [165, 165], [148, 170], [168, 152], [158, 178]].map(([cx, cy], i) => (
        <motion.ellipse
          key={`seed${i}`}
          cx={cx} cy={cy} rx="3" ry="2.5"
          fill="rgba(180,50,80,0.35)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 + i * 0.06 }}
        />
      ))}

      {/* Pink drip from strawberry */}
      <motion.path
        d="M112 185 Q108 198 110 212 Q112 220 116 217 Q120 214 118 204 Q116 194 119 185 Z"
        fill="url(#dripPink)"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
        style={{ transformOrigin: "115px 185px" }}
      />
      <motion.path
        d="M200 180 Q205 190 204 205 Q203 213 199 211 Q195 209 196 199 Q197 190 195 180 Z"
        fill="url(#dripPink)"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ delay: 1.75, duration: 0.7 }}
        style={{ transformOrigin: "200px 180px" }}
      />

      {/* === CHERRY === */}
      <motion.g
        initial={{ scale: 0, opacity: 0, y: -30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 12, delay: 1.1 }}
        style={{ transformOrigin: "158px 118px" }}
      >
        {/* Stem */}
        <path d="M158 118 Q162 105 170 98 Q175 92 178 86" stroke="#3d6b22" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* Cherry */}
        <circle cx="158" cy="118" r="14" fill="url(#cherryGrad)" />
        <ellipse cx="153" cy="113" rx="5" ry="4" fill="rgba(255,255,255,0.35)" transform="rotate(-20 153 113)" />
        {/* Leaf */}
        <path d="M170 98 Q180 90 185 96 Q178 100 170 98 Z" fill="#5a9e36" />
      </motion.g>

      {/* === Sprinkles on top scoop === */}
      {[
        { x: 140, y: 145, rot: 30, color: "#ffd580" },
        { x: 168, y: 140, rot: 120, color: "#c3a6ff" },
        { x: 176, y: 158, rot: 60, color: "#a3e4c1" },
        { x: 135, y: 162, rot: 150, color: "#ff8fab" },
        { x: 158, y: 148, rot: 80, color: "#80e8d3" },
      ].map((s, i) => (
        <motion.rect
          key={`spr${i}`}
          x={s.x - 6} y={s.y - 2} width="12" height="4" rx="2"
          fill={s.color}
          transform={`rotate(${s.rot} ${s.x} ${s.y})`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4 + i * 0.07, type: "spring" }}
        />
      ))}

      {/* === Floating sprinkles around === */}
      {[
        { x: 42, y: 140, rot: 45, color: "#fbb6ce" },
        { x: 278, y: 165, rot: 120, color: "#a3e4c1" },
        { x: 60, y: 240, rot: 80, color: "#ffd580" },
        { x: 262, y: 260, rot: 30, color: "#c3a6ff" },
        { x: 35, y: 320, rot: 160, color: "#ff8fab" },
        { x: 290, y: 340, rot: 55, color: "#80e8d3" },
      ].map((s, i) => (
        <motion.rect
          key={`fs${i}`}
          x={s.x - 8} y={s.y - 3} width="16" height="6" rx="3"
          fill={s.color}
          transform={`rotate(${s.rot} ${s.x} ${s.y})`}
          animate={{ y: [0, -14, 0], rotate: [s.rot, s.rot + 30, s.rot] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
        />
      ))}

      {/* === Small dots / sugar pearls === */}
      {[
        { cx: 55, cy: 190, r: 6, color: "#ffd6e7" },
        { cx: 272, cy: 210, r: 5, color: "#d4f5e9" },
        { cx: 40, cy: 370, r: 7, color: "#ffd580" },
        { cx: 280, cy: 390, r: 5, color: "#c3a6ff" },
        { cx: 70, cy: 435, r: 4, color: "#ff8fab" },
        { cx: 255, cy: 450, r: 6, color: "#a3e4c1" },
      ].map((d, i) => (
        <motion.circle
          key={`dot${i}`}
          cx={d.cx} cy={d.cy} r={d.r}
          fill={d.color}
          animate={{ y: [0, -18, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        />
      ))}

      {/* === Shadow on ground === */}
      <motion.ellipse
        cx="160" cy="470" rx="70" ry="10"
        fill="rgba(200,140,100,0.18)"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      />
    </svg>
  );
}

export function Hero() {
  const prefersReduced = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReduced) return;
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [prefersReduced]);

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background pt-20">

      {/* Background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="absolute -top-10 -left-16 w-[520px] h-[520px] opacity-40 blur-3xl" viewBox="0 0 200 200">
          <motion.path
            fill="#fbb6ce"
            d="M45.7,-76.3C58.9,-69.3,69.1,-55.3,77.5,-40.8C85.9,-26.3,92.5,-11.3,90.3,2.6C88.1,16.5,77.1,29.3,66.6,40.8C56.1,52.3,46.1,62.5,33.5,69.5C20.9,76.5,5.7,80.3,-8.4,78.2C-22.5,76.1,-35.5,68.2,-48.5,59.9C-61.5,51.6,-74.5,42.9,-81.2,30.3C-87.9,17.7,-88.3,1.2,-83.4,-13.2C-78.5,-27.6,-68.3,-39.9,-56.3,-48.5C-44.3,-57.1,-30.5,-62,-16.9,-65.7C-3.3,-69.4,10,-71.9,23.1,-74.6C36.2,-77.3,49.1,-80.2,45.7,-76.3Z"
            transform="translate(100 100)"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </svg>
        <svg className="absolute -bottom-20 -right-16 w-[580px] h-[580px] opacity-30 blur-3xl" viewBox="0 0 200 200">
          <motion.path
            fill="#a3e4c1"
            d="M54.8,-71.8C68.9,-61.2,76.7,-43.3,81.4,-25C86.1,-6.7,87.7,12.1,81.2,28.8C74.7,45.5,60.1,60.1,43.4,69.3C26.7,78.5,7.9,82.3,-9.6,79.5C-27.1,76.7,-43.3,67.3,-55.8,54.4C-68.3,41.5,-77.1,25.1,-79.8,8C-82.5,-9.1,-79.1,-27.4,-69.3,-41.8C-59.5,-56.2,-43.3,-66.7,-27,-71.9C-10.7,-77.1,5.7,-77,21.5,-74.8C37.3,-72.6,52.5,-68.3,54.8,-71.8Z"
            transform="translate(100 100)"
            animate={{ rotate: -360 }}
            transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
          />
        </svg>
        <svg className="absolute top-1/2 left-1/3 w-[300px] h-[300px] opacity-20 blur-2xl" viewBox="0 0 200 200">
          <motion.path
            fill="#c3a6ff"
            d="M36.5,-61.2C47.3,-54.2,55.9,-43.8,64.5,-32C73.1,-20.2,81.7,-7.1,82.4,6.7C83.1,20.5,75.9,35,65.6,46.1C55.3,57.2,41.9,64.9,27.8,70.3C13.7,75.7,-1.1,78.8,-16.3,76.4C-31.5,74,-47.1,66.1,-59,54.2C-70.9,42.3,-79.1,26.4,-80.7,9.8C-82.3,-6.8,-77.3,-24.1,-68,-38.4C-58.7,-52.7,-45.1,-63.9,-30.8,-70C-16.5,-76.1,-1.5,-77.1,11.7,-73.3C24.9,-69.5,36.5,-60.9,36.5,-61.2Z"
            transform="translate(100 100)"
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      {/* Floating sprinkles background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {SPRINKLES.map((s) => (
          <motion.div
            key={s.id}
            className="absolute rounded-full"
            style={{
              width: s.size,
              height: s.size / 2.5,
              backgroundColor: s.color,
              borderRadius: "9999px",
              left: `${s.x}%`,
              top: `${s.y}%`,
              rotate: s.rot,
              opacity: 0.7,
            }}
            animate={{ y: [0, -s.floatY, 0], rotate: [s.rot, s.rot + 40, s.rot] }}
            transition={{ duration: s.dur, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
          />
        ))}
        {STARS.map((s) => (
          <motion.div
            key={`star-${s.id}`}
            className="absolute"
            style={{ left: `${s.x}%`, top: `${s.y}%` }}
            animate={{ scale: [0.7, 1.3, 0.7], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: s.dur, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
          >
            <svg width={s.size} height={s.size} viewBox="0 0 20 20">
              <polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8" fill={s.color} opacity="0.8" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Subtle cursor glow */}
      {!prefersReduced && (
        <motion.div
          className="fixed w-80 h-80 rounded-full pointer-events-none z-0 mix-blend-multiply"
          style={{
            background: "radial-gradient(circle, rgba(251,182,206,0.25) 0%, transparent 70%)",
            x: mousePos.x - 160,
            y: mousePos.y - 160,
          }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        />
      )}

      <div className="container mx-auto px-6 z-10 grid lg:grid-cols-2 gap-12 items-center max-w-7xl">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center lg:text-left space-y-8"
        >
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide"
                style={{ background: "hsl(340 80% 65% / 0.12)", color: "hsl(340 80% 55%)" }}>
                Handcrafted since 2012
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.25 }}
              className="text-6xl md:text-7xl xl:text-8xl font-serif font-bold text-foreground leading-[1.05] tracking-tight"
            >
              Scoops &amp;{" "}
              <span
                className="italic"
                style={{
                  background: "linear-gradient(135deg, #ff9dbf 0%, #e86fa1 45%, #c3a6ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Dreams
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-lg mx-auto lg:mx-0 font-light leading-relaxed"
            >
              Artisanal, handcrafted gelato served in a pastel paradise.{" "}
              <span className="text-foreground font-medium">Taste the magic</span> in every scoop.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="#flavors"
              data-testid="button-order-now"
              whileHover={{ scale: 1.06, boxShadow: "0 20px 40px rgba(232,111,161,0.4)" }}
              whileTap={{ scale: 0.96 }}
              className="px-9 py-4 rounded-full font-bold text-lg text-white relative overflow-hidden group cursor-pointer inline-block text-center"
              style={{
                background: "linear-gradient(135deg, #ff9dbf 0%, #e86fa1 50%, #d05090 100%)",
                boxShadow: "0 12px 30px rgba(232,111,161,0.35)",
              }}
            >
              <span className="relative z-10">Order Now</span>
              <motion.div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, #ffd6e7 0%, #ff9dbf 100%)" }}
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.a>

            <motion.a
              href="#flavors"
              data-testid="button-explore-flavors"
              whileHover={{ scale: 1.05, borderColor: "hsl(340 80% 65%)" }}
              whileTap={{ scale: 0.96 }}
              className="px-9 py-4 bg-white/80 backdrop-blur text-foreground border-2 rounded-full font-bold text-lg cursor-pointer inline-block text-center transition-colors"
              style={{ borderColor: "hsl(340 80% 65% / 0.3)" }}
            >
              Explore Flavors
            </motion.a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            className="flex items-center gap-4 justify-center lg:justify-start"
          >
            <div className="flex -space-x-3">
              {["#ffd6e7", "#d4f5e9", "#e8d5ff", "#ffefd0"].map((c, i) => (
                <div key={i} className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold"
                  style={{ background: c, color: "hsl(340 25% 30%)" }}>
                  {["A", "M", "S", "J"][i]}
                </div>
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">2,400+</span> happy customers this month
            </div>
          </motion.div>
        </motion.div>

        {/* Ice cream illustration side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative flex justify-center items-center"
          style={{ height: 520 }}
        >
          {/* Glow ring behind cone */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 340,
              height: 340,
              background: "radial-gradient(circle, rgba(251,182,206,0.35) 0%, rgba(163,228,193,0.2) 50%, transparent 75%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -54%)",
              filter: "blur(24px)",
            }}
          />

          {/* Gentle float animation on the whole cone */}
          <motion.div
            className="w-72 h-[480px] relative"
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <IceCreamSVG />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">Scroll</span>
        <motion.div
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
          style={{ borderColor: "hsl(340 80% 65% / 0.4)" }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "hsl(340 80% 65%)" }}
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
