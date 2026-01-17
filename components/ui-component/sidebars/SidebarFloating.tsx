"use client";

import { useState } from "react";
import { BiGridAlt, BiListUl, BiArchive, BiMenu, BiX } from "react-icons/bi";

export default function SidebarFloating() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <div className="flex h-[400px] w-full bg-neutral-100 dark:bg-neutral-900 p-6 rounded-xl overflow-hidden relative">

            <div className="absolute top-8 left-8 md:hidden z-30">
                <button onClick={() => setIsMobileOpen(true)} className="p-2 bg-white rounded-md shadow-sm dark:bg-neutral-950">
                    <BiMenu className="text-xl" />
                </button>
            </div>

            {/* Floating Sidebar */}
            <aside className={`
        absolute inset-y-6 left-6 z-40 w-64 bg-white dark:bg-neutral-950 rounded-2xl shadow-xl flex flex-col p-4 border border-neutral-100 dark:border-neutral-800 transition-transform duration-300
        md:relative md:inset-auto md:mr-6 md:translate-x-0
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-[150%]'}
      `}>
                <div className="md:hidden absolute top-4 right-4">
                    <button onClick={() => setIsMobileOpen(false)}><BiX className="text-xl" /></button>
                </div>

                <div className="flex items-center gap-3 px-2 mb-8 mt-2 md:mt-0">
                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-pink-500 to-orange-400"></div>
                    <span className="font-bold text-neutral-900 dark:text-white tracking-tight">Float UI</span>
                </div>

                <nav className="space-y-2">
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white bg-neutral-900 shadow-md transform scale-[1.02]">
                        <BiGridAlt />
                        Dashboard
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white transition-all">
                        <BiListUl />
                        Tasks
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white transition-all">
                        <BiArchive />
                        Archives
                    </a>
                </nav>

                <div className="mt-auto bg-neutral-50 dark:bg-neutral-900 rounded-xl p-4 text-center">
                    <p className="text-xs text-neutral-500 mb-2"><strong>Pro Plan</strong> needed for more spaces.</p>
                    <button className="text-xs font-bold text-blue-600 dark:text-blue-400">Upgrade Now</button>
                </div>
            </aside>

            {isMobileOpen && <div className="absolute inset-0 bg-black/20 z-30 md:hidden rounded-xl" onClick={() => setIsMobileOpen(false)} />}

            {/* Main Content */}
            <main className="flex-1 bg-white dark:bg-neutral-950 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 flex items-center justify-center relative z-0">
                <h1 className="text-xl font-bold text-neutral-300">Hello World</h1>
            </main>
        </div>
    );
}
