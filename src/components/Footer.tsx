import { Facebook, Linkedin, Pin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#111111] py-24 text-gray-400 text-sm rounded-t-[50px]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Top Grid: Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-12 mb-24 border-b border-gray-800/50 pb-20">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-5">
                        <h4 className="font-bold text-white mb-1">Get Started</h4>
                        <a href="#" className="hover:text-white transition-colors">Terms & privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Changelog</a>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-5">
                        <h4 className="font-bold text-white mb-1">Get Started</h4>
                        <a href="#" className="hover:text-white transition-colors">Features</a>
                        <a href="#" className="hover:text-white transition-colors">Pricing</a>
                        <a href="#" className="hover:text-white transition-colors">Company</a>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-5">
                        <h4 className="font-bold text-white mb-1">Get Started</h4>
                        <a href="#" className="hover:text-white transition-colors">Blog</a>
                        <a href="#" className="hover:text-white transition-colors">Blog Details</a>
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col gap-5">
                        <h4 className="font-bold text-white mb-1">Get Started</h4>
                        <a href="#" className="hover:text-white transition-colors">Careers</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                        <a href="#" className="hover:text-white transition-colors">FAQs</a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">

                    {/* Left Side Group */}
                    <div className="flex flex-col gap-16 max-w-2xl">
                        {/* Who we are + Description */}
                        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
                            <h4 className="font-bold text-white whitespace-nowrap pt-1">Who we are</h4>
                            <p className="leading-relaxed text-gray-400 max-w-md text-[15px]">
                                Ada is an <span className="text-[#D4AF37]">AI customer service company</span> on a mission to make customer service extraordinary for everyone
                            </p>
                        </div>

                        {/* Logo */}
                        <div className="flex items-center gap-6">
                            <div className="relative w-16 h-16 shrink-0">
                                {/* Logo Icon */}
                                <svg width="100%" height="100%" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30 0C13.4315 0 0 13.4315 0 30H15C15 21.7157 21.7157 15 30 15V0Z" fill="#3B82F6" />
                                    <path d="M0 30C0 46.5685 13.4315 60 30 60V45C21.7157 45 15 38.2843 15 30H0Z" fill="#3B82F6" />
                                    <path d="M30 60C46.5685 60 60 46.5685 60 30H45C45 38.2843 38.2843 45 30 45V60Z" fill="#3B82F6" />
                                    <rect x="30" y="15" width="15" height="15" fill="#3B82F6" />
                                </svg>
                            </div>
                            <span className="text-6xl font-bold text-white tracking-tight">Healthier</span>
                        </div>
                    </div>

                    {/* Right Side Group */}
                    <div className="flex flex-col justify-between gap-12 lg:w-auto w-full max-w-lg">
                        {/* Newsletter */}
                        <div>
                            <div className="flex justify-between items-end mb-4">
                                <h4 className="font-bold text-white">Newsletter</h4>
                                <span className="text-xs text-gray-400 font-medium">Stay up to date</span>
                            </div>

                            <div className="bg-[#1A1A1A] rounded-full p-2 pl-6 flex items-center border border-gray-800 focus-within:border-gray-600 transition-colors w-full">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="bg-transparent border-none focus:ring-0 text-white placeholder-gray-500 flex-1 outline-none text-sm py-2 min-w-0"
                                />
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-xs font-bold transition-colors whitespace-nowrap ml-2">
                                    Start Your Free Trial &gt;
                                </button>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="flex justify-between items-center">
                            <h4 className="font-bold text-white">Social Handle</h4>
                            <div className="flex gap-3">
                                <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-gray-800 transition-colors text-white group">
                                    <Facebook size={18} className="fill-current" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-gray-800 transition-colors text-white group">
                                    <Pin size={18} className="fill-current" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-gray-800 transition-colors text-white group">
                                    <Linkedin size={18} className="fill-current" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
