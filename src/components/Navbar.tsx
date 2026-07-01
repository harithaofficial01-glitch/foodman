import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Menu, X, Download } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/fm-scooter.png";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.thambiorutea2";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#download", label: "Download" },
  { href: "#careers", label: "Careers" },
  { href: "#about", label: "About & Contact" },
];

const linkVariants: any = {
  hidden: { opacity: 0, y: -10 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.25 + i * 0.07, duration: 0.4, ease: "easeOut" },
  }),
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{ top: 0, margin: 0, padding: 0 }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {/* Animated rainbow-speed top bar */}
          <motion.div
            style={{
              height: 3,
              width: "100%",
              display: "block",
              background:
                "linear-gradient(90deg, hsl(4,85%,40%) 0%, hsl(43,100%,50%) 30%, hsl(4,85%,50%) 60%, hsl(43,100%,45%) 100%)",
              backgroundSize: "200% 100%",
              margin: 0,
              padding: 0,
              lineHeight: 0,
              fontSize: 0,
            }}
            animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          {/* Main bar */}
          <div
          className="transition-all duration-500"
          style={{
            background: scrolled
              ? "linear-gradient(135deg, hsl(0,0%,10%) 0%, hsl(4,85%,18%) 60%, hsl(4,85%,24%) 100%)"
              : "linear-gradient(135deg, rgba(8,8,8,0.88) 0%, rgba(100,12,12,0.82) 60%, rgba(120,20,20,0.80) 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            boxShadow: scrolled
              ? "0 4px 32px rgba(0,0,0,0.45), 0 1px 0 rgba(220,50,50,0.2)"
              : "0 2px 16px rgba(0,0,0,0.25)",
          }}
        >
          <div className="container mx-auto px-5 lg:px-12 flex items-center justify-between h-[70px]">

            {/* ── Logo with scooter ride animation ── */}
            <motion.a
              href="#home"
              className="flex items-center gap-3 group flex-shrink-0"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 350 }}
            >
              <div className="relative flex items-center justify-center">
                {/* Speed lines behind logo */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-1 -ml-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {[12, 18, 10].map((w, i) => (
                    <motion.div
                      key={i}
                      className="rounded-full"
                      style={{
                        width: w,
                        height: 2,
                        background: "hsl(43,100%,55%)",
                        opacity: 0.6,
                      }}
                      animate={{ x: [-4, 0, -4], opacity: [0.3, 0.7, 0.3] }}
                      transition={{ duration: 0.4 + i * 0.1, repeat: Infinity }}
                    />
                  ))}
                </div>

                {/* Soft glow ring */}
                <motion.div
                  className="absolute rounded-full"
                  style={{
                    width: 68,
                    height: 68,
                    background: "radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%)",
                  }}
                  animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* White disc for logo contrast */}
                <div
                  className="absolute rounded-full bg-white"
                  style={{ width: 62, height: 62, opacity: 0.96 }}
                />

                {/* The logo — scooter ride bounce + tilt */}
                <motion.img
                  src={logo}
                  alt="Food Man"
                  className="relative h-[60px] md:h-[68px] w-auto object-contain drop-shadow-lg"
                  animate={{
                    y: [0, -4, -1, -5, 0, -3, 0],
                    rotate: [-0.8, 0.8, -0.5, 1, -0.8, 0.5, -0.8],
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.15, 0.3, 0.5, 0.65, 0.82, 1],
                  }}
                />

                {/* Motion trail dot */}
                <motion.div
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full"
                  style={{ background: "rgba(0,0,0,0.15)", width: 48, height: 6, filter: "blur(4px)" }}
                  animate={{ scaleX: [1, 0.7, 1], opacity: [0.5, 0.2, 0.5] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              {/* Brand name */}
              <div className="hidden sm:flex flex-col leading-none">
                <motion.span
                  className="text-lg font-black tracking-wide text-white"
                  animate={{ opacity: [0.9, 1, 0.9] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  FOOD{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, hsl(43,100%,55%), hsl(43,100%,75%))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    MAN
                  </span>
                </motion.span>
                <div className="flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                  <span className="text-[10px] text-white/55 font-medium tracking-wide">
                    Erode, Tamil Nadu
                  </span>
                </div>
              </div>
            </motion.a>

            {/* ── Desktop Nav Links ── */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="show"
                  onClick={() => setActiveLink(link.href)}
                  className="relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
                  style={{
                    color:
                      activeLink === link.href
                        ? "hsl(43,100%,60%)"
                        : "rgba(255,255,255,0.72)",
                  }}
                  whileHover={{ y: -1, color: "hsl(43,100%,65%)" }}
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-yellow-400"
                    initial={{ scaleX: activeLink === link.href ? 1 : 0 }}
                    animate={{ scaleX: activeLink === link.href ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.22 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* ── CTA + Hamburger ── */}
            <div className="flex items-center gap-3">
              <motion.a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-black text-sm font-black"
                style={{
                  background: "linear-gradient(135deg, hsl(43,100%,50%), hsl(43,100%,62%))",
                  boxShadow: "0 4px 20px hsla(43,100%,50%,0.45)",
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.65 }}
                whileHover={{
                  scale: 1.06,
                  y: -2,
                  boxShadow: "0 8px 30px hsla(43,100%,50%,0.6)",
                }}
                whileTap={{ scale: 0.96 }}
              >
                <Download className="w-4 h-4" />
                Order Now
              </motion.a>

              {/* Hamburger */}
              <motion.button
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.14)",
                }}
                onClick={() => setMobileOpen(!mobileOpen)}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {mobileOpen ? (
                    <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <X className="w-5 h-5 text-yellow-400" />
                    </motion.div>
                  ) : (
                    <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Menu className="w-5 h-5 text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        </div>{/* end flex wrapper */}

        {/* ── Mobile Dropdown ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              style={{
                background: "linear-gradient(135deg, hsl(0,0%,10%) 0%, hsl(4,85%,20%) 100%)",
                backdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
              }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-6 py-5 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => { setMobileOpen(false); setActiveLink(link.href); }}
                    className="flex items-center gap-3 py-3 px-4 rounded-xl font-semibold text-sm"
                    style={{
                      color: activeLink === link.href ? "hsl(43,100%,55%)" : "rgba(255,255,255,0.75)",
                      background: activeLink === link.href ? "rgba(255,255,255,0.07)" : "transparent",
                    }}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ x: 4 }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: activeLink === link.href ? "hsl(43,100%,55%)" : "rgba(255,255,255,0.3)" }}
                    />
                    {link.label}
                  </motion.a>
                ))}

                <div className="pt-3 border-t border-white/10 mt-2">
                  <motion.a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-black text-sm text-black"
                    style={{ background: "linear-gradient(135deg, hsl(43,100%,50%), hsl(43,100%,62%))" }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Download className="w-4 h-4" />
                    Order Now via App
                  </motion.a>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-white/35 pt-3 px-4">
                  <MapPin className="w-3 h-3 text-yellow-400" />
                  <span>Erode, Tamil Nadu – 638011</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer removed for banner/hero transparent look */}
    </>
  );
};

export default Navbar;
