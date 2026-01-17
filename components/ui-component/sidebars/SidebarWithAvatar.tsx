"use client";

import { useState } from "react";
import { BiHome, BiUser, BiCog, BiCheckCircle, BiMenu, BiX } from "react-icons/bi";

export default function SidebarWithAvatar() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <div className="flex h-[400px] w-full border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 rounded-xl overflow-hidden relative">

            <div className="absolute top-4 left-4 md:hidden z-30">
                <button onClick={() => setIsMobileOpen(true)} className="p-2 bg-white rounded-md shadow-sm border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800">
                    <BiMenu className="text-xl" />
                </button>
            </div>

            <aside className={`
        absolute inset-y-0 left-0 z-40 w-64 border-r border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 flex flex-col transition-transform duration-300
        md:translate-x-0 md:static
        ${isMobileOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
      `}>
                <div className="p-6 flex justify-between items-center">
                    <h2 className="text-xl font-bold">App Name</h2>
                    <BiX className="md:hidden text-2xl cursor-pointer" onClick={() => setIsMobileOpen(false)} />
                </div>

                <nav className="flex-1 px-4 space-y-1">
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-neutral-900 bg-neutral-100 rounded-xl dark:bg-neutral-800 dark:text-white">
                        <BiHome /> Home
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 rounded-xl dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white">
                        <BiUser /> Profile
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 rounded-xl dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white">
                        <BiCog /> Settings
                    </a>
                </nav>

                <div className="p-4 border-t border-neutral-200 dark:border-neutral-800">
                    <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer transition-colors">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80"
                                alt="User"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white dark:border-neutral-900 rounded-full"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-neutral-900 dark:text-white truncate">Jane Doe</p>
                            <p className="text-xs text-neutral-500 truncate">View Profile</p>
                        </div>
                    </div>
                </div>
            </aside>

            {isMobileOpen && <div className="absolute inset-0 bg-black/20 z-30 md:hidden" onClick={() => setIsMobileOpen(false)} />}

            <main className="flex-1 flex flex-col items-center justify-center relative z-0">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full text-xs font-medium dark:bg-green-900/30 dark:text-green-400">
                        <BiCheckCircle /> Logged In
                    </div>
                    <h1 className="text-3xl font-bold">Hello World</h1>
                </div>
            </main>
        </div>
    );
}
