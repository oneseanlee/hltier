import { DashboardPreview } from "./DashboardPreview";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function CTASection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.2 1"] // Starts when top of element hits bottom of viewport, ends slightly later
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const yProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);

    return (
        <section className="bg-blue-50/50 py-32 overflow-hidden text-center">
            <div className="max-w-5xl mx-auto px-6 mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                >
                    Turn your growth ideas <br /> into reality today
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-600 mb-10 text-lg"
                >
                    Start your 14-day Pro trial today. No credit card required.
                </motion.p>
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-gray-900 hover:bg-black text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg hover:scale-105"
                >
                    Start Your Free Trial
                </motion.button>
            </div>

            {/* Tablet Mockup Container with Scroll Animation */}
            <div className="max-w-[1000px] mx-auto px-4 relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        scale: scaleProgress,
                        opacity: opacityProgress,
                        y: yProgress
                    }}
                    className="relative"
                >
                    {/* Hand Mockup (Simulated with CSS/Image if available, but for now CSS Frame) */}
                    <div className="bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl border-4 border-gray-800 relative z-10 mx-auto transform -rotate-1">
                        {/* Camera notch */}
                        <div className="absolute top-1/2 -left-1 w-1 h-20 bg-gray-800 rounded-r-lg" />
                        <div className="absolute top-32 -right-1 w-1 h-12 bg-gray-800 rounded-l-lg" />

                        {/* Screen Content - Reusing DashboardPreview but scaled */}
                        <div className="bg-white rounded-[2rem] overflow-hidden h-[600px] w-full relative">
                            {/* We reuse the dashboard component but might need to adjust styles for "tablet" view via overflow/scaling if needed.
                            For this implementation, we'll assume it fits or is a simplified version.
                            To match the image perfectly, we wrap it to cut off bottom if strictly needed, but let's show full dashboard.*/}
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="scale-75 origin-top w-[133%] h-[133%]">
                                    <DashboardPreview />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Simulated Hands (Optional - skipping for pure CSS cleanliness unless requested,
                    but the image shows hands holding it. We'll focus on the device frame as "Hands" are complex to draw in CSS) */}
                </motion.div>
            </div>
        </section>
    );
}
