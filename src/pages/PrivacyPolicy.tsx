import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import PolicyLayout, { Clause, fadeUp } from "@/components/PolicyLayout";

const PrivacyPolicy = () => (
  <PolicyLayout title="Privacy Policy">
    <motion.div
      className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 mb-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Section title */}
      <div
        className="flex items-center gap-3 pb-5 mb-6"
        style={{ borderBottom: "1.5px solid hsl(43,100%,92%)" }}
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: "hsl(43,100%,95%)" }}
        >
          <ShieldCheck className="w-5 h-5" style={{ color: "hsl(43,100%,40%)" }} />
        </div>
        <h2 className="text-xl font-black text-foreground tracking-wide uppercase">
          Privacy Policy
        </h2>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-8">
        At <strong>Food Man – Thambi Oru Tea</strong>, your privacy is important to us.
      </p>

      <Clause
        index={0}
        title="1. Information We Collect"
        items={[
          "• Name, phone number, email",
          "• Delivery address",
          "• Order history",
          "• Device / app usage data",
        ]}
      />
      <Clause
        index={1}
        title="2. How We Use Your Information"
        items={[
          "• Order processing & delivery",
          "• Customer support",
          "• App improvement",
          "• Notifications & updates",
        ]}
      />
      <Clause
        index={2}
        title="3. Data Sharing"
        items={[
          "We do not sell your data. Data may be shared with:",
          "• Delivery partners",
          "• Payment gateways",
          "• Legal authorities (if required)",
        ]}
      />
      <Clause
        index={3}
        title="4. Data Security"
        items={["• We use secure systems, but no system is 100% secure."]}
      />
      <Clause
        index={4}
        title="5. Cookies & Tracking"
        items={["• Used to improve app performance and user experience."]}
      />
      <Clause
        index={5}
        title="6. Your Rights"
        items={[
          "• Request data update or deletion",
          "• Opt-out of promotional messages",
        ]}
      />
      <Clause
        index={6}
        title="7. Changes to Policy"
        items={["• Policy may be updated periodically."]}
      />

      {/* Contact info block */}
      <motion.div
        custom={7}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-8 pt-6 rounded-2xl p-6"
        style={{
          background: "linear-gradient(135deg, hsl(4,85%,98%), hsl(43,100%,98%))",
          borderLeft: "4px solid hsl(4,85%,40%)",
        }}
      >
        <h4 className="text-base font-bold text-foreground mb-3">8. Contact Information</h4>
        <div className="space-y-1 text-sm text-muted-foreground">
          <p><span className="font-semibold text-foreground">Business Name:</span> Food Man</p>
          <p>
            <span className="font-semibold text-foreground">Email:</span>{" "}
            <a href="mailto:foodmanadmin@gmail.com" className="hover:text-primary transition-colors">
              foodmanadmin@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold text-foreground">Phone:</span>{" "}
            <a href="tel:0424-7167303" className="hover:text-primary transition-colors">
              0424-7167303
            </a>
          </p>
          <p className="pt-2 font-semibold text-foreground">Address:</p>
          <p>S.NO – 34, D.NO – 47A, Chinnamuthu Main Street,</p>
          <p>Erode, Erode District, Tamil Nadu – 638011</p>
        </div>
      </motion.div>
    </motion.div>
  </PolicyLayout>
);

export default PrivacyPolicy;
