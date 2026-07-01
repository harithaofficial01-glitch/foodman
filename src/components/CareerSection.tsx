import { motion } from "framer-motion";
import { Briefcase, Phone, Users } from "lucide-react";

const CareerSection = () => {
  return (
    <section className="py-24 bg-[#fafafa] relative overflow-hidden">
      {/* Top accent stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5"
        style={{ background: "linear-gradient(90deg, hsl(4,85%,40%), hsl(43,100%,50%), hsl(4,85%,40%))" }}
      />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag inline-block mb-4">Careers</span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
              Join the{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, hsl(43,100%,50%), hsl(43,100%,60%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Food Man
              </span>{" "}
              Team!
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We are expanding and looking for energetic individuals to join our delivery fleet.
            </p>
          </motion.div>

          <motion.div
            className="mt-12 p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(4,85%,96%), white)",
              border: "1px solid rgba(220, 20, 20, 0.1)",
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-yellow-400 rounded-full opacity-10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-red-600 rounded-full opacity-10 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-red-100 flex items-center justify-center mb-6 shadow-inner">
                <Users className="w-10 h-10 text-red-600" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black text-foreground mb-3">
                200+ Vacancies Available
              </h3>
              <p className="text-xl font-bold text-red-600 mb-8 uppercase tracking-wide">
                For Rider Jobs
              </p>

              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full justify-center">
                <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100 w-full md:w-auto">
                  <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-0.5">Position</div>
                    <div className="text-lg font-black text-foreground">Delivery Rider</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100 w-full md:w-auto">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-0.5">Contact Team</div>
                    <a href="tel:+919384133424" className="text-lg font-black text-foreground hover:text-red-600 transition-colors">
                      +91 93841 33424
                    </a>
                  </div>
                </div>
              </div>

              <motion.a
                href="tel:+919384133424"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-black text-lg shadow-lg"
                style={{
                  background: "linear-gradient(135deg, hsl(4,85%,40%), hsl(43,100%,50%))",
                  boxShadow: "0 8px 30px rgba(220, 20, 20, 0.3)",
                }}
              >
                <Phone className="w-5 h-5" />
                Call Now to Apply
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
