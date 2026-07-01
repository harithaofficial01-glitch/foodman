import { motion } from "framer-motion";
import { ExternalLink, CalendarDays, Sparkles } from "lucide-react";
import banner1 from "@/assets/banner1.jpeg";
import banner2 from "@/assets/banner2.jpeg";
import banner3 from "@/assets/banner3.jpeg";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.thambiorutea2";

const menuData = [
  {
    id: 1,
    name: "Small Tea",
    desc: "A quick, light brew — perfect for a refreshing sip",
    price: 10,
    isFree: false,
    badge: null,
    image: banner3,
    accent: "hsl(4,85%,40%)",
    accentLight: "hsl(4,85%,97%)",
    emoji: "☕",
    tag: "Quick Sip",
  },
  {
    id: 2,
    name: "Regular Tea",
    desc: "Authentic full-cup premium tea brewed to perfection",
    price: 15,
    isFree: false,
    image: banner1,
    accent: "hsl(4,85%,40%)",
    accentLight: "hsl(130,60%,97%)",
    emoji: "🫖",
    tag: "Most Popular",
  },
  {
    id: 3,
    name: "Flask Tea",
    desc: "A large flask serving 10 cups — great for offices & gatherings",
    price: 140,
    isFree: false,
    badge: "Bulk",
    image: banner2,
    accent: "hsl(43,100%,42%)",
    accentLight: "hsl(43,100%,96%)",
    emoji: "🧉",
    tag: "Best Value",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item: any = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const MenuSection = () => {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, hsl(0,0%,99%) 0%, hsl(4,85%,98%) 50%, hsl(0,0%,99%) 100%)",
      }}
    >
      {/* Top stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5"
        style={{
          background:
            "linear-gradient(90deg, hsl(4,85%,40%), hsl(43,100%,50%), hsl(4,85%,40%))",
        }}
      />

      {/* Background decoration */}
      <motion.div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-30"
        style={{ background: "hsl(4,85%,40%)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full blur-3xl opacity-20"
        style={{ background: "hsl(43,100%,50%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            <span className="section-tag">Our Menu</span>
            <Sparkles className="w-5 h-5 text-yellow-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Freshly{" "}
            <span
              style={{
                background: "linear-gradient(135deg, hsl(4,85%,40%), hsl(4,85%,60%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Brewed
            </span>{" "}
            Teas
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto text-base">
            Browse our selection — order directly through the Food Man app on your phone.
          </p>
        </motion.div>

        {/* Menu Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {menuData.map((m) => (
            <motion.div
              key={m.id}
              variants={item}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 border border-border/50 flex flex-col"
              whileHover={{ y: -6 }}
            >
              {/* Card top tag */}
              <div
                className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow"
                style={{ background: m.accent }}
              >
                {m.tag}
              </div>

              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <motion.img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Emoji */}
                <motion.span
                  className="absolute bottom-3 right-4 text-4xl drop-shadow-lg"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  {m.emoji}
                </motion.span>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-black text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {m.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-1.5 leading-relaxed flex-1">
                  {m.desc}
                </p>

                {/* Price row */}
                <div className="flex items-center gap-3 mt-5 mb-4">
                  <span
                    className="text-3xl font-black"
                    style={{ color: m.accent }}
                  >
                    ₹{m.price}
                  </span>
                  {m.badge && (
                    <span
                      className="px-2.5 py-1 rounded-lg text-xs font-black uppercase tracking-wide"
                      style={
                        m.badge === "FREE"
                          ? {
                              color: "hsl(130,60%,35%)",
                              background: "hsl(130,60%,95%)",
                              border: "1.5px solid hsl(130,60%,75%)",
                            }
                          : {
                              color: m.accent,
                              background: m.accentLight,
                              border: `1.5px solid ${m.accent}50`,
                            }
                      }
                    >
                      {m.badge}
                    </span>
                  )}
                </div>

                {/* Order via App CTA */}
                <motion.a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-white text-sm font-black shadow-lg transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${m.accent}, ${m.accent}cc)`,
                    boxShadow: `0 6px 20px ${m.accent}35`,
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Order via App
                </motion.a>
              </div>

              {/* Bottom accent line */}
              <div
                className="h-1 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${m.accent}, hsl(43,100%,50%))` }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Corporate & Event Bulk Orders */}
        <motion.div
          className="mt-10 max-w-5xl mx-auto rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-7 shadow-lg border overflow-hidden relative"
          style={{
            background: "linear-gradient(135deg, hsl(4,85%,40%) 0%, hsl(4,85%,30%) 100%)",
            borderColor: "hsl(4,85%,30%)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-white/5" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/5" />

          <div className="text-5xl z-10">📦</div>

          <div className="flex-1 z-10">
            <div className="inline-block px-3 py-1 rounded-full bg-yellow-400 text-black text-[10px] font-black uppercase tracking-widest mb-3">
              Bulk & Corporate
            </div>
            <h3 className="font-black text-2xl text-white">
              Corporate & Event Bulk Orders
            </h3>
            <p className="text-white/70 text-sm mt-2 leading-relaxed max-w-lg">
              Hosting a meeting, event, or celebration? Order tea in bulk (minimum 50 teas) and
              schedule your hot, fresh delivery right through the app.
            </p>
          </div>

          <motion.a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex-shrink-0 flex items-center gap-2 px-7 py-3.5 rounded-2xl font-black text-sm shadow-xl z-10 whitespace-nowrap"
            style={{ background: "hsl(43,100%,50%)", color: "hsl(0,0%,8%)" }}
          >
            <CalendarDays className="w-4 h-4" />
            Order Bulk Tea
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
