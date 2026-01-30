
import { MessageSquare, Box } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
    return (
        <section className="py-20 bg-white">
            {/* Trusted By Lines */}
            <div className="max-w-7xl mx-auto px-6 mb-32 text-center overflow-hidden">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-sm text-gray-500 mb-12 font-medium"
                >
                    Trusted by 49000+ brands and individuals worldwide
                </motion.p>

                <div className="relative">
                    {/* Fade Edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

                    <motion.div
                        className="flex gap-16 items-center w-max"
                        animate={{ x: "-50%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30,
                        }}
                    >
                        {/* Duplicate lists for seamless loop */}
                        {[...Array(4)].map((_, groupIndex) => (
                            <div key={groupIndex} className="flex gap-16 shrink-0">
                                <span className="text-xl font-bold flex items-center gap-3 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"><div className="w-8 h-8 bg-gray-300 rounded-full" /> Indagi</span>
                                <span className="text-xl font-bold flex items-center gap-3 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"><div className="w-8 h-8 bg-gray-300 rounded-full" /> VitaSure</span>
                                <span className="text-xl font-bold flex items-center gap-3 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"><div className="w-8 h-8 bg-gray-300 rounded-full" /> HeilenTech</span>
                                <span className="text-xl font-bold flex items-center gap-3 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"><div className="w-8 h-8 bg-gray-300 rounded-full" /> ShifaLink</span>
                                <span className="text-xl font-bold flex items-center gap-3 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"><div className="w-8 h-8 bg-gray-300 rounded-full" /> Swasti</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
                >
                    Features that work for you
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                    {/* Column 1: Automated Reminders */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#EFF6FF] rounded-[32px] p-10 flex flex-col justify-between h-full min-h-[450px] hover:shadow-lg transition-shadow border border-blue-50/50"
                    >
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-200/50">
                            <MessageSquare size={24} fill="currentColor" className="text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Automated reminders</h3>
                            <p className="text-gray-500 leading-relaxed text-[15px] font-medium">
                                Reduce no-shows with email, and phone reminders sent to patients.
                            </p>
                        </div>
                    </motion.div>

                    {/* Column 2: Stacked */}
                    <div className="flex flex-col gap-6 h-full">
                        {/* Predictive Analytics */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-[#EFF6FF] rounded-[32px] p-10 flex flex-col justify-center text-left hover:shadow-lg transition-shadow border border-blue-50/50 h-[200px]"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Predictive analytics</h3>
                            <p className="text-gray-500 leading-relaxed text-[15px] font-medium">
                                Identify at-risk patients and forecast outcomes based on historical health data.
                            </p>
                        </motion.div>

                        {/* Add New Schedule Mockup */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-[#EFF6FF] rounded-[32px] p-6 flex-1 hover:shadow-lg transition-shadow overflow-hidden relative border border-blue-50/50 min-h-[225px]"
                        >
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 w-full h-full max-w-[320px] mx-auto">
                                <div className="flex justify-between items-center mb-5 pb-3 border-b border-gray-50">
                                    <h4 className="font-bold text-gray-900 text-sm">Add new schedule</h4>
                                    <button className="text-gray-400 hover:text-gray-600 text-lg leading-none">&times;</button>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider mb-2 block">Services</label>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="bg-white text-blue-600 text-xs px-3 py-1.5 rounded-full border border-blue-200 font-semibold shadow-sm">Check Up</span>
                                            <span className="text-gray-500 text-xs px-3 py-1.5 border border-gray-100 rounded-full bg-gray-50/50">Monitoring</span>
                                            <span className="text-gray-500 text-xs px-3 py-1.5 border border-gray-100 rounded-full bg-gray-50/50">Driver</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider mb-2 block">Title</label>
                                        <div className="text-xs text-gray-700 bg-white p-2.5 rounded-lg border border-gray-100 font-medium">Monitoring Medicine Checkups</div>
                                    </div>
                                    <div className="pt-2 flex items-center gap-3">
                                        <div className="w-7 h-7 rounded-full bg-pink-100 flex items-center justify-center text-[10px] font-bold text-pink-600">J</div>
                                        <div className="flex-1">
                                            <p className="text-xs font-semibold text-gray-900">Dr. John Smith</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Column 3: Inventory Management */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-[#EFF6FF] rounded-[32px] p-10 flex flex-col justify-between h-full min-h-[450px] hover:shadow-lg transition-shadow border border-blue-50/50"
                    >
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-200/50">
                            <Box size={24} className="text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Inventory management</h3>
                            <p className="text-gray-500 leading-relaxed text-[15px] font-medium">
                                Track medical supplies and equipment in real-time to maintain adequate.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section >
    );
}
