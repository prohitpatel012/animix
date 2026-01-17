"use client";

import { useState } from "react";
import { BiSearch, BiHomeAlt, BiBarChartSquare, BiFolder, BiBookmark, BiMenu, BiX } from "react-icons/bi";

export default function SidebarWithSearch() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <div className="flex h-[400px] w-full border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 rounded-xl overflow-hidden relative">

            <div className="absolute top-4 left-4 md:hidden z-30">
                <button onClick={() => setIsMobileOpen(true)} className="p-2 bg-white rounded-md shadow-sm border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800">
                    <BiMenu className="text-xl" />
                </button>
            </div>

            <aside className={`
        absolute inset-y-0 left-0 z-40 w-72 border-r border-neutral-200 bg-white flex flex-col dark:border-neutral-800 dark:bg-neutral-950 transition-transform duration-300
        md:translate-x-0 md:static
        ${isMobileOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
      `}>
                <div className="flex items-center justify-between p-4 md:hidden">
                    <span className="font-bold">Menu</span>
                    <button onClick={() => setIsMobileOpen(false)}><BiX className="text-xl" /></button>
                </div>

                <div className="p-4 pt-0 md:pt-4">
                    <div className="relative">
                        <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full bg-neutral-100 text-sm rounded-lg pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-100 dark:bg-neutral-900 dark:focus:ring-blue-900 dark:text-white"
                        />
                    </div>
                </div>

                <nav className="flex-1 px-2 space-y-1 overflow-y-auto">
                    <div className="px-3 pt-4 pb-2 text-xs font-semibold text-neutral-400">Platform</div>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-900 bg-neutral-100 rounded-md dark:bg-neutral-800 dark:text-white">
                        <BiHomeAlt className="text-lg" />
                        Home
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-50 rounded-md dark:text-neutral-400 dark:hover:bg-neutral-900">
                        <BiBarChartSquare className="text-lg" />
                        Dashboard
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-50 rounded-md dark:text-neutral-400 dark:hover:bg-neutral-900">
                        <BiFolder className="text-lg" />
                        Projects
                    </a>

                    <div className="px-3 pt-6 pb-2 text-xs font-semibold text-neutral-400">Notes</div>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-50 rounded-md dark:text-neutral-400 dark:hover:bg-neutral-900">
                        <BiBookmark className="text-lg text-orange-400" />
                        Ideas
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-50 rounded-md dark:text-neutral-400 dark:hover:bg-neutral-900">
                        <BiBookmark className="text-lg text-purple-400" />
                        Marketing
                    </a>
                </nav>
            </aside>

            {isMobileOpen && <div className="absolute inset-0 bg-black/20 z-30 md:hidden" onClick={() => setIsMobileOpen(false)} />}

            <main className="flex-1 flex items-center justify-center relative z-0">
                <div className="p-6 rounded-lg border border-dashed border-neutral-300 dark:border-neutral-700 text-neutral-400">
                    Hello World Content
                </div>
            </main>
        </div>
    );
}
