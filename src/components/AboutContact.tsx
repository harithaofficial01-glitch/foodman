import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Building2, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "0424-7167303",
    href: "tel:0424-7167303",
    color: "hsl(4,85%,40%)",
  },
  {
    icon: Mail,
    label: "Email",
    value: "foodmanadmin@gmail.com",
    href: "mailto:foodmanadmin@gmail.com",
    color: "hsl(43,100%,42%)",
  },
  {
    icon: Building2,
    label: "Address",
    value: "S.NO – 34, D.NO – 47A, Chinnamuthu Main Street, Erode District, Tamil Nadu – 638011",
    href: "https://maps.google.com/?q=Chinnamuthu+Main+Street,+Erode",
    color: "hsl(4,85%,40%)",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Sun: 6:00 AM – 10:00 PM",
    href: null,
    color: "hsl(43,100%,42%)",
  },
];

const AboutContact = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactForm) => {
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Top accent stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5"
        style={{ background: "linear-gradient(90deg, hsl(4,85%,40%), hsl(43,100%,50%), hsl(4,85%,40%))" }}
      />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: About Us */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag">About Us</span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mt-4 leading-tight">
              Welcome to{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, hsl(4,85%,40%), hsl(4,85%,60%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Food Man
              </span>
              <br />
              <span style={{ color: "hsl(43,100%,40%)" }}>Thambi Oru Tea!</span>
            </h2>

            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We are dedicated to delivering fresh, hot, and high-quality tea and snacks right to
                your doorstep. Our mission is to make your tea time simple, quick, and enjoyable
                through a smooth online ordering experience.
              </p>
              <p>
                With a focus on taste, hygiene, and timely delivery, we bring your favourite tea
                just a few clicks away.
              </p>
              <p className="font-semibold text-foreground">
                Enjoy your tea, anytime, anywhere with Food Man ☕
              </p>
            </div>

            {/* Business Name card */}
            <div
              className="mt-8 p-6 rounded-2xl border-l-4"
              style={{
                background: "linear-gradient(135deg, hsl(4,85%,98%), hsl(43,100%,98%))",
                borderColor: "hsl(4,85%,40%)",
              }}
            >
              <h3 className="font-black text-lg text-foreground mb-1">Food Man – Thambi Oru Tea</h3>
              <p className="text-sm text-muted-foreground">Authentic Taste • Erode, Tamil Nadu</p>
            </div>

            {/* Contact Details */}
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-black text-foreground">Get in Touch</h3>
              {contactDetails.map((c) => (
                <motion.div
                  key={c.label}
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${c.color}12`, border: `1.5px solid ${c.color}25` }}
                  >
                    <c.icon className="w-5 h-5" style={{ color: c.color }} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                      {c.label}
                    </div>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <div className="text-sm font-semibold text-foreground">{c.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map embed placeholder */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-border/60 shadow-sm">
              <iframe
                title="Food Man Location"
                src="https://maps.google.com/maps?q=Chinnamuthu+Main+Street,+Erode,+Tamil+Nadu&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="section-tag">Contact Us</span>
            <h3 className="text-3xl font-black text-foreground mt-4 mb-2">Send Us a Message</h3>
            <p className="text-muted-foreground mb-8">
              Have a question or feedback? We'd love to hear from you!
            </p>

            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center py-16 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h4 className="text-2xl font-black text-foreground">Message Sent!</h4>
                <p className="text-muted-foreground mt-2">
                  Thank you! We'll get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="text-sm font-bold text-foreground mb-1.5 block" htmlFor="contact-name">
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    {...register("name")}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none ${
                      errors.name
                        ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200"
                        : "border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm font-bold text-foreground mb-1.5 block" htmlFor="contact-phone">
                    Phone Number *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="+91 99999 99999"
                    {...register("phone")}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none ${
                      errors.phone
                        ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200"
                        : "border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm font-bold text-foreground mb-1.5 block" htmlFor="contact-email">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="you@example.com"
                    {...register("email")}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none ${
                      errors.email
                        ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200"
                        : "border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm font-bold text-foreground mb-1.5 block" htmlFor="contact-message">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell us how we can help you..."
                    {...register("message")}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none resize-none ${
                      errors.message
                        ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200"
                        : "border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-primary text-white font-black text-base shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-muted-foreground text-center">
                  <MapPin className="w-3 h-3 inline mr-1" />
                  Business Name: Food Man | Email: foodmanadmin@gmail.com | Phone: 0424-7167303
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
