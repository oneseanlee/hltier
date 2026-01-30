import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTASection } from "../components/CTASection";

export default function Home2() {
    return (
        <div className="min-h-screen bg-[#F0F9FF] font-sans text-gray-900">
            <Navbar />

            <main className="pt-32 pb-20">
                {/* Hero Section */}
                <section className="text-center max-w-4xl mx-auto px-6 mb-20">
                    <span className="bg-white px-4 py-1.5 rounded-full text-sm font-medium shadow-sm mb-8 inline-block">
                        New Feature: AI Charting
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                        Next-Gen Software for<br />Healthcare Efficiency
                    </h1>
                    <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        Science-backed wellness programs designed to improve your lifestyle. Take the first step now!
                    </p>
                    <button className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-black transition-colors">
                        Start Your Free Trial
                    </button>
                </section>

                {/* Dashboard Preview Section */}
                <section className="max-w-7xl mx-auto px-6 mb-32">
                    {/* Logo Carousel */}
                    <div className="w-full overflow-hidden mb-16 opacity-50 grayscale">
                        <div className="relative flex items-center">
                            <div className="flex animate-scroll whitespace-nowrap">
                                {[...Array(2)].map((_, i) => (
                                    <div key={i} className="flex gap-16 mx-8">
                                        <span className="text-xl font-bold flex items-center gap-2">ShifaLink</span>
                                        <span className="text-xl font-bold flex items-center gap-2">SwasthalQ</span>
                                        <span className="text-xl font-bold flex items-center gap-2">VidaCura</span>
                                        <span className="text-xl font-bold flex items-center gap-2">Zindagi</span>
                                        <span className="text-xl font-bold flex items-center gap-2">ShifaLink</span>
                                        <span className="text-xl font-bold flex items-center gap-2">SwasthalQ</span>
                                        <span className="text-xl font-bold flex items-center gap-2">VidaCura</span>
                                        <span className="text-xl font-bold flex items-center gap-2">Zindagi</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <style>{`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-scroll {
                        animation: scroll 30s linear infinite;
                    }
                `}</style>

                    {/* Dashboard Image */}
                    <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-[8px] border-white bg-white">
                        <div className="aspect-[16/10] bg-gray-100 flex items-center justify-center">
                            <p className="text-gray-400">Dashboard Preview Image</p>
                            {/* Placeholder - replace with actual image */}
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000" alt="Dashboard Preview" className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                    </div>
                </section>
                {/* Features Section */}
                <section className="max-w-7xl mx-auto px-6 mb-32">
                    <h2 className="text-4xl font-bold text-center mb-16">Intuitive tools that scale with you</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-[#EFF6FF] p-8 rounded-[32px] hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-100 via-blue-50 to-white">
                            <div className="mb-8">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Smart Scheduling</span>
                                <h3 className="text-xl font-bold text-gray-900 leading-tight">Verify insurance faster, reduce claim denials</h3>
                            </div>
                            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100/50">
                                <h4 className="font-bold text-lg mb-6 leading-tight">Patient transfer to another hospital</h4>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-5 h-5 mt-0.5 text-gray-400">
                                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 font-medium">Date</p>
                                            <p className="text-sm font-semibold text-gray-900">February 6, 2025</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-5 h-5 mt-0.5 text-gray-400">
                                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 font-medium">Time</p>
                                            <p className="text-sm font-semibold text-gray-900">12:00 AM - 01:10 PM</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-5 h-5 mt-0.5 text-gray-400">
                                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 font-medium">Task</p>
                                            <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded font-medium mt-1">Transfer</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-5 h-5 mt-0.5 text-gray-400">
                                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 font-medium">Assignee</p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px] font-bold">J</div>
                                                <p className="text-sm font-semibold text-gray-900">Jonathan</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[10px] text-gray-400 mt-6 leading-relaxed border-t border-gray-100 pt-4">
                                    We reserve the right to suspend or terminate accounts violating our terms...
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-[#EFF6FF] p-8 rounded-[32px] hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-100 via-blue-50 to-white">
                            <div className="mb-8">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Secure Telehealth</span>
                                <h3 className="text-xl font-bold text-gray-900 leading-tight">Send prescriptions directly to pharmacies, reduce errors</h3>
                            </div>
                            <div className="space-y-4">
                                {/* Patients Card */}
                                <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100/50 relative overflow-hidden">
                                    <div className="flex justify-between items-start mb-2">
                                        <p className="text-sm font-bold text-gray-900">Patients</p>
                                        <div className="text-gray-400 text-xs">↗</div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-16 h-16">
                                            <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                                                <path className="text-gray-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                                <path className="text-blue-500" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                            </svg>
                                            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-gray-500">75%</span>
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold text-gray-900">200</p>
                                            <div className="flex gap-2 text-[10px] mt-1">
                                                <span className="text-blue-500">75% available</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Appointments Card */}
                                <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100/50">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-2">
                                            <p className="text-sm font-bold text-gray-900">Appointments</p>
                                            <span className="bg-blue-100 text-blue-600 text-[10px] px-1.5 py-0.5 rounded font-bold">+ 20%</span>
                                        </div>
                                        <div className="text-gray-400 text-xs">↗</div>
                                    </div>
                                    <div className="flex items-end justify-between">
                                        {/* Simple CSS Line Chart */}
                                        <div className="flex items-end gap-1 h-12 w-24">
                                            <div className="w-full bg-blue-100/50 rounded-t-sm h-[20%]"></div>
                                            <div className="w-full bg-blue-100/50 rounded-t-sm h-[40%]"></div>
                                            <div className="w-full bg-blue-100/50 rounded-t-sm h-[30%]"></div>
                                            <div className="w-full bg-blue-100/50 rounded-t-sm h-[60%]"></div>
                                            <div className="w-full bg-blue-500 rounded-t-sm h-[80%]"></div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] text-gray-400">Appointments have<br />increased by <span className="text-blue-500 font-medium">20%</span></p>
                                            <p className="text-3xl font-bold text-gray-900 mt-1">160</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-[#EFF6FF] p-8 rounded-[32px] hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-100 via-blue-50 to-white">
                            <div className="mb-8">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">AI-Powered Charting</span>
                                <h3 className="text-xl font-bold text-gray-900 leading-tight">Automate claim generation, coding suggestions</h3>
                            </div>
                            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100/50 min-h-[300px]">
                                {/* Search Bar */}
                                <div className="bg-gray-50 rounded-full px-4 py-2.5 flex items-center gap-2 mb-4 border border-gray-100">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    <span className="text-sm text-gray-800">John</span>
                                    <span className="w-px h-4 bg-gray-400 animate-pulse"></span>
                                </div>
                                {/* Tabs */}
                                <div className="flex gap-2 mb-6 overflow-hidden">
                                    <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap">Patients</span>
                                    <span className="bg-white border border-gray-100 text-gray-400 text-[10px] font-medium px-2 py-1 rounded-full whitespace-nowrap">Staff</span>
                                    <span className="bg-white border border-gray-100 text-gray-400 text-[10px] font-medium px-2 py-1 rounded-full whitespace-nowrap">Appointments</span>
                                </div>
                                {/* Results */}
                                <p className="text-xs text-gray-400 font-medium mb-3">Results</p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden"><img src="https://i.pravatar.cc/100?img=11" alt="" className="w-full h-full object-cover" /></div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-900">John Alexander Smith</p>
                                            <p className="text-[10px] text-gray-400">ID292205548</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden"><img src="https://i.pravatar.cc/100?img=12" alt="" className="w-full h-full object-cover" /></div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-900">John Harrison Williams</p>
                                            <p className="text-[10px] text-gray-400">ID102138520</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden"><img src="https://i.pravatar.cc/100?img=33" alt="" className="w-full h-full object-cover" /></div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-900">John Benjamin Taylor</p>
                                            <p className="text-[10px] text-gray-400">ID523943855</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Impact Section */}
                <section className="max-w-7xl mx-auto px-6 mb-32">
                    <h2 className="text-4xl font-bold text-center mb-16">See the impact. Feel the difference</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left: Visual */}
                        <div className="relative h-[600px] rounded-[40px] overflow-hidden group shadow-2xl">
                            {/* Background Image - Nature/Green */}
                            <img src="https://images.unsplash.com/photo-1518531933037-9a82bf552b6d?auto=format&fit=crop&q=80&w=1000" alt="Nature Background" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/20"></div>

                            {/* Floating Modal Image */}
                            <img
                                src="/assets/impact-modal.png"
                                alt="Add new schedule"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] shadow-2xl rounded-3xl z-10"
                            />
                        </div>

                        {/* Right: Content/Accordion */}
                        <div className="space-y-6">
                            {/* Active Item */}
                            <div className="bg-[#1A75FF] text-white p-8 rounded-[32px] shadow-lg">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                    </div>
                                    <h3 className="text-xl font-bold">Patient Management</h3>
                                </div>
                                <p className="text-blue-100 text-sm leading-relaxed mb-8 opacity-90">
                                    Enable real-time communication between providers, patients, and staff, fully encrypted for HIPAA compliance.
                                </p>
                                {/* Placeholder for internal image in accordion */}
                                <div className="h-32 bg-white/10 rounded-2xl border border-white/10 w-full mb-2"></div>
                            </div>

                            {/* Inactive Items */}
                            <div className="bg-[#EFF6FF] p-6 rounded-[32px] flex items-center gap-4 cursor-pointer hover:bg-blue-50 transition-colors group">
                                <div className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm text-gray-900 group-hover:text-blue-600 transition-colors">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">Appointment scheduling</h3>
                            </div>

                            <div className="bg-[#EFF6FF] p-6 rounded-[32px] flex items-center gap-4 cursor-pointer hover:bg-blue-50 transition-colors group">
                                <div className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm text-gray-900 group-hover:text-blue-600 transition-colors">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">Billing and invoicing</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tools Section */}
                <section className="max-w-7xl mx-auto px-6 mb-32">
                    <h2 className="text-4xl font-bold text-center mb-16">Tools that just make sense</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Card: Practice Analytics */}
                        <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm relative overflow-hidden min-h-[500px] flex flex-col justify-end">
                            <div className="absolute top-12 right-12 bg-white border border-gray-100 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 shadow-sm z-10 text-gray-600">
                                <div className="p-1 bg-blue-600 rounded text-white"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                                Medical Officer
                            </div>

                            {/* Dashboard Mockup */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[60%]">
                                <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-4 border border-gray-50">
                                    <div className="flex gap-3 mb-6">
                                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xs mt-1">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                                        </div>
                                        <div className="space-y-2 flex-1 pt-1">
                                            <div className="h-2.5 bg-blue-600 rounded-full w-12"></div>
                                            <div className="h-2 bg-gray-100 rounded-full w-full"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="flex items-center gap-3 py-1">
                                                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                                                    <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="" className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex-1 space-y-1.5">
                                                    <div className="h-2 bg-gray-200 rounded-full w-24"></div>
                                                </div>
                                                <div className={`text-xs ${i === 1 ? 'text-yellow-400' : 'text-gray-200'}`}>★</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Assistant Doctor Floating Badge */}
                                <div className="absolute -bottom-6 -left-12 bg-gray-100 px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2 shadow-sm text-gray-700">
                                    <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center text-white"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                                    Assistant Doctor
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-2xl font-bold mb-3 text-gray-900">Practice analytics dashboard</h3>
                                <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                                    Track and log digital consent for procedures, sharing of data, and treatment protocols.
                                </p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-8">
                            {/* Top Card: Automated Reminders */}
                            <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm h-[320px] relative">
                                <div className="absolute top-8 left-8 bg-red-50 text-red-500 px-2.5 py-1 rounded text-[10px] font-bold">Save</div>
                                <div className="flex items-center justify-center h-full pb-10">
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                                        </div>
                                        <div className="w-12 border-t-2 border-dashed border-blue-200"></div>
                                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                                        </div>
                                        <div className="w-12 border-t-2 border-dashed border-blue-200"></div>
                                        <div className="relative mx-2">
                                            <div className="flex gap-0.5 absolute -top-6 left-1/2 -translate-x-1/2">
                                                <span className="text-blue-500 text-[10px]">★</span>
                                                <span className="text-blue-500 text-sm -mt-2">★</span>
                                                <span className="text-blue-500 text-[10px]">★</span>
                                            </div>
                                            <div className="w-16 h-16 rounded-full bg-blue-500 shadow-xl border-4 border-white flex items-center justify-center relative z-10 ring-4 ring-blue-50">
                                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                                            </div>
                                        </div>
                                        <div className="w-12 border-t-2 border-dashed border-blue-200"></div>
                                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                                        </div>
                                        <div className="w-12 border-t-2 border-dashed border-blue-200"></div>
                                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold absolute bottom-8 left-8 text-gray-900">Automated reminders</h3>
                            </div>

                            {/* Bottom Card: Staff Scheduling */}
                            <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm h-[320px] relative">
                                <div className="flex flex-col items-center justify-center h-full pb-8 pt-4">
                                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-10 relative z-10 ring-8 ring-blue-50">
                                        <div className="grid grid-cols-2 gap-1">
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                        </div>
                                        {/* Lines */}
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1px] h-6 bg-blue-300"></div>
                                        <div className="absolute top-[calc(100%+24px)] left-1/2 -translate-x-1/2 w-48 h-[1px] bg-blue-300"></div>
                                        <div className="absolute top-[calc(100%+24px)] left-1/2 -translate-x-1/2 -ml-24 w-[1px] h-6 bg-blue-300"></div>
                                        <div className="absolute top-[calc(100%+24px)] left-1/2 -translate-x-1/2 -ml-8 w-[1px] h-6 bg-blue-300"></div>
                                        <div className="absolute top-[calc(100%+24px)] left-1/2 -translate-x-1/2 ml-8 w-[1px] h-6 bg-blue-300"></div>
                                        <div className="absolute top-[calc(100%+24px)] left-1/2 -translate-x-1/2 ml-24 w-[1px] h-6 bg-blue-300"></div>
                                    </div>
                                    <div className="flex gap-8">
                                        {[31, 32, 33, 34].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden ring-2 ring-white shadow-sm">
                                                <img src={`https://i.pravatar.cc/100?img=${i}`} alt="" className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold absolute bottom-8 left-8 text-gray-900">Staff scheduling</h3>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Integrations Section */}
                <section className="max-w-7xl mx-auto px-6 mb-32 text-center">
                    <h2 className="text-4xl font-bold mb-16 max-w-2xl mx-auto">Add superpowers to your account</h2>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-12">
                        {/* Integration Logos (Placeholders) */}
                        {['Culinary Haven', 'Flavor Frontier', 'Gourmet Galaxy', 'Taste Odyssey', 'Tasteful Travels', 'Taste Oasis', 'Delicious Domain', 'Flavorful Ventures', 'Epicurean Escape', 'Savor Station', 'Gourmet Garden', 'Culinary Quest'].map((name, i) => (
                            <div key={i} className="flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl font-bold mb-2 shadow-md
                                 ${i % 4 === 0 ? 'bg-purple-500' : i % 4 === 1 ? 'bg-green-500' : i % 4 === 2 ? 'bg-orange-500' : 'bg-red-500'}
                             `}>
                                    {name[0]}
                                </div>
                                <span className="text-xs font-medium text-gray-600">{name}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="max-w-7xl mx-auto px-6 mb-32">
                    <h2 className="text-4xl font-bold text-center mb-6">Honest pricing for real growth</h2>
                    <div className="flex justify-center mb-16">
                        <div className="bg-gray-100 p-1 rounded-full flex text-sm font-medium">
                            <button className="bg-black text-white px-6 py-2 rounded-full shadow-sm">Monthly</button>
                            <button className="px-6 py-2 text-gray-500 hover:text-black">Yearly <span className="text-blue-500 text-xs ml-1">Save 25%</span></button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {/* Starter */}
                        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold mb-4">Starter</h3>
                            <div className="flex items-baseline mb-8">
                                <span className="text-4xl font-bold">$59</span>
                                <span className="text-gray-500 text-sm">/month</span>
                            </div>
                            <p className="font-medium mb-4 text-sm">Access to:</p>
                            <ul className="space-y-4 mb-8 text-sm text-gray-600">
                                {['Flexible user access & customizable', 'Comprehensive patient management', 'Streamlined appointment management', 'Encrypted communication channels'].map((item, i) => (
                                    <li key={i} className="flex gap-3">
                                        <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">✓</div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="font-medium mb-4 text-sm">Includes:</p>
                            <ul className="space-y-4 mb-8 text-sm text-gray-600">
                                {['Dynamic user access & management', 'Integrated health record system (IHRS)', 'Effortless scheduling solutions'].map((item, i) => (
                                    <li key={i} className="flex gap-3">
                                        <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">✓</div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full bg-blue-600 text-white py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">Start Free Trial</button>
                        </div>

                        {/* Growth (Highlighted) */}
                        <div className="bg-blue-600 text-white p-8 rounded-[32px] shadow-xl scale-105 z-10">
                            <h3 className="text-xl font-bold mb-4">Growth</h3>
                            <div className="flex items-baseline mb-8">
                                <span className="text-4xl font-bold">$69</span>
                                <span className="text-blue-100 text-sm">/month</span>
                            </div>
                            <p className="font-medium mb-4 text-sm">Everything in Starter, plus:</p>
                            <ul className="space-y-4 mb-8 text-sm text-blue-50">
                                {['Scalable user access & admin privileges', 'Holistic health record management', 'Optimized appointment booking', 'Confidential messaging platform'].map((item, i) => (
                                    <li key={i} className="flex gap-3">
                                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-blue-600 text-xs">✓</div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="font-medium mb-4 text-sm">Access to:</p>
                            <ul className="space-y-4 mb-8 text-sm text-blue-50">
                                {['Unlimited user profiles & admin settings', 'Advanced electronic health', 'Smart appointment coordination'].map((item, i) => (
                                    <li key={i} className="flex gap-3">
                                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-blue-600 text-xs">✓</div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full bg-white text-blue-600 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">Start Free Trial</button>
                        </div>

                        {/* Pro */}
                        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold mb-4">Pro</h3>
                            <div className="flex items-baseline mb-8">
                                <span className="text-4xl font-bold">$79</span>
                                <span className="text-gray-500 text-sm">/month</span>
                            </div>
                            <p className="font-medium mb-4 text-sm">Everything in Growth, plus:</p>
                            <ul className="space-y-4 mb-8 text-sm text-gray-600">
                                {['Limitless user roles & administrative', 'Next-gen electronic health records', 'Intuitive scheduling interface', 'Secure patient messaging system'].map((item, i) => (
                                    <li key={i} className="flex gap-3">
                                        <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">✓</div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="font-medium mb-4 text-sm">Access to:</p>
                            <ul className="space-y-4 mb-8 text-sm text-gray-600">
                                {['Unlimited user accounts & role', 'Unified health records platform (UHRP)', 'Seamless appointment management'].map((item, i) => (
                                    <li key={i} className="flex gap-3">
                                        <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">✓</div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full bg-blue-600 text-white py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">Start Free Trial</button>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="max-w-4xl mx-auto px-6 mb-32">
                    <h2 className="text-4xl font-bold text-center mb-16">Quick answers<br />for quick decisions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {/* Left Column */}
                        <div className="space-y-6">
                            <div className="border-b border-gray-200 pb-6">
                                <div className="flex justify-between items-center w-full text-left font-bold text-lg mb-2 cursor-pointer">
                                    <span>What is Healthier used for?</span>
                                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">-</span>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Our platform streamlines medical workflows by offering EHR, appointment scheduling, billing, telehealth, and more all in one secure, cloud-based system.
                                </p>
                            </div>
                            <div className="border-b border-gray-200 pb-6">
                                <div className="flex justify-between items-center w-full text-left font-bold text-lg cursor-pointer">
                                    <span>Is Healthier HIPAA-compliant?</span>
                                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">+</span>
                                </div>
                            </div>
                            <div className="border-b border-gray-200 pb-6">
                                <div className="flex justify-between items-center w-full text-left font-bold text-lg cursor-pointer">
                                    <span>Can multiple providers use the same account?</span>
                                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">+</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            <div className="border-b border-gray-200 pb-6">
                                <div className="flex justify-between items-center w-full text-left font-bold text-lg cursor-pointer">
                                    <span>Can I access the system from mobile devices?</span>
                                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">+</span>
                                </div>
                            </div>
                            <div className="border-b border-gray-200 pb-6">
                                <div className="flex justify-between items-center w-full text-left font-bold text-lg cursor-pointer">
                                    <span>Do you offer training or onboarding support?</span>
                                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">+</span>
                                </div>
                            </div>
                            <div className="border-b border-gray-200 pb-6">
                                <div className="flex justify-between items-center w-full text-left font-bold text-lg cursor-pointer">
                                    <span>What kind of customer support do you offer?</span>
                                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <CTASection />
            <Footer />
        </div>
    );
}
