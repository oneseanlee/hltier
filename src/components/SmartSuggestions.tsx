import { Activity, FileText, Calendar, X } from "lucide-react";
import { motion } from "framer-motion";

export function SmartSuggestions() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Smart suggestions
                    </h2>
                    <p className="text-gray-600 mb-12 leading-relaxed">
                        Regular security audits are conducted to ensure the platform adheres to the highest security standards.
                    </p>

                    <div className="space-y-10">
                        <div className="flex gap-6">
                            <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                                <Activity size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Electronic health records</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Consistent audits are undertaken to verify that all security protocols are correctly implemented and up to date.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                                <FileText size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">e-Prescribing</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Internal security audits are carried out often to assess vulnerabilities and maintain robust system defenses.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right mockup */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Background elements (Abstract shapes/colors from image) */}
                    <div className="absolute -inset-10 bg-gradient-to-tr from-purple-200/50 via-pink-200/50 to-orange-200/50 rounded-full blur-3xl opacity-70 -z-10" />

                    {/* Notification Card Mockup */}
                    <div className="relative z-10 bg-white/80 backdrop-blur-xl border border-white/50 p-6 rounded-3xl shadow-2xl max-w-md mx-auto">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-gray-800">Notifications</span>
                                <span className="bg-gray-200 text-gray-600 text-xs py-0.5 px-2 rounded-full font-medium">20</span>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600"><X size={20} /></button>
                        </div>

                        <div className="space-y-6">
                            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Newest</div>

                            {/* Item 1 */}
                            <div className="flex gap-4 p-3 rounded-2xl hover:bg-white/50 transition-colors cursor-pointer group">
                                <div className="shrink-0 w-10 h-10 rounded-full bg-blue-100 overflow-hidden">
                                    <img src="https://i.pravatar.cc/150?u=1" alt="User" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h4 className="text-sm font-bold text-gray-900">New patient: John Alexander Smith</h4>
                                        <div className="w-2 h-2 rounded-full bg-red-400 shrink-0 mt-1.5" />
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">Friday, 4:15 PM • October 24, 2024</p>
                                    <button className="text-xs text-blue-600 font-medium mt-2 hover:underline">See details</button>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="flex gap-4 p-3 rounded-2xl hover:bg-white/50 transition-colors cursor-pointer group">
                                <div className="shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <Calendar size={18} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h4 className="text-sm font-bold text-gray-900">Appointment with Dr. Williams tomorrow at 9:00 AM.</h4>
                                        <div className="w-2 h-2 rounded-full bg-red-400 shrink-0 mt-1.5" />
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">Friday, 4:15 PM • October 24, 2024</p>
                                    <button className="text-xs text-blue-600 font-medium mt-2 hover:underline">See details</button>
                                </div>
                            </div>

                            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider pt-2">Yesterday</div>

                            {/* Item 3 */}
                            <div className="flex gap-4 p-3 rounded-2xl hover:bg-white/50 transition-colors cursor-pointer group">
                                <div className="shrink-0 w-10 h-10 rounded-full bg-orange-100 overflow-hidden">
                                    <img src="https://i.pravatar.cc/150?u=2" alt="User" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h4 className="text-sm font-bold text-gray-900">New patient: Jeffrey Epstein</h4>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">Friday, 4:15 PM • October 24, 2024</p>
                                    <button className="text-xs text-blue-600 font-medium mt-2 hover:underline">See details</button>
                                </div>
                            </div>

                            {/* Item 4 */}
                            <div className="flex gap-4 p-3 rounded-2xl hover:bg-white/50 transition-colors cursor-pointer group">
                                <div className="shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <Calendar size={18} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h4 className="text-sm font-bold text-gray-900">Appointment with Dr. Danny tomorrow at 9:00 AM.</h4>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">Friday, 4:15 PM • October 24, 2024</p>
                                    <button className="text-xs text-blue-600 font-medium mt-2 hover:underline">See details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
