import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Plus } from "lucide-react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4">
            <nav
                className={cn(
                    "w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300",
                    "bg-white/90 backdrop-blur-md shadow-sm border border-gray-100/50",
                    scrolled && "shadow-md bg-white/95"
                )}
            >
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="bg-blue-600 text-white p-1 rounded-lg">
                        <Plus size={20} strokeWidth={4} />
                    </div>
                    <span className="text-xl font-bold text-gray-900">Healthier</span>
                </div>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                    <a href="#" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
                        All Pages
                        <span className="text-[10px]">▼</span>
                    </a>
                    <a href="#" className="hover:text-gray-900 transition-colors">Features</a>
                    <a href="#" className="hover:text-gray-900 transition-colors">Company</a>
                </div>

                {/* CTA */}
                <button className="bg-gray-900 hover:bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all transform hover:scale-105">
                    Start Your Free Trial
                </button>
            </nav>
        </div>
    );
}
