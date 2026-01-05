"use client";
import { MessageCircle, Phone, Settings } from "lucide-react";

const navItems = [
    { id: "messages", icon: MessageCircle, label: "Mensajes" },
    { id: "calls", icon: Phone, label: "Llamadas" },
    { id: "settings", icon: Settings, label: "Configuración" },
];

export default function Sidebar({ activeSection, setActiveSection }) {
    return (
        <>
            {/* Mobile Bottom Navigation */}
            <nav style={{ paddingTop: '16px', paddingBottom: '20px' }} className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-100 flex items-center justify-around px-4 z-50 md:hidden shadow-[0_-8px_30px_rgba(0,0,0,0.04)]">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveSection(item.id)}
                            className={`flex flex-col items-center gap-1 p-2 rounded-2xl transition-all duration-300 w-16 group ${isActive ? "text-blue-600 -translate-y-1" : "text-gray-400 hover:text-gray-600"
                                }`}
                        >
                            <div
                                className={`relative p-2 rounded-xl transition-all duration-300 ${isActive
                                    ? "bg-blue-50 shadow-inner ring-1 ring-blue-100"
                                    : "bg-transparent group-hover:bg-gray-50"
                                    }`}
                            >
                                <Icon
                                    className={`w-6 h-6 transition-transform duration-300 ${isActive ? "scale-110 stroke-[2.5px]" : "stroke-2"
                                        }`}
                                />
                                {isActive && (
                                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                                )}
                            </div>
                            <span className={`text-[10px] font-semibold tracking-wide transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-70"
                                }`}>
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </nav>

            {/* Desktop Sidebar */}
            <aside className="hidden md:flex flex-col w-24 bg-white border-r border-gray-100 h-screen sticky top-0 z-40">
                {/* Logo */}
                <div className="flex items-center justify-center py-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                        <span className="text-white font-bold text-xl">M</span>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-4 flex-1 items-center w-full">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveSection(item.id)}
                                className={`group relative flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-200 ${isActive
                                    ? "bg-blue-500 text-white shadow-lg shadow-blue-200"
                                    : "text-gray-400 hover:bg-gray-50 hover:text-gray-600"
                                    }`}
                                title={item.label}
                            >
                                <Icon className="w-6 h-6" />

                                {/* Tooltip */}
                                <span className="absolute left-full ml-4 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                                    {item.label}
                                </span>
                            </button>
                        );
                    })}
                </nav>

                {/* User avatar */}
                <div className="py-8 flex justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center border-2 border-white shadow-md cursor-pointer hover:scale-105 transition-transform">
                        <span className="text-gray-600 font-semibold text-sm">FT</span>
                    </div>
                </div>
            </aside>
        </>
    );
}
