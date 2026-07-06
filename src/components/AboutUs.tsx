import { motion } from "framer-motion";
import { Coffee, Zap, ShieldCheck, MapPin, Sparkles } from "lucide-react";

const stats = [
  { value: "50,000+", label: "Cups of Tea served", color: "hsl(4,85%,40%)" },
  { value: "20+", label: "Teas & Snack Varieties", color: "hsl(43,100%,45%)" },
  { value: "30+", label: "Dedicated Riders", color: "hsl(4,85%,40%)" },
  { value: "4.8★", label: "App Rating", color: "hsl(43,100%,45%)" },
];

const corePillars = [
  {
    icon: Coffee,
    title: "Authentic Erode Taste",
    description: "Brewing tea the traditional way with fresh ingredients for that perfect local aroma.",
    color: "hsl(4,85%,40%)",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene First",
    description: "Prepared in a super-clean, sanitised central kitchen and packed in sealed containers.",
    color: "hsl(43,100%,45%)",
  },
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "Dispatched instantly from Erode hubs using our specialized fleet of local riders.",
    color: "hsl(4,85%,40%)",
  },
];


const AboutUs = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="flex items-right justify-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-yellow-500" />
                <span className="section-tag">About Us</span>
                <Sparkles className="w-5 h-5 text-yellow-500" />
              </div>
      {/* Top accent stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5"
        style={{ background: "linear-gradient(90deg, hsl(4,85%,40%), hsl(43,100%,50%), hsl(4,85%,40%))" }}
      />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left Side: Brand Story & Values */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              
              <h2 className="text-4xl md:text-5xl font-black text-foreground mt-2 leading-tight">
                Welcome to{" "}
                <span className="text-gradient-red">Food Man</span>
                <br />
                <span style={{ color: "hsl(43,100%,40%)" }}>Thambi Oru Tea! ☕</span>
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                We are dedicated to delivering fresh, hot, and high-quality tea and snacks right to your doorstep in Erode. Our mission is to make your tea time simple, quick, and enjoyable through a smooth online ordering experience on our mobile app.
              </p>
              <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                Whether you're working at the office, relaxing at home, or running a business, your favourite cup of tea and hot samosas are just a few clicks away.
              </p>
            </motion.div>

            {/* Pillars */}
            <div className="space-y-4">
              {corePillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-neutral-50 transition-colors"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${pillar.color}12`, border: `1.5px solid ${pillar.color}25` }}
                  >
                    <pillar.icon className="w-5 h-5" style={{ color: pillar.color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-base mb-0.5">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Stats & Erode Map Card */}
          <div className="lg:col-span-5 space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="p-6 rounded-3xl border border-gray-100 bg-[#fafafa] shadow-inner text-center group hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div
                    className="text-3xl font-black mb-1 group-hover:scale-105 transition-transform"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-semibold leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Erode Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-md p-6 relative overflow-hidden"
            >
              <h3 className="font-black text-lg text-foreground mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Our Erode Headquarters
              </h3>
              <div className="space-y-1 text-sm text-muted-foreground mb-4">
                <p className="font-bold text-foreground">Food Man – Thambi Oru Tea</p>
                <p>S.NO – 34, D.NO – 47A,</p>
                <p>Chinnamuthu Main Street,</p>
                <p>Erode, Tamil Nadu – 638011</p>
              </div>

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden border border-border/60 shadow-sm h-48">
                <iframe
                  title="Food Man Headquarters Location Map"
                  src="https://maps.google.com/maps?q=Chinnamuthu+Main+Street,+Erode,+Tamil+Nadu&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
