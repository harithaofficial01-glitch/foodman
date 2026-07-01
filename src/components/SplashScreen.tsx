import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "@/assets/foodman-logo.png";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);
  const [phase, setPhase] = useState(0); // 0=logo, 1=text, 2=done

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 600);
    const t2 = setTimeout(() => setPhase(2), 1400);
    const t3 = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 500);
    }, 2200);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background:
              "linear-gradient(145deg, hsl(0,0%,5%) 0%, hsl(4,85%,22%) 45%, hsl(4,85%,35%) 100%)",
          }}
          exit={{ opacity: 0, scale: 1.06, filter: "blur(8px)" }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          {/* Radial glow behind logo */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 420,
              height: 420,
              background:
                "radial-gradient(circle, hsla(4,85%,45%,0.45) 0%, transparent 70%)",
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
            }}
            animate={{ scale: [0.8, 1.15, 0.8], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Rotating dashed ring */}
          <motion.div
            className="absolute rounded-full border-2 border-dashed border-yellow-400/25"
            style={{ width: 300, height: 300, top: "50%", left: "50%", x: "-50%", y: "-50%" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          {/* Counter-rotating ring */}
          <motion.div
            className="absolute rounded-full border border-white/10"
            style={{ width: 380, height: 380, top: "50%", left: "50%", x: "-50%", y: "-50%" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />

          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: 6 + (i % 3) * 4,
                height: 6 + (i % 3) * 4,
                background: i % 2 === 0 ? "hsl(43,100%,55%)" : "hsl(4,85%,60%)",
                top: `${20 + Math.sin((i / 8) * Math.PI * 2) * 35}%`,
                left: `${20 + Math.cos((i / 8) * Math.PI * 2) * 40}%`,
                opacity: 0.6,
              }}
              animate={{
                y: [0, -16, 0],
                opacity: [0.4, 0.9, 0.4],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.25,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Logo */}
          <motion.div
            className="relative z-10 flex items-center justify-center"
            initial={{ scale: 0.2, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.45 }}
          >
            {/* White glowing disc for contrast */}
            <motion.div
              className="absolute rounded-full bg-white"
              style={{
                width: 220,
                height: 220,
                boxShadow: "0 0 60px 20px rgba(255,255,255,0.25), 0 0 120px 40px rgba(255,255,255,0.10)",
              }}
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <img
              src={logo}
              alt="Food Man"
              className="relative w-48 md:w-64 drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
            />
          </motion.div>

          {/* Brand text */}
          <motion.div
            className="relative z-10 text-center mt-7"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 24 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-black tracking-[0.18em] text-white">
              FOOD{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, hsl(43,100%,55%), hsl(43,100%,75%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                MAN
              </span>
            </h1>
            <p className="mt-2 text-yellow-400/80 text-xs tracking-[0.35em] uppercase font-semibold">
              Thambi Oru Tea &nbsp;•&nbsp; Authentic Taste
            </p>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="relative z-10 mt-12 w-56 h-1 rounded-full overflow-hidden"
            style={{ background: "hsla(255,255%,255%,0.08)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 1 ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, hsl(43,100%,50%), hsl(4,85%,55%), hsl(43,100%,50%))",
                backgroundSize: "200% 100%",
              }}
              initial={{ width: "0%" }}
              animate={{ width: phase >= 1 ? "100%" : "0%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="relative z-10 mt-5 text-white/30 text-xs tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 2 ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            Fresh • Hot • Delivered
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
