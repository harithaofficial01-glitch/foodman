import { motion } from "framer-motion";
import { FileText, ShieldCheck, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

interface ClauseProps {
  title: string;
  items: string[];
  index: number;
}

const Clause = ({ title, items, index }: ClauseProps) => (
  <motion.div
    custom={index}
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="mb-6"
  >
    <h4 className="text-base font-bold text-foreground mb-2">{title}</h4>
    <ul className="space-y-1">
      {items.map((item, i) => (
        <li key={i} className="text-sm text-muted-foreground leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const TermsPrivacy = () => {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <div
        className="sticky top-0 z-40"
        style={{
          background:
            "linear-gradient(135deg, hsl(0,0%,10%) 0%, hsl(4,85%,18%) 60%, hsl(4,85%,24%) 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          boxShadow: "0 4px 32px rgba(0,0,0,0.45)",
        }}
      >
        {/* Rainbow top bar */}
        <div
          className="h-[3px] w-full"
          style={{
            background:
              "linear-gradient(90deg, hsl(4,85%,40%) 0%, hsl(43,100%,50%) 30%, hsl(4,85%,50%) 60%, hsl(43,100%,45%) 100%)",
          }}
        />
        <div className="container mx-auto px-6 lg:px-12 h-[68px] flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-white/80 hover:text-yellow-400 transition-colors text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-white font-black text-lg tracking-wide">Terms &amp; Privacy</h1>
          <div className="w-28" />
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-16 max-w-4xl">

        {/* ── TERMS & CONDITIONS ── */}
        <motion.div
          id="terms"
          className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 mb-8 scroll-mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section title */}
          <div
            className="flex items-center gap-3 pb-5 mb-6"
            style={{ borderBottom: "1.5px solid hsl(4,85%,94%)" }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "hsl(4,85%,95%)" }}
            >
              <FileText className="w-5 h-5" style={{ color: "hsl(4,85%,40%)" }} />
            </div>
            <h2 className="text-xl font-black text-foreground tracking-wide uppercase">
              Terms &amp; Conditions
            </h2>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            Welcome to <strong>Food Man – Thambi Oru Tea</strong>. By using our mobile application,
            you agree to the following terms:
          </p>

          <Clause
            index={0}
            title="1. Use of the App"
            items={[
              "• You must be at least 18 years old or use under supervision.",
              "• Provide accurate details while placing orders.",
              "• Misuse may lead to account suspension.",
            ]}
          />
          <Clause
            index={1}
            title="2. Orders & Payments"
            items={[
              "• Orders are subject to availability.",
              "• Prices may change without prior notice.",
              "• Payment methods include: UPI / Online Payments, Cash on Delivery (Cash in Hand).",
              "• Orders cannot be cancelled once preparation has started.",
            ]}
          />
          <Clause
            index={2}
            title="3. Delivery Policy"
            items={[
              "• Delivery time is estimated and may vary.",
              "• Provide correct address and contact details.",
              "• Failed delivery due to incorrect details is not eligible for refund.",
            ]}
          />
          <Clause
            index={3}
            title="4. Refund & Cancellation"
            items={[
              "Refunds are applicable only if:",
              "• Wrong item delivered",
              "• Damaged or poor-quality product",
              "Refunds will be processed within 5–7 business days.",
            ]}
          />
          <Clause
            index={4}
            title="5. User Responsibilities"
            items={[
              "• No illegal or fraudulent usage.",
              "• No attempts to hack or disrupt services.",
            ]}
          />
          <Clause
            index={5}
            title="6. Intellectual Property"
            items={["• All branding and content belong to Food Man."]}
          />
          <Clause
            index={6}
            title="7. Limitation of Liability"
            items={[
              "• Not responsible for delays due to external factors.",
              "• Customers must check ingredients for allergies.",
            ]}
          />
          <Clause
            index={7}
            title="8. Changes to Terms"
            items={["• We may update terms anytime. Continued use means acceptance."]}
          />
        </motion.div>

        {/* ── PRIVACY POLICY ── */}
        <motion.div
          id="privacy"
          className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 mb-8 scroll-mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
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

        {/* Back button */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-black text-sm shadow-lg transition-transform hover:scale-105"
            style={{
              background: "linear-gradient(135deg, hsl(4,85%,40%), hsl(43,100%,50%))",
              boxShadow: "0 8px 30px rgba(220,20,20,0.25)",
            }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsPrivacy;
