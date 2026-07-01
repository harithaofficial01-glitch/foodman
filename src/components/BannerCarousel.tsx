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
    const timer = setInterval(next, 5000);
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
        <AnimatePresence>
          <motion.img
            key={current}
            src={banners[current]}
            alt={`Food Man banner ${current + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none" />

        {/* Brand overlay */}
        <motion.div
          className="absolute bottom-8 left-8 md:left-16 z-10"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          key={`text-${current}`}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-yellow-400 text-black text-xs font-black uppercase tracking-widest mb-2">
            🍵 Fresh & Hot
          </div>
          <div className="text-white text-2xl md:text-4xl font-black drop-shadow-lg">
            Thambi Oru Tea
          </div>
          <div className="text-yellow-300 text-sm md:text-base font-medium tracking-wide">
            Authentic taste • Erode, Tamil Nadu
          </div>
        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40 hover:scale-110 border border-white/30"
          aria-label="Previous banner"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40 hover:scale-110 border border-white/30"
          aria-label="Next banner"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 right-6 flex gap-2 z-10">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to banner ${i + 1}`}
              className={`transition-all duration-400 rounded-full ${i === current
                  ? "bg-yellow-400 w-8 h-2.5"
                  : "bg-white/50 hover:bg-white/80 w-2.5 h-2.5"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerCarousel;
