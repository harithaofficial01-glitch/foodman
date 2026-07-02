import { motion } from "framer-motion";
import { Truck } from "lucide-react";
import PolicyLayout, { Clause } from "@/components/PolicyLayout";

const DeliveryPolicy = () => (
  <PolicyLayout title="Delivery Policy">
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
          <Truck className="w-5 h-5" style={{ color: "hsl(43,100%,40%)" }} />
        </div>
        <h2 className="text-xl font-black text-foreground tracking-wide uppercase">
          Delivery Policy
        </h2>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-8">
        At <strong>Food Man – Thambi Oru Tea</strong>, we aim to deliver your orders fresh, hot,
        and on time. Please review our delivery terms below.
      </p>

      <Clause
        index={0}
        title="1. Delivery Area"
        items={[
          "• We currently deliver within Erode, Tamil Nadu.",
          "• Delivery availability is subject to your location and service coverage.",
        ]}
      />
      <Clause
        index={1}
        title="2. Delivery Time"
        items={[
          "• Estimated delivery time is shown at the time of order placement.",
          "• Actual delivery time may vary due to traffic, weather, or high demand.",
          "• We are not liable for delays caused by external factors.",
        ]}
      />
      <Clause
        index={2}
        title="3. Customer Responsibilities"
        items={[
          "• Provide accurate and complete delivery address.",
          "• Ensure you or someone is available to receive the order.",
          "• Keep your phone reachable during delivery.",
        ]}
      />
      <Clause
        index={3}
        title="4. Failed Delivery"
        items={[
          "• If delivery fails due to incorrect address or unavailability, the order will not be eligible for a refund.",
          "• Re-delivery may be attempted at the customer's cost.",
        ]}
      />
      <Clause
        index={4}
        title="5. Delivery Charges"
        items={[
          "• Delivery charges (if any) will be displayed before order confirmation.",
          "• Charges may vary based on distance and order value.",
        ]}
      />
      <Clause
        index={5}
        title="6. Order Tracking"
        items={[
          "• You will receive updates on your order status via the app.",
          "• Contact us at 0424-7167303 for real-time delivery queries.",
        ]}
      />
    </motion.div>
  </PolicyLayout>
);

export default DeliveryPolicy;
