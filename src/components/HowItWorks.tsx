import { motion } from "framer-motion";
import { Smartphone, Coffee, Truck, CheckCircle, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    step: "01",
    title: "Open the App",
    desc: "Download Food Man and browse our wide range of freshly brewed teas and snacks.",
    color: "hsl(4,85%,40%)",
    features: ["Easy registration", "Browse 20+ items", "Track your order"],
  },
  {
    icon: Coffee,
    step: "02",
    title: "Pick Your Chai",
    desc: "Choose your favourite brew, customize it to your taste, and place your order in seconds.",
    color: "hsl(43,100%,45%)",
    features: ["Multiple tea varieties", "Customize strength", "Add snacks"],
  },
  {
    icon: Truck,
    step: "03",
    title: "Get it Delivered",
    desc: "Our delivery partner brings your hot chai right to your doorstep in under 10 minutes.",
    color: "hsl(4,85%,40%)",
    features: ["Live tracking", "10 min delivery", "Hot & fresh guaranteed"],
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 50%, hsla(4,85%,40%,0.06) 0%, transparent 45%), radial-gradient(circle at 85% 30%, hsla(43,100%,50%,0.08) 0%, transparent 45%)",
        }}
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
            <span className="section-tag">How It Works</span>
            <Sparkles className="w-5 h-5 text-yellow-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mt-4">
            Three Simple{" "}
            <span
              style={{
                background: "linear-gradient(135deg, hsl(4,85%,40%), hsl(43,100%,50%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Steps
            </span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Ordering your favourite chai is as easy as 1-2-3. Our smooth online ordering experience
            makes your tea time simple, quick, and enjoyable.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting dashed line */}
          <div className="hidden md:block absolute top-14 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 border-t-2 border-dashed border-border" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              {/* Card */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-border/60 hover:shadow-xl transition-shadow duration-300 h-full">
                {/* Step number */}
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md"
                    style={{ background: `${step.color}15`, border: `2px solid ${step.color}30` }}
                    whileHover={{ scale: 1.1, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <step.icon className="w-8 h-8" style={{ color: step.color }} />
                  </motion.div>
                  <span
                    className="text-5xl font-black opacity-10"
                    style={{ color: step.color }}
                  >
                    {step.step}
                  </span>
                </div>

                <h3 className="font-black text-xl text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{step.desc}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {step.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: step.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step indicator dot on timeline */}
              <div
                className="hidden md:block absolute -top-[1px] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-white shadow-md"
                style={{ background: step.color, top: "3.3rem" }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-white font-black text-base shadow-lg shadow-primary/35 hover:shadow-xl hover:shadow-primary/45 hover:-translate-y-1 transition-all duration-300"
          >
            Start Ordering Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
