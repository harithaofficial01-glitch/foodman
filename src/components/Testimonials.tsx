import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Karthik R.",
    location: "Erode",
    text: "Best masala chai I've ever had delivered! Piping hot and perfectly spiced. Food Man never disappoints. 🍵",
    rating: 5,
    avatar: "KR",
    avatarColor: "hsl(4,85%,40%)",
  },
  {
    name: "Priya S.",
    location: "Gobichettipalayam",
    text: "The kulhad chai tastes just like the one from my favourite roadside stall. Delivery in 8 minutes — unbelievable!",
    rating: 5,
    avatar: "PS",
    avatarColor: "hsl(43,100%,40%)",
  },
  {
    name: "Mani K.",
    location: "Perundurai",
    text: "Office chai breaks are sorted! We order 20 cups every day. The ginger tea is a lifesaver during monsoons.",
    rating: 5,
    avatar: "MK",
    avatarColor: "hsl(4,85%,40%)",
  },
  {
    name: "Deepa V.",
    location: "Bhavani",
    text: "Finally an app that understands Tamil Nadu's love for tea. The Sulaimani is authentic and refreshing!",
    rating: 4,
    avatar: "DV",
    avatarColor: "hsl(0,0%,20%)",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

const Testimonials = () => {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(0,0%,8%) 0%, hsl(4,85%,20%) 100%)" }}
    >
      {/* Decorative circles */}
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10"
        style={{ background: "hsl(43,100%,50%)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-10"
        style={{ background: "hsl(4,85%,40%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span
            className="inline-block text-xs font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full"
            style={{ background: "hsla(43,100%,50%,0.15)", color: "hsl(43,100%,65%)" }}
          >
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
            What Our{" "}
            <span style={{ color: "hsl(43,100%,55%)" }}>Chai Lovers</span> Say
          </h2>
          <p className="text-white/50 mt-3 max-w-md mx-auto">
            Don't just take our word for it — hear from thousands of happy tea lovers across Erode.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              className="relative rounded-2xl p-6 flex flex-col group hover:-translate-y-1.5 transition-transform duration-300"
              style={{ background: "hsla(255,255%,255%,0.07)", border: "1px solid hsla(255,255%,255%,0.1)" }}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 mb-4 opacity-30" style={{ color: "hsl(43,100%,50%)" }} />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < t.rating ? "fill-yellow-400 text-yellow-400" : "text-white/20"}`}
                  />
                ))}
              </div>

              <p className="text-white/75 text-sm leading-relaxed flex-1">"{t.text}"</p>

              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/10">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black"
                  style={{ background: t.avatarColor }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Rating summary */}
        <motion.div
          className="mt-14 flex flex-wrap items-center justify-center gap-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {[
            { num: "4.8/5", label: "App Rating", icon: "⭐" },
            { num: "50K+", label: "Happy Customers", icon: "😊" },
            { num: "99%", label: "On-time Delivery", icon: "🚀" },
          ].map((stat) => (
            <div key={stat.label} className="px-6 py-4 rounded-2xl" style={{ background: "hsla(255,255%,255%,0.05)", border: "1px solid hsla(255,255%,255%,0.08)" }}>
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-3xl font-black text-yellow-400">{stat.num}</div>
              <div className="text-white/50 text-xs mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
