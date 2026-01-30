import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Menu Data
    const menuItems = {
        "All Pages": {
            columns: [
                {
                    links: ["Home", "Home 02", "Home 03"]
                },
                {
                    links: [
                        { name: "Company", highlight: true },
                        "Features",
                        "Pricing V1",
                        "Pricing V2",
                        "Pricing V3"
                    ]
                },
                {
                    links: ["Blog", "Blog Details", "Career", "Integration", "Changelog"]
                },
                {
                    links: ["Faq", "Contact", "Reviews", "Terms & Conditions", "404"]
                }
            ]
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4">
            <nav
                className={cn(
                    "w-full max-w-6xl flex items-center justify-between px-6 py-4 rounded-full transition-all duration-300 relative",
                    "bg-white backdrop-blur-md shadow-sm border border-gray-100",
                    scrolled && "shadow-md bg-white/95"
                )}
                onMouseLeave={() => setActiveMenu(null)}
            >
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="Best365Labs" className="h-8" />
                </Link>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-600">
                    <div
                        className="relative group h-full py-2"
                        onMouseEnter={() => setActiveMenu("All Pages")}
                    >
                        <button className="flex items-center gap-1 hover:text-gray-900 transition-colors focus:outline-none">
                            All Pages
                            <ChevronDown size={14} className={cn("transition-transform duration-200", activeMenu === "All Pages" ? "rotate-180" : "")} />
                        </button>
                    </div>
                    <a href="#" className="hover:text-gray-900 transition-colors">Features</a>
                    <Link to="/company" className="hover:text-gray-900 transition-colors">Company</Link>
                </div>

                {/* CTA */}
                <button className="bg-[#1A1A1A] hover:bg-black text-white px-6 py-3 rounded-full text-sm font-semibold transition-all transform hover:scale-105 shadow-lg shadow-gray-200">
                    Start Your Free Trial
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                    {activeMenu === "All Pages" && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 mt-4 bg-white rounded-3xl shadow-xl border border-gray-100 p-8 z-50 w-[700px] mx-auto"
                            onMouseEnter={() => setActiveMenu("All Pages")}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <div className="grid grid-cols-4 gap-8">
                                {menuItems["All Pages"].columns.map((col, idx) => (
                                    <div key={idx} className="flex flex-col gap-4">
                                        {col.links.map((link, linkIdx) => {
                                            const name = typeof link === 'string' ? link : link.name;
                                            const isHighlight = typeof link !== 'string' && link.highlight;

                                            // Determine path
                                            const path = name === "Home" || name.startsWith("Home") ? "/" :
                                                name === "Company" ? "/company" : "#";

                                            return (
                                                <Link
                                                    key={linkIdx}
                                                    to={path}
                                                    className={cn(
                                                        "text-[15px] transition-colors hover:text-brand-500 block",
                                                        isHighlight ? "text-brand-500 font-semibold" : "text-gray-500 font-medium"
                                                    )}
                                                >
                                                    {name}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
}
