import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/foodman-logo.png";

const footerLinks = {
  navigation: [
    { href: "#home", label: "Home" },
    { href: "#menu", label: "Menu" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#download", label: "Download App" },
    { href: "#about", label: "About & Contact" },
  ],
  legal: [
    { href: "/terms-privacy#terms", label: "Terms & Conditions" },
    { href: "/terms-privacy#privacy", label: "Privacy Policy" },
    { href: "/terms-privacy#refund", label: "Refund Policy" },
    { href: "/terms-privacy#delivery", label: "Delivery Policy" },
  ],
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden" style={{ background: "hsl(0,0%,6%)" }}>
      {/* Top gradient stripe */}
      <div
        className="h-1"
        style={{ background: "linear-gradient(90deg, hsl(4,85%,40%), hsl(43,100%,50%), hsl(4,85%,40%))" }}
      />

      {/* Decorative circles */}
      <div
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-5"
        style={{ background: "hsl(4,85%,40%)" }}
      />
      <div
        className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full opacity-5"
        style={{ background: "hsl(43,100%,50%)" }}
      />

      <div className="container mx-auto px-6 lg:px-12 py-16 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Food Man" className="h-16 brightness-0 invert opacity-90 mb-4" />
            <h3 className="text-white font-black text-lg mb-1">Food Man</h3>
            <p className="text-xs text-white/40 mb-3" style={{ color: "hsl(43,100%,55%)" }}>
              Thambi Oru Tea
            </p>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Delivering fresh, hot tea and snacks right to your doorstep. Authentic taste from
              Erode, Tamil Nadu.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "https://www.instagram.com/foodman.official?igsh=MW94ZHY2bmw3cTZ4bQ==", color: "hsl(330,80%,60%)" },
                { icon: Facebook, href: "#", color: "hsl(220,70%,55%)" },
              ].map(({ icon: Icon, href, color }) => (
                <motion.a
                  key={color}
                  href={href}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "hsla(255,255%,255%,0.08)", border: "1px solid hsla(255,255%,255%,0.12)" }}
                >
                  <Icon className="w-4 h-4" style={{ color }} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-black mb-5 text-sm uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-yellow-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-black mb-5 text-sm uppercase tracking-widest">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/50 text-sm hover:text-yellow-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-black mb-5 text-sm uppercase tracking-widest">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="tel:0424-7167303"
                  className="text-white/50 text-sm hover:text-white transition-colors"
                >
                  0424-7167303
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:foodmanadmin@gmail.com"
                  className="text-white/50 text-sm hover:text-white transition-colors break-all"
                >
                  foodmanadmin@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm">
                  S.NO – 34, D.NO – 47A,
                  <br />
                  Chinnamuthu Main Street,
                  <br />
                  Erode, Tamil Nadu – 638011
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30"
          style={{ borderTop: "1px solid hsla(255,255%,255%,0.07)" }}
        >
          <p>© 2026 Food Man – Thambi Oru Tea. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span style={{ color: "hsl(4,85%,55%)" }}>❤️</span> & ☕ in Erode, Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
