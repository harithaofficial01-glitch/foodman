import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banner1 from "@/assets/banner1.jpeg";
import banner2 from "@/assets/banner2.jpeg";
import banner3 from "@/assets/banner3.jpeg";
import banner4 from "@/assets/banner4.jpeg";

const banners = [banner1, banner2, banner3, banner4];

const BannerCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % banners.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + banners.length) % banners.length), []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 2500);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section className="pt-[74px] pb-0 bg-black">
      <div
        className="relative w-full overflow-hidden group"
        style={{ aspectRatio: "16/9" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="sync">
          {/* Ken Burns zoom on image */}
          <motion.div
            key={`img-wrap-${current}`}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.img
              src={banners[current]}
              alt={`Food Man banner ${current + 1}`}
              className="w-full h-full object-cover"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6, ease: "easeOut" }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic letterbox bars */}
        <div
          className="absolute top-0 left-0 right-0 h-1 z-10"
          style={{ background: "linear-gradient(90deg, hsl(4,85%,40%), hsl(43,100%,50%), hsl(4,85%,40%))" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-1 z-10"
          style={{ background: "linear-gradient(90deg, hsl(4,85%,40%), hsl(43,100%,50%), hsl(4,85%,40%))" }}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/25 pointer-events-none z-[2]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none z-[2]" />

        {/* Brand overlay */}
        <motion.div
          className="absolute bottom-8 left-8 md:left-16 z-10"
          initial={{ opacity: 0, x: -30, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          key={`text-${current}`}
        >
          <div
            className="inline-block px-3 py-1.5 rounded-full text-black text-xs font-black uppercase tracking-widest mb-2 shimmer-badge"
            style={{
              background: "linear-gradient(135deg, hsl(43,100%,50%), hsl(43,100%,62%))",
              boxShadow: "0 4px 16px hsla(43,100%,50%,0.5)",
            }}
          >
            🍵 Fresh &amp; Hot
          </div>
          <div className="text-white text-2xl md:text-4xl font-black drop-shadow-lg" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
            Thambi Oru Tea
          </div>
          <div className="text-yellow-300 text-sm md:text-base font-medium tracking-wide mt-1">
            Authentic taste • Erode, Tamil Nadu
          </div>
        </motion.div>

        {/* Navigation Arrows — pill style */}
        <motion.button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 h-11 px-4 rounded-full backdrop-blur-md flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/30 text-white text-xs font-bold"
          style={{ background: "rgba(255,255,255,0.15)" }}
          whileHover={{ background: "linear-gradient(135deg, hsl(4,85%,38%), hsl(4,85%,55%))", scale: 1.05, x: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous banner"
        >
          <ChevronLeft className="w-4 h-4" />
          Prev
        </motion.button>
        <motion.button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 h-11 px-4 rounded-full backdrop-blur-md flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/30 text-white text-xs font-bold"
          style={{ background: "rgba(255,255,255,0.15)" }}
          whileHover={{ background: "linear-gradient(135deg, hsl(4,85%,38%), hsl(4,85%,55%))", scale: 1.05, x: 2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next banner"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </motion.button>

        {/* Dots */}
        <div className="absolute bottom-5 right-6 flex gap-2 z-10">
          {banners.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to banner ${i + 1}`}
              className="rounded-full transition-all duration-400"
              animate={{
                width: i === current ? 28 : 10,
                height: 10,
                background: i === current
                  ? "linear-gradient(90deg, hsl(4,85%,55%), hsl(43,100%,55%))"
                  : "rgba(255,255,255,0.45)",
              }}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerCarousel;
