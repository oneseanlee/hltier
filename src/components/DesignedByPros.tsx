import { User, Users } from "lucide-react";
import { motion } from "framer-motion";

export function DesignedByPros() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20"
                >
                    Designed by health professionals
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Card 1: Practice Analytics */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-brand-50/50 rounded-3xl p-12 text-center flex flex-col items-center hover:shadow-lg transition-shadow"
                    >
                        {/* Visual Illustration */}
                        <div className="mb-12 h-48 w-full flex items-center justify-center relative">
                            {/* Simplified CSS representation of the connecting nodes */}
                            <div className="relative flex items-center gap-4">
                                {/* Dashed line */}
                                <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-brand-100 -z-10" />

                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 border border-white shadow-sm"><User size={20} /></div>
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 border border-white shadow-sm"><User size={20} /></div>
                                <div className="w-20 h-20 rounded-full bg-gradient-to-b from-brand-500 to-brand-600 flex items-center justify-center text-white shadow-xl shadow-brand-100 z-10 scale-125">
                                    <User size={32} />
                                    {/* Stars */}
                                    <div className="absolute -top-8 flex gap-1">
                                        <span className="text-yellow-400 text-xs">★</span>
                                        <span className="text-yellow-400 text-sm mb-1">★</span>
                                        <span className="text-yellow-400 text-xs">★</span>
                                    </div>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 border border-white shadow-sm"><User size={20} /></div>
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 border border-white shadow-sm"><User size={20} /></div>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Practice analytics dashboard</h3>
                        <p className="text-gray-600 mb-8 max-w-sm leading-relaxed text-sm">
                            Generate and export custom reports for audits, performance reviews, or financial analysis.
                        </p>
                        <button className="bg-gray-900 hover:bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium transition-transform hover:scale-105">
                            Learn More
                        </button>
                    </motion.div>

                    {/* Card 2: Offline Mode */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-brand-50/50 rounded-3xl p-12 text-center flex flex-col items-center hover:shadow-lg transition-shadow"
                    >
                        {/* Visual Illustration */}
                        <div className="mb-12 h-48 w-full flex items-center justify-center relative pt-8">
                            {/* Tree structure lines */}
                            <div className="relative">
                                {/* Main Node */}
                                <div className="w-20 h-20 rounded-full bg-gradient-to-b from-brand-500 to-brand-600 flex items-center justify-center text-white shadow-xl shadow-brand-100 mx-auto relative z-10 mb-8">
                                    <Users size={32} />
                                </div>

                                {/* Horizontal bar */}
                                <div className="h-16 w-64 border-b-2 border-l-2 border-r-2 border-brand-500/50 rounded-b-3xl absolute top-10 left-1/2 -translate-x-1/2" />
                                {/* Vertical connections */}
                                <div className="absolute top-10 left-1/2 -translate-x-1/2 h-8 w-0.5 bg-brand-500/50" />
                                <div className="absolute top-26 left-[calc(50%-6rem)] h-4 w-0.5 bg-brand-500/50" />
                                <div className="absolute top-26 left-[calc(50%+6rem)] h-4 w-0.5 bg-brand-500/50" />
                                <div className="absolute top-26 left-[calc(50%-2rem)] h-4 w-0.5 bg-brand-500/50" />
                                <div className="absolute top-26 left-[calc(50%+2rem)] h-4 w-0.5 bg-brand-500/50" />

                                {/* Sub Nodes */}
                                <div className="flex justify-between w-80 mt-8 relative z-10">
                                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white"><img src="https://i.pravatar.cc/150?u=3" alt="U" /></div>
                                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white"><img src="https://i.pravatar.cc/150?u=4" alt="U" /></div>
                                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white"><img src="https://i.pravatar.cc/150?u=5" alt="U" /></div>
                                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white"><img src="https://i.pravatar.cc/150?u=6" alt="U" /></div>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Offline mode for remote access</h3>
                        <p className="text-gray-600 mb-8 max-w-sm leading-relaxed text-sm">
                            Track revenue, appointment trends, patient flow, and system usage with interactive visualizations.
                        </p>
                        <button className="bg-gray-900 hover:bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium transition-transform hover:scale-105">
                            Learn More
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
