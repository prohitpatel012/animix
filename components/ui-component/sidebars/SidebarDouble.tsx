"use client";

import { useState } from "react";
import { BiGridAlt, BiMessageRounded, BiCalendar, BiMenu, BiX } from "react-icons/bi";

export default function SidebarDouble() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <div className="flex h-[400px] w-full border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 rounded-xl overflow-hidden relative">

            <div className="absolute top-4 left-4 md:hidden z-30">
                <button onClick={() => setIsMobileOpen(true)} className="p-2 bg-white rounded-md shadow-sm border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800">
                    <BiMenu className="text-xl" />
                </button>
            </div>

            {/* Combined Sidebar Container for Mobile */}
            <div className={`
        absolute inset-y-0 left-0 z-40 flex transition-transform duration-300
        md:translate-x-0 md:static
        ${isMobileOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
      `}>

                {/* Rail */}
                <div className="w-16 border-r border-neutral-200 bg-white flex flex-col items-center py-4 gap-4 dark:border-neutral-800 dark:bg-neutral-950 z-50">
                    <div className="h-10 w-10 rounded-lg bg-black text-white flex items-center justify-center font-bold mb-4">A</div>
                    <button className="p-2 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"><BiGridAlt className="text-xl" /></button>
                    <button className="p-2 rounded-lg text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"><BiMessageRounded className="text-xl" /></button>
                    <button className="p-2 rounded-lg text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"><BiCalendar className="text-xl" /></button>
                </div>

                {/* Sub-Sidebar */}
                <aside className="w-64 border-r border-neutral-200 bg-neutral-50 flex flex-col dark:border-neutral-800 dark:bg-neutral-900 relative">
                    <button onClick={() => setIsMobileOpen(false)} className="absolute top-4 right-4 md:hidden text-neutral-500">
                        <BiX className="text-xl" />
                    </button>
                    <div className="h-16 flex items-center px-6 border-b border-neutral-200 dark:border-neutral-800">
                        <h2 className="font-semibold text-lg text-neutral-900 dark:text-white">Dashboard</h2>
                    </div>
                    <div className="p-4 space-y-1">
                        <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium text-neutral-900 bg-white shadow-sm dark:bg-neutral-800 dark:text-white">Overview</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Notifications</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Analytics</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Reports</a>
                    </div>
                </aside>
            </div>

            {isMobileOpen && <div className="absolute inset-0 bg-black/20 z-30 md:hidden" onClick={() => setIsMobileOpen(false)} />}

            <main className="flex-1 flex items-center justify-center bg-white dark:bg-neutral-950 relative z-0">
                <h1 className="text-neutral-300 font-bold text-4xl select-none">HELLO WORLD</h1>
            </main>
        </div>
    );
}
