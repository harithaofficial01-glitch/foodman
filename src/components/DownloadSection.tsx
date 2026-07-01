import { motion } from "framer-motion";
import fmScooter from "@/assets/fm-scooter.png";

const DownloadSection = () => {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(43,100%,50%) 0%, hsl(43,100%,62%) 100%)" }}
    >
      {/* Background decoration */}
      <motion.div
        className="absolute -right-24 -top-24 w-80 h-80 rounded-full"
        style={{ background: "hsla(4,85%,40%,0.15)" }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full"
        style={{ background: "hsla(0,0%,0%,0.08)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div
          className="rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-10"
          style={{ background: "hsla(0,0%,8%,0.92)", backdropFilter: "blur(12px)" }}
        >
          {/* Left: Text */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div
              className="inline-block px-4 py-2 rounded-full text-black text-xs font-black uppercase tracking-widest mb-6"
              style={{ background: "hsl(43,100%,50%)" }}
            >
              📱 Download Now
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Download{" "}
              <span style={{ color: "hsl(43,100%,55%)" }}>Food Man</span>
              <br />& Get Your First{" "}
              <span style={{ color: "hsl(4,85%,55%)" }}>Chai Free!</span>
            </h2>

            <p className="text-white/60 mt-5 text-lg max-w-md leading-relaxed">
              Available on both Android & iOS platforms. Order anytime, anywhere — your perfect cup
              is just a tap away. Experience the authentic taste of Thambi Oru Tea.
            </p>

            {/* Features */}
            <div className="mt-6 flex flex-wrap gap-3">
              {["Free Delivery on First Order", "Live Order Tracking", "UPI & Cash on Delivery"].map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{ background: "hsla(43,100%,50%,0.12)", color: "hsl(43,100%,60%)", border: "1px solid hsla(43,100%,50%,0.2)" }}
                >
                  ✓ {f}
                </span>
              ))}
            </div>

            {/* Store Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              {/* Google Play */}
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.thambiorutea2"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white text-foreground font-semibold hover:bg-white/90 transition-colors duration-300 shadow-lg"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wide">GET IT ON</div>
                  <div className="text-sm font-black -mt-0.5">Google Play</div>
                </div>
              </motion.a>

              {/* App Store */}
              <motion.a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white text-foreground font-semibold hover:bg-white/90 transition-colors duration-300 shadow-lg"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wide">Download on the</div>
                  <div className="text-sm font-black -mt-0.5">App Store</div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Scooter Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.img
              src={fmScooter}
              alt="Food Man delivery scooter"
              className="w-52 md:w-72 drop-shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
