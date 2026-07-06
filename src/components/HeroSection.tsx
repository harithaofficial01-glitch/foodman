import { motion } from "framer-motion";
import { ArrowRight, Star, Flame, Clock, Users, ThumbsUp } from "lucide-react";
import heroTea from "@/assets/hero-tea.png";
import fmScooter from "@/assets/fm-scooter.png";

const stats = [
  { num: "50K+", label: "Happy Customers", icon: Users, color: "hsl(4,85%,40%)" },
  { num: "20+", label: "Tea Varieties", icon: Flame, color: "hsl(43,100%,45%)" },
  { num: "10 min", label: "Avg Delivery", icon: Clock, color: "hsl(4,85%,40%)" },
  { num: "4.8★", label: "App Rating", icon: ThumbsUp, color: "hsl(43,100%,45%)" },
];

// Floating decorative particles
const particles = [
  { x: "10%", y: "15%", size: 8, delay: 0, color: "hsl(43,100%,50%)" },
  { x: "85%", y: "20%", size: 6, delay: 0.5, color: "hsl(4,85%,50%)" },
  { x: "20%", y: "75%", size: 10, delay: 1, color: "hsl(43,100%,55%)" },
  { x: "75%", y: "80%", size: 5, delay: 0.8, color: "hsl(4,85%,45%)" },
  { x: "50%", y: "10%", size: 7, delay: 1.3, color: "hsl(43,100%,45%)" },
];

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-hero-pattern overflow-hidden bg-transparent">
      {/* Decorative blobs */}
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "hsla(4,85%,40%,0.10)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full blur-3xl"
        style={{ background: "hsla(43,100%,50%,0.14)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: p.x, top: p.y,
            width: p.size, height: p.size,
            background: p.color,
            opacity: 0.55,
            filter: "blur(1px)",
          }}
          animate={{ y: [0, -18, 0], opacity: [0.4, 0.75, 0.4], scale: [1, 1.3, 1] }}
          transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge — shimmer pill */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 shimmer-badge"
              style={{
                background: "linear-gradient(135deg, hsl(43,100%,96%), hsl(43,100%,90%))",
                border: "1.5px solid hsl(43,100%,75%)",
                boxShadow: "0 4px 16px hsla(43,100%,50%,0.25)",
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-black text-yellow-700">#1 Tea Delivery in Erode</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-foreground tracking-tight">
              <span
                style={{
                  background: "linear-gradient(135deg, hsl(4,85%,35%), hsl(4,85%,55%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 2px 8px hsla(4,85%,40%,0.15))",
                }}
              >
                Thambi Oru Tea
              </span>
              <br />
              <span className="text-foreground">Delivered </span>
              <span
                style={{
                  background: "linear-gradient(135deg, hsl(43,100%,42%), hsl(43,100%,60%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 2px 8px hsla(43,100%,50%,0.2))",
                }}
              >
                Hot &amp; Fresh
              </span>
            </h1>

            <motion.p
              className="mt-6 text-lg text-muted-foreground max-w-md leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              We are dedicated to delivering fresh, hot, and high-quality tea and snacks right to
              your doorstep. Enjoy your tea, anytime, anywhere with Food Man ☕
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <motion.a
                href="#download"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-black text-base"
                style={{
                  background: "linear-gradient(135deg, hsl(4,85%,38%), hsl(4,85%,55%))",
                  boxShadow: "0 8px 28px hsla(4,85%,40%,0.42), 0 2px 8px hsla(4,85%,40%,0.22)",
                }}
                whileHover={{ scale: 1.05, y: -3, boxShadow: "0 14px 36px hsla(4,85%,40%,0.5)" }}
                whileTap={{ scale: 0.96 }}
              >
                Order Now
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#menu"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-base"
                style={{
                  border: "2px solid hsla(0,0%,0%,0.14)",
                  color: "hsl(0,0%,12%)",
                  background: "rgba(255,255,255,0.6)",
                  backdropFilter: "blur(8px)",
                }}
                whileHover={{
                  borderColor: "hsl(4,85%,40%)",
                  color: "hsl(4,85%,40%)",
                  background: "rgba(255,255,255,0.9)",
                  y: -2,
                }}
              >
                Explore Menu
              </motion.a>
            </motion.div>

            {/* Stats — glassmorphic cards */}
            <motion.div
              className="mt-12 grid grid-cols-4 gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="text-center p-3 rounded-2xl glass-premium cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  whileHover={{ scale: 1.08, y: -4 }}
                >
                  <div
                    className="text-2xl font-black"
                    style={{ color: s.color, textShadow: `0 2px 12px ${s.color}40` }}
                  >
                    {s.num}
                  </div>
                  <div className="text-[10px] text-muted-foreground font-semibold mt-0.5 leading-tight">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Hero Image — with conic gradient ring */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {/* Outer spinning conic gradient ring */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 380, height: 380,
                background: "conic-gradient(from 0deg, hsl(4,85%,40%), hsl(43,100%,50%), hsl(4,85%,40%), transparent 60%)",
                opacity: 0.3,
                filter: "blur(3px)",
              }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner glow */}
            <motion.div
              className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full"
              style={{
                background: "radial-gradient(circle, hsla(43,100%,50%,0.18) 0%, hsla(4,85%,40%,0.12) 50%, transparent 70%)",
              }}
              animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative">
              <motion.img
                src={heroTea}
                alt="Delicious steaming chai"
                className="w-72 md:w-[400px] drop-shadow-2xl relative z-10"
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.img
                src={fmScooter}
                alt="Food Man delivery scooter"
                className="absolute -bottom-4 -right-6 w-36 md:w-44 z-20 drop-shadow-xl"
                initial={{ x: 80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
                animate={{ y: [0, -6, 0] }}
              />

             <motion.div
  className="absolute top-6 left-6 z-20"
  initial={{ opacity: 0, scale: 0.75, y: -10 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
  animate={{
    y: [0, -4, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },  
  }}
>
  <div
    className="flex items-center gap-3 px-7 py-4 rounded-full"
    style={{
      background: "rgba(0,0,0,0.88)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      border: "1px solid rgba(255,255,255,0.15)",
      boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
    }}
  >
    {/* icon bigger */}
    <span className="text-yellow-400 text-lg">⚡</span>

    {/* text bigger */}
    <span className="font-extrabold text-base text-white tracking-wide">
      Delivery in <span className="text-yellow-400">10 min</span>
    </span>
  </div>
</motion.div>

{/* Floating "Fresh" badge */}
<motion.div
  className="absolute -bottom-5 left-0 rounded-2xl px-7 py-4 shadow-xl z-20 glass-premium"
  style={{ border: "1.5px solid hsla(43,100%,50%,0.35)" }}
  initial={{ opacity: 0, scale: 0.7 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 1.6, type: "spring" }}
  animate={{ y: [0, -5, 0] }}
>
  <div
    className="text-base font-extrabold tracking-wide"
    style={{ color: "hsl(43,100%,38%)" }}
  >
    ☕ Always Fresh
  </div>
</motion.div>            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
