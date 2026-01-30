import { motion } from "framer-motion";

export function Insights() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
                >
                    Insights, Ideas & Innovation
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Featured Article (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group cursor-pointer"
                    >
                        <div className="rounded-3xl overflow-hidden mb-6 h-[400px]">
                            <img
                                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070"
                                alt="Doctors analyzing x-ray"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                            Top EMR Features Every Modern Clinic Should Look For
                        </h3>
                        <div className="flex gap-2">
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500 font-medium">Vision</span>
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500 font-medium">Oct 1, 2025</span>
                        </div>
                    </motion.div>

                    {/* List of Articles (Right) */}
                    <div className="flex flex-col gap-8">
                        {/* Article 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="flex gap-6 group cursor-pointer border-b border-gray-100 pb-8 last:border-0"
                        >
                            <div className="w-40 h-32 rounded-2xl overflow-hidden shrink-0">
                                <img
                                    src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80&w=1000"
                                    alt="Doctor with patient"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    5 Ways to Reduce No-Shows with Smart Scheduling Tools
                                </h3>
                                <div className="flex gap-2 mb-2">
                                    <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500 font-medium">Innovation</span>
                                    <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500 font-medium">Dec 1, 2025</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Article 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex gap-6 group cursor-pointer border-b border-gray-100 pb-8 last:border-0"
                        >
                            <div className="w-40 h-32 rounded-2xl overflow-hidden shrink-0">
                                <img
                                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000"
                                    alt="Hands with vaccine"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    Why Data Security Is Vital in Medical SaaS Platforms
                                </h3>
                                <div className="flex gap-2 mb-2">
                                    <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500 font-medium">Growth</span>
                                    <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500 font-medium">Jan 1, 2025</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Article 3 */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex gap-6 group cursor-pointer border-b border-gray-100 pb-8 last:border-0"
                        >
                            <div className="w-40 h-32 rounded-2xl overflow-hidden shrink-0">
                                <img
                                    src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000"
                                    alt="Doctor tablet"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    Choosing the right SaaS plan for your clinic
                                </h3>
                                <div className="flex gap-2 mb-2">
                                    <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500 font-medium">Agility</span>
                                    <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500 font-medium">Feb 1, 2025</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
