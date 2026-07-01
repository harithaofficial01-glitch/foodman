import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import heroTea from "@/assets/hero-tea.png";
import fmScooter from "@/assets/fm-scooter.png";

const stats = [
  { num: "50K+", label: "Happy Customers" },
  { num: "20+", label: "Tea Varieties" },
  { num: "10 min", label: "Avg Delivery" },
  { num: "4.8★", label: "App Rating" },
];

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-hero-pattern overflow-hidden bg-white">
      {/* Decorative blobs */}
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "hsla(4,85%,40%,0.08)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full blur-3xl"
        style={{ background: "hsla(43,100%,50%,0.12)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-yellow-200"
              style={{ background: "linear-gradient(135deg, hsl(43,100%,98%), hsl(43,100%,95%))" }}
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
              <span className="text-sm font-bold text-yellow-700">#1 Tea Delivery in Erode</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-foreground">
              <span
                style={{
                  background: "linear-gradient(135deg, hsl(4,85%,38%), hsl(4,85%,55%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Thambi Oru Tea
              </span>
              <br />
              <span className="text-foreground">Delivered{" "}</span>
              <span
                style={{
                  background: "linear-gradient(135deg, hsl(43,100%,45%), hsl(43,100%,60%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Hot & Fresh
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
              <a
                href="#download"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white font-bold text-base shadow-lg shadow-primary/35 hover:shadow-xl hover:shadow-primary/45 hover:-translate-y-1 transition-all duration-300"
              >
                Order Now
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-foreground/15 text-foreground font-bold text-base hover:border-primary hover:text-primary transition-all duration-300"
              >
                Explore Menu
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-12 grid grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                >
                  <div className="text-2xl font-black text-primary">{s.num}</div>
                  <div className="text-xs text-muted-foreground font-medium mt-0.5">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {/* Glow ring */}
            <motion.div
              className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, hsla(43,100%,50%,0.15) 0%, hsla(4,85%,40%,0.1) 50%, transparent 70%)",
              }}
              animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative">
              <motion.img
                src={heroTea}
                alt="Delicious steaming chai"
                className="w-72 md:w-[420px] drop-shadow-2xl relative z-10"
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

              {/* Floating badge */}
              <motion.div
                className="absolute -top-4 -left-6 bg-white rounded-2xl px-4 py-2 shadow-xl border border-red-100 z-20"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4, type: "spring" }}
              >
                <div className="text-xs text-muted-foreground">Delivered in</div>
                <div className="text-xl font-black text-primary">10 min</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
