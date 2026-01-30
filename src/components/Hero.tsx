
import { ChevronRight } from "lucide-react";
import { DashboardPreview } from "./DashboardPreview";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <div className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white">
            {/* Background decoration (simple sky/nature hint) */}
            <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-sky-100/40 to-transparent -z-10" />

            {/* Grass/Nature hint at bottom (optional, using gradient for now) */}
            <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-emerald-50/30 to-transparent -z-10" />

            <div className="max-w-7xl mx-auto px-6 text-center z-10 relative">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight"
                >
                    All-in-One Medical <br className="hidden md:block" />
                    SaaS for Modern Clinics
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Science-backed wellness programs designed to improve <br className="hidden md:block" />
                    your lifestyle. Take the first step now!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-center justify-center gap-4 mb-20"
                >
                    <button className="bg-[hsl(var(--primary))] hover:bg-[hsl(191,100%,38%)] text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg shadow-[hsl(var(--primary))]/20 flex items-center gap-2 hover:gap-3 cursor-pointer">
                        Start Your Free Trial <ChevronRight size={18} />
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <DashboardPreview />
                </motion.div>
            </div>
        </div>
    );
}
