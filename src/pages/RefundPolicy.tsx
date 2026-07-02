import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import PolicyLayout, { Clause } from "@/components/PolicyLayout";

const RefundPolicy = () => (
  <PolicyLayout title="Refund Policy">
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
          <RotateCcw className="w-5 h-5" style={{ color: "hsl(4,85%,40%)" }} />
        </div>
        <h2 className="text-xl font-black text-foreground tracking-wide uppercase">
          Refund Policy
        </h2>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-8">
        At <strong>Food Man – Thambi Oru Tea</strong>, we strive to deliver quality. Please read
        our refund and cancellation terms carefully.
      </p>

      <Clause
        index={0}
        title="1. Eligible Refund Conditions"
        items={[
          "Refunds are applicable only if:",
          "• Wrong item delivered",
          "• Damaged or poor-quality product received",
        ]}
      />
      <Clause
        index={1}
        title="2. Non-Refundable Scenarios"
        items={[
          "• Failed delivery due to incorrect address or contact details provided by the customer.",
          "• Orders cancelled after preparation has started.",
          "• Change of mind after order placement.",
        ]}
      />
      <Clause
        index={2}
        title="3. Refund Processing"
        items={[
          "• Approved refunds will be processed within 5–7 business days.",
          "• Refunds will be credited to the original payment method.",
        ]}
      />
      <Clause
        index={3}
        title="4. Cancellation Policy"
        items={[
          "• Orders can be cancelled only before preparation begins.",
          "• Once preparation starts, cancellation is not accepted.",
          "• To request a cancellation, contact us immediately at 0424-7167303.",
        ]}
      />
      <Clause
        index={4}
        title="5. How to Raise a Refund Request"
        items={[
          "• Contact our support team via email or phone within 24 hours of delivery.",
          "• Provide your order ID and a description / photo of the issue.",
        ]}
      />
    </motion.div>
  </PolicyLayout>
);

export default RefundPolicy;
