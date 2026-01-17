"use client";

import { useState } from "react";
import { BiMenuAltLeft, BiHome, BiPieChart, BiUser, BiBell, BiMenu, BiX } from "react-icons/bi";

export default function SidebarCollapsible() {
    const [isCollapsed, setIsCollapsed] = useState(false); // For desktop toggle
    const [isMobileOpen, setIsMobileOpen] = useState(false); // For mobile drawer

    return (
        <div className="flex h-[400px] w-full border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 rounded-xl overflow-hidden relative">

            <div className="absolute top-4 left-4 md:hidden z-30">
                <button onClick={() => setIsMobileOpen(true)} className="p-2 bg-white rounded-md shadow-sm border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800">
                    <BiMenu className="text-xl" />
                </button>
            </div>

            {/* Sidebar */}
            <aside className={`
        absolute inset-y-0 left-0 z-40 bg-white flex flex-col items-center py-4 dark:border-neutral-800 dark:bg-neutral-950 transition-all duration-300 border-r border-neutral-200
        md:static md:translate-x-0
        ${isMobileOpen ? 'translate-x-0 shadow-2xl w-64' : '-translate-x-full'}
        ${isCollapsed ? 'md:w-20' : 'md:w-64'}
      `}>

                <div className="w-full flex justify-center mb-8 relative px-2">
                    <button
                        className="hidden md:block p-2 rounded-lg hover:bg-neutral-100 text-neutral-600 dark:text-neutral-400 dark:hover:bg-neutral-800"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                        <BiMenuAltLeft className="text-2xl" />
                    </button>
                    <button
                        className="md:hidden p-2 text-neutral-600 dark:text-neutral-400"
                        onClick={() => setIsMobileOpen(false)}
                    >
                        <BiX className="text-2xl" />
                    </button>
                </div>

                <nav className="flex-1 space-y-4 w-full px-2">
                    <a href="#" className={`flex items-center gap-4 p-2 rounded-lg text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400 ${isCollapsed ? 'justify-center' : 'px-4'}`}>
                        <BiHome className="text-xl shrink-0" />
                        <span className={`font-medium ${isCollapsed ? 'hidden' : 'block'}`}>Home</span>
                    </a>
                    <a href="#" className={`flex items-center gap-4 p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800 ${isCollapsed ? 'justify-center' : 'px-4'}`}>
                        <BiPieChart className="text-xl shrink-0" />
                        <span className={`font-medium ${isCollapsed ? 'hidden' : 'block'}`}>Analytics</span>
                    </a>
                    <a href="#" className={`flex items-center gap-4 p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800 ${isCollapsed ? 'justify-center' : 'px-4'}`}>
                        <BiUser className="text-xl shrink-0" />
                        <span className={`font-medium ${isCollapsed ? 'hidden' : 'block'}`}>Users</span>
                    </a>
                    <a href="#" className={`flex items-center gap-4 p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800 ${isCollapsed ? 'justify-center' : 'px-4'}`}>
                        <BiBell className="text-xl shrink-0" />
                        <span className={`font-medium ${isCollapsed ? 'hidden' : 'block'}`}>Notifications</span>
                    </a>
                </nav>
            </aside>

            {isMobileOpen && <div className="absolute inset-0 bg-black/20 z-30 md:hidden" onClick={() => setIsMobileOpen(false)} />}

            <main className="flex-1 flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 relative z-0">
                <div className="max-w-xs text-center">
                    <h1 className="text-2xl font-bold mb-2">Hello World</h1>
                    <p className="text-sm text-neutral-500">
                        {isCollapsed
                            ? "Sidebar is collapsed (Desktop)"
                            : "Sidebar is expanded (Desktop)"}
                    </p>
                </div>
            </main>
        </div>
    );
}
