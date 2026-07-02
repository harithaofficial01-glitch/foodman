import { motion } from "framer-motion";
import {
    Briefcase,
    Phone,
    MapPin,
    IndianRupee,
    CheckCircle,
    Users,
    Sparkles,
} from "lucide-react";

const CareerSection = () => {
    const benefits = [
        "Flexible Working Hours",
        "Weekly Incentives",
        "Fuel Allowance",
        "Instant Joining",
    ];

    return (
        <section
            id="careers"
            className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-orange-50 to-white"
        >
            {/* Background Decorations */}

            <motion.div
                className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl"
                style={{ background: "hsla(43,100%,55%,0.18)" }}
                animate={{
                    scale: [1, 1.15, 1],
                    rotate: [0, 180, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                }}
            />

            <motion.div
                className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full blur-3xl"
                style={{ background: "hsla(4,85%,55%,0.18)" }}
                animate={{
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                }}
            />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Sparkles className="w-5 h-5 text-yellow-500" />
                        <span className="section-tag">Careers</span>
                        <Sparkles className="w-5 h-5 text-yellow-500" />
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black mt-6">
                        Join the{" "}
                        <span className="text-yellow-500">Food Man</span>{" "}
                        Team!
                    </h2>

                    <p className="text-gray-500 text-lg mt-5 max-w-2xl mx-auto">
                        Become a Delivery Partner and earn attractive incentives while
                        enjoying flexible work hours and instant joining.
                    </p>
                </motion.div>

                {/* Main Card */}

                <motion.div
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="rounded-[40px] bg-white/90 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.12)] p-8 md:p-14 border border-orange-100"
                >
                    {/* Top Icon */}

                    <motion.div
                        animate={{
                            y: [0, -8, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                        }}
                        className="w-24 h-24 rounded-3xl bg-red-50 flex items-center justify-center mx-auto shadow-lg"
                    >
                        <Users
                            size={46}
                            className="text-red-500"
                        />
                    </motion.div>

                    {/* Vacancy */}

                    <h3 className="text-center text-5xl font-black mt-8">
                        200+
                    </h3>

                    <p className="text-center text-red-500 text-2xl font-bold mt-2">
                        Rider Vacancies Available
                    </p>

                    {/* Cards */}

                    <div className="grid md:grid-cols-2 gap-6 mt-14">
                        {[
                            {
                                icon: (
                                    <Briefcase className="text-yellow-600" />
                                ),
                                title: "Position",
                                value: "Delivery Rider",
                            },
                            {
                                icon: (
                                    <MapPin className="text-red-500" />
                                ),
                                title: "Location",
                                value: "Erode, Tamil Nadu",
                            },
                            {
                                icon: (
                                    <IndianRupee className="text-green-600" />
                                ),
                                title: "Monthly Earnings",
                                value: "₹15,000 - ₹20,000",
                            },
                            {
                                icon: (
                                    <Phone className="text-red-500" />
                                ),
                                title: "Contact Team",
                                value: "+91 93841 33424",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{
                                    y: -6,
                                    scale: 1.02,
                                }}
                                className="bg-white rounded-3xl p-6 shadow-lg border border-orange-100 flex items-center gap-5 transition"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center">
                                    {item.icon}
                                </div>

                                <div>
                                    <p className="text-gray-400 uppercase text-sm font-bold">
                                        {item.title}
                                    </p>

                                    <h4 className="text-xl font-black mt-1">
                                        {item.value}
                                    </h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Benefits */}

                    <div className="grid md:grid-cols-2 gap-4 mt-12">
                        {benefits.map((item) => (
                            <motion.div
                                key={item}
                                whileHover={{
                                    x: 5,
                                }}
                                className="flex items-center gap-3 bg-orange-50 rounded-xl px-5 py-4"
                            >
                                <CheckCircle className="text-green-600 w-5 h-5" />

                                <span className="font-semibold text-gray-700">
                                    {item}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}

                    <motion.div
                        className="flex justify-center mt-14"
                        whileHover={{
                            scale: 1.05,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                    >
                        <a
                            href="tel:+919384133424"
                            className="inline-flex items-center gap-3 rounded-full px-10 py-5 text-white font-black text-xl shadow-2xl"
                            style={{
                                background:
                                    "linear-gradient(90deg,#d62828 0%,#ffb703 100%)",
                            }}
                        >
                            <Phone size={22} />

                            Call Now to Apply
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CareerSection;