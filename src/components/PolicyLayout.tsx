import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

interface ClauseProps {
  title: string;
  items: (string | ReactNode)[];
  index: number;
  id?: string;
}

export const Clause = ({ title, items, index, id }: ClauseProps) => (
  <motion.div
    id={id}
    custom={index}
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="mb-6 scroll-mt-28"
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

interface PolicyLayoutProps {
  title: string;
  children: ReactNode;
}

const PolicyLayout = ({ title, children }: PolicyLayoutProps) => (
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
        <h1 className="text-white font-black text-lg tracking-wide">{title}</h1>
        <div className="w-28" />
      </div>
    </div>

    {/* Content */}
    <div className="container mx-auto px-6 lg:px-12 py-16 max-w-4xl">
      {children}

      {/* Back button */}
      <div className="text-center mt-4">
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

export default PolicyLayout;
