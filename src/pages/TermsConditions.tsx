import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import PolicyLayout, { Clause } from "@/components/PolicyLayout";

const TermsConditions = () => (
  <PolicyLayout title="Terms & Conditions">
    <motion.div
      className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 mb-8"
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
        title="3. User Responsibilities"
        items={[
          "• No illegal or fraudulent usage.",
          "• No attempts to hack or disrupt services.",
        ]}
      />
      <Clause
        index={3}
        title="4. Intellectual Property"
        items={["• All branding and content belong to Food Man."]}
      />
      <Clause
        index={4}
        title="5. Limitation of Liability"
        items={[
          "• Not responsible for delays due to external factors.",
          "• Customers must check ingredients for allergies.",
        ]}
      />
      <Clause
        index={5}
        title="6. Changes to Terms"
        items={["• We may update terms anytime. Continued use means acceptance."]}
      />
    </motion.div>
  </PolicyLayout>
);

export default TermsConditions;
