import { motion } from "framer-motion";
import { Home } from "lucide-react";

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-background">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center"
    >
      <div className="text-9xl font-black text-primary mb-4">404</div>
      <h1 className="text-3xl font-bold text-foreground mb-2">Page Not Found</h1>
      <p className="text-muted-foreground mb-8">
        Oops! This page doesn't exist. Let's get you back to the tea!
      </p>
      <a
        href="/"
        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
      >
        <Home className="w-5 h-5" />
        Back to Home
      </a>
    </motion.div>
  </div>
);

export default NotFound;
