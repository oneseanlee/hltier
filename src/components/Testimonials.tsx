import { ShieldCheck, Star, BriefcaseMedical } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
    return (
        <section className="bg-blue-600 py-32 rounded-[3rem] mx-4 md:mx-8 mb-20 text-center relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 leading-tight">
                        It's intuitive, in the to efficient, and has saved to the us countless hours. Our team can focus on what really matters.
                    </h2>

                    <div className="bg-white rounded-full inline-flex items-center gap-4 px-3 py-2 pr-8 mb-24 shadow-lg">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow">
                            <img src="https://i.pravatar.cc/150?u=7" alt="User" />
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-gray-900 text-sm">Sarah Kemp</div>
                            <div className="text-xs text-gray-500">UX Designer</div>
                        </div>
                        <div className="flex gap-1 ml-4 border-l pl-4 border-gray-200">
                            <div className="w-8 h-8 rounded-full overflow-hidden border border-white"><img src="https://i.pravatar.cc/150?u=8" alt="T" /></div>
                            <div className="w-8 h-8 rounded-full overflow-hidden border border-white"><img src="https://i.pravatar.cc/150?u=9" alt="T" /></div>
                            <div className="w-8 h-8 rounded-full overflow-hidden border border-white"><img src="https://i.pravatar.cc/150?u=10" alt="T" /></div>
                            <div className="w-8 h-8 rounded-full overflow-hidden border border-white"><img src="https://i.pravatar.cc/150?u=11" alt="T" /></div>
                        </div>
                    </div>

                    <h3 className="text-white text-lg font-medium mb-12 opacity-90">Trusted by thousands worldwide</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-900">
                        {/* Stat 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-3xl p-8 py-12 shadow-xl"
                        >
                            <div className="flex justify-center mb-6">
                                <ShieldCheck size={32} className="text-blue-600" />
                            </div>
                            <div className="text-5xl font-bold text-gray-900 mb-2">68K</div>
                            <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Trusted by Healthcare</div>
                        </motion.div>

                        {/* Stat 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white rounded-3xl p-8 py-12 shadow-xl"
                        >
                            <div className="flex justify-center mb-6">
                                <Star size={32} className="text-blue-600 fill-blue-600" />
                            </div>
                            <div className="text-5xl font-bold text-gray-900 mb-2">1.2M</div>
                            <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">User satisfaction rate</div>
                        </motion.div>

                        {/* Stat 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-white rounded-3xl p-8 py-12 shadow-xl"
                        >
                            <div className="flex justify-center mb-6">
                                <BriefcaseMedical size={32} className="text-blue-600" />
                            </div>
                            <div className="text-5xl font-bold text-gray-900 mb-2">1200</div>
                            <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">User satisfaction rate</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
