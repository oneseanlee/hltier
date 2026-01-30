
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Check } from 'lucide-react';
import { CTASection } from '../components/CTASection';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export function Company() {
    const [width, setWidth] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [logosWidth, setLogosWidth] = useState(0);
    const logosCarouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
        if (logosCarouselRef.current) {
            setLogosWidth(logosCarouselRef.current.scrollWidth - logosCarouselRef.current.offsetWidth);
        }
    }, []);

    const teamImages = [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-brand-500 to-brand-500/70 pt-40 pb-32 text-center text-white rounded-b-[50px] mb-20">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 tracking-tight">Company</h1>
                </div>
            </section>

            {/* Integration & Stats Section */}
            <section className="max-w-7xl mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-5xl font-bold leading-tight mb-8">
                            We integrate with labs, pharmacies, billing systems.
                        </h2>
                    </div>
                    <div className="space-y-16">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Automate claim generation, coding suggestions, and billing submissions to reduce denials.</h3>
                            <p className="text-gray-600 leading-relaxed">
                                The healthcare sector is undergoing a digital transformation with the adoption of telemedicine, wearable technology, and AI-driven diagnostics. SaaS platforms in this space are improving patient management and virtual consultations, addressing long-standing challenges in healthcare delivery.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Automate claim generation, coding suggestions</h3>
                            <p className="text-gray-600 leading-relaxed">
                                The healthcare sector is undergoing a digital transformation with the adoption of telemedicine, wearable technology, and AI-driven diagnostics. SaaS platforms in this space are improving patient management and virtual consultations.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-12">
                            <div>
                                <p className="text-sm text-gray-500 mb-2">Trusted by Healthcare</p>
                                <p className="text-6xl font-bold tracking-tight">252K</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 mb-2">Clinic Trusted</p>
                                <p className="text-6xl font-bold tracking-tight">68M</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 mb-2">Healthcare Approved</p>
                                <p className="text-6xl font-bold tracking-tight">1.2B</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team/Life Images Section (Carousel) */}
            <section className="max-w-7xl mx-auto px-6 mb-32 overflow-hidden">
                <motion.div ref={carouselRef} className="cursor-grab active:cursor-grabbing">
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="flex gap-6"
                    >
                        {teamImages.map((src, index) => (
                            <motion.div key={index} className="min-w-[400px] h-[400px] rounded-[40px] overflow-hidden pointer-events-none">
                                <img src={src} alt={`Team ${index + 1}`} className="w-full h-full object-cover" />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* Logos Section */}
            <section className="max-w-7xl mx-auto px-6 mb-32 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
                <p className="text-xl font-medium max-w-sm shrink-0">Over 20,000 medical & clinic use Healthier</p>

                <div className="flex-1 overflow-hidden w-full" ref={logosCarouselRef}>
                    <motion.div
                        className="cursor-grab active:cursor-grabbing flex gap-12 items-center"
                        drag="x"
                        dragConstraints={{ right: 0, left: -logosWidth }}
                        whileTap={{ cursor: "grabbing" }}
                    >

                        {/* Duplicated logos to create scrolling length */}
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex gap-12 opacity-60 grayscale hover:grayscale-0 transition-all shrink-0">
                                <span className="text-2xl font-bold flex items-center gap-2"><div className="w-6 h-6 bg-gray-800 rounded"></div> ShifaLink</span>
                                <span className="text-2xl font-bold flex items-center gap-2"><div className="w-6 h-6 bg-gray-800 rounded-full"></div> SwasthalQ</span>
                                <span className="text-2xl font-bold flex items-center gap-2"><div className="w-6 h-6 bg-gray-800 rotate-45"></div> VidaCura</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="max-w-7xl mx-auto px-6 mb-32">
                <h2 className="text-4xl font-bold text-center mb-16">Built for clinicians, designed for impact</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-brand-50 p-10 rounded-[40px]">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            <Check className="text-brand-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Streamline Patient Care</h3>
                        <p className="text-gray-600 text-sm mb-8">Maintain consistency in all systems at all times. Timely updates ensure smooth.</p>
                        <p className="text-xs text-gray-500 leading-relaxed border-t border-brand-100 pt-6">
                            We simplify scheduling, charting, and follow-ups so providers can focus more on care and less on paperwork.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-brand-50 p-10 rounded-[40px]">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            <Check className="text-brand-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">"Effortless Care"</h3>
                        <p className="text-gray-600 text-sm mb-8">Keep all records accurate and in sync across systems. Update promptly.</p>
                        <p className="text-xs text-gray-500 leading-relaxed border-t border-brand-100 pt-6">
                            From digital forms to AI-powered notes, we automate routine tasks to save your team hours every day.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-brand-50 p-10 rounded-[40px]">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            <Check className="text-brand-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Streamline Patient Care</h3>
                        <p className="text-gray-600 text-sm mb-8">Ensure real-time updates across all platforms. Everyone is responsible.</p>
                        <p className="text-xs text-gray-500 leading-relaxed border-t border-brand-100 pt-6">
                            Our platform protects patient data with end-to-end encryption, HIPAA compliance, and secure user access.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="max-w-7xl mx-auto px-6 mb-32">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold">Meet the team<br />behind the magic</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Member 1 */}
                    <div className="group">
                        <div className="bg-brand-100 rounded-[32px] overflow-hidden mb-4 aspect-[4/5]">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" alt="Dr. Jonathan Blake" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                        </div>
                        <h4 className="font-bold text-lg">Dr. Jonathan Blake</h4>
                        <p className="text-gray-500 text-sm">Chief Product Officer</p>
                    </div>

                    {/* Member 2 */}
                    <div className="group">
                        <div className="bg-brand-100 rounded-[32px] overflow-hidden mb-4 aspect-[4/5]">
                            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600" alt="Daniel Hayes" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                        </div>
                        <h4 className="font-bold text-lg">Daniel Hayes</h4>
                        <p className="text-gray-500 text-sm">Product Manager</p>
                    </div>

                    {/* Member 3 */}
                    <div className="group">
                        <div className="bg-brand-100 rounded-[32px] overflow-hidden mb-4 aspect-[4/5]">
                            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600" alt="James Carter" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                        </div>
                        <h4 className="font-bold text-lg">James Carter</h4>
                        <p className="text-gray-500 text-sm">VP of Engineering</p>
                    </div>

                    {/* Info Card - Moved into grid */}
                    <div className="bg-brand-50 p-8 rounded-[32px] flex flex-col justify-center aspect-[4/5]">
                        <h4 className="font-bold text-lg mb-4">Nothing great is made alone</h4>
                        <p className="text-sm text-gray-500 mb-8 leading-relaxed">Reduce costs, scale effortlessly, and make your business come alive.</p>
                        <button className="bg-white px-6 py-3 rounded-full text-sm font-bold shadow-sm hover:shadow transition-shadow w-fit text-brand-500">Learn More</button>
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
        </div>
    );
}
