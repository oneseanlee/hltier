
import { Search, Bell, MessageSquare, Menu, Activity, Users, UserPlus, Stethoscope, ChevronDown, Calendar, Settings } from "lucide-react";

export function DashboardPreview() {
    return (
        <div className="rounded-xl bg-white shadow-2xl border border-gray-200 overflow-hidden max-w-5xl mx-auto mt-12 mb-[-100px] relative z-10 font-sans text-left">
            {/* App Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-brand-500 rounded-lg flex items-center justify-center text-white">
                        <Activity size={20} />
                    </div>
                    <span className="font-bold text-gray-900 text-lg">Healthier</span>
                </div>

                <div className="flex items-center gap-6">
                    <div className="relative hidden md:block">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input
                            type="text"
                            placeholder="Search anything..."
                            className="pl-10 pr-4 py-2 bg-gray-50 rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-brand-100 placeholder-gray-400"
                        />
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                        <Bell size={20} className="hover:text-gray-600 cursor-pointer" />
                        <MessageSquare size={20} className="hover:text-gray-600 cursor-pointer" />
                        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border border-gray-300">
                            <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex min-h-[600px] bg-[#F8F9FB]">
                {/* Sidebar */}
                <div className="w-16 bg-white border-r border-gray-100 flex flex-col items-center py-6 gap-6 text-gray-400">
                    <div className="p-2 bg-gray-900 text-white rounded-lg shadow-lg">
                        <Menu size={20} />
                    </div>
                    <div className="p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"><Activity size={20} /></div>
                    <div className="p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"><Users size={20} /></div>
                    <div className="p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"><Calendar size={20} /></div>
                    <div className="p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"><Stethoscope size={20} /></div>
                    <div className="mt-auto p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"><Settings size={20} /></div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-8 overflow-hidden">
                    {/* Header & Filter */}
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-xl font-bold text-gray-900">Overview</h2>
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
                            Last 4 years <ChevronDown size={16} />
                        </button>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {[
                            { label: "Appointments", value: "256k", trend: "+10.3%", color: "text-red-500", bg: "bg-red-50", icon: Stethoscope },
                            { label: "Patients", value: "138K", trend: "+25.8%", color: "text-green-500", bg: "bg-green-50", icon: Users },
                            { label: "Admitted", value: "50k", trend: "-15.4%", color: "text-red-500", bg: "bg-red-50", icon: UserPlus },
                            { label: "Doctors", value: "1200", trend: "+12.3%", color: "text-green-500", bg: "bg-green-50", icon: Activity },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100/50">
                                <div className="flex items-center gap-2 mb-4 text-gray-500 text-sm font-medium">
                                    <stat.icon size={16} />
                                    {stat.label}
                                </div>
                                <div className="flex items-baseline gap-3">
                                    <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${stat.color} ${stat.bg}`}>
                                        {stat.trend}
                                    </span>
                                </div>
                                <div className="text-xs text-gray-400 mt-1">vs last month</div>
                            </div>
                        ))}
                    </div>

                    {/* Charts Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100/50">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-gray-900">Total Appointments</h3>
                                <div className="flex gap-4 text-sm">
                                    <span className="flex items-center gap-2 text-gray-500"><span className="w-2 h-2 rounded-full bg-gray-300"></span> Pending</span>
                                    <span className="flex items-center gap-2 text-gray-900"><span className="w-2 h-2 rounded-full bg-brand-500"></span> Completed</span>
                                </div>
                            </div>
                            <div className="h-64 flex items-end justify-between gap-2 px-2">
                                {/* CSS Chart Simulation */}
                                <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                                    <path d="M0,35 Q10,25 20,30 T40,25 T60,10 T80,20 T100,5" fill="none" stroke="#00ADD7" strokeWidth="2" />
                                    <path d="M0,35 Q10,25 20,30 T40,25 T60,10 T80,20 T100,5 V40 H0 Z" fill="url(#gradient)" opacity="0.1" />
                                    <defs>
                                        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0%" stopColor="#00ADD7" />
                                            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100/50">
                            <h3 className="font-bold text-gray-900 mb-6">Patients</h3>
                            <div className="h-64 flex items-end justify-between gap-2">
                                {[40, 60, 30, 80, 50, 20, 45].map((h, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                                        {i === 3 && (
                                            <div className="mb-2 bg-gray-900 text-white text-xs py-1 px-2 rounded mb-1 animate-bounce">
                                                9326
                                            </div>
                                        )}
                                        <div
                                            className={`w-full rounded-t-lg transition-all duration-300 ${i === 3 ? 'bg-brand-500' : 'bg-gray-200 hover:bg-gray-300'}`}
                                            style={{ height: `${h}%` }}
                                        ></div>
                                        <span className="text-xs text-gray-400">
                                            {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'][i]}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
